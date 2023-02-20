import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

// Kalau mau edit satu page, diaktifkan importnya dan dinonaktifkan yang lain. lalu dibuild

//import Page from "./pages/home";
import Page from "./pages/sbc";
//import Page from "./pages/cic";
//import Page from "./pages/fcec";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
