import React from 'react';
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const NavBar = () => {
  return (

    <div  className='w-full flex justify-around h-10 items-center border-b py-8 '>
        <div className='ml-56 flex justify-between w-full px-24 items-center'>
      <input type="text" placeholder='Enter your Search Shoes...' className='bg-gray-200 py-2 px-4 outline-0 w-[400px] rounded-lg' />
      <div className='flex gap-6'>
        <CiHeart className='text-2xl'/>
        <AiOutlineShoppingCart className='text-2xl'/>
        <AiOutlineUserAdd className='text-2xl'/>
      </div>
    </div>
    </div>
  )
}

export default NavBar
