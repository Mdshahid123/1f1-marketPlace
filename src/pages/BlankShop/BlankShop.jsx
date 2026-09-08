import React, { useState } from "react";

import Hero from "../../components/Hero/Hero";
import ShopTabs from "../../components/ShopTabs/ShopTabs";
import SearchBar from "../../components/SearchBar/SearchBar";
import BottomNav from "../../components/BottomNav/BottomNav";

import "./BlankShop.css";

export default function BlankShop({ title, placeholder }) {
  const [q, setQ] = useState("");

  return (
    <div className="blank">
      <Hero />

      <main>
        <ShopTabs />

        <SearchBar
          value={q}
          onChange={setQ}
          placeholder={placeholder}
        />

        <section>
          <h2>{title}</h2>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}