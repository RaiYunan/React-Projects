import React,{ createContext,useEffect,useState,useContext } from "react";

const MovieContext=createContext();

export const MovieProvider=({children})=>{
    const [query,setQuery]=useState("");
    const [movies,setMovies]=useState([]);
    const [movieDetails,setMovieDetails]=useState([])

    return(
        <MovieContext.Provider value={{query,setQuery,movies,setMovies,movieDetails,setMovieDetails}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovies=()=>useContext(MovieContext);