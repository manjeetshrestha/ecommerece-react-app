import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MemoizedApp = memo(App);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MemoizedApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
