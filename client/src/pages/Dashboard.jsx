import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import DashboardCard from "../components/DashboardCard/DashboardCard";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        axios.get(process.env.REACT_APP_SERVER_URL + "/Events").then((res) => {
          setEvents(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="m-0">
      <Header />
      <div className="mt-24 px-3 md:px-20 lg:px-30">
        <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:w-full max-w-lg:px-6">
          {events.map((event) => (
            <div key={event.id}>
              <DashboardCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
