import { Link } from "react-router-dom"

const Breadcrumbs = ({ steps }) => {
  return (

    <div className="flex gap-5 items-center text-sm ">  <Link className=" text-black/75 " to={"/"}>
      Ana Sayfa

    </Link>
      <li className="list-disc text-black/85 font-bold">
        {steps.title}
      </li></div>

  )
}

export default Breadcrumbs