import React from "react";
import { Input, DatePicker, Switch } from "antd";
//import { Button, DatePicker, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const EventSearch = ({ setSearch }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-x-10 mb-5 px-10 sm:px-24 gap-y-3">
      <div className="flex lg:flex-1 w-full">
        <Input
          size="large"
          placeholder="Etkinlik Ara..."
          prefix={<SearchOutlined />}
          className="rounded-full w-full"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className="flex md:flex-1 flex-col md:flex-row justify-evenly items-center gap-y-3 lg:gap-y-0 gap-x-3">
        <div className="flex items-center">
          <span className="mr-3 hidden md:block">Tarih: </span>
          <RangePicker />
        </div>
        <div className="flex items-center">
          <span className="mr-3 ">Geçmiş Etkinlikler: </span>
          <Switch defaultChecked={true} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default EventSearch;

/*
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  
<Form form={form} layout="inline" onFinish={onFinish} className="flex flex-col gap-y-5 md:flex-row md:gap-y-3 md:px-5">
        <Form.Item name={"location"} className="w-[250px] md:w-[200px]">
          <Input placeholder="locaiton.." size="large" />
        </Form.Item>
        <Form.Item name={"date"}>
          <DatePicker className="w-[250px] md:w-[200px]" size="large" />
        </Form.Item>
        <Form.Item name={"category"} className="w-[250px] md:w-[200px]">
          <Select placeholder="Category" size="large">
            <Select.Option value="concerts">Concerts</Select.Option>
            <Select.Option value="theaters">Theaters</Select.Option>
            <Select.Option value="games">Games</Select.Option>
            <Select.Option value="cinema">Cinema</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="!bg-purple-600 w-[250px] md:w-[200px] text-white"
          >
            Search Now
          </Button>
        </Form.Item>
      </Form>

*/
