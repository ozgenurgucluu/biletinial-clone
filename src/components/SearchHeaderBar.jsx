import React, { useState } from "react";
import TR from "../icons/TR";
import Login from "../icons/Login";
import Search from "../icons/Search";
import Close from "../icons/Close";
import { Link } from "react-router-dom";
const SearchHeaderBar = () => {
  const [openSearch, setOpenSearch] = useState(true);
  const populer = ["Serdar Ortaç Konseri", "Hande Yener", "Buika", "ARTBAT", "DJ Andre Souied"];
  const handleClick = () => {
    setOpenSearch(!openSearch);
    console.log("hey çalıştım");
    console.log(openSearch);
  };

  return (
    <div className="flex items-center justify-center sm:gap-5 ">
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
          onClick={() => handleClick()
          }

        />
        <span className="absolute left-2 items-center ">
          <Search />
        </span>
        <span className="border border-black/15 rounded-md p-2 py-4 items-center">
          <TR />
        </span>
      </div>
      <div className="border border-black/15 rounded-full p-3 relative z-10">
        <Login />
      </div>
      <>
        {openSearch && <div className="fixed top-0  w-screen h-screen  left-0 bg-black/80 z-10 "></div>}
        <div
          className={`fixed flex  right-0 w-full ${openSearch ? "top-0" : "top-[-100px]"}   z-30 bg-white   transition-all duration-500 ease-in-out`}
        >
          <div className="border-b w-full">
            <div className=" container mx-auto w-full z-30   flex  items-center ">
              <input
                className=" w-full flex  py-9   outline-none px-4 text-lg  "
                placeholder="Sinema, tiyatro ve konser ara"
              />

              <div className="min-h-full h-[100px] w-16 justify-center flex items-center  hover:bg-yellow-400"> <Search width={28} height={28} /></div>
              <div className="min-h-full h-[100px] border-l  w-16 justify-center flex items-center hover:bg-gray-200" onClick={handleClick}> <Close width={28} height={28} /></div>

            </div>
          </div>

        </div>

        <div className={`w-full fixed ${openSearch ? " top-[100px]" : "top-[-1000px]"}  left-0 z-30    transition-all duration-500 ease-in-out`}>

          <div className="container mx-auto flex flex-col gap-3 bg-white  border   ">
            <div className="flex flex-col gap-3  p-4 ">
              <h1 className="text-lg font-bold">Popüler Aramalar</h1>
              <div className="flex">{populer.map((item, index) => (<div className="flex rounded-full mx-1 p-2 px-3 border-black/25 border hover:bg-yellow-400" key={index}>
                {item}
              </div>))}</div>

            </div>
            <div className=" border-t p-4 flex flex-col gap-4"><h1 className="text-lg font-bold">Biletinial Öneriyor</h1>
              <div className="flex gap-40"><Link className="flex gap-5 "><img className="w-20 h-24" src="https://b6s54eznn8xq.merlincdn.net/Uploads/Films/9a1f44e4140943a69876550fa02a5c39.png" /><div className="flex flex-col gap-1 justify-center"><h1 className="font-semibold hover:underline text-lg">Saatleri Ayarlama Enstitüsü</h1><h1 className="text-black/65 ">Hemen Biletini Al </h1></div></Link>


                <Link className="flex gap-5 "><img className="w-20 h-24" src="https://b6s54eznn8xq.merlincdn.net/Uploads/Films/a9a437cfbee8445aa25ff200e8445876.png" /><div className="flex flex-col gap-1 justify-center"><h1 className="font-semibold  hover:underline text-lg">Serdar Ortaç Konseri</h1><h1 className="text-black/65 ">Hemen Biletini Al </h1></div></Link>
              </div>
            </div>
          </div>

        </div>

      </>
    </div>
  );
};

export default SearchHeaderBar;
