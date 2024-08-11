import { useContext } from "react"
import { CityContext } from "../context/CityContextProvider"
import CategoryFilter from "../components/CategoryFilter"
import Breadcrumbs from "../components/Breadcrumbs"

const CinemaLayout = () => {
  const context = useContext(CityContext)
  return (
    <div className='container mx-auto px-16 my-14 flex flex-col gap-6'>
      <div className="flex flex-col gap-2 justify-center items-start">
        <h1 className="text-3xl font-semibold">
          <span className="mr-2">{context.city.title}</span>
          Vizyondaki Filmler</h1>
        <Breadcrumbs steps={[{ title: "Sinema" }]}
        /></div>

      <CategoryFilter />
      <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1  w-full  gap-4 ">
        <div className="flex flex-col gap-3">   <img src="https://b6s54eznn8xq.merlincdn.net/Uploads/Films/mavi-kaplan-ve-firtina-takim-2024729493312f7650c895247028b04dfc3c922568d.jpg"
          className="w-full h-auto border rounded-lg overflow-hidden cursor-pointer " />
          <h1 className="font-bold text-lg">Mavi Kaplan</h1></div>




      </div>
    </div >
  )
}

export default CinemaLayout