import React, { useState } from "react";
import TicketChoice from "../icons/TicketChoice";
import Location from "../icons/Location";
import { Link } from "react-router-dom";

const ChooseCity = () => {
  const [menuOpen, setMenuOpen] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const toggleDown = () => {
    setMenuOpen(!menuOpen);
    console.log("toogleçalıştı");
  };

  return (
    <div className="flex md:gap-5 items-center relative ">
      {" "}
      <Link to={"/"}>
        <TicketChoice />
      </Link>
      <span className=" w-0.5 h-8 bg-black/25 "></span>
      <Link
        onClick={() => {
          toggleDown();
        }}
        className="flex flex-col justify-start leading-3  items-start"
      >
        {" "}
        <span className="text-sm text-black/60">Konum</span>
        <div className="flex items-center justify-center gap-1">
          {" "}
          <span className=" font-bold text-sm">Şehir Seç</span>
          <Location />
        </div>
      </Link>
      <div
        className={`fixed top-0 flex flex-col p-8 h-full  bg-gray-200 sm:w-[635px] w-2 transform transition-all duration-500 ease-in-out ${
          menuOpen ? "left-0" : "-left-[700px]"
        }  `}
      >
        <div className="flex justify-between ">
          <div className="flex flex-col ">
            {" "}
            <span className="text-2xl font-semibold text-gray-700">
              Biletinial'da etkinlikler bir tık
            </span>
            <span className="text-2xl font-semibold text-gray-700">
              uzağında !
            </span>
          </div>
          <button
            onClick={toggleDown}
            className=" m-4 border border-black/80 text-black rounded-sm px-5 py-2.5 text-lg"
          >
            Vazgeç
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold ">Ülke Seçiniz</span>
          <select
            className="h-12 border border-black/15 bg-white rounded-md outline-none px-4"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="option1">Türkiye</option>
            <option value="option2">Hırvatistan</option>
            <option value="option1">Arnavutluk</option>
            <option value="option2">Azerbeycan</option>
            <option value="option1">Almanya</option>
            <option value="option2">Danimarka</option>
            <option value="option1">İsviçre</option>
            <option value="option2">Arnavutluk</option>
            <option value="option1">Avusturya</option>
            <option value="option2">Cezayir</option>
          </select>
        </div>
        <div>3</div>
      </div>
    </div>
  );
};

export default ChooseCity;
