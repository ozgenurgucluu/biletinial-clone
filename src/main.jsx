
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import "./index.css";
import Music from "./components/Music.jsx";
import Cinema from "./components/Cinema.jsx";
import Theatre from "./components/Theatre.jsx";
import Spor from "./components/Spor.jsx";
import CityContextProvider from "./context/CityContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{
      path: "/music",
      element: <Music />
    },
    {
      path: "/cinema",
      element: <Cinema />
    },
    {
      path: "/theatre",
      element: <Theatre />
    },
    {
      path: "/spor",
      element: <Spor />
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CityContextProvider>
    <RouterProvider router={router} />
  </CityContextProvider>
);
