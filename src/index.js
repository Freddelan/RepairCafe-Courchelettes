import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
reportWebVitals();
