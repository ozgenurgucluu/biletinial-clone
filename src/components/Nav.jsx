import { useState } from "react";
import { Link } from "react-router-dom";



const Nav = () => {
  const [openOther, setOpenOther] = useState()
  const categories = [
    {
      title: "Cinema",
      to: "/cinema",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/sinema.svg",
    },
    {
      title: "Tiyatro",
      to: "/theatre",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tiyatro.svg",
    },
    {
      title: "Müzik",
      to: "/music",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/muzik.svg",
    },
    {
      title: "Spor",
      to: "/spor",
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
  const [select, setSelect] = useState();
  const handleClick = () => {
    setOpenOther(!openOther);
    console.log("other")
  }
  const selectedCity = () => {
    setSelect(select);
    console.log(select)
  }
  return (
    <div className="flex gap-10">
      {categories.map((item, index) => (
        <Link
          key={index}
          className="flex flex-col justify-center items-center text-sm gap-1.5"
          to={item.to}
        >
          <img className="h-[30px] w-[30px] " src={item.src} />
          <span className="flex">{item.title}</span>

        </Link>
      ))}
      <Link className="flex flex-col justify-center items-center text-sm gap-1.5" onMouseEnter={handleClick} ><img className="h-[30px] w-[30px] " src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tumu.svg" /><span className="flex">Diğer</span></Link>

      <div onMouseLeave={handleClick} className={` fixed w-60 top-[95px] ${openOther ? "left-[830px]" : "-left-[500px]"}`}>
        {others.map((item, index) => (
          <Link className="hover:bg-slate-200 bg-white flex border items-center px-4 py-3 gap-3 " onClick={selectedCity} key={index}><img className="w-8 h-8" src={item.src} /><span >{item.title}</span></Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
