import React from "react";
import { UserRound } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          className="navbar__brand"
          onClick={() => nav("/marketplace")}
        >
          <b>1</b>
          <span>1Fi</span>
        </button>

        <nav>
          {["Home", "Shop", "EMI Dues", "Limit", "Profile"].map((x) => (
            <button
              key={x}
              className={
                x === "Shop" &&
                (loc.pathname.startsWith("/marketplace") ||
                  loc.pathname.startsWith("/shop"))
                  ? "active"
                  : ""
              }
              onClick={() => x === "Shop" && nav("/marketplace")}
            >
              {x}
            </button>
          ))}
        </nav>

        <button className="navbar__profile">
          <i>
            <UserRound size={17} />
          </i>
          Profile
        </button>
      </div>
    </header>
  );
}