import CategoryFilter from "./CategoryFilter"

const Cinema = () => {
  return (
    <div className='container mx-auto px-28 my-14 flex flex-col gap-14'><h1 className="text-3xl font-semibold">Vizyondaki Filmler</h1>
      <CategoryFilter />
    </div >
  )
}

export default Cinema