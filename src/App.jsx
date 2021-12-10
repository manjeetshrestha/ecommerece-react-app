import React, { useState , useEffect } from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import LoginError from "./components/LoginError.jsx";
import ProductPageDemo from "./components/ProductPageDemo.jsx";
import { useNavigate } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(false);
  // const navigate = useNavigate();

  // function logout(){
  //   localStorage.clear();
  //   console.log()
  //   navigate("/");
  // }

  // if (!token) {
  //   return (
  //     <>
  //       <LoginForm setToken={setToken} setError={setError} error={error} />
  //       <LoginError error={error} />
  //     </>
  //   );
  // } 

  useEffect(() => {
    // const controller = new AbortController();
    if (!token) return navigate('/login');

    // navigate('/login');
    // return controller.abort();
  }, []);

  return (
    <div className="App"> 
      <Routes>
        <Route path = "/login" element={<LoginForm setToken={setToken} setError={setError} error={error} />}/>

        <Route exact path="/" element={<Navigation />}>
          <Route path = "products" element = {<ProductPageDemo />} />
          <Route path = "profile" element = {<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
