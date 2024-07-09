import { useState } from "react";
import { Link } from "react-router-dom";
import Cinema from "../icons/Cinema";
import Theatre from "../icons/Theatre";
import Music from "../icons/Music";
import Spor from "../icons/Spor";



const Nav = () => {
  const [openOther, setOpenOther] = useState()
  const categories = [
    {
      title: "Cinema",
      element: <Cinema />,
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/sinema.svg",
    },
    {
      title: "Tiyatro",
      element: <Theatre />,
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tiyatro.svg",
    },
    {
      title: "Müzik",
      element: <Music />,
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/muzik.svg",
    },
    {
      title: "Spor",
      element: <Spor />,
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/spor.svg",
    },

  ];
  const others = [
    {
      title: "Stand Up",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/standup.svg"
    },
    {
      title: "Opera-Bale",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/bale.svg"
    },
    {
      title: "Gösteri",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/gosteri.svg"
    },
    {
      title: "Eğitim",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/egitim.svg"
    },
    {
      title: "Seminer",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/seminer.svg"
    },
    {
      title: "Etkinlikler",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/festival.svg"
    },
    {
      title: "Eğlence",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/opera.svg"
    },
  ]
  const handleClick = () => {
    setOpenOther(!openOther);
    console.log("other")
  }
  return (
    <div className="flex gap-10">
      {categories.map((item, index) => (
        <Link
          key={index}
          className="flex flex-col justify-center items-center text-sm gap-1.5"
        >
          <img className="h-[30px] w-[30px] " src={item.src} />
          <span className="flex">{item.title}</span>

        </Link>
      ))}
      <Link className="flex flex-col justify-center items-center text-sm gap-1.5" onMouseEnter={handleClick}><img className="h-[30px] w-[30px] " src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tumu.svg" /><span className="flex">Diğer</span></Link>

      <div onMouseLeave={handleClick} className={` fixed w-60 top-[95px] ${openOther ? "left-[830px]" : "-left-[500px]"}`}>
        {others.map((item, index) => (
          <Link className="hover:bg-slate-200 flex border items-center px-4 py-3 gap-3 " key={index}><img className="w-8 h-8" src={item.src} /><span >{item.title}</span></Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
