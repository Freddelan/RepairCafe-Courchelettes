// index.js
import React from "react";
import ReactDOM from "react-dom";
import LaRoute from "./Routes.js";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<LaRoute />);
reportWebVitals();
