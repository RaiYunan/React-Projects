import React from 'react'

const Input = ({name,value,checked,onChange}) => {
  return (
    <label htmlFor="" className='flex gap-2'>
        <input type="radio" value={value} checked={checked} onChange={(e)=>onChange(e.target.value)} className='w-4 cursor-pointer' />
        <span>{name}</span>
    </label>
  )
}

export default Input
