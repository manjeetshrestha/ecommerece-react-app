import React, { useState, useEffect, memo } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import LoginError from "./components/LoginError.jsx";
import ProductPageDemo from "./components/ProductPageDemo.jsx";
import { useNavigate } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Navigation from "./components/Navigation.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) return navigate("/login");
  }, []);

  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginForm
                setToken={setToken}
                setError={setError}
                error={error}
              />
            }
          />

          <Route exact path="/" element={<Navigation />}>
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<ProductPageDemo />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
