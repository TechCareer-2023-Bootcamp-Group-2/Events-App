import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryButton = ({ categories, setFiltered, events, url }) => {
  const [categoryTitle, setCategoryTitle] = useState("Tümü");

  useEffect(() => {
    if (categoryTitle === "Tümü") {
      setFiltered(events);
    } else {
      getCategoriesItem();
    }
  }, [events, categoryTitle, setFiltered]);

  // seçili kategorideki etkinlikleri getiriyor.
  const getCategoriesItem = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/Events/Category/" + categoryTitle
      );
      setFiltered(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="grid grid-cols-4 md:flex md:flex-row gap-3 md:gap-x-6 mb-5">
      <li
        className={`py-2 md:py-3 px-3 md:px-7 rounded-md cursor-pointer text-center hover:text-purple-700 ${
          "Tümü" === categoryTitle && "text-purple-700 border border-purple-700"
        }`}
        onClick={() => setCategoryTitle("Tümü")}
      >
        <span className="">Tümü</span>
      </li>
      {categories.map((category, index) => (
        <li
          className={`py-2 md:py-3 px-3 md:px-7 rounded-md cursor-pointer text-center hover:text-purple-700 ${
            category.eventType === categoryTitle &&
            "text-purple-700 border border-purple-700"
          }`}
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
