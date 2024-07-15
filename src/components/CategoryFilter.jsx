import { useState } from 'react';

const CategoryFilter = () => {

  const [cities, setCities] = useState(false);
  const openMenu = () => {
    setCities(!cities);
  }

  return (
    <div className="flex boder bg-gray-200 rounded-lg p-8"><div className="flex justify-between bg-white rounded-lg  w-full">
      <div onMouseEnter={openMenu} className="flex flex-col border-r-2 p-4 w-1/4"><span className="text-black/65">Şehir</span>
        <span className="flex gap-2 items-center font-bold">Şehir Seçiniz <img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>
      </div>
      <div onMouseLeave={openMenu} className={`bg-white  border h-72 shadow-md items-center rounded-l-lg absolute p-4 ${cities ? "top-[277px] " : " -top-[1257px]"} w-96 h-auto`}>

        <div className='flex flex-col gap-8'>
          <div className='flex justify-between  '>
            <div className='flex flex-col' >
              <span className="text-black/65">Şehir</span>
              <span className="font-bold gaap-2 items-center gap-2 flex">Şehir Seçiniz<img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>
            </div>

            <div className='flex items-center'><button className='flex text-sm border hover:bg-slate-200'>Filtreyi Temizle</button></div>
          </div>

          <div className='flex flex-col gap-4'> <input className='flex border w-full rounded-md p-3 text-xs outline-none' placeholder='Arama yap...'></input>

            <div className='flex gap-2 items-center'>
              <input className='p-2 mr-2 w-4 bg-red-600 h-4 border-4' type='checkbox' /><label>seçenek-1</label>

            </div>
          </div>
        </div>


      </div>



      <div className="flex flex-col border-r-2 p-4 w-1/4"><span className="text-black/65">Şehir</span>
        <span className="flex gap-2 items-center font-bold">Şehir Seçiniz <img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>
      </div>
      <div className="flex flex-col border-r-2 p-4 w-1/4"><span className="text-black/65">Şehir</span>
        <span className="flex gap-2 items-center font-bold">Şehir Seçiniz <img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>
      </div>
      <div className="flex flex-col border-r-2 p-4 w-1/4"><span className="text-black/65">Şehir</span>
        <span className="flex gap-2 items-center font-bold">Şehir Seçiniz <img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>
      </div></div></div >
  )
}

export default CategoryFilter