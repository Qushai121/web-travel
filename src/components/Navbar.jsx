import React from 'react'
import bars from "../assets/images/bars.svg";
import guestacc from "../assets/images/guestacc.png";


const Navbar = () => {
  return (
    <>
        <div className=" bg-white rounded-xl mx-3 lg:mx-9 z-50 ">
          <div className="flex py-5 mx-10 lg:mx-20 justify-between">
            <div className="font-courgette text-3xl">Traveler</div>
            <div className="flex gap-8">
              <div className="flex gap-5">
                <div className="hidden lg:flex lg:gap-4" >
                <button>Home</button>
                <button>Destination</button>
                <button>Login</button>
                <button className="bg-green-400 px-4 rounded-2xl">
                  <a href="">Register</a>
                </button>
                </div>
              </div>
              <span className="my-auto" >
                <img className="w-8 rounded-full" src={guestacc} alt="" />
              </span>
              <span className="lg:hidden" >
                <img
              
                 className="w-8" src={bars} alt="" />
              </span>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar