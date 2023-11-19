import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = ({slides, prevSlide, nextSlide, goToSlide, currentIndex}) => {
  return (
    <div className="max-w-[1200px] h-[600px] w-full m-auto relative group bg-black rounded-3xl">
      <img
        className="w-full h-full rounded-3xl object-cover opacity-70 mt-5 duration-500"
        src={`${slides[currentIndex].url}`}
        alt=""
      />
      <div
        className="absolute text-white w-[500px] text-center bg-gray-400 bg-opacity-70 z-999 right-1/2 top-2/3 translate-x-1/2 
              rounded-[20px] py-5 px-5 select-none"
      >
        <h1 className="font-bold text-3xl mb-5">
          {slides[currentIndex].title}
        </h1>
        <p className="text-xl">{slides[currentIndex].description}</p>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-red-500" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
