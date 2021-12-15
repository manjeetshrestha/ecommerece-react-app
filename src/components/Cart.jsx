import React from "react";
import { useCartItems } from "../context/CartContext";
import CartCard from "./CartCard";
import Checkout from "./Checkout.jsx";

export default function Cart() {
  const cartItems = useCartItems();
  let cartItemsCollections = {};
  cartItems.forEach((cartItem) => {
    if (cartItemsCollections[cartItem.id]) {
      cartItemsCollections[cartItem.id].price += cartItem.price;
      cartItemsCollections[cartItem.id].quantity += 1;
    } else {
      cartItemsCollections[cartItem.id] = Object.assign({}, cartItem);
      cartItemsCollections[cartItem.id].quantity = 1;
    }
  });
  console.log(cartItems);
  console.log(cartItemsCollections);
  cartItemsCollections = Object.values(cartItemsCollections);
  // cartItemsCollections = JSON.stringify(cartItemsCollections);

  const cartCards = cartItemsCollections.map((cartItemsCollection) => {
    // console.log(cartItem);

    return (
      <CartCard product={cartItemsCollection} key={cartItemsCollection.id} />
    );
  });
  return (
    <>
      <div className="flex-container">
        <div className="cart-items">{cartCards}</div>
        <div className="checkout-card">
          <Checkout />
        </div>
      </div>
    </>
  );
}
