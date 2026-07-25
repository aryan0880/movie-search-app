import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import SearchBar from './SearchBar'

function Navbar({ onSearch }) {
  const { favourites } = useFavourites()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d] border-t-2 border-gold border-b border-[#1f1f1f]">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl font-sans no-underline">
          Flix<span className="text-gold">Movies</span>
        </Link>

        {/* Search */}
        <SearchBar onSearch={onSearch} />

        {/* Favourites */}
        <Link
          to="/favourites"
          className="text-[#666] text-sm font-sans no-underline hover:text-gold transition-colors duration-200 flex items-center gap-2"
        >
          Favourites
          <span className="bg-gold text-black font-mono text-[0.65rem] rounded-full px-2 py-[2px]">
            {favourites.length}
          </span>
        </Link>

      </nav>
    </header>
  )
}

export default Navbar
