import React from "react";
import {
  useCartItems,
  useCartItemsUpdater,
  useDeleteSingleCartItem,
} from "../context/CartContext";

export default function CartCard(props) {
  // const cartItems = useCartItems();

  const [addCartItem, deleteCartItem] = useCartItemsUpdater();
  const deleteSingleCartItem = useDeleteSingleCartItem();
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
            <button
              className="quantity-modifier"
              onClick={() => addCartItem(props.product)}
            >
              +
            </button>
            <span>{props.product.quantity}</span>
            <button
              className="quantity-modifier"
              onClick={() => deleteSingleCartItem(props.product.id)}
            >
              -
            </button>
          </div>
        </div>
        <div className="delete">
          <button onClick={() => deleteCartItem(props.product.id)}>X</button>
        </div>
      </div>
    </div>
  );
}
