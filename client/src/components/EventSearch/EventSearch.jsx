import { Button, DatePicker, Form, Input, Select } from "antd";
import React from "react";

const EventSearch = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div
      className="flex justify-center items-center mt-16 mx-5 md:mx-0 h-[250px] md:h-[100px] rounded-xl border border-purple-500 bg-white
        shadow-2xl shadow-black/[0.1]"
    >
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
    </div>
  );
};

export default EventSearch;
