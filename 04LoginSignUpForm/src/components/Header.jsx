import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full bg-black text-white flex min-h-20 items-center px-7 gap-4'>
        <h1 className='text-xl'>StartWorking!</h1>
        <Link to="/"><button className='hover:bg-white hover:text-black rounded-full py-2 px-4 duration-500 text-lg'>Home</button></Link>
        <button className='hover:bg-white hover:text-black rounded-full py-2 px-4 duration-500 text-lg'>Product</button>
      
    </div>
  )
}

export default Header
