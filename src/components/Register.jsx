import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

const Register = ({openRegisters, handleClose}) => {

    const dropIn = {
        hidden: {
          y: "-100vh",
          opacity: "0"
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: "25",
            stiffness: "500",
    
          }
        },
        exit: {
          y: "-100vh",
          
    
        }
      }
    
  
    if(openRegisters){
        return <></>
    }else{
        return (
            <AnimatePresence>

            <motion.div
             
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit='exit'
             className='mt-5 '>
                <div className='bg-white rounded-xl relative h-96 mx-auto w-96' >
                <div className=' mx-5 pt-4' >
                    <div className='absolute right-5 top-1 text-2xl'>
                        <button onClick={()=>handleClose()} >x</button>
                    </div>
                    <form action="" method='POST' className='flex flex-col text-center rounded-lg gap-4' >
                        <label className='mt-2' htmlFor="username">Username</label>
                        <input className='h-10 bg-slate-200' type="text" name="username" placeholder='  Username' id="1" />
                        <label htmlFor="email">Masukan Email</label>
                        <input className='h-10 bg-slate-200' type="email" name="email" placeholder='  Email' id="2" />
                        <label htmlFor="password">Masukan Password</label>
                        <input className='h-10 bg-slate-200' type="password" name="password" placeholder='  Password' id="3" />
                        <button className='pb-2 bg-slate-200' type="submit"><p className='mt-2' >Create Account</p></button>
                    </form>
                </div>
                </div>
            </motion.div>
            </AnimatePresence>
            )
        }
}

export default Register