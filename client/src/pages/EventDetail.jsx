import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { IoCalendarOutline, IoLocationSharp } from "react-icons/io5";
import { MdEventSeat } from "react-icons/md";
import { SiStackblitz } from "react-icons/si";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Carousel, Divider, Rate } from "antd";
import Footer from "../components/Footer/Footer";

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
    ],
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
    ],
  },
];

const EventDetail = () => {
  const { eventId } = useParams();
  const event = slides.find((event) => event.id === parseInt(eventId, 10));

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
            {event.imagesUrl.map((item, index) => (
              <div className="h-[250px] sm:h-[400px] md:h-[600px] rounded-lg" key={index}>
                <img
                  src={item}
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
              <MdEventSeat className="mr-2 text-purple-700" />
              <span>500 Seat</span>
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
                <span className="font-bold">{event.eventType}</span>
                <span>{event.category}</span>
              </div>
            </div>
            <div className="flex items-center">
              <SiStackblitz className="mr-2 text-purple-700" />
              <div className="flex flex-col text-base">
                <span className="font-bold">Sponsor</span>
                <span>Events</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Rate allowHalf defaultValue={4.5} className="text-sm" />
              <span>(500)</span>
            </div>
          </div>
          <div className="">
            <Divider />
          </div>
          <div className="py-3">
            <div className="flex items-center justify-center sm:justify-start text-4xl text-purple-700 mb-5 sm:mb-12">
              <HiOutlineInformationCircle className="mr-5" />
              <span>Details</span>
            </div>
            <div className="mb-10">
              <h3 className="text-xl sm:text-3xl font-bold mb-5">
                {event.eventName}
              </h3>
              <p className=" sm:text-lg text-gray-400">
                {event.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
