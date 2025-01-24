import React, { useEffect, useState } from 'react'
import {Search} from "lucide-react"
import Logo from '../assets/logo.png'
import User from "../assets/user.png"
import { useMovies } from '../context/MovieContext'

const Header = () => {
  const [input,setInput]=useState("");
  const {query,setQuery,setMovies,setMovieDetails} =useMovies();
  const apiKey=import.meta.env.VITE_OMDB_API_KEY;
  const inputHandle = () => {
    setQuery(input.trim());
    setInput("");
  }

  const submitHandle = (e) => {
    e.preventDefault();
    setQuery(input.trim());
    setInput("");
   
  }

  async function fetchMovies() {
    try {
      const response=await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${query}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
        
      const data = await response.json();
      const movieList=data.Search;
      setMovies(movieList);

      const detailsPromises=movieList.map((movie)=>fetchMovieDetails(movie.imdbID));
      const allDetails=await Promise.all(detailsPromises);
      setMovieDetails(allDetails.filter((details)=>details!==null));
     
        
        
    } catch (error) {
        console.error("Error in fetching Movies: ",error)
        
    }
    
}

   async function fetchMovieDetails(id) {
    try {
      const response=await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`);
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       const data=await response.json();
       if(data.Response==="False"){
        console.log(`Movie with id ${id} not found.`);
        return null;
       }
       return data;
    

    } catch (error) {
      console.error("Error in fetching Movies details: ",error);
      return null;
      
    }
    
   }

  useEffect(()=>{
    if(query){
      console.log(query);
      setMovies([]);
      setMovieDetails([]);
      fetchMovies();

    }
    
   
  },[query])
  return (
    
      <nav className='w-full min-h-[100px] px-5 md:p-8 flex justify-between bg-slate-900 text-white'>
        <div className='flex items-center gap-6'>
            <img src={Logo} alt="logo" className='md:w-[200px] w-[100px] h-[30px] md:h-[60px]' />
            <a href="" className='hover:text-gray-300 transition-colors md:block hidden text-xl'>TV Shows</a>
            <a href="" className='hover:text-gray-300 transition-colors md:block hidden text-xl'>Movies</a>
        </div>
        <div className='flex items-center gap-2 md:gap-4'>
            <form className='flex items-center  bg-gray-800 rounded-lg' onSubmit={submitHandle}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search here...' className='bg-transparent text-white px-3 py-2 outline-none md:w-full w-[100px] text-[12px] md:text-[16px]' />
                <Search className='text-gray-400 md:w-[30px] w-[18px] mr-3 cursor-pointer' onClick={inputHandle}/>
                
            </form>
            <img src={User} alt="" className='md:w-10 md:h-10 w-8 h-8 rounded-full cursor-pointer' />
        </div>

      </nav>
    
  )
}

export default Header
