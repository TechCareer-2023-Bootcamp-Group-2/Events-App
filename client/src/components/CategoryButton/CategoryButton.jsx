import React, { useEffect, useState } from "react";

const CategoryButton = ({ categories, setFiltered, events }) => {
  const [categoryTitle, setCategoryTitle] = useState("Tümü");

  useEffect(() => {
    if (categoryTitle === "Tümü") {
      setFiltered(events);
    } else {
      setFiltered(events.filter((item) => item.eventType === categoryTitle));
    }
  }, [events, categoryTitle, setFiltered]);

  return (
    <ul className="grid grid-cols-4 md:flex md:flex-row gap-3 md:gap-x-6 mb-5">
      {categories.map((category, index) => (
        <li
          className={`py-2 md:py-3 px-3 md:px-7 rounded-md cursor-pointer text-center hover:text-purple-700 ${category.eventType === categoryTitle && "text-purple-700 border border-purple-700"}`}
          onClick={() => setCategoryTitle(category.eventType)}
          key={index}
        >
          <span className="">{category.eventType}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryButton;
