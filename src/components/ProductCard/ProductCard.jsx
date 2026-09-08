import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const money = (x) => "₹" + x.toLocaleString("en-IN");

export default function ProductCard({ product }) {
  const nav = useNavigate();

  const emi = Math.min(
    ...product.emiPlans.map((x) => x.monthly)
  );

  return (
    <article className="card">
      <div className="card__image">
        <img src={product.image} alt={product.name} />
        <span>NO-COST EMI</span>
      </div>

      <div className="card__body">
        <small>{product.category}</small>

        <h3>{product.name}</h3>

        <strong>{money(product.price)}</strong>

        <p>From {money(emi)} / month</p>

        <button onClick={() => nav("/marketplace/" + product.id)}>
          View details
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}