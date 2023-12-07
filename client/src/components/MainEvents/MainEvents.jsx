import React from "react";
import EventSearch from "../EventSearch/EventSearch";
import CategoryButton from "../CategoryButton/CategoryButton";
import Events from "../Events/Events";

const MainEvents = ({
  search,
  setSearch,
  events,
  filtered,
  setFiltered,
  categories,
}) => {
  return (
    <>
      <EventSearch
        setSearch={setSearch}
        events={events}
        setFiltered={setFiltered}
      />
      <div className="flex justify-center">
        <CategoryButton
          categories={categories}
          setFiltered={setFiltered}
          events={events}
        />
      </div>
      <div className="flex justify-center">
        <Events filtered={filtered} search={search} />
      </div>
    </>
  );
};

export default MainEvents;
