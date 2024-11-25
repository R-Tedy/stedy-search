import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <nav className='p-3 flex justify-between'>
        <Link 
          href='/'
        >
          <Image
            src='/logo.svg'
            alt='logo'
            width={100}
            height={30}
          />
        </Link>
        <div className='md:flex gap-8 items-center hidden'>
          <Link
            href='/'
            className='blue-yellow-grad '
          >
            How to learn the faith
          </Link>
          <Button className='bg-[#FFCA1D] px-8 rounded-xl font-bold text-lg text-black'>
            Sign In
          </Button>
        </div>
    </nav>
  )
}

export default NavBar