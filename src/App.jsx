import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Marketplace from "./pages/Marketplace/Marketplace";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import BlankShop from "./pages/BlankShop/BlankShop";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
       
        {/* <Route
          path="/shop/nearby"
          element={}
        /> */}

        <Route
          path="/"
          element={<Navigate to="/marketplace" replace />}
        />

        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/marketplace/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/shop/brands"
          element={
            <BlankShop
              title="Top Brands"
              placeholder="Search online stores..."
            />
          }
        />

        <Route
          path="/shop/nearby"
          element={
            <BlankShop
              title="Nearby Stores"
              placeholder="Search stores..."
            />
          }
        />

        <Route
          path="*"
          element={<Navigate to="/marketplace" replace />}
        />
      </Routes>
    </>
  );
}