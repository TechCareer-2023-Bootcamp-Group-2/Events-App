import React from "react";
import EventCard from "./EventCard";

const Events = ({ filtered, search }) => {
  return (
    <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:w-full max-w-lg:px-6">
      {filtered
        .filter((event) => {
          const eventNameMatch = event.eventName.toLowerCase().includes(search);
          const eventCityMatch = event.city.toLowerCase().includes(search);

          return eventNameMatch || eventCityMatch;
        })
        .map((item) => (
          <EventCard item={item} key={item.id} search={search} />
        ))}
    </div>
  );
};

export default Events;