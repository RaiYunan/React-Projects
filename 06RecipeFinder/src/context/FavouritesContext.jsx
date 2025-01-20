import React,{useContext,createContext,useState,useEffect} from "react";

const FavouritesContext=createContext();

export const FavouritesProvider=({children})=>{
    const [favourites,setFavorites]=useState(()=>{
      
      const storedFavourites=localStorage.getItem("Favourites");
      return storedFavourites?JSON.parse(storedFavourites):{};

    });
    const [favouriteList,setFavouriteList]=useState(()=>{
      const storedList=localStorage.getItem("FavouriteList");
      return storedList?JSON.parse(storedList):[];
    })

    useEffect(()=>{
      localStorage.setItem("Favourites", JSON.stringify(favourites));
      
      if(favouriteList.length>0){
        localStorage.setItem("FavouritesList",JSON.stringify(favouriteList));

      }else{
        localStorage.removeItem("FavouriteList");
      }
    
    },[favourites,favouriteList])
    
    const favouriteHandle = (id,meal) => {
      setFavorites((prev)=>({
        ...prev,
        [id]:!prev[id] 
      }))
      setFavouriteList((prev) => {
        if (prev.some((fav) => fav.idMeal === id)) {
          // Remove from the list if it exists.
          return prev.filter((fav) => fav.idMeal !== id);
        } else {
          // Add to the list if it doesn't exist.
          return [...prev, meal];
        }
      });
    
     
    }
    return(
        <FavouritesContext.Provider value={{favourites,favouriteList,favouriteHandle}}>
            {children}
        </FavouritesContext.Provider>
    )
}
export const useFavourites=()=>useContext(FavouritesContext)