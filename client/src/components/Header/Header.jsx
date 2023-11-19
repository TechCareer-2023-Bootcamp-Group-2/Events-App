import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();

  return (
    <header
      className="flex justify-between items-center py-0 px-[50px] min-h-[65px] border border-white border-opacity-40 
      bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-2xl absolute top-5 w-3/5 left-1/2 
      -translate-x-1/2 mx-auto"
    >
      <div>
        <Link to={"/"} className="no-underline font-bold text-3xl ">
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className="flex gap-5 text-[18px]]">
        <Link to={"/"} className={`no-underline hover:text-red-500 ${pathname === "/" && "text-purple-500 "}`}>
          <span>Home</span>
        </Link>
        <Link to={"/all-events"} className={`no-underline hover:text-red-500 ${pathname === "/all-events" && "text-purple-500"}`}>
          <span>All Events</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
