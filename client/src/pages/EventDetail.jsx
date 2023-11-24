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
    image:
      "https://www.telegraph.co.uk/content/dam/music/2022/03/23/TELEMMGLPICT000000290365732_trans_NvBQzQNjv4Bqy81pHNlW26k7kWS-Prb1CvA6hDsX4eDN9gfMVGHPdkQ.jpeg",
    images: [
      "https://www.telegraph.co.uk/content/dam/music/2022/03/23/TELEMMGLPICT000000290365732_trans_NvBQzQNjv4Bqy81pHNlW26k7kWS-Prb1CvA6hDsX4eDN9gfMVGHPdkQ.jpeg",
      "https://www.hanszimmerlive.com/wp-content/uploads/2019/10/Hans-Zimmer-by-Dita-Vollmond-1F0A7217.jpg",
      "https://www.worldofhanszimmer.com/wp-content/uploads/2018/10/03_HansZimmer_Frank_Embacher_Berlin_print_klein-87.jpg",
    ],
    title: "Hans Zimmer Concert",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
    category: "Concert",
  },
  {
    id: 2,
    image:
      "https://www.tennessean.com/gcdn/presto/2019/01/25/PNAS/a2ba5af2-f783-4889-90c0-aba94248128a-Metallica-20190124-01.jpg?crop=3299,1856,x1,y209&width=3200&height=1801&format=pjpg&auto=webp",
    title: "Metallica Concert",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
    category: "Concert",
  },
  {
    id: 3,
    image: "https://www.cide.bel.tr/tema/genel/uploads/haberler/IMG_0270.jpg",
    title: "Osman Hamdi Bey Theater",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
    category: "Theater",
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/8C7oJekgxlg/maxresdefault.jpg",
    title: "Avatar 2 Cinema",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
    category: "Cinema",
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
            {slides[0].images.map((item, index) => (
              <div className="h-[250px] sm:h-[400px] md:h-[600px] rounded-lg" key={index}>
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Carousel>
          <div className="pt-10 pb-5 flex justify-between text-base sm:text-2xl">
            <div className="flex items-center">
              <IoCalendarOutline className="mr-2 text-purple-700" />
              <span>21.07.2023</span>
            </div>
            <div className="flex items-center">
              <MdEventSeat className="mr-2 text-purple-700" />
              <span>500 Seat</span>
            </div>
            <div className="flex items-center">
              <IoLocationSharp className="mr-2 text-purple-700" />
              <span>Ankara, Turkey</span>
            </div>
          </div>
          <div className="">
            <Divider />
          </div>
          <div className="flex justify-between text-base sm:text-2xl">
            <div className="flex items-center">
              <AiOutlineMenuUnfold className="mr-2 text-purple-700" />
              <div className="flex flex-col text-base">
                <span className="font-bold">Event Type</span>
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
                Media Companies Need To Better One Then Educate Advertisers.
                Better One Then Educate.
              </h3>
              <p className=" sm:text-lg text-gray-400">
                Cras semper, massa vel aliquam luctus, eros odio tempor turpis,
                ac placerat metus tortor eget magna. Donec mattis posuere
                pharetra. Donec vestibulum ornare velit ut sollicitudin.
                Pellentesque in faucibus purus.Nulla nisl tellus, hendrerit nec
                dignissim pellentesque, posuere in est. Suspendisse bibendum
                vestibulum elit eu placerat. In ut ipsum in odio euismod
                tincidunt non lacinia nunc. Donec ligula augue, mattis eu varius
                ac.
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
