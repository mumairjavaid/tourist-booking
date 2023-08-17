import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const menu=()=>{
        setNav(!nav)
    }
  return (
        <div className='flex justify-between p-4 w-full absolute left-0 top-0 items-center'>
            <h1 className='text-white text-4xl font-bold z-20'>Travo</h1>
            <AiOutlineMenu onClick={menu} size={25} color='white' className='z-20 pointer'/>
            <div className={nav ? 'w-full z-10 h-screen fixed top-0 left-0 bg-black/90': 'fixed top-0 left-[-100%]' }>
             <ul className='flex flex-col items-center justify-center w-full h-full'>
                <li className='text-white py-4 text-3xl'>Home</li>
                <li className='text-white py-4 text-3xl'>Amenties</li>
                <li className='text-white py-4 text-3xl'>Reservations</li>
                <li className='text-white py-4 text-3xl'>Rooms</li>
                <li className='text-white py-4 text-3xl'>Destinations</li>
             </ul>
            </div>
        </div>
  )
}

export default Navbar