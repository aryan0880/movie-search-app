import { createContext, useContext, useState, useEffect } from "react"

const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    // initialize from localStorage
    const saved = localStorage.getItem("flix-favourites")
    return saved ? JSON.parse(saved) : []
  })

  // save to localStorage every time favourites changes
  useEffect(() => {
    localStorage.setItem("flix-favourites", JSON.stringify(favourites))
  }, [favourites])

  const addFavourite = (movie) => {
    setFavourites(prev => [...prev, movie])
  }

  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(m => m.id !== id))
  }

  const isFavourite = (id) => {
    return favourites.some(m => m.id === id)
  }

  return (
    <FavouritesContext.Provider value={{
      favourites,
      addFavourite,
      removeFavourite,
      isFavourite
    }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}
