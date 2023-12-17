import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import { useNavigate } from "react-router-dom";
import EmptyDashboard from "../components/EmptyComponent/EmptyDashboard";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [bearerToken, setBearerToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    var token = localStorage.getItem("token");
    setBearerToken(token);
    console.log(bearerToken);
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      axios.get(process.env.REACT_APP_SERVER_URL + "/Events").then((res) => {
        setEvents(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="m-0">
      <Header />
      <div className="mt-24 px-3 md:px-20 lg:px-30">
        {bearerToken ? (
          <>
            <div className="flex justify-end mx-10">
              <button
                onClick={handleLogOut}
                className="my-5 px-5 py-3 border border-purple-700 rounded-lg bg-purple-400 text-white hover:bg-white hover:text-purple-700"
              >
                Çıkış Yap
              </button>
            </div>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:w-full max-w-lg:px-6">
              {events.map((event) => (
                <div key={event.id}>
                  <DashboardCard event={event} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyDashboard />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
