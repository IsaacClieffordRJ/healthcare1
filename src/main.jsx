// main.jsx - point d'entrée (Vite / React 18)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";   // global
import "./app.css";     // styles de mise en page

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <div className="app-root">
      <App />
    </div>
  </React.StrictMode>
);
