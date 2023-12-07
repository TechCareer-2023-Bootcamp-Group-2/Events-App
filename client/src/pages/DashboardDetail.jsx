import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import EditEventDetail from "../components/EditEvents/EditEventDetail";
import EditEventPhotos from "../components/EditEvents/EditEventPhotos";

//Import Swiper Library
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const DashboardDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);
  const [event, setEvent] = useState();

  const { eventId } = useParams();

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
  }, [eventId, event]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <div className="m-0">
        <Header />
        <div className="my-20 mx-5 md:mx-28 lg:mx-40">
          <div className="flex flex-col mb-5">
            <span className="text-2xl md:text-4xl mb-5 mt-10 font-bold">
              {event.eventName}
            </span>
            <span className="text-base md:text-lg">{event.detail}</span>
          </div>
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="h-[150px] sm:h-[200px] lg:h-[300px] mb-5"
          >
            {event.imagesUrl.map((image, index) => (
              <SwiperSlide key={index} className="w-full">
                <img
                  src={
                    process.env.REACT_APP_SERVER_URL +
                    "/EventImages?id=" +
                    image
                  }
                  alt=""
                  className="h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            className="ant-btn-primary"
            type="primary"
            size="large"
            onClick={() => setIsPhotosModalOpen(true)}
          >
            Resimleri Düzenle
          </Button>
          <div className="flex flex-col mb-5">
            <span className="text-3xl mb-5 mt-10 font-semibold">
              Adres Bilgisi
            </span>
            <span className="mb-3 text-lg">
              {event.adress}, {event.city}, Türkiye
            </span>
            <iframe
              title={event.eventName}
              src={event.iframe}
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Button
            className="ant-btn-primary"
            type="primary"
            size="large"
            onClick={() => setIsModalOpen(true)}
          >
            Genel Bilgileri Düzenle
          </Button>
        </div>
      </div>
      <EditEventDetail
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        event={event}
        setEvent={setEvent}
      />
      <EditEventPhotos
        isPhotosModalOpen={isPhotosModalOpen}
        setIsPhotosModalOpen={setIsPhotosModalOpen}
        eventPhotos={event.imagesUrl}
        event={event}
      />
    </>
  );
};

export default DashboardDetail;
