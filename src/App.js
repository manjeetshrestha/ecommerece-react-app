import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginError from "./components/LoginError";
import ProductsPage from "./components/ProductsPage.js";
import { Navigate } from "react-router-dom";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   // console.log("Inside gettoken function");
//   // console.log(userToken);
//   return userToken?.token;
// }

function App() {
  // const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const token = getToken();
  // const { token, setToken } = useToken();
  const [error, setError] = useState(false);

  if (!token) {
    return (
      <>
        <LoginForm setToken={setToken} setError={setError} error={error} />
        <LoginError error={error} />
      </>
    );
  } else {
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<ProductsPage />}></Route>
      </Routes>
      {/* {token && <Navigate to="/products" />} */}
      {/* <Carts /> */}
    </div>
  );
}

export default App;
