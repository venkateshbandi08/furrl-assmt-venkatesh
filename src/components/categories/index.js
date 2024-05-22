import React, { useState } from "react";
import "./index.css";

// component to display all the respective category tabs
const AllCategories = () => {
  // storing all the respective tabs in a list
  const categoriesList = ["All", "Apparel", "Accessories", "Home"];
  // initialized activeCategory variable to store the current active tab and apply different styles to identify it.
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <ul className="categoriesList-container">
      {/* mapping all the category tabs */}
      {categoriesList.map((eachItem) => (
        <li
          className={`category-container
         ${activeCategory === eachItem ? "active-tab-style" : ""}`}
          onClick={() => setActiveCategory(eachItem)}
        >
          <p
            className={`tab-name ${
              activeCategory === eachItem ? "active-tab-name" : ""
            }`}
          >
            {eachItem}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default AllCategories;
