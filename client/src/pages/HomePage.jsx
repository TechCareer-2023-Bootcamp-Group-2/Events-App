import React, { useState } from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import EventSearch from "../components/EventSearch/EventSearch";

const slides = [
  {
    url: "https://www.telegraph.co.uk/content/dam/music/2022/03/23/TELEMMGLPICT000000290365732_trans_NvBQzQNjv4Bqy81pHNlW26k7kWS-Prb1CvA6hDsX4eDN9gfMVGHPdkQ.jpeg",
    title: "Hans Zimmer Concert",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
  },
  {
    url: "https://www.tennessean.com/gcdn/presto/2019/01/25/PNAS/a2ba5af2-f783-4889-90c0-aba94248128a-Metallica-20190124-01.jpg?crop=3299,1856,x1,y209&width=3200&height=1801&format=pjpg&auto=webp",
    title: "Metallica Concert",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
  },
  {
    url: "https://www.cide.bel.tr/tema/genel/uploads/haberler/IMG_0270.jpg",
    title: "Theater",
    description:
      "Hurry before tickets for this unforgettable experience sell out!",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="m-0">
      <Header />
      <div className="mt-28 mb-20">
        <h1 className="text-center font-extrabold text-5xl">Populer Events</h1>
        <Slider
          slides={slides}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
          currentIndex={currentIndex}
        />
        <EventSearch />
      </div>
    </div>
  );
};

export default HomePage;