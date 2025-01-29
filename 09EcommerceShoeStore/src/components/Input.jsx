import React from 'react'

const Input = ({name,value,checked,onChange}) => {
  const handleChange=(e)=>{
    onChange(e.target.value)

  }
  return (
    <label htmlFor="" className='flex gap-2'>
        <input type="radio" value={value} checked={checked} onChange={handleChange} className='w-4 cursor-pointer' />
        <span>{name}</span>
    </label>
  )
}

export default Input
