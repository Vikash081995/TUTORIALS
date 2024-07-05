import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Storage from "./pages/Storage/Storage";
import Database from "./pages/Database/Database";
import Hoisting from "./pages/Hoisting/Hoisting";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Functions from "./pages/Functions/Functions";
import { ThemeProvider } from "@mui/material/styles";

import { dashboardTheme } from "./dashboardTheme";


const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
    children: [
      {
        path: "/authentication",
        element: <Authentication />
      },
      {
        path: "/storage",
        element: <Storage />
      },
      {
        path: "/database",
        element: <Database />
      },
      {
        path: "/functions",
        element: <Functions />
      },
      {
        path: "/machine-learning",
        element: <MachineLearning />
      },
      {
        path: "/hoisting",
        element: <Hoisting />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
