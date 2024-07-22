import Filter from "./Filter"


const CategoryFilter = () => {

  return (
    <div className="flex boder bg-gray-200 rounded-lg p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-lg bg-white w-full">

        <Filter />
        <Filter />
        <Filter />
        <Filter />

      </div></div >
  )
}

export default CategoryFilter