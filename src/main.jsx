
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import "./index.css";
import Music from "./components/Music.jsx";
import Cinema from "./components/Cinema.jsx";
import Theatre from "./components/Theatre.jsx";
import Spor from "./components/Spor.jsx";
import CityContextProvider from "./context/CityContextProvider.jsx";
import Standup from "./components/Standup.jsx";
import OperaBale from "./components/OperaBale.jsx";
import Gosteri from "./components/Gosteri.jsx";
import Egitim from "./components/Egitim.jsx";
import Seminer from "./components/Seminer.jsx";
import Etkinlikler from "./components/Etkinlikler.jsx";
import Eglence from "./components/Eglence.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{
      path: "/muzik/:city",
      element: <Music />
    },
    {
      path: "/sinema/:city",
      element: <Cinema />
    },
    {
      path: "/tiyatro/:city",
      element: <Theatre />
    },
    {
      path: "/spor/:city",
      element: <Spor />
    },
    {
      path: "/stand-up/:city",
      element: <Standup />
    },
    {
      path: "/opera-bale/:city",
      element: <OperaBale />
    },
    {
      path: "/gosteri/:city",
      element: <Gosteri />
    },
    {
      path: "/egitim/:city",
      element: <Egitim />
    },
    {
      path: "/seminer/:city",
      element: <Seminer />
    },
    {
      path: "/etkinlikler/:city",
      element: <Etkinlikler />
    },
    {
      path: "/eglence/:city",
      element: <Eglence />
    },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CityContextProvider>
    <RouterProvider router={router} />
  </CityContextProvider>
);
