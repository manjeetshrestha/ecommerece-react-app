import React, { useState } from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import LoginError from "./components/LoginError.jsx";
import ProductPageDemo from "./components/ProductPageDemo.jsx";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function logout(){
    

    localStorage.clear();
    console.log()
    navigate("/");
  }

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
      {/* <BrowserRouter> */}
      <nav className="navbar">
        <div className="brand">
            <h1>MeroStore</h1>
        </div>
        <div className = "links">
        <Link to = "/products">Products</Link>
        <Link to = "/products">About</Link>
        <button onClick={logout}>Sign Out</button>
        </div>
      
      </nav>
      <Routes>
        <Route exact path="/products" element={<ProductPageDemo />}></Route>
      </Routes>
      {/* {token && <Navigate to="/products" />} */}
      {/* <Carts /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
