import React from 'react'
import sun from '../assets/images/sun.svg'

const CardProduct = () => {
  return (
    <div className='' >
        <div className='border-solid border-2 border-green-600 rounded-lg w-36 overflow-y-scroll scrollbar-hide lg:overflow-hidden lg:w-80 mb-4 h-32 lg:mt-4 lg:rounded-lg' >
            <div className='text-center' >
                <img className='w-10 mx-auto' src={sun} alt=""  />
                <h1>Calculate Weather</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, sint.</p>
            </div>
        </div>
    </div>
  )
}

export default CardProduct