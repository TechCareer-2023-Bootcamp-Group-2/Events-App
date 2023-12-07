import React, { useEffect, useState } from "react";
import { Form, Input, Modal, DatePicker, Button, Select, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";
var exTicketsLenght=0;
const EditEventDetail = ({ isModalOpen, setIsModalOpen, event, setEvent }) => {
  const [form] = useForm();
  const [popularDisabled, setPopularDisabled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [exTickets,setExTickets]=useState([]);

  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    setExTickets(event.exTickets);
    if(event.exTickets.length>0)exTicketsLenght=(event.exTickets[event.exTickets.length-1].id)+1;
    else exTicketsLenght+=1;
  }, []);

  const getCategories = async () => {
    try {
      axios
        .get(process.env.REACT_APP_SERVER_URL + "/EventTypes")
        .then((res) => {
          setCategories(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // Put işlemini yapacak fonksiyon.
  const onFinish = async (values) => {

    // Ant design kütüphanesinden gelen date formatını veri tabanında sakladığımız şekilde düzenlendi.
    values.startTime = customDateFormat(values.startTime.$d);
    values.endTime = customDateFormat(values.endTime.$d);

    // Bu kısımda put işlemi yapılacak.
    console.log(values);
    try {
      const response = await axios.patch(process.env.REACT_APP_SERVER_URL + `/Events/Update/${event.id}`, {
        eventName: values.eventName,
        eventType: values.eventType,
        detail: values.detail,
        startTime: values.startTime,
        endTime: values.endTime,
        place: values.place,
        city: values.city,
        adress: values.adress,
        iframe: values.iframe,
        ticketPrice: values.ticketPrice,
        isPopular: values.isPopular,
        exTickets:exTickets
      })
      setEvent(response.data);
    } catch (error) {
      
    }

    form.resetFields();
  };
  // Tarih formatını veri tabanında sakladığımız hale getirmek için kullanılan fonksiyon.
  const customDateFormat = (currentDate) => {
    const date = currentDate;

    const day = date.getDate(); // Gün
    const monthIndex = date.getMonth() + 1; // Ayın index'i (0'dan başlar, +1 eklenmeli)
    const year = date.getFullYear(); // Yıl

    const month = monthIndex < 10 ? `0${monthIndex}` : monthIndex; // Eğer ay tek haneli ise başına 0 ekleniyor
    const dayStr = day < 10 ? `0${day}` : day;

    const newDateFormat = `${year}-${month}-${dayStr}`;

    return newDateFormat;
  };
  // Etkinliğin ücretsiz olup olmadığını belirlediğimiz componentin değişme fonksiyonu.
  const onChangeSwitch = () => {
    setPopularDisabled(!popularDisabled);
  };
  const onAddExTicketsSlot=() => {
    exTicketsLenght+=1;
    setExTickets([...exTickets,{id:exTicketsLenght,ticketPrice:0,ticketName:""}]);
  }
  const removeExTicketSlot=(id)=>{
    const updatedExTickets=exTickets.filter((exTicket)=>{return exTicket.id!==id;})
    setExTickets(updatedExTickets);
  }
  const updateTicketName=(index)=>(e)=>{
    console.log(index);
    const updatedExTickets=exTickets.map(
      (item)=>{
        if(index === item.id){return {id:item.id,ticketPrice:item.ticketPrice,ticketName:e.target.value};}
        else {return item;}
      }
    )
    setExTickets(updatedExTickets);
  }
  const updateTicketPrice=(index)=>(e)=>{
    const updatedExTickets=exTickets.map(
      (item)=>{
        if(index ===item.id){return {id:item.id,ticketPrice:e.target.value,ticketName:item.ticketName};}
        else {return item;}
      }
    )
    setExTickets(updatedExTickets);
  }
  return (
    <Modal
      title="Etkinlik Düzenleme"
      footer={false}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        layout={"vertical"}
        onFinish={onFinish}
        form={form}
        initialValues={{
          eventType: event.eventType,
          eventName: event.eventName,
          detail: event.detail,
          city: event.city,
          adress: event.adress,
          place: event.place,
          iframe: event.iframe,
          ticketPrice: event.ticketPrice,
          isPopular: event.isPopular,
        }}
      >
        <Form.Item
          label="Kategori"
          rules={[{ required: true }]}
          name={"eventType"}
        >
          <Select placeholder="Kategori Seçiniz..">
            {categories.map((category) => (
              <Select.Option key={category.id} value={category.eventType}>
                {category.eventType}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Etkinlik Adı"
          name={"eventName"}
          rules={[
            {
              required: true,
              message: "Etkinlik adı alanını boş geçemezsiniz.",
            },
          ]}
        >
          <Input placeholder="Lütfen etkinlik adı giriniz." />
        </Form.Item>
        <Form.Item
          label="Etkinlik Detay"
          name={"detail"}
          rules={[
            {
              required: true,
              message: "Etkinlik detayı alanını boş geçemezsiniz.",
            },
          ]}
        >
          <Input placeholder="Etkinlik detaylarını giriniz.." />
        </Form.Item>
        <div className={"flex justify-between"}>
          <Form.Item
            label="Başlangıç Tarihi"
            name={"startTime"}
            initialValue={dayjs("2023/12/01", dateFormat)}
            rules={[
              {
                required: true,
                message: "Etkinlik başlangıç tarihini boş geçemezsiniz.",
              },
            ]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item
            label="Biriş Tarihi"
            name={"endTime"}
            initialValue={dayjs("2023/15/01", dateFormat)}
            rules={[
              {
                required: true,
                message: "Etkinlik bitiş tarihini boş geçemezsiniz.",
              },
            ]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
        </div>
        <Form.Item
          label="Şehir"
          name={"city"}
          rules={[
            {
              required: true,
              message:
                "Etkinlik'in gerçekleşeceği şehir alanını boş geçemezsiniz.",
            },
          ]}
        >
          <Input placeholder="Şehir giriniz.." />
        </Form.Item>
        <Form.Item
          label="Adres"
          name={"adress"}
          rules={[
            {
              required: true,
              message:
                "Etkinlik'in gerçekleşeceği adres alanını boş geçemezsiniz.",
            },
          ]}
        >
          <Input placeholder="Adresi giriniz.." />
        </Form.Item>
        <Form.Item
          label="Mekan"
          name={"place"}
          rules={[
            {
              required: true,
              message: "Etkinlik'in gerçekleşeceği mekanını boş geçemezsiniz.",
            },
          ]}
        >
          <Input placeholder="Mekan adını giriniz.." />
        </Form.Item>
        <Form.Item
          label="Google Maps Iframe"
          name={"iframe"}
          rules={[
            {
              required: true,
              message: "Etkinlik'in gerçekleşeceği iframe linki <orunludur!>",
            },
          ]}
        >
          <Input placeholder="Google Maps Iframe linkini giriniz.." />
        </Form.Item>
        <Form.Item name={"isPopular"} label="Popüler Etkinlik" valuePropName="checked">
          <Switch
            defaultChecked={popularDisabled}
            className="ant-switch-inner-unchecked"
            onChange={onChangeSwitch}
          />
        </Form.Item>
        <Form.Item label="Bilet Fiyatı" name={"ticketPrice"}>
          <Input
            placeholder="Etkinlik bilet fiyatını giriniz.."
          />
        </Form.Item>
        <div name="exticket" className={"mb-5"}>
        {exTickets.map((ticket) =>( 
          <div name={"exticketitem"} className={"flex justify-between"} key={ticket.id}>
              <Form.Item
                label="Özel Bilet İsmi"
                name={"exticketname-"+ticket.id}
                className="px-2"
                initialValue={ticket.ticketName}
                rules={[
                  {
                    required: true,
                    message: "Bilet ismi boş geçemezsiniz.",
                  },
                ]}
              >
                <Input
                placeholder="Bilet ismi giriniz."
                onChange={updateTicketName(ticket.id)}
              />
              </Form.Item>
              <Form.Item
                label="Özel Bilet Fiyatı"
                name={"exticketprice-"+ticket.id}
                className="px-2"
                initialValue={ticket.ticketPrice}
                rules={[
                  {
                    required: true,
                    message: "Bilet fiyatı boş geçemezsiniz.",
                  },
                ]}
              >
                <Input
                placeholder="Bilet fiyatı giriniz."
                onChange={updateTicketPrice(ticket.id)}
              />
              </Form.Item>
              <div className={"flex items-center"}>
              <Button size="large" onClick={()=>removeExTicketSlot(ticket.id)}>
              Sil
              </Button>
              </div>
              
          </div>
          ))
        }
         
          <div name={"exticketaddbutton"} className={"relative h-10"}>
          <Button size="large" className={"absolute inset-y-0 right-3"} onClick={(onAddExTicketsSlot)}>
            Ekle
          </Button>
          </div>
          
        </div>
        <Button htmlType="submit" size="large">
          Kaydet
        </Button>
      </Form>
    </Modal>
  );
};

export default EditEventDetail;
