import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/_index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
reportWebVitals();
