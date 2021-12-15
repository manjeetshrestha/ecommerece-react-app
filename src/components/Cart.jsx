import React from "react";
import { useCartItems } from "../context/CartContext";
import CartCard from "./CartCard";
import Checkout from "./Checkout.jsx";

export default function Cart() {
  const cartItems = useCartItems();
  const cartCards = cartItems.map((cartItem) => {
    console.log(cartItem);

    return <CartCard product={cartItem} key={cartItem.id} />;
  });
  return (
    <>
      <div className="flex-container">
        <div className="cart-items">
          {cartCards}
          {/* <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard /> */}
        </div>
        <div className="checkout-card">
          <Checkout />
        </div>
      </div>
    </>
  );
}
