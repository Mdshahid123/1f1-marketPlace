import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <span className="hero__pill">✦ &nbsp;NO-COST EMIs</span>

        <h1>
          Shop today,
          <br />
          <em>Pay later using</em>
          <br />
          Mutual funds.
        </h1>

        <p>
          No credit score required. No interest.
          <br />
          Backed by your investments.
        </p>
      </div>

      <div className="hero__art">
        <div className="art__glow" />

        <div className="art__laptop">1Fi</div>

        <div className="art__phone">1Fi</div>

        <div className="art__car">●━━●</div>

        <div className="art__bike">⌁</div>

        <div className="art__bag">
          <b>1Fi</b>
          <i />
        </div>

        <span>◆</span>
        <span>◆</span>
        <span>◆</span>
      </div>
    </section>
  );
}