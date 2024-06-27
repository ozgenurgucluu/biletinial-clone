import React from "react";
import { Link } from "react-router-dom";
import Cinema from "../icons/Cinema";
import Theatre from "../icons/Theatre";
import Music from "../icons/Music";
import Spor from "../icons/Spor";

import Other from "../icons/Other";

const Nav = () => {
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
    {
      title: "Diğer",
      element: <Other />,
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tumu.svg",
    },
  ];
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
    </div>
  );
};

export default Nav;
