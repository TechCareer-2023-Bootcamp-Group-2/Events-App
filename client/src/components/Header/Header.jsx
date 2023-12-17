import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../index.css";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userToken = localStorage.getItem("token");
  console.log("token header: " + userToken);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex justify-between items-center px-[20px] md:px-[50px] min-h-[65px] border border-white border-opacity-40 bg-white bg-opacity-80 
      shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-2xl absolute top-5 w-full md:w-4/5 md:left-1/2 md:-translate-x-1/2 md:mx-auto
      z-999"
    >
      <div>
        <Link to={"/"} className="no-underline font-bold text-3xl ">
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className="hidden md:flex gap-5 text-[18px]">
        {/* Normal büyük ekran menüsü */}
        <Link
          to={"/"}
          className={`no-underline hover:text-red-500 ${
            pathname === "/" && "text-purple-500 "
          }`}
        >
          <span>Home</span>
        </Link>
        <Link
          to={"/all-events"}
          className={`no-underline hover:text-red-500 ${
            pathname === "/all-events" && "text-purple-500"
          }`}
        >
          <span>All Events</span>
        </Link>
        {userToken && (
          <Link
            to={"/dashboard"}
            className={`no-underline hover:text-red-500 ${
              pathname === "/dashboard" && "text-purple-500"
            }`}
          >
            <span>Dashboard</span>
          </Link>
        )}
      </div>

      {/* Mobil Ekran için menü butonu kısmı */}
      <div className="header-container md:hidden">
        {/* Mobil ekran menüsü için */}
        <button onClick={toggleMenu} className="text-[18px] focus:outline-none">
          Menu
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white mt-2 shadow-lg border border-white border-opacity-40 rounded-md">
            <Link
              to={"/"}
              className={`block py-2 px-4 no-underline hover:text-red-500 ${
                pathname === "/" && "text-purple-500"
              }`}
            >
              Home
            </Link>
            <Link
              to={"/all-events"}
              className={`block py-2 px-4 no-underline hover:text-red-500 ${
                pathname === "/all-events" && "text-purple-500"
              }`}
            >
              All Events
            </Link>
            {userToken && (
              <Link
                to={"/dashboard"}
                className={`no-underline hover:text-red-500 ${
                  pathname === "/dashboard" && "text-purple-500"
                }`}
              >
                <span>Dashboard</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
