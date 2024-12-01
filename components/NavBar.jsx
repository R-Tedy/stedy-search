import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex-center top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white ">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href='/'>
          <Image src='/logo.svg' alt="logo" width={100} height={50}/>
        </Link>

        <Image src='/hamburger-menu.svg' alt="hamburger menu" width={30} height={30} className="block md:hidden"/>
        <ul className="flex-center gap-3 max-md:hidden md:gap-10">
        <li className="body-text text-gradient_blue-purple font-bold">
          <Link href='/'>
            Welcome Home!
          </Link>
        </li>
        <li className="body-text font-bold">
          <Link href='/'>
            Feel Relaxed
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar