import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginError from "./components/LoginError";
import Carts from "./components/Carts.js";

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
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carts />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Carts /> */}
    </div>
  );
}

export default App;
