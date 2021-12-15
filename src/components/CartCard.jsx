import React from "react";
import { useCartItems, useCartItemsUpdater } from "../context/CartContext";

export default function CartCard(props) {
  // const cartItems = useCartItems();
  const [_, deleteCartItem] = useCartItemsUpdater();
  return (
    <div className="cartItems-container">
      <div className="cartItems">
        <div className="cartItem-image">
          <img src={props.product.image} alt="" />
        </div>
        <div className="cartItem-title">
          <h4>{props.product.title}</h4>
          <div className="cartItem-review">
            <h4>
              <span>Price $ </span>
              {props.product.price}
            </h4>
            {/* <h4>
              <span>Rating </span>
              {props.product.rating.rate}
            </h4> */}
          </div>
        </div>
        <div className="quantity">
          <h4>Quantity</h4>
          <div className="quantity-counter">
            <span>{props.product.quantity}</span>
          </div>
        </div>
        <div className="delete">
          <button
            onClick={() =>
              deleteCartItem(props.product.id, props.product.price)
            }
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
