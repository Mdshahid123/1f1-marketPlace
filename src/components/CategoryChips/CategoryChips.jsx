import React from "react";
import "./CategoryChips.css";

export default function CategoryChips({ value, onChange }) {
  const categories = [
    "All",
    "Mobiles",
    "Laptops",
    "TVs",
    "Appliances",
    "Audio",
  ];

  return (
    <div className="chips">
      {categories.map((category) => (
        <button
          key={category}
          className={value === category ? "active" : ""}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}