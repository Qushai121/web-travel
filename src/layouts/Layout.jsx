import React from 'react'
import Routers from '../router/Routers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
    <div className='fixed w-full navbar mt-5' >
      <Navbar/>
    </div>
       <Routers/>
       <Footer/>
    </>
  )
}

export default Layout