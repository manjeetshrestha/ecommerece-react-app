import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
      {/* <h1>Heollo world</h1> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
