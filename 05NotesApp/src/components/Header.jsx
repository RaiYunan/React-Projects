import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/logo.png"

function Header() {
  return (
    <div className='py-3 px-6 flex border-b-gray-500 border-b-[1px] h-[65px] items-center justify-between'>
        
        <div className='flex items-center cursor-pointer gap-2 '>
        <FontAwesomeIcon icon={faBars}  size='lg' />
           <img src={Logo} alt="" className='w-10 max-h-fit' />
           <h1 className='font-medium text-2xl'>Notes</h1>
        </div>
        <div className='bg-white py-2 rounded-md w-[500px]'>
            <FontAwesomeIcon icon={faSearch} className='text-gray-600 px-4 '/>
            <input type="text" placeholder='Search' className='outline-0 text-gray-500' />
        </div>

    </div>
  )
}

export default Header
