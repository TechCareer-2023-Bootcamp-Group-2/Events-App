import React, { useState } from "react";
import Header from "../components/Header/Header";
//import Slider from "../components/Slider/Slider";
import EventSearch from "../components/EventSearch/EventSearch";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import { Carousel } from "antd";

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

const HomePage = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]); 

  return (
    <div className="m-0">
      <Header />
      <div className="mt-12">
        <CustomTitle borderedTitle={"Populer Events"} />
      </div>
      <Carousel autoplay className="px-3 md:px-20 lg:px-30 rounded-lg">
        {slides.map((item) => (
          <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg bg-black" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover rounded-lg opacity-70"
            />
          </div>
        ))}
      </Carousel>
      <div>
        <CustomTitle borderedTitle={"Events"} />
      </div>
      <EventSearch setSearch={setSearch} />
      <div className="flex justify-center">
        <CategoryButton
          categories={categories}
          setFiltered={setFiltered}
          events={slides}
        />
      </div>
      <div className="flex justify-center mb-10">
        <Events filtered={filtered} search={search} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
