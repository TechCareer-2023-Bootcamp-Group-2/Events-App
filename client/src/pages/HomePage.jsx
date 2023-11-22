import React, { useState } from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import EventSearch from "../components/EventSearch/EventSearch";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import Events from "../components/Events/Events";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filtered, setFiltered] = useState([]);

  // Slider Geri Butonu
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  // Slider İleri Butonu
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // Alttaki noktalardan ilgili slide'a git func.
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="m-0">
      <Header />
      <div className="mt-40 md:mt-28 mb-10 md:mb-20 mx-5">
        <h1 className="text-center font-bold md:font-extrabold text-2xl md:text-5xl">Populer Events</h1>
        <Slider
          slides={slides}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
          currentIndex={currentIndex}
        />
      </div>
      <div className="md:px-[80px]">
        <EventSearch />
        <CustomTitle borderedTitle={"Event"} title={"Popular Event"} />
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
  );
};

export default HomePage;
