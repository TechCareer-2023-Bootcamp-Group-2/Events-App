import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import MainEvents from "../components/MainEvents/MainEvents";

const AllEvents = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  const getEvents = async () => {
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

  useEffect(() => {
    getEvents();
    getCategories();
  }, []);

  return (
    <div className="m-0">
      <Header />
      <div className="mt-24">
        <div className="md:px-[80px]">
          <CustomTitle borderedTitle={"All Event"} />
        </div>
        <MainEvents
          search={search}
          setSearch={setSearch}
          filtered={filtered}
          setFiltered={setFiltered}
          categories={categories}
          events={events}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AllEvents;
