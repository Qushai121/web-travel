import React, { useEffect, useState } from 'react'
import bars from "../assets/images/bars.svg";
import guestacc from "../assets/images/guestacc.png";


const Navbar = ({openRegisters}) => {

  

  const [openNavMobile,setOpenNavmobile] = useState (true)
 
  function handleNavMobile () {
    setOpenNavmobile(!openNavMobile)
   
  }

  function handleRegister (){
    openRegisters()
    setOpenNavmobile(!openNavMobile)
  }

  return (
    <>
        <div className=" bg-white rounded-xl border-2 shadow-2xl lg:relative border-slate-800 mx-3 lg:mx-9 z-50 ">
          <div className="flex py-5 mx-10 lg:mx-20 justify-between">
            <div className="font-courgette text-3xl">Traveler</div>
            
            <div className="absolute lg:top-1 lg:mx-2 top-20 ">
            {/* ketika layar kecil nav ini digunakan lagi tapi layoutnya berbeda */}
            {/* belibet cssnya blm jago */}
                <div className={` lg:flex-row flex lg:gap-0 flex-col xs:translate-x-3 sm:translate-x-32 lg:w-96 lg:translate-y-1 lg:translate-x-[40vw] xl:translate-x-[50vw] 2xl:translate-x-[60vw] gap-5 py-3 duration-300 w-[70vw] sm:w-[50vw] bg-white ${openNavMobile? "-translate-y-[100vw]" : "translate-y-[0vw] "} `} >
              <div className="mx-auto lg:mx-0 lg:-right-10 lg:absolute " >
                <img className="w-8 rounded-full" src={guestacc} alt="" />
              </div>
              <div className='flex flex-col lg:flex-row lg:gap-8 gap-3 ' >

                <button>Home</button>
                <button>Destination</button>
                <button>Login</button>
              </div>
                <div className="bg-green-400 lg:mx-10 px-4 w-fit mx-auto rounded-xl">
                  <button className='py-1.5' onClick={handleRegister} >Register</button>
                  {/* ()=>openRegisters() */}
                </div>
                </div>
         
            </div>


              <div className="lg:hidden" >
                <img onClick={handleNavMobile} className="w-8" src={bars} alt="" />
              </div>
            </div>
          </div>
        
    </>
  )
}

export default Navbar