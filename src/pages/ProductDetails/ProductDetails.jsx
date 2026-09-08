import React, { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import BottomNav from "../../components/BottomNav/BottomNav";
import { getProductById } from "../../services/productService";

import "./ProductDetails.css";

const money = (x) => "₹" + x.toLocaleString("en-IN");

export default function ProductDetails() {
  const { id } = useParams();
  const nav = useNavigate();

  const [p, setP] = useState(null);
  const [v, setV] = useState("");
  const [m, setM] = useState(null);

  useEffect(() => {
    getProductById(id).then((x) => {
      setP(x);
      setV(x.variants[0].id);
      setM(x.emiPlans[0].months);
    });
  }, [id]);

  if (!p) {
    return <div className="detail-load">Loading product...</div>;
  }

  const variant =
    p.variants.find((x) => x.id === v) || p.variants[0];

  const plan =
    p.emiPlans.find((x) => x.months === m) || p.emiPlans[0];

  return (
    <div className="detail">
      <header>
        <button onClick={() => nav(-1)}>
          <ArrowLeft size={21} />
        </button>

        <b>Product details</b>
      </header>

      <main>
        <div className="detail__layout">
          <div className="detail__image">
            <span>NO-COST EMI</span>

            <img src={p.image} alt={p.name} />
          </div>

          <div>
            <small className="detail__cat">
              {p.brand} · {p.category}
            </small>

            <h1>{p.name}</h1>

            <strong className="detail__price">
              {money(variant.price)}
            </strong>

            <p className="detail__desc">{p.description}</p>

            <section>
              <h2>Select variant</h2>

              {p.variants.map((x) => (
                <button
                  className={
                    "option " + (v === x.id ? "selected" : "")
                  }
                  key={x.id}
                  onClick={() => setV(x.id)}
                >
                  <span>{x.label}</span>

                  <b>{money(x.price)}</b>

                  {v === x.id && <Check size={17} />}
                </button>
              ))}
            </section>

            <section>
              <h2>Choose EMI plan</h2>

              {p.emiPlans.map((x) => (
                <button
                  className={
                    "emi " + (m === x.months ? "selected" : "")
                  }
                  key={x.months}
                  onClick={() => setM(x.months)}
                >
                  <i>{m === x.months ? "●" : ""}</i>

                  <span>
                    <b>{x.months} months</b>
                    <small>
                      {money(x.monthly)} / month
                    </small>
                  </span>

                  <em>{x.tag}</em>
                </button>
              ))}
            </section>

            <div className="summary">
              <small>Selected plan</small>

              <b>
                {plan.months} months · {money(plan.monthly)} / month
              </b>
            </div>

            <button
              className="proceed"
              onClick={() =>
                alert("Proceeding with selected EMI plan")
              }
            >
              Proceed with selected plan
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}