import React, { createContext, useState, useContext } from "react";
import Cart from "../components/Cart";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [pay, setPay] = useState(0);

  function addCartItem(newItem) {
    setCartItems([...cartItems, newItem]);
    setPay(pay + newItem.price);
  }

  function deleteCartItem(id, price) {
    // logic to delete cart items
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    setPay(pay - price);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addCartItem, deleteCartItem, pay }}
    >
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

export function getPay() {
  const ctx = useContext(CartContext);
  return ctx.pay;
}
