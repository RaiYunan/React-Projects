import React, { useState } from 'react'
import Input from './Input'

const SideBar = () => {
  const [selectedCategory,setSelectedCategory]=useState("All")
  return (
    <div className='w-56 min-h-screen flex items-center flex-col border-r px-8 py-4 gap-5 fixed'>
        <h1 className='text-center text-xl'>🛒</h1>

        <div className='flex flex-col gap-1 justify-center text-[12px] mt-6'>
            <h2 className='text-[16px] font-semibold mb-2'>Category</h2>
            <Input name="All" value="All1" checked={selectedCategory==="All1"} onChange={setSelectedCategory}/>
            <Input name="Sneakers" value="Sneakers" checked={selectedCategory==="Sneakers"} onChange={setSelectedCategory}/>
            <Input name="Flats" value="Flats" checked={selectedCategory==="Flats"} onChange={setSelectedCategory}/>
            <Input name="Sandals" value="Sandals" checked={selectedCategory==="Sandals"} onChange={setSelectedCategory}/>
            <Input name="Heels" value="Heels" checked={selectedCategory==="Heels"} onChange={setSelectedCategory}/>
        </div>

        <div className='flex flex-col gap-1 justify-center  text-[12px]'>
            <h2 className='text-[16px] font-semibold mb-2'>Price</h2>
            <Input name="All" value="All2" checked={selectedCategory==="All2"} onChange={setSelectedCategory}/>
            <Input name="$0-$50"/>
            <Input name="$50-$100"/>
            <Input name="$100-$150"/>
            <Input name="Over $150"/>
           
        </div>

        <div className='flex flex-col gap-1 justify-center  text-[12px]'>
            <h2 className='text-[16px] font-semibold mb-2'>Colors</h2>
            <Input name="All"/>
            <Input name="Black"/>
            <Input name="Blue"/>
            <Input name="Red"/>
            <Input name="Green"/>
            <Input name="White"/>
        </div>
    </div>
  )
}

export default SideBar
