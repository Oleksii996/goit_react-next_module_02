// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App_1 from "./components/App_1";
import App_2 from "./components/App_2";

// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App_1 />
    <App_2 />
  </React.StrictMode>,
);
