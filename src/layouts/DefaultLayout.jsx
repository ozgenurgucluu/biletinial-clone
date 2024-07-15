import Header from "../components/Header";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
