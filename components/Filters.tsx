'use client'

import { formUrlQuery } from "@/sanity/utils"
import { useRouter, useSearchParams } from "next/navigation"
// import { useRouter } from "next/router"
import { useState } from "react"

const links = ['All','Art', 'Music', 'Magical', 'Technology', 'Religion']

const Filters = () => {
  const searchParams = useSearchParams()
  const [active, setActive] = useState('')
  const router =  useRouter()

  const handleFilter = (link: string) => {
    let newUrl = ''
    if(active === link) {
      setActive('')
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link)
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })

    }
    router.push(newUrl, {scroll: false})
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link)=>(
        <button 
          key={link}
          onClick={()=> handleFilter(link)}
          className={`${active === link && 'gradient_blue-purple'} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize `}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters