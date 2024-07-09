import Theatre from "../icons/Theatre";
import Cultere from "../icons/Cultere";
import Nav from "./Nav";
import ChooseCity from "./ChooseCity";
import SearchHeaderBar from "./SearchHeaderBar";

const Header = () => {
  return (
    <div className="flex md:gap-12 md:py-3.5  items-center justify-center h-auto border-b ">
      <ChooseCity />

      <Nav />

      <div className="flex sm:gap-14">
        <div className="flex flex-col items-center justify-center text-sm gap-1.5">
          <Theatre />
          <div className="leading-4 flex flex-col">
            {" "}
            <span className="flex justify-center ">İBB Şehir</span>
            <span className="flex justify-center ">Tiyatroları</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-sm gap-1.5">
          <Cultere />
          <div className="leading-4 flex flex-col">
            <span className="flex justify-center">TC Kültür ve</span>
            <span className="flex justify-center ">Turizm Bakanlığı</span>
          </div>
        </div>
      </div>
      <SearchHeaderBar />
    </div>
  );
};

export default Header;
