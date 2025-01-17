import React from 'react'
import { Home,Heart } from 'lucide-react'
import Logo from "/logo.svg"
import MobileLogo from"/mobile-logo.svg"
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
    <DeskTopSideBar/>
    <MobileSideBar/>
    </>
  )
}

export default SideBar

const DeskTopSideBar=()=>{
    return(
        <div className='min-h-screen md:w-60 w-36 p- md:p-10 p-3 border-r hidden sm:block'>
            <div className='flex flex-col sticky gap-20 top-10 left-0'>
                <div className='w-full'>
                    <img src={Logo} alt="" className='md:block hidden ' />
                    <img src={MobileLogo} alt="" className='block md:hidden ' />
                </div>

                <ul className='flex flex-col gap-4'>
                    <Link className='flex gap-2'>
                       <Home/>
                       <span className='font-bold'>Home</span>
                    </Link>
                    <Link className='flex gap-2'>
                       <Heart/>
                       <span className='font-bold'>Favourites</span>
                    </Link>

                </ul>
                
                
            </div>


        </div> 
    )
}
const MobileSideBar=()=>{
    return(
        <div className='flex justify-center gap-10 border-t fixed w-full
        bottom-0 left-0 bg-white z-10 p-2 sm:hidden 
    ' 
             >
            <Link to="/">
               <Home/>
            </Link>
            <Link to="/favourites">
               <Heart/>
            </Link>
        </div>
    )
}