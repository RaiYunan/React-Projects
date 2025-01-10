import React from 'react'
import {Link} from "react-router-dom";
import Welcome_1 from "../assets/welcome1.jpg"
import Welcome_2 from "../assets/welcome2.avif"

function Home() {
  return (
    <div>
      <div className='flex justify-around my-4'>
        <h1 className='font-semibold text-2xl'>Welcome Home Page</h1>
        <Link to="/"><button className='bg-blue-700 px-4 py-2 rounded-sm text-white' >Logout</button></Link>
        
      </div>
      <div className='flex'>
      <div className='w-[500px] mx-auto'>
            <img src={Welcome_1} alt="" />
        </div>
      <div className='w-[500px] mx-auto'>
            <img src={Welcome_2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
