import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../context/CityContextProvider';

const PlaceFilter = () => {

  const [cities, setCities] = useState(false);
  const [city, setCity] = useState([]);
  const context = useContext(CityContext);

  const openMenu = () => {
    setCities(!cities);
  }
  const timeOut = () => setTimeout(toggleDown, 500)

  const toggleDown = () => {
    setCities(!cities);
  }

  const getCity = () => {
    axios.get("http://localhost:3000/locations").then((response) => {
      setCity(response.data)
    })
  }

  useEffect(() => {
    getCity()
  }, [])


  return (

    <div onMouseEnter={openMenu} className="flex flex-col border-r-2 p-4 relative  w-full">
      <span className="text-black/65">Mekan</span>
      <span className="flex gap-2 items-center font-bold">Mekan Seçiniz <img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>

      {cities && <div onMouseLeave={openMenu} className={`bg-white z-20  border max-h-[480px] shadow-md bg-scroll overflow-hidden items-center rounded-b-lg rounded-l-lg absolute p-5 top-0 left-0 w-[420px] `}>

        <div className='flex flex-col gap-8   '>
          <div className='flex justify-between  '>
            <div className='flex flex-col' >
              <span className="text-black/65">Mekan</span>
              <span className="font-bold gaap-2 items-center gap-2 flex">Mekan Seçiniz <img className="  w-6 h-6" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/sehirasagiicon.svg" /></span>
            </div>

            <div className='flex items-center'><button className='flex text-sm border hover:bg-slate-200 p-1 rounded-md'>Filtreyi Temizle</button></div>
          </div>

          <div className='flex flex-col gap-4'> <input className='flex border w-full rounded-md p-4 text-xs outline-none' placeholder='Arama yap...'></input>

            <div className='overflow-y-scroll scroll-smooth h-64'>
              {city.map((item, index) => (
                <div key={index} className='flex gap-1 text-lg items-center py-1.5 '>
                  <input className='pr-3  mr-1 w-4 h-4 ' type='checkbox'
                    onClick={() => { context.setCity(item); timeOut() }} /><label>{item.title}</label>

                </div>
              ))}
            </div>
          </div>
        </div>


      </div>}
    </div>

  )
}

export default PlaceFilter