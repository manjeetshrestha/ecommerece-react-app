import React from "react";
import { useCartItems, getPay } from "../context/CartContext";

export default function Checkout() {
  const pay = getPay();
  return (
    <div className="checkout-container">
      <div className="checkout-title">
        <h1>Checkout Sum</h1>
      </div>
      <div className="total-payement">
        <h1>Total</h1>
        <span>${pay}</span>
      </div>
      <button>Pay Now</button>
    </div>
  );
}
