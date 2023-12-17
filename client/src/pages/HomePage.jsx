import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import Footer from "../components/Footer/Footer";
import { Carousel } from "antd";
import MainEvents from "../components/MainEvents/MainEvents";
import "../index.css";

const HomePage = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]);
  const [events, setEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState(null);
  const [categories, setCategories] = useState([]);

  const getEvents = async () => {
    console.log(process.env.REACT_APP_SERVER_URL);
    try {
      axios.get(process.env.REACT_APP_SERVER_URL + "/Events").then((res) => {
        setEvents(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      axios.get(process.env.REACT_APP_SERVER_URL + "/EventTypes").then((res) => {
        setCategories(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularEvents = async () => {
    try {
      axios.get(process.env.REACT_APP_SERVER_URL + "/Events/Popular").then((res) => {
        setPopularEvents(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
    getCategories();
    getPopularEvents();
  }, []);

  return (
    <div className="m-0">
      <Header />
      <div className="mt-24">
        <CustomTitle borderedTitle={"Populer Events"} />
      </div>
      <Carousel autoplay className="carousel-container px-3 md:px-20 lg:px-30 rounded-lg" style={{ zIndex: 99 }}>
        {popularEvents &&
          popularEvents.map((item) => (
            <div
              className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg bg-black"
              key={item.id}
            >
              <img
                src={process.env.REACT_APP_SERVER_URL + "/EventImages?id=" + item.imagesUrl[0]}
                alt=""
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
            </div>
          ))}
      </Carousel>
      <div>
        <CustomTitle borderedTitle={"Events"} />
      </div>
      <MainEvents
        search={search}
        setSearch={setSearch}
        filtered={filtered}
        setFiltered={setFiltered}
        categories={categories}
        events={events}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
