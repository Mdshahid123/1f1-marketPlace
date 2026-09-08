import React from "react";
import { Search } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="search">
      <Search size={23} />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search products, brands..."}
      />
    </div>
  );
}