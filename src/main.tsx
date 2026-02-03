// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App_1 from "./components/App_1";
import App_2 from "./components/App_2";
import App_3 from "./components/App_3";
import App_multi from "./components/ClickCounter-multi";
import App_4 from "./components/App_4";

// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App_1 />
    <App_2 />
    <App_3 />
    <App_multi />
    <App_4 />
  </React.StrictMode>,
);
