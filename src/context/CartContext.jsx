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

  function deleteSingleCartItem(id) {
    // const res = [],
    let flag = false;
    console.log(cartItems);
    for (let i = 0; i < cartItems.length; i++) {
      if (flag === false && cartItems[i].id === id) {
        flag = true;
        // const cartItemsCopy = Object.keys(cartItems);
        let deleteCartItem = cartItems.splice(i, 1);
        console.log(deleteCartItem);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        setCartItems(JSON.parse(localStorage.getItem("cartItems")));
        // console.log("match element found");
        // console.log(i);
        break;
      }
      // setCartItems(cartItems.splice(i, 1));
    }
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addCartItem, deleteCartItem, deleteSingleCartItem }}
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

export function useDeleteSingleCartItem() {
  const ctx = useContext(CartContext);
  return ctx.deleteSingleCartItem;
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
