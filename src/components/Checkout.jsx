import React from "react";
import { useCartItems } from "../context/CartContext";

export default function Checkout({ cartItemsCollections }) {
  // const cartItems = useCartItems();
  let total = 0;
  cartItemsCollections.forEach((item) => {
    total = total + item.price * item.quantity;
  });
  return (
    <div className="checkout-container">
      <div className="checkout-title">
        <h1>Checkout Sum</h1>
      </div>
      <div className="total-payement">
        <h1>Total</h1>
        <span>${total}</span>
      </div>
      <button>Pay Now</button>
    </div>
  );
}
