import React from 'react'
import { data } from '../data/data'
import { FaShoppingBag } from "react-icons/fa";

const Recommended = () => {
    const buttonOptions=[
        {text:"All Products"},
        {text:"Nike"},
        {text:"Puma"},
        {text:"Adidas"},
        {text:"Vans"}
    ]
  return (
    <div  className='ml-56 px-8 my-4 '>
        <h1 className='text-2xl font-semibold mb-4'>Recommended</h1>
        <div>
            {buttonOptions.map((options)=>{
                return <button key={options.text} className='mx-1 text-sm py-1 px-2 rounded-md border-[1.4px] cursor-pointer'>{options.text}</button>
            })}
        </div>
        <div className='w-full flex flex-wrap gap-4 justify-between my-4'>
        {data.map((shoe)=>{
            return <div className='border-[1.3px] rounded-md shadow-lg p-4 w-56 flex flex-col gap-2'>
                <img src={shoe.img} alt="" className='w-fit object-cover ' />
                <h1 className='font-semibold'>{shoe.title}</h1>
                <span className='flex items-center'>
                {shoe.star }
                {shoe.star}
                {shoe.star}
                {shoe.star}
                <p className='ml-2'>{shoe.reviews}</p>
                </span>
                <span className='flex items-center justify-between'>
                    <p><strike>{shoe.prevPrice}</strike> {shoe.newPrice}</p>
                    <FaShoppingBag/>
                </span>
            </div>
        })}
      
        </div>
    </div>
  )
}

export default Recommended
