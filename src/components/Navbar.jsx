import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import SearchBar from './SearchBar'

function Navbar({ onSearch }) {
  const { favourites } = useFavourites()
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d] border-t-2 border-gold border-b border-[#1f1f1f]">
      <nav className="max-w-[1400px] mx-auto px-4 md:px-6 h-auto md:h-16 py-3 md:py-0 flex flex-wrap md:flex-nowrap items-center justify-between gap-3">

        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl font-sans no-underline">
          Flix<span className="text-gold">Movies</span>
        </Link>

        {/* Search */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-[400px] order-3 md:order-2">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Dark Mode + Favourites */}
        <div className="flex items-center gap-4 order-2 md:order-3 ml-auto md:ml-0">
          <button
            onClick={() => setDark(!dark)}
            className="text-[#666] hover:text-gold transition-colors duration-200 text-lg shrink-0"
            title="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <Link
            to="/favourites"
            className="text-[#666] text-sm font-sans no-underline hover:text-gold transition-colors duration-200 flex items-center gap-2"
          >
            Favourites
            <span className="bg-gold text-black font-mono text-[0.65rem] rounded-full px-2 py-[2px]">
              {favourites.length}
            </span>
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
