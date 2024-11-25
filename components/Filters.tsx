'use client'
import { useState } from "react"

const filters= ['impliment', 'faith', 'music', 'art', 'discover']

const Filters = () => {
  const [active, setActive] = useState('')

  const handleClick = (filter: string) =>{
    setActive(filter)
  }

  return (
    <ul className="flex gap-4 p-4 text-center justify-center text-white">
      {filters.map((filter)=>(
        <li
        key={filter}
        className={`${active === filter ? 'blue-yellow-grad-card':''} px-10 cursor-pointer py-2 rounded-lg capitalize`}
        onClick={()=>handleClick(filter)}
        >
          {filter}
        </li>
      ))}
    </ul>
  )
}

export default Filters