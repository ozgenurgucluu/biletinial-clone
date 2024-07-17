import { useContext } from "react"
import CategoryFilter from "./CategoryFilter"
import { CityContext } from "../context/CityContextProvider"

const Cinema = () => {
  const context = useContext(CityContext)
  return (
    <div className='container mx-auto px-28 my-14 flex flex-col gap-14'><h1 className="text-3xl font-semibold"><span className="mx-3">{context.city.title}</span>Vizyondaki Filmler</h1>
      <CategoryFilter />
    </div >
  )
}

export default Cinema