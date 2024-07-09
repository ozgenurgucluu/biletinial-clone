import { useState } from "react";
import TicketChoice from "../icons/TicketChoice";
import Location from "../icons/Location";
import { Link } from "react-router-dom";

const ChooseCity = () => {
  const [menuOpen, setMenuOpen] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [cities] = useState([
    { title: "Adana", number: 1 },
    { title: "Adıyaman", number: 2 },
    { title: "Afyonkarahisar", number: 3 },
    { title: "Ağrı", number: 4 },
    { title: "Aksaray", number: 5 },
    { title: "Amasya", number: 6 },
    { title: "Ankara", number: 7 },
    { title: "Antalya", number: 8 },
    { title: "Ardahan", number: 9 },
    { title: "Artvin", number: 10 },
    { title: "Aydın", number: 11 },
    { title: "Balıkesir", number: 12 },
    { title: "Bartın", number: 13 },
    { title: "Batman", number: 14 },
    { title: "Bayburt", number: 15 },
    { title: "Bilecik", number: 16 },
    { title: "Bingöl", number: 17 },
    { title: "Bitlis", number: 18 },
    { title: "Bolu", number: 19 },
    { title: "Burdur", number: 20 },
    { title: "Bursa", number: 21 },
    { title: "Çanakkale", number: 22 },
    { title: "Çankırı", number: 23 },
    { title: "Çorum", number: 24 },
    { title: "Denizli", number: 25 },
    { title: "Diyarbakır", number: 26 },
    { title: "Düzce", number: 27 },
    { title: "Edirne", number: 28 },
    { title: "Elazığ", number: 29 },
    { title: "Erzincan", number: 30 },
    { title: "Erzurum", number: 31 },
    { title: "Eskişehir", number: 32 },
    { title: "Gaziantep", number: 33 },
    { title: "Giresun", number: 34 },
    { title: "Gümüşhane", number: 35 },
    { title: "Hakkari", number: 36 },
    { title: "Hatay", number: 37 },
    { title: "Iğdır", number: 38 },
    { title: "Isparta", number: 39 },
    { title: "İstanbul", number: 40 },
    { title: "İzmir", number: 41 },
    { title: "Kahramanmaraş", number: 42 },
    { title: "Karabük", number: 43 },
    { title: "Karaman", number: 44 },
    { title: "Kars", number: 45 },
    { title: "Kastamonu", number: 46 },
    { title: "Kayseri", number: 47 },
    { title: "Kırıkkale", number: 48 },
    { title: "Kırklareli", number: 49 },
    { title: "Kırşehir", number: 50 },
    { title: "Kilis", number: 51 },
    { title: "Kocaeli", number: 52 },
    { title: "Konya", number: 53 },
    { title: "Kütahya", number: 54 },
    { title: "Malatya", number: 55 },
    { title: "Manisa", number: 56 },
    { title: "Mardin", number: 57 },
    { title: "Mersin", number: 58 },
    { title: "Muğla", number: 59 },
    { title: "Muş", number: 60 },
    { title: "Nevşehir", number: 61 },
    { title: "Niğde", number: 62 },
    { title: "Ordu", number: 63 },
    { title: "Osmaniye", number: 64 },
    { title: "Rize", number: 65 },
    { title: "Sakarya", number: 66 },
    { title: "Samsun", number: 67 },
    { title: "Şanlıurfa", number: 68 },
    { title: "Siirt", number: 69 },
    { title: "Sinop", number: 70 },
    { title: "Sivas", number: 71 },
    { title: "Şırnak", number: 72 },
    { title: "Tekirdağ", number: 73 },
    { title: "Tokat", number: 74 },
    { title: "Trabzon", number: 75 },
    { title: "Tunceli", number: 76 },
    { title: "Uşak", number: 77 },
    { title: "Van", number: 78 },
    { title: "Yalova", number: 79 },
    { title: "Yozgat", number: 80 },
    { title: "Zonguldak", number: 81 },
  ]);

  let filtrelenmisSehirler = cities.filter((item) => {
    let _title = item.title.toLocaleLowerCase();
    if (_title.startsWith(inputValue.toLocaleLowerCase())) {
      return item;
    }
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const toggleDown = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col md:gap-5 items-center relative ">
      <div className="flex gap-3">
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
          className={`fixed top-0 flex flex-col   bg-gray-200 sm:w-[635px] w-2 transform transition-all duration-500 ease-in-out ${menuOpen ? "left-0" : "-left-[700px]"
            }  `}
        >
          <div className="flex flex-col p-8 gap-4">
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
          <div className="flex flex-col overflow-y-scroll scroll-m w-full  list-none">
            {filtrelenmisSehirler.map((item, index) => (
              <div
                className=" border border-b-black/10 p-5 flex hover:bg-amber-300"
                key={index}
              >
                <span className="px-4">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCity;
