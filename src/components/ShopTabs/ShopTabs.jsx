import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ShopTabs.css";

export default function ShopTabs() {
  const loc = useLocation();
  const nav = useNavigate();

  let active =
    loc.pathname === "/shop/brands"
      ? "brands"
      : loc.pathname === "/shop/nearby"
      ? "nearby"
      : "marketplace";

  const tabs = [
    ["brands", "Top Brands", "/shop/brands"],
    ["nearby", "Nearby Stores", "/shop/nearby"],
    ["marketplace", "1Fi Marketplace", "/marketplace"],
  ];

  return (
    <div className="tabs">
      {tabs.map(([key, label, path]) => (
        <button
          key={key}
          className={active === key ? "selected" : ""}
          onClick={() => nav(path)}
        >
          {label}
          {active === key && <small />}
        </button>
      ))}
    </div>
  );
}