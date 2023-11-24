import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const links = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/all-events",
    title: "All Events",
  },
];

const Footer = () => {
  return (
    <footer className="md:h-[250px] flex flex-col md:flex-row items-center md:justify-evenly bg-gray-500">
      <div className="w-full md:w-[250px] md:h-[200px] flex flex-col justify-center items-center md:items-start mt-5 mb-5 md:mt-0 md:mb-0">
        <h1 className="text-2xl lg:text-3xl mb-3 text-white">
          Company<span className="text-purple-500">logo</span>
        </h1>
        <div className="mb-2 text-white hidden sm:block">
          {links.map((link) => (
            <Link to={link.route} className="text-lg hover:text-purple-700" key={link.title}>
              {link.title} |{" "}
            </Link>
          ))}
        </div>
        <span className="text-sm">Company Name © 2023</span>
      </div>
      <div className="flex flex-col justify-center px-20 sm:px-40 md:px-0 gap-y-1 sm:gap-y-3 w-full md:w-[250px] md:h-[200px] text-white mb-3 md:mb-0">
        <div className="flex items-center">
          <div className="bg-gray-800 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center rounded-3xl">
            <MdLocationOn className="text-sm sm:text-lg lg:text-xl" />
          </div>
          <span className="ml-5 text-sm sm:text-base">Adresssss</span>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-800 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center rounded-3xl">
            <FaPhone className="text-sm sm:text-lg lg:text-xl" />
          </div>
          <span className="ml-5 text-sm sm:text-base">+90 123456858</span>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-800 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center rounded-3xl">
            <IoIosMail className="text-sm sm:text-lg lg:text-xl" />
          </div>
          <span className="ml-5 text-purple-900 text-sm sm:text-base">events@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[250px] md:h-[200px] text-white mb-3 md:mb-0">
        <h1 className="font-semibold lg:text-lg">About the company</h1>
        <span className="text-gray-400 text-sm lg:text-base mb-3 text-center sm:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          pariatur, cum facere aperiam nobis delectus beatae eum neque veniam.
        </span>
        <div className="flex gap-x-3">
          <div className="bg-gray-800 text-white w-7 h-7 flex justify-center items-center rounded-sm hover:bg-white hover:text-purple-700 hover:cursor-pointer">
            <FaFacebookF className="text-base " />
          </div>
          <div className="bg-gray-800 text-white w-7 h-7 flex justify-center items-center rounded-sm hover:bg-white hover:text-purple-700 hover:cursor-pointer">
            <FaTwitter className="text-base " />
          </div>
          <div className="bg-gray-800 text-white w-7 h-7 flex justify-center items-center rounded-sm hover:bg-white hover:text-purple-700 hover:cursor-pointer">
            <FaInstagram className="text-base " />
          </div>
          <div className="bg-gray-800 text-white w-7 h-7 flex justify-center items-center rounded-sm hover:bg-white hover:text-purple-700 hover:cursor-pointer">
            <FaLinkedinIn className="text-base " />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
