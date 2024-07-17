
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import "./index.css";
import MusicLayout from "./layouts/MusicLayout.jsx";
import CinemaLayout from "./layouts/CinemaLayout.jsx";
import TheatreLayout from "./layouts/TheatreLayout.jsx";
import SporLayout from "./layouts/SporLayout.jsx";
import CityContextProvider from "./context/CityContextProvider.jsx";
import StandupLayout from "./layouts/StandupLayout.jsx";
import OperaBaleLayout from "./layouts/OperaBaleLayout.jsx";
import GosteriLayout from "./layouts/GosteriLayout.jsx";
import EgitimLayout from "./layouts/EgitimLayout.jsx";
import SeminerLayout from "./layouts/SeminerLayout.jsx";
import EtkinliklerLayout from "./layouts/EtkinliklerLayout.jsx";
import EglenceLayout from "./layouts/EglenceLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{
      path: "/muzik/:city",
      element: <MusicLayout />
    },
    {
      path: "/sinema/:city",
      element: <CinemaLayout />
    },
    {
      path: "/tiyatro/:city",
      element: <TheatreLayout />
    },
    {
      path: "/spor/:city",
      element: <SporLayout />
    },
    {
      path: "/stand-up/:city",
      element: <StandupLayout />
    },
    {
      path: "/opera-bale/:city",
      element: <OperaBaleLayout />
    },
    {
      path: "/gosteri/:city",
      element: <GosteriLayout />
    },
    {
      path: "/egitim/:city",
      element: <EgitimLayout />
    },
    {
      path: "/seminer/:city",
      element: <SeminerLayout />
    },
    {
      path: "/etkinlikler/:city",
      element: <EtkinliklerLayout />
    },
    {
      path: "/eglence/:city",
      element: <EglenceLayout />
    },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CityContextProvider>
    <RouterProvider router={router} />
  </CityContextProvider>
);
