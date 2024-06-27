import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
