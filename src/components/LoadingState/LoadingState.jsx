import React from "react";
import "./LoadingState.css";

export default function LoadingState() {
  return (
    <div className="loading">
      {[1, 2, 3, 4].map((x) => (
        <div key={x}>
          <i />
          <b />
          <b />
          <b />
        </div>
      ))}
    </div>
  );
}