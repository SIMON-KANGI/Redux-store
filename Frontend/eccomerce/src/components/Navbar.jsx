import React from 'react'
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-black'>
     <nav className='flex justify-between align-middle p-6'>
      <h1 className='text-6xl font-bold text-red-500'>
        <Link to="/">OnlineShop</Link>
      </h1>
      <div className='relative'>
      <Link to="/Cart"> <SlBasket className='text-6xl text-yellow-400' /></Link>
     
      <div className='text-black rounded-full bg-white absolute px-2 top-0 left-0'>
       
      </div>
      </div>
     </nav> 
    </div>
  )
}

export default Navbar
