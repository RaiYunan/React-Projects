import React, { useState } from 'react'
import Input from './Input'

// Separate configuration object for filter options
const filterOptions = {
  categories: [
    { name: "All", value: "All1" },
    { name: "Sneakers", value: "Sneakers" },
    { name: "Flats", value: "Flats" },
    { name: "Sandals", value: "Sandals" },
    { name: "Heels", value: "Heels" }
  ],
  prices: [
    { name: "All", value: "All2" },
    { name: "$0-$50", value: "$0-$50" },
    { name: "$50-$100", value: "$50-$100" },
    { name: "$100-$150", value: "$100-$150" },
    { name: "Over $150", value: "Over-$150" }
  ],
  colors: [
    { name: "All", value: "All3" },
    { name: "Black", value: "Black" },
    { name: "Blue", value: "Blue" },
    { name: "Red", value: "Red" },
    { name: "Green", value: "Green" },
    { name: "White", value: "White" }
  ]
}

// Create a reusable FilterSection component
const FilterSection = ({ title, options, selected, onChange }) => {
  return (
    <div className='flex flex-col gap-1 justify-center text-[12px]'>
      <h2 className='text-[16px] font-semibold mb-2'>{title}</h2>
      {options.map(option => (
        <Input
          key={option.value}
          name={option.name}
          value={option.value}
          checked={selected === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All1")
  const [selectedPrice, setSelectedPrice] = useState("All2")
  const [selectedColor, setSelectedColor] = useState("All3")

  return (
    <aside className='w-56 min-h-screen flex items-center flex-col border-r px-8 py-4 gap-5 fixed'>
      <h1 className='text-center text-xl' role="banner">🛒</h1>
      
      <div className="mt-4 space-y-5 w-full flex flex-col gap-2 items-center ">
        <FilterSection
          title="Category"
          options={filterOptions.categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
        
        <FilterSection
          title="Price"
          options={filterOptions.prices}
          selected={selectedPrice}
          onChange={setSelectedPrice}
        />
        
        <FilterSection
          title="Colors"
          options={filterOptions.colors}
          selected={selectedColor}
          onChange={setSelectedColor}
        />
      </div>
    </aside>
  )
}

export default SideBar