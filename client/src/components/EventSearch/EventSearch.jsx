import React, { useState } from "react";
import { Input, DatePicker, Switch } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { isWithinInterval, parseISO } from "date-fns";
import '../../index.css';

const { RangePicker } = DatePicker;

const EventSearch = ({ setSearch, events, setFiltered }) => {
  const [switchValue, setSwitchValue] = useState(false);
  // Tarihi geçmiş etkinlikleri listele.
  const onChangeSwitch = (value) => {
    setSwitchValue(value);

    if (value) {
      const currentDate = new Date();
      const formattedDate = customDateFormat(currentDate);

      const filteredEvents = [];

      for (let i = 0; i < events.length; i++) {
        var eventsFormmattedDate = events[i].endTime.substring(0, 10);

        if (formattedDate > eventsFormmattedDate) {
          filteredEvents.push(events[i]);
        }
      }
      setFiltered(filteredEvents);
    } else {
      setFiltered(events);
    }
  };

  // Tarih filtreleme fonksiyonu.
  const onChangeRangePicker = (value, dateString) => {

    // Tarih filtreleme kısmı eğer boş gelirse eventsi geri dön doluysa fonksiyonu çalıştır.
    if (dateString[0] && dateString[1]) {
      const startDate = parseISO(dateString[0]);
      const endDate = parseISO(dateString[1]);

      const filteredEvents = events.filter((event) => {
        const eventStartTime = parseISO(event.startTime.substring(0, 10));
        const eventEndTime = parseISO(event.endTime.substring(0, 10));

        return (
          isWithinInterval(eventStartTime, {
            start: startDate,
            end: endDate,
          }) ||
          isWithinInterval(eventEndTime, { start: startDate, end: endDate }) ||
          (eventStartTime <= startDate && eventEndTime >= endDate)
        );
      });

      setFiltered(filteredEvents);
    } else {
      setFiltered(events);
    }
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

  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-x-10 mb-5 px-10 sm:px-24 gap-y-3">
      <div className="search-input-container flex lg:flex-1 w-full">
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
          <RangePicker onChange={onChangeRangePicker} format={"YYYY-MM-DD"} />
        </div>
        <div className="flex items-center">
          <span className="mr-3 ">Geçmiş Etkinlikler: </span>
          <Switch
            defaultChecked={switchValue}
            onChange={onChangeSwitch}
            className="ant-switch-inner-unchecked"
          />
        </div>
      </div>
    </div>
  );
};

export default EventSearch;