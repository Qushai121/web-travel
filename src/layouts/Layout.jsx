import React from 'react'
import Routers from '../router/Routers'
import Navbar from '../components/Navbar'


const Layout = () => {
  return (
    <>
    <div className='fixed w-full navbar mt-5' >
      <Navbar/>
    </div>
       <Routers/>
    </>
  )
}

export default Layout