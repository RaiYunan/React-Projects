import React,{useEffect} from 'react'

import Recipecard from '../components/Recipecard';

const Favourites = () => {
 

  const FavList=JSON.parse(localStorage.getItem("FavouritesList")) || [];


  useEffect(() => {
    console.log('Favourite List:', FavList); // Debugging line to see what is being passed
  }, [FavList]);

  
  return (
    <div className='w-[65%] mx-auto my-10 '>
      <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>My Favourites</h1>
      {FavList.length===0 && <p className='text-2xl font-medium mt-6 text-center'>No Favourites yet...</p>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {FavList.map((meal) => (
          <Recipecard key={meal.idMeal} recipes={[meal]} />
        ))}
      </div>

      
    </div>
  )
}

export default Favourites
