import React, { useEffect, useState } from "react";

const CategoryButton = ({ categories, setFiltered, events }) => {
  const [categoryTitle, setCategoryTitle] = useState("All");

  useEffect(() => {
    if (categoryTitle === "All") {
      setFiltered(events);
    } else {
      setFiltered(events.filter((item) => item.category === categoryTitle));
    }
  }, [events, categoryTitle, setFiltered]);

  return (
    <ul className="grid grid-cols-4 md:flex md:flex-row gap-3 md:gap-x-6 mb-5">
      {categories.map((category, index) => (
        <li
          className={`py-2 md:py-3 px-3 md:px-7 rounded-md cursor-pointer text-center hover:text-purple-700 ${category.title === categoryTitle && "text-purple-700 border border-purple-700"}`}
          onClick={() => setCategoryTitle(category.title)}
          key={index}
        >
          <span className="">{category.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryButton;
