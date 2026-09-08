import React, { useEffect, useMemo, useState } from "react";

import Hero from "../../components/Hero/Hero";
import ShopTabs from "../../components/ShopTabs/ShopTabs";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryChips from "../../components/CategoryChips/CategoryChips";
import ProductCard from "../../components/ProductCard/ProductCard";
import LoadingState from "../../components/LoadingState/LoadingState";
import ErrorState from "../../components/ErrorState/ErrorState";
import BottomNav from "../../components/BottomNav/BottomNav";

import { getProducts } from "../../services/productService";

import "./Marketplace.css";

export default function Marketplace() {
  const [p, setP] = useState([]);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    setError("");

    getProducts()
      .then(setP)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const list = useMemo(() => {
    return p.filter(
      (x) =>
        (cat === "All" || x.category === cat) &&
        (!q ||
          x.name.toLowerCase().includes(q.toLowerCase()) ||
          x.brand.toLowerCase().includes(q.toLowerCase()))
    );
  }, [p, q, cat]);

  return (
    <div className="market">
      <Hero />

      <main className="market__main">
        <ShopTabs />

        <SearchBar value={q} onChange={setQ} />

        <CategoryChips value={cat} onChange={setCat} />

        <header className="market__heading">
          <div>
            <small>SHOP ONLINE</small>
            <h2>1Fi Marketplace</h2>
            <p>
              Get what you need today with flexible no-cost EMIs.
            </p>
          </div>

          <b>{list.length} products</b>
        </header>

        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState retry={load} />
        ) : list.length ? (
          <div className="market__grid">
            {list.map((x) => (
              <ProductCard key={x.id} product={x} />
            ))}
          </div>
        ) : (
          <div className="market__empty">
            <h3>No products found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}