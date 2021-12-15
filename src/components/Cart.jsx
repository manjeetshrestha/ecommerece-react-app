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

  cartItemsCollections = Object.values(cartItemsCollections);

  const cartCards = cartItemsCollections.map((cartItemsCollection) => {
    return (
      <CartCard product={cartItemsCollection} key={cartItemsCollection.id} />
    );
  });

  if (cartItems.length == 0) {
    return (
      <>
        <h1>No Items added to cart</h1>
      </>
    );
  } else {
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
}
