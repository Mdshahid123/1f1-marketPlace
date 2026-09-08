import React from "react";
import {
  Home,
  Store,
  ReceiptText,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./BottomNav.css";

const items = [
  ["Home", Home],
  ["Shop", Store],
  ["EMI Dues", ReceiptText],
  ["Limit", TrendingUp],
  ["Profile", UserRound],
];

export default function BottomNav() {
  const nav = useNavigate();

  return (
    <nav className="bottom">
      {items.map(([x, I]) => (
        <button
          key={x}
          className={x === "Shop" ? "active" : ""}
          onClick={() => x === "Shop" && nav("/marketplace")}
        >
          <I size={23} />
          <span>{x}</span>
        </button>
      ))}
    </nav>
  );
}