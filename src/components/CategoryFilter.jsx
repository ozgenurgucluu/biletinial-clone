import CityFilter from "./CityFilter"
import PlaceFilter from "./PlaceFilter"


const CategoryFilter = () => {

  return (
    <div className="flex boder bg-gray-200 rounded-lg p-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-lg bg-white w-full">

        <CityFilter />
        <PlaceFilter />

      </div></div >
  )
}

export default CategoryFilter