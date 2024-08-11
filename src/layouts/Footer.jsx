import { Link } from "react-router-dom"
import Phone from "../icons/Phone"
import TicketChoice from "../icons/TicketChoice"
import { useState } from "react"

const Footer = () => {
  const [socialMediaLinks] = useState([
    {
      title: "Youtube",
      to: "https://www.youtube.com/channel/UCa0l9znRJ9opfl09iYBJVug",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/youtube.svg"
    },
    {
      title: "X",
      to: "https://x.com/biletinial",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/twitter.svg?vs=1"
    },
    {
      title: "Facebook",
      to: "https://www.facebook.com/biletinial/",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/facebook.svg"
    },
    {
      title: "Instagram",
      to: "https://www.instagram.com/biletinial/",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/instagram.svg"
    },
    {
      title: "Linkedin",
      to: "https://www.linkedin.com/company/biletinial/?originalSubdomain=tr",
      src: "https://b6s54eznn8xq.merlincdn.net/dist/assets/img/linkedin.svg"
    }
  ]);
  return (
    <div className='bg-gray-200  w-full flex flex-col justify-center md:px-64 md:py-10 '>
      <div className="flex my-14 gap-14 relative ">
        <div className="flex flex-col gap-5  ">
          <span className="font-bold  ">Kurumsal</span>
          <div className="flex flex-col gap-2"> <span>Kişisel Verilerin Korunması</span>
            <span>Sözleşme ve Politikalar</span>
            <span>Entegre Yönetim Sistemi Politikası</span>
            <span>Hakkımızda</span>
            <span>Müşteri Hizmetleri</span>
            <span>Çerez Aydınlatma Metni</span>
            <span>Online Ödeme Koşulları</span>
            <span>İletişim</span></div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold  ">Yardım</span>
          <div className="flex flex-col gap-2"> <span>SSS</span>
            <span>İptal,İade ve Değişim</span>
            <span>Nasıl Bilet Alınır</span>
            <span>Biletinizi Mi Kaybettiniz?</span>

          </div>
        </div>
        <div>
          <img src={"/etbis.png"} alt="" className="w-[100px]  " />
        </div>

        <div className="flex flex-col absolute right-0 gap-14">
          <div className="flex gap-10"><Phone />
            <div className="flex flex-col text-black/70 ">
              <span className="text-lg"> 0855 655 11 33 </span>
              <span className="text-sm">Müşteri Hizmetleri</span>
            </div></div>
          <div className="flex justify-between ">
            <img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/visa.png" className="w-[75px]" />
            <img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/master.png" className="w-[40px]" />
          </div>
          <div className="flex justify-between">
            <img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/google_play_badge_tr.svg" className="w-[101px]" />
            <img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/appstore_badge_tr.svg" className="w-[113px]" />

          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <TicketChoice width={200} />
          <p className="text-xs text-black/75">Copyright © 2024 www.biletinial.com</p>
        </div>
        <div className="flex items-center gap-3">
          {socialMediaLinks.map((item, index) => (<Link key={index} target="_blank" to={item.to}>
            <img src={item.src} />
          </Link>)
          )}
        </div>
      </div>

    </div>
  )
}

export default Footer