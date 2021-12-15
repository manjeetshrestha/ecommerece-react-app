import React, { useState, useContext } from "react";
import "../index.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { CartContext, getCartItemsNumber } from "../context/CartContext";

export default function Navigation() {
  const navigate = useNavigate();
  const cartItemNumber = getCartItemsNumber();

  //   const { cartItems } = useContext(CartContext);

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      {/* {console.log(cartItems)};{console.log("printeddd")}; */}
      <div className="page-container">
        <nav className="navbar">
          <div className="brand">
            <h1>MeroStore</h1>
          </div>
          <div className="links">
            <Link to="/cart">
              <span>
                Carts
                <span className="carts-number">{String(cartItemNumber)}</span>
              </span>
            </Link>

            <Link to="/products">Products</Link>
            <Link to="/profile">Profile</Link>
            <button className="signout" onClick={logout}>
              Signout
            </button>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
