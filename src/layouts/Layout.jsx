import React, { useEffect, useState } from 'react'
import Routers from '../router/Routers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Register from '../components/Register'


const Layout = () => {

  const [openRegister,setOpenRegister] = useState (true)

  const openRegisters = () => {
      setOpenRegister(!openRegister)
    }
    
    const handleClose = () => {
      setOpenRegister(!openRegister)
    }
  
  return (
    <>
    <div className='fixed w-full navbar mt-5' >
      <Navbar openRegisters={openRegisters}  />
      <Register openRegisters={openRegister} handleClose={handleClose} />
      {/* <NavMobile openNavMobile={openNavMobile} /> */}
    </div>
       <Routers/>
       <Footer/>
    </>
  )
}

export default Layout