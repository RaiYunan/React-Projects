import React, { useEffect } from 'react'
import { useMovies } from '../context/MovieContext'

const MovieDetails = () => {

    const {movies,movieDetails,query}=useMovies();

    
    useEffect(() => {
        if (movies.length > 0 && movieDetails.length > 0) {
            console.log("Movies:", movies);
            console.log("Movie Details:", movieDetails);
        }
    }, [ movies, movieDetails]);
   
  return (
    <div className='w-full px-16 bg-slate-800 min-h-screen py-4'>
        {movies.length > 0 && movieDetails.length > 0 ?<p className='text-gray-300'>Showing 10 movies for "{query}"</p>:null}
        {movies.map((movie,index)=>{
            if(!movie){
                return <div>Movie Details not available..</div>
            }
            const details=movieDetails[index];
            return <div key={movie.imdbID} className='text-white flex h-fit w-full my-6 gap-4 items-center'>
                <div className='w-[20%] h-fit'>
                    <img src={movie.Poster} alt="Movie_Poster" className='w-[200px] rounded-sm h-[300px] object-cover' />
                </div>
                <div className='w-[80%] h-fit p-6 rounded-sm bg-slate-600 my-5'>
                    <h1>{movie.Title}</h1>
                    <h3>Release Time: {details?details.Released:"N/A"}</h3>
                    <p>{details?details.Plot :"PLot unavailable."}</p>
                    <div className='text-green-500 flex gap-2 mt-6'>
                    <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" className='underline'>IMDB</a>
                    <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`} className='underline' target="_blank">Watch Trailer</a>
                        
                    </div>

                </div>
            </div>
        })}
    
      
    </div>
  )
}

export default MovieDetails
