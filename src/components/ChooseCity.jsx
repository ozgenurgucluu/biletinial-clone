import { useContext, useEffect, useState } from "react";
import TicketChoice from "../icons/TicketChoice";
import Location from "../icons/Location";
import { Link } from "react-router-dom";
import axios from "axios";
import { CityContext } from "../context/CityContextProvider";


const ChooseCity = () => {
  const [menuOpen, setMenuOpen] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState([]);
  const context = useContext(CityContext);

  let filteredCities = cities.filter((item) => {
    let _title = item.title.toLocaleLowerCase();
    if (_title.startsWith(inputValue.toLocaleLowerCase())) {
      return item;
    }
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDown = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (e) => {
    setInputValue(e.target.value);
  };


  const getCities = () => {
    axios.get("http://localhost:3000/cities").then((response) => {
      setCities(response.data)
    })
  }

  useEffect(() => {
    getCities();
  }, [])
  return (
    <div className="flex flex-col md:gap-5 items-center relative  ">
      <div className="flex gap-3">
        {" "}
        <Link to={"/"}>
          <TicketChoice />
        </Link>
        <span className=" w-0.5 h-8 bg-black/25 "></span>
        <div
          onClick={() => {
            toggleDown();
          }}
          className="flex flex-col justify-start leading-3  items-start cursor-pointer"
        >
          <span className="hover:border-t-4 hover:border-black "></span>
          {" "}
          <span className="text-sm text-black/60">Seçili Şehir</span>
          <div className="flex items-center justify-center gap-1">
            {" "}
            <span className=" font-bold text-sm">{context.city.title}</span>
            <Location />
          </div>
        </div>
        <div
          className={`fixed top-0 flex flex-col z-30 min-h-full bg-gray-200 sm:w-[635px] w-2 transform transition-all duration-200 ease-in-out ${menuOpen ? "left-0" : "-left-[700px]"
            }  `}
        >
          <div className="flex flex-col  p-8 gap-4">
            {" "}
            <div className="flex justify-between ">
              <div className="flex flex-col ">
                {" "}
                <span className="text-2xl font-semibold text-gray-700">
                  Biletinial&apos;da etkinlikler bir tık
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
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold ">Ülke Seçiniz</span>
              <select
                className="h-12 border border-black/15 bg-white rounded-md outline-none px-4"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="option1">Türkiye</option>
                <option value="option2">Hırvatistan</option>
                <option value="option3">Arnavutluk</option>
                <option value="option4">Azerbeycan</option>
                <option value="option5">Almanya</option>
                <option value="option6">Danimarka</option>
                <option value="option7">İsviçre</option>
                <option value="option8">Arnavutluk</option>
                <option value="option9">Avusturya</option>
                <option value="option10">Cezayir</option>
              </select>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-2xl text-gray-600">
                Şehrinizi seçip eğlenceye devam edin.
              </span>
              <input
                type="text "
                className="rounded-sm h-16 outline-none p-5"
                placeholder="Şehir ara"
                onChange={handleClick}
                value={inputValue}
              />
            </div>
          </div>
          <div className="flex flex-col scroll-smooth overflow-y-scroll w-full h-[560px]">
            {filteredCities.map((item, index) => (
              <div
                className=" border border-b-black/10 p-5 flex  hover:bg-amber-300"
                key={index}
                onClick={() => { context.setCity(item); toggleDown() }}

              >
                <span className="px-4 ">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default ChooseCity;
