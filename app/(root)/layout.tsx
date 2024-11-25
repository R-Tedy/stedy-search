import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main
      className='max-w-screen-2xl m-auto'
    >
      <>
        <NavBar/>
        {children}
        <Footer/>
      </>
    </main>
  )
}

export default layout