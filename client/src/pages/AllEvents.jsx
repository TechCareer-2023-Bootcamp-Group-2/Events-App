import React, { useState } from "react";
import Header from "../components/Header/Header";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import Events from "../components/Events/Events";
import CategoryButton from "../components/CategoryButton/CategoryButton";

const slides = [
  {
    id: 1,
    image:
      "https://www.telegraph.co.uk/content/dam/music/2022/03/23/TELEMMGLPICT000000290365732_trans_NvBQzQNjv4Bqy81pHNlW26k7kWS-Prb1CvA6hDsX4eDN9gfMVGHPdkQ.jpeg",
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

const categories = [
  {
    title: "All",
  },
  {
    title: "Concert",
  },
  {
    title: "Theater",
  },
  {
    title: "Cinema",
  },
];

const AllEvents = () => {
  const [filtered, setFiltered] = useState([]); 

  return (
    <div className="m-0">
      <Header />
      <div className="mt-24">
        <div className="bg-black">
          <img
            src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=1380&t=st=1700555106~exp=1700555706~hmac=de7fbdcfc423b4a52abb584c5075be0c92c9c05515c1689047c1f4287957518d"
            alt=""
            className="w-full h-[600px] object-cover opacity-70"
          />
          <div className="flex flex-col absolute top-1/2 left-20">
            <span className="text-white text-3xl mb-5">All Events</span>
            <span className="text-white text-2xl">
              Home{" "}
              <span className="text-purple-500 font-extrabold text-2xl">
                {"> All Events"}
              </span>
            </span>
          </div>
        </div>
        <div className="md:px-[80px]">
          <CustomTitle borderedTitle={"All Event"} title={"Popular Event"} />
        </div>
        <div className="flex justify-center">
          <CategoryButton
            categories={categories}
            setFiltered={setFiltered}
            events={slides}
          />
        </div>
        <div className="flex justify-center">
          <Events filtered={filtered} />
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
