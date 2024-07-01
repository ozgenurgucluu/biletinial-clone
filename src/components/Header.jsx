import React, { useState } from "react";
import Theatre from "../icons/Theatre";
import Cultere from "../icons/Cultere";
import TR from "../icons/TR";
import Login from "../icons/Login";
import Search from "../icons/Search";
import Nav from "./Nav";
import ChooseCity from "./ChooseCity";

const Header = () => {
  return (
    <div className="flex md:gap-14 md:py-3.5  items-center justify-center ">
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
      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col  items-end ">
          <span className="text-xs text-black/60">Şehrini Keşfet</span>
          <span className="  text-base text-blue-500 font-semibold">
            Şehrine Özel
          </span>
          <span className="leading-3 text-base text-blue-500 font-semibold">
            Etkinlikler{" "}
          </span>
        </div>
        <div className="flex items-center gap-4 relative flex-1  ">
          <input
            className="flex shadow-lg w-[262px] h-[48px] text-right shadow-slate-200 py-4  border border-black/15  p-3 focus:outline-blue-500 rounded-md "
            type="text"
            placeholder="Sinema, tiyatro ve konser ara.."
          />
          <span className="absolute left-2 items-center ">
            <Search />
          </span>
          <span className="border border-black/15 rounded-md p-2 py-4 items-center">
            <TR />
          </span>
        </div>
        <div className="border border-black/15 rounded-full p-3">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
