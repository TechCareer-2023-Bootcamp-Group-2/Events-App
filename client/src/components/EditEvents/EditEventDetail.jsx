import React, { useState } from "react";
import { Form, Input, Modal, DatePicker, Button, Select, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const categories = [
  {
    id: 1,
    eventType: "Tiyatro",
  },
  {
    id: 2,
    eventType: "Resim",
  },
  {
    id: 3,
    eventType: "Konser",
  },
];

const EditEventDetail = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = useForm();
  const [priceDisabled, setPriceDisabled] = useState(false);

  // Put işlemini yapacak fonksiyon.
  const onFinish = (values) => {

    // Etkinliğin ücretsiz olması durumunda ticketPrice disabled oluyor ve put işleminde undefined gönderiyordu. Onun kontrolü yapıldı. Sıfır göndermesini söyledim.
    if (values.ticketPrice === undefined) {
      values.ticketPrice = "0";
    }

    // Ant design kütüphanesinden gelen date formatını veri tabanında sakladığımız şekilde düzenlendi.
    values.startTime = customDateFormat(values.startTime.$d);
    values.endTime = customDateFormat(values.endTime.$d);

    // Bu kısımda put işlemi yapılacak.
    console.log(values);

    /*const date1 = values.startTime.$d;
    const date2 = values.endTime.$d;

    const day1 = date1.getDate(); // Gün
    const monthIndex1 = date1.getMonth() + 1; // Ayın index'i (0'dan başlar, +1 eklenmeli)
    const year1 = date1.getFullYear(); // Yıl

    const day2 = date2.getDate(); // Gün
    const monthIndex2 = date2.getMonth() + 1; // Ayın index'i (0'dan başlar, +1 eklenmeli)
    const year2 = date2.getFullYear(); // Yıl

    const month1 = monthIndex1 < 10 ? `0${monthIndex1}` : monthIndex1; // Eğer ay tek haneli ise başına 0 ekleniyor
    const dayStr1 = day1 < 10 ? `0${day1}` : day1;

    const month2 = monthIndex2 < 10 ? `0${monthIndex2}` : monthIndex2; // Eğer ay tek haneli ise başına 0 ekleniyor
    const dayStr2 = day2 < 10 ? `0${day2}` : day2;

    const newFormat1 = `${year1}-${month1}-${dayStr1}`;
    const newFormat2 = `${year2}-${month2}-${dayStr2}`;

    console.log(newFormat1, newFormat2);*/

    form.resetFields();
  };

  // Tarih formatını veri tabanında sakladığımız hale getirmek için kullanılan fonksiyon.
  const customDateFormat = ( currentDate ) => {
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
    setPriceDisabled(!priceDisabled);
  };

  return (
    <Modal
      title="Etkinlik Düzenleme"
      footer={false}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish} form={form}>
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
        <Form.Item name={"free"} label="Ücretsiz" valuePropName="checked">
          <Switch
            className="ant-switch-inner-unchecked"
            onChange={onChangeSwitch}
          />
        </Form.Item>
        <Form.Item label="Bilet Fiyatı" name={"ticketPrice"}>
          <Input
            placeholder="Etkinlik bilet fiyatını giriniz.."
            disabled={priceDisabled}
          />
        </Form.Item>
        <Button htmlType="submit" size="large">
          Kaydet
        </Button>
      </Form>
    </Modal>
  );
};

export default EditEventDetail;
