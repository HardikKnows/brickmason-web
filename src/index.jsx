import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Only here
import App from "./App";
import "./index.css"

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter> {/* Single BrowserRouter wrapping the entire app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
