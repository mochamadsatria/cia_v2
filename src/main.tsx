import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/home";
import SBC from "./pages/sbc";
import CIC from "./pages/cic";
import FCEC from "./pages/fcec";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/sbc",
    element: <SBC />,
  },
  {
    path: "/cic",
    element: <CIC />,
  },
  {
    path: "/fcec",
    element: <FCEC />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
