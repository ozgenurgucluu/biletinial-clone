import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CityContext } from "../context/CityContextProvider";

const Nav = () => {
  const [openOther, setOpenOther] = useState()
  const [select, setSelect] = useState();
  const [categories, setCategories] = useState([]);
  const [others, setOthers] = useState([]);
  const context = useContext(CityContext)


  const handleClick = () => {
    setOpenOther(!openOther);
  }
  const selectedCity = () => {
    setSelect(select);
  }

  const getCategory = () => {
    axios.get("http://localhost:3000/event-types").then((response) => {
      const firstFourData = response.data.slice(0, 4);
      const other = response.data.slice(4, 11)
      setOthers(other)
      setCategories(firstFourData);
    });
  }

  useEffect(() => {
    getCategory();
  }, [])

  return (
    <div className="flex gap-10">
      {categories.map((item,) => (
        <Link
          key={item.id}
          className="flex flex-col justify-center items-center text-sm gap-1.5"
          to={`/${item.id}/${context.city.id}`}

        >
          <img className="h-[30px] w-[30px] " src={`http://localhost:3000/${item.icon}`} />
          <span className="flex">{item.title}</span>

        </Link>
      ))}
      <Link className="flex flex-col justify-center items-center text-sm gap-1.5" onMouseEnter={handleClick} ><img className="h-[30px] w-[30px] " src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tumu.svg" /><span className="flex">Diğer</span></Link>

      <div onMouseLeave={handleClick} className={` fixed w-60 z-30 top-[95px] ${openOther ? "left-[830px]" : "-left-[500px]"}`}>
        {others.map((item) => (
          <Link className="hover:bg-slate-200 bg-white flex border items-center px-4 py-3 gap-3 "
            onClick={selectedCity}
            key={item.id}
            to={`/${item.id}/${context.city.id}`}>
            <img className="w-[30px] h-[30px]" src={`http://localhost:3000/${item.icon}`} />
            <span >{item.title}</span></Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
