import React from 'react'

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
      
    </div>
  )
}

export default Recommended
