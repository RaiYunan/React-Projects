import { Heart,Coffee, Soup, HeartPulse } from 'lucide-react'
import React, { useEffect, useState } from 'react'


function Recipecard({recipe}) {

  const [loading,setLoading]=useState(false);
  const [favourites,setFavorites]=useState({})
  const Colors = {
    0: "bg-pink-100",      // Vibrant pink
  1: "bg-blue-100",      // Ocean blue
  2: "bg-purple-100",    // Rich purple
  3: "bg-emerald-100",   // Deep emerald
  4: "bg-orange-100",    // Warm orange
  5: "bg-cyan-100",      // Bright cyan
  6: "bg-amber-100",     // Golden amber
  7: "bg-lime-100",      // Fresh lime
  8: "bg-indigo-100",    // Deep indigo
  9: "bg-rose-100"       // Deep rose
  };

  function getRandomColor(){
    const keys = Object.keys(Colors);
    const randomNumber=Math.floor(Math.random()*keys.length);
    return Colors[randomNumber];
  }

  if(!recipe || !recipe.meals){
    return <div className='font-semibold text-2xl text-center mt-6'>No recipes found...</div>
  }
// Option 1: If you want to track a single favorite
const favouriteHandle = (id) => {
  setFavorites((prev)=>({
    ...prev,
    [id]:!prev[id] 
  }))

 
}
const navigateTodoVideo=(url)=>{
  window.open(url,"_blank");
}

   
  return (
    <div className='flex flex-wrap gap-4 justify-around rounded-xl my-6 w-full overflow-hidden relative'> {
      recipe.meals.map((meal)=>{
        return<div key={meal.idMeal} className={`${getRandomColor()} flex w-[260px]  cursor-pointer hover:scale-105 duration-200 flex-col p-2 gap-2 rounded-md `}  >
          <div className='relative'>
            <a href={meal.strYoutube}  target="_blank"
  rel="noopener noreferrer">
            <img src={meal.strMealThumb} alt="" className='w-full h-28 object-cover rounded-lg' />
            </a>
            <div className='absolute  bottom-1 left-1 px-2 py-1 bg-white rounded-full w-[127px]ursor-pointer flex items-center
							 gap-1 text-sm'>
              <Soup/>
              <span>{Math.floor(Math.random()*4)+2} servings</span>
            </div >
            <div onClick={()=>favouriteHandle(meal.idMeal)} className='absolute top-1 right-1 bg-white p-2 cursor-pointer rounded-full'>
            <Heart className={`${favourites[meal.idMeal]?"fill-red-500 text-red-500":""}`} size={18}/>
            </div>
            
          </div>
          <h1 className='font-semibold text-lg'>{meal.strMeal}</h1>
          <h2>{meal.strArea } { meal.strCategory}</h2>
          <div className='flex gap-2'>
            <span className={`flex text-xs gap-1 p-1 rounded-full items-center ${getRandomColor()}`}><HeartPulse/> Sugar-Conscious</span>
            <span className={`flex text-xs gap-1 p-1 rounded-full items-center ${getRandomColor()}`}><HeartPulse/> Keto-Friendly</span>
          </div>
          
        </div>
      })
    }
      
    </div>
  )
}

export default Recipecard
