import React from "react";
import {IoCalendarOutline, IoLocationSharp} from 'react-icons/io5';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { Link } from "react-router-dom";

const EventCard = ({ item }) => {
  return (
    <div className="w-full md:w-[300px] lg:w-[320px] h-auto flex flex-col bg-white my-3 mx-auto rounded-md
      shadow-lg shadow-black/[0.1]"
    >
      <img src={item.image} alt={item.title} className="rounded-md h-[200px] w-full object-cover" />
      <div className="flex justify-between mx-5 my-5">
        <div className="flex items-center">
          <IoCalendarOutline className="mr-2 text-purple-700" />
          <span>21.07.2023</span>
        </div>
        <div className="flex items-center">
          <IoLocationSharp className="mr-2 text-purple-700" />
          <span>Ankara, Turkey</span>
        </div>
      </div>
      <span className="mx-5 text-[20px] mb-5">{item.title}</span>
      <div className="flex justify-between items-center mx-5 mb-5">
        <Link to={`/eventdetail/${item.id}`} className="underline cursor-pointer hover:text-purple-700">Details</Link>
        <div className="flex gap-x-3">
          <FaFacebookF className="hover:text-purple-700 cursor-pointer text-purple-700 md:text-black " />
          <FaTwitter className="hover:text-purple-700 cursor-pointer text-purple-700 md:text-black" />
          <FaInstagram className="hover:text-purple-700 cursor-pointer text-purple-700 md:text-black" />
          <FaLinkedinIn className="hover:text-purple-700 cursor-pointer text-purple-700 md:text-black" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
