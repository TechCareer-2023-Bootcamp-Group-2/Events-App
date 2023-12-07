import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ event }) => {
  return (
    <div
      className="w-full md:w-[300px] lg:w-[320px] h-auto flex flex-col bg-white my-3 mx-auto rounded-md
      shadow-lg shadow-black/[0.1]"
    >
      <img
        src={process.env.REACT_APP_SERVER_URL + "/EventImages?id=" + event.imagesUrl[0]}
        alt={event.eventName}
        className="rounded-md h-[200px] w-full object-cover"
      />
      <h1 className="my-2 text-xl font-bold ml-2">{event.eventName}</h1>
      <div className="ml-2 my-3">
        <Link
          to={`/dashboard-detail/${event.id}`}
          className="px-3 py-1 rounded-lg text-lg bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border hover:border-purple-700"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
