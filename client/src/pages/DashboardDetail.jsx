import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import EditEventDetail from "../components/EditEvents/EditEventDetail";
import EditEventPhotos from "../components/EditEvents/EditEventPhotos";
import { Button } from "antd";

//Import Swiper Library
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";


const slides = [
  {
    id: 1,
    eventName: "Hamlet",
    eventType: "Tiyatro",
    detail: "Ünlü Shakespeare eseri Hamlet'in sahneleneceği tiyatro gösterisi.",
    startTime: "2023-12-01T00:00:00",
    endTime: "2023-12-15T00:00:00",
    place: "Şehir Tiyatrosu",
    city: "İstanbul",
    adress: "İstiklal Caddesi No:123, Beyoğlu",
    googleMapsLink: "https://maps.google.com/?q=41.034,28.985",
    isPopular: true,
    ticketPrice: 50,
    imagesUrl: [
      "https://www.artfulliving.com.tr/image_data/content/fc3d359a383de694dd2b62b01a9d1457.jpg",
      "https://media-cdn.t24.com.tr/media/stories/2018/10/raw_hamlet-bale-eseri-olarak-mersinli-sanatseverlerle-bulusuyor_239869767.jpg",
      "https://www.artfulliving.com.tr/image_data/content/fc3d359a383de694dd2b62b01a9d1457.jpg",
      "https://media-cdn.t24.com.tr/media/stories/2018/10/raw_hamlet-bale-eseri-olarak-mersinli-sanatseverlerle-bulusuyor_239869767.jpg",
    ],
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5830521181947!2d28.97705557604177!3d41.03437707134683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76119a15877%3A0xb0aed192c6b9f6b8!2zS3Vsb8SfbHUsIMSwc3Rpa2xhbCBDZC4gTm86MTIzLCAzNDQzMyBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1701084008449!5m2!1str!2str",
  },
  {
    id: 2,
    eventName: "Osman Hamdi Bey Sergisi",
    eventType: "Resim",
    detail: "Osman Hamdi Bey'in eserlerini içeren sergi.",
    startTime: "2023-11-20T00:00:00",
    endTime: "2023-12-10T00:00:00",
    place: "Sanat Galerisi",
    city: "Ankara",
    adress: "Sanat Sokak No:45, Çankaya",
    googleMapsLink: "https://maps.google.com/?q=39.933,32.866",
    isPopular: true,
    ticketPrice: 20,
    imagesUrl: [
      "https://www.peramuzesi.org.tr/Repo/SliderAndBoxs/osman-hamdi-bey-sergi-3.jpg",
      "https://www.peramuzesi.org.tr/Repo/SliderAndBoxs/osman-hamdi-bey-sergi-1.jpg",
    ],
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.6902642819043!2d32.855282343153476!3d39.87370405294548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3386376d6c3d7%3A0x3a123ff8050cbd2!2sYasemin%20Karakaya%20Bilim%20Ve%20Sanat%20Merkezi!5e0!3m2!1str!2str!4v1701084270888!5m2!1str!2str",
  },
  {
    id: 3,
    eventName: "Rock Festivali",
    eventType: "Konser",
    detail: "Birbirinden ünlü rock gruplarının sahne alacağı müzik festivali.",
    startTime: "2023-11-25T00:00:00",
    endTime: "2023-12-26T00:00:00",
    place: "Açık Hava Konser Alanı",
    city: "İzmir",
    adress: "Kordon Boyu,Alsancak",
    googleMapsLink: "https://maps.google.com/?q=38.418,27.128",
    isPopular: false,
    ticketPrice: 80,
    imagesUrl: [
      "https://static.daktilo.com/sites/302/uploads/2023/10/07/maxresdefault-1.jpg",
      "https://static.bianet.org/system/uploads/1/articles/spot_image/000/265/708/original/Zeytinli-Rock-Festivali.jpg",
      "https://static.bianet.org/system/uploads/1/articles/spot_image/000/265/708/original/Zeytinli-Rock-Festivali.jpg",
    ],
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.9057734283892!2d27.12316508507087!3d38.420542399194865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e25df43c7d%3A0x99ced47872c196b4!2zxLB6bWlyLCBLZW1lcmFsdMSxIMOHYXLFn8Sxc8SxLCAzNTM2MCBLb25hay_EsHptaXI!5e0!3m2!1str!2str!4v1701084650948!5m2!1str!2str",
  },
];

const DashboardDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);

  const { eventId } = useParams();
  const event = slides.find((event) => event.id === parseInt(eventId, 10));

  return (
    <>
      <div>
        <Header />
        <div className="my-24 mx-40">
          <div className="flex flex-col mb-5">
            <span className="text-4xl mb-5 mt-10 font-bold">{event.eventName}</span>
            <span className="text-lg">{event.detail}</span>
          </div>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="h-[300px]"
          >
            {event.imagesUrl.map((image, index) => (
              <SwiperSlide key={index} className="h-full w-auto">
                <img src={image} alt="" />
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
            <span className="text-4xl mb-5 mt-10">Adres Bilgisi</span>
            <span>
              {event.adress}, {event.city}, Türkiye
            </span>
            <iframe
              src={event.iframe}
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
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
      <EditEventDetail isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <EditEventPhotos isPhotosModalOpen={isPhotosModalOpen} setIsPhotosModalOpen={setIsPhotosModalOpen} eventPhotos={event.imagesUrl} />
    </>
  );
};

export default DashboardDetail;
