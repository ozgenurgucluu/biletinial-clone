import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLocation, useNavigate } from "react-router";
import { CityContext } from "../context/CityContextProvider";

const DefaultLayout = () => {

  const location = useLocation();
  const cityContext = useContext(CityContext);
  const navigate = useNavigate()

  useEffect(() => {
    let parsedPathname = location.pathname.split("/").filter((i) => i);
    if (!parsedPathname[1]) return
    parsedPathname[1] = cityContext.city.id
    parsedPathname = parsedPathname.join("/");
    navigate(parsedPathname)
  }, [cityContext.city.id]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
