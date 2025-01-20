import React, { useEffect, useState } from 'react'
import Recipecard from '../components/Recipecard'
import { Search } from 'lucide-react'

function HomePage() {

  const [input,setInput]=useState("")
  const [recipe,setRecipe]=useState("");
  const [searchQuery,setSearchQuery]=useState("chicken");
  

  async function fetchRecipe() {
    try {
     
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
      const response= await fetch(url);
      
      if(response.ok){
        const data=await response.json();
        console.log(searchQuery,data.meals);
        setRecipe(data.meals || []);

      
      }
      
  
      
    } catch (error) {
      console.log("Error: ",error)
      
    }
   
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(input.trim()){
      setSearchQuery(input)
      setInput("")
    }
   
    
    
  }
  const handleSearch=()=>{
    if (input.trim()){
      setSearchQuery(input)
      setInput("")
    }

  }
  useEffect(() => {
    if(searchQuery){
      fetchRecipe()
    }
    
}, [searchQuery]);
  
  return (
       <div className='w-[65%] mx-auto '>
            <form onSubmit={handleSubmit}>
              <label className='flex items-center py-2 px-4 rounded-lg shadow-xl my-4'>
              <Search onClick={handleSearch} />
              <input type="text" className='w-full p-2 outline-0 md:text-xl text-sm'
              placeholder='What do you want to cook today?' value={input} onChange={(e)=>setInput(e.target.value)} />
              </label>
            </form>
            <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>Recommended Recipes</h1>
            <p className='text-lg'>Popular choices</p>
            {(!recipe || recipe.length === 0)? <div className='font-semibold text-2xl text-center mt-6'>No recipes found...</div>:null}
            {recipe && <Recipecard recipes={recipe}/>}


    </div>
      
 
  )
}

export default HomePage
