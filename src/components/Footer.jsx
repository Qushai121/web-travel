import React from 'react'
import github from '../assets/images/github.svg'
import facebook from '../assets/images/facebook.svg'
import youtube from '../assets/images/youtube.svg'
import instagram from '../assets/images/instagram.svg'
import email from '../assets/images/envelope-solid.svg'
import phone from '../assets/images/phone-solid.svg'
import address from '../assets/images/location-dot-solid.svg'

const Footer = () => {
  return (
    <div className='bg-slate-700'>
        <div className='flex flex-col lg:flex-row lg:justify-evenly lg:text-start gap-5 px-9 py-20 text-center'>
            <div >
                <ul className='flex flex-col gap-2' >
                    <li className='font-courgette text-4xl'>Traveler</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aut!</li>
                    
                </ul>
                <ul className='flex gap-2 lg:gap-10  justify-center mt-2' >
                    <li className='group relative duration-300' ><a href="">
                        <img className='h-6 lg:h-8 mx-auto ' src={youtube} alt=""  />
                        <span className='bg-white opacity-0 lg:group-hover:opacity-100 duration-200 h-3 absolute top-7 left-1 rounded-full text-transparent' >a</span>
                        <p className='opacity-0 absolute lg:group-hover:opacity-100 duration-300 bg-white rounded-xl px-2 ' >Youtube</p>
                    </a></li>
                    <li className='group relative duration-300' ><a href="">
                        <img className='h-6 lg:h-8 mx-auto ' src={facebook} alt=""  />
                        <span className='bg-white opacity-0 lg:group-hover:opacity-100 duration-200 h-3 absolute top-7 left-1 rounded-full text-transparent' >a</span>
                        <p className='opacity-0 absolute lg:group-hover:opacity-100 duration-300 bg-white rounded-xl px-2 ' >Facebook</p>
                    </a></li>
                    <li className='group relative duration-300' ><a href="">
                        <img className='h-6 lg:h-8 mx-auto ' src={instagram} alt=""  />
                        <span className='bg-white opacity-0 lg:group-hover:opacity-100 duration-200 h-3 absolute top-7 left-1 rounded-full text-transparent' >a</span>
                        <p className='opacity-0 absolute lg:group-hover:opacity-100 duration-300 bg-white rounded-xl px-2 ' >Instagram</p>
                    </a></li>
                    <li className='group relative duration-300' ><a href="">
                        <img className='h-6 lg:h-8 mx-auto ' src={github} alt=""  />
                        <span className='bg-white opacity-0 lg:group-hover:opacity-100 duration-200 h-3 absolute top-7 left-1 rounded-full text-transparent' >a</span>
                        <p className='opacity-0 absolute lg:group-hover:opacity-100 duration-300 bg-white rounded-xl px-2 ' >Github</p>
                    </a></li>
                  
                    
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-2' >
                    <li className='font-courgette text-2xl'>Quick Links</li>
                    <li>Home</li>
                    <li>Destination</li>
                    <li>About</li>
                </ul>
            </div>
           <div>
           <div className='text-2xl font-courgette' >Contact</div>
            <ul className='flex flex-col '  >
            <li className='flex justify-center' >
                    <img
                    className='h-5 my-auto mx-1'
                     src={address} alt="" />
                    <span className='text-lg font-bold my-auto' >Address: 
                    <span className='font-normal'> jakarta, indonesia</span>
                    </span>
                     </li>
                    <li className='flex justify-center' >
                    <img
                    className='h-5 my-auto mx-1'
                     src={email} alt="" />
                    <span className='text-lg font-bold my-auto' >Email: 
                    <span className='font-normal'> traveler@gmail.com</span>
                    </span>
                     </li>
                    <li className='flex justify-center' >
                    <img 
                    className='h-5 my-auto mx-1 '
                     src={phone} alt="" />
                    <span className='text-lg font-bold my-auto' >Phone: 
                    <span className='font-normal'> 3332222111</span>
                    </span>
                     </li>
            </ul>
           </div>
           
            
            
        </div>
    </div>
  )
}

export default Footer