import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { IoCalendarOutline, IoLocationSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiTicket } from "react-icons/ti";
import { SiStackblitz } from "react-icons/si";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Carousel, Divider, Select } from "antd";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const EventDetail = () => {
  const { eventId } = useParams();

  const [event, setEvent] = useState();

  useEffect(() => {
    const getEvent = async () => {
      try {
        axios
          .get(process.env.REACT_APP_SERVER_URL + "/Events/" + eventId)
          .then((res) => {
            setEvent(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, [eventId]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="m-0">
      <Header />
      <div className="mt-28">
        <div className="flex justify-center mb-5 px-[40px]">
          <h1 className="sm:ml-5 text-[40px] md:text-[50px] lg:text-[80px] uppercase decoration-red-950 text-[#DDDDDD] select-none">
            Event Details
          </h1>
        </div>
        {/* Buradaki slides kısmı düzenlenecek favori resimler yollanacak. */}
        <div className="px-3 md:px-20 lg:px-40">
          <Carousel autoplay className="">
            {event &&
              event.imagesUrl.map((item, index) => (
                <div
                  className="h-[250px] sm:h-[400px] md:h-[600px] rounded-lg"
                  key={index}
                >
                  <img
                    src={
                      process.env.REACT_APP_SERVER_URL +
                      "/EventImages?id=" +
                      item
                    }
                    alt=""
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
          </Carousel>
          <div className="pt-10 pb-5 flex justify-between text-base sm:text-2xl">
            <div className="flex items-center">
              <IoCalendarOutline className="mr-2 text-purple-700" />
              <span>{event.startTime.substring(0, 10)}</span>
            </div>
            <div className="flex items-center">
              <TiTicket className="mr-2 text-purple-700" />
              <span>Standart Bilet: {event.ticketPrice==0?"Ücretsiz":event.ticketPrice+" \u20BA"}</span>
            </div>
            <div className="flex items-center">
              <IoLocationSharp className="mr-2 text-purple-700" />
              <span>{event.city}, Türkiye</span>
            </div>
          </div>
          <div className="">
            <Divider />
          </div>
          <div className="flex justify-between text-base sm:text-2xl">
            <div className="flex items-center">
              <AiOutlineMenuUnfold className="mr-2 text-purple-700" />
              <div className="flex flex-col text-base">
                <span className="font-bold">Etkinlik Türü</span>
                <span>{event.eventType}</span>
              </div>
            </div>
            <div className="flex items-center">
            <span className="mr-2">Bilet Seçiniz:</span>
            <Select placeholder="Kategori Seçiniz.." defaultValue={"default"} className="w-64">
              <Select.Option key={0} value={"default"}>
                  Standart Bilet - {event.ticketPrice==0?"Ücretsiz":event.ticketPrice+" \u20BA"} 
              </Select.Option>
              {event.exTickets.map((ticket)=>(
                <Select.Option key={ticket.id} value={ticket.id}>
                {ticket.ticketName}  - {ticket.ticketPrice} &#8378;
              </Select.Option>
              ))} 
            </Select>
             </div>
            <div className="flex items-center">
              <SiStackblitz className="mr-2 text-purple-700" />
              <div className="flex flex-col text-base">
                <span className="font-bold">Sponsor</span>
                <span>Events</span>
              </div>
            </div>
            {/* <div className="flex flex-col items-center">
              <Rate allowHalf defaultValue={4.5} className="text-sm" />
              <span>(500)</span>
            </div> */}
          </div>
          <div className="">
            <Divider />
          </div>
          <div className="pt-3">
            <div className="flex items-center justify-center sm:justify-start text-4xl text-purple-700 mb-5 sm:mb-12">
              <HiOutlineInformationCircle className="mr-5" />
              <span>Detaylar</span>
            </div>
            <div className="mb-10">
              <h3 className="text-xl sm:text-3xl font-bold mb-5">
                {event.eventName}
              </h3>
              <p className=" sm:text-lg text-gray-400">{event.detail}</p>
            </div>
          </div>
          <div className="py-3">
            <div className="flex items-center justify-center sm:justify-start text-4xl text-purple-700 mb-5">
              <FaMapLocationDot className="mr-5" />
              <span>Konum</span>
            </div>
          </div>
          <div className="w-full mb-5">
            <iframe
              title={event.eventName}
              src={event.iframe}
              height="300"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
