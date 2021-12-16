import React, { createContext, useState, useContext } from "react";
import Cart from "../components/Cart";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  // let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  // const [pay, setPay] = useState(0);

  function addCartItem(newItem) {
    // cartItems.push(newItem);
    // setCartItems([...cartItems, newItem]);
    // setPay(pay + newItem.price);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, newItem]));
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }

  function deleteCartItem(id) {
    // logic to delete cart items
    // setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    // cartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((cartItem) => cartItem.id !== id))
    );
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    // setPay(pay - price);
  }

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

// export function useAddCartItem() {
//     const ctx =
//     return ctx.useAddCartItem
// }

export function useCartItems() {
  const ctx = useContext(CartContext);
  return ctx.cartItems;
}

export function useCartItemsUpdater() {
  const ctx = useContext(CartContext);
  return [ctx.addCartItem, ctx.deleteCartItem];
}

export function getCartItemsNumber() {
  const ctx = useContext(CartContext);
  console.log(ctx.cartItems);
  const number = ctx.cartItems.length;
  return number;
}

// export function getPay() {
//   const ctx = useContext(CartContext);
//   return ctx.pay;
// }
