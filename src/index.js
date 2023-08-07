import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
