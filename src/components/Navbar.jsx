import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import SearchBar from './SearchBar'

function Navbar({ onSearch }) {
  const { favourites } = useFavourites()
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [dark])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 navbar-glass transition-all duration-300 ${
        scrolled ? 'border-b border-[var(--border)]' : ''
      }`}
      style={{ borderTop: '2px solid #F5C518' }}
    >
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 h-auto md:h-[64px] py-3 md:py-0 flex flex-wrap md:flex-nowrap items-center gap-3">

        {/* Logo */}
        <Link to="/" className="no-underline shrink-0 flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-[#F5C518] flex items-center justify-center text-black font-bold text-sm transition-transform duration-300 group-hover:rotate-6">
            F
          </div>
          <span className="text-[var(--text)] font-bold text-xl font-sans tracking-tight">
            Flix<span style={{ color: '#F5C518' }}>Movies</span>
          </span>
        </Link>

        {/* Search — grows in middle */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-[480px] order-3 md:order-2 md:mx-6">
          {location.pathname === '/' && <SearchBar onSearch={onSearch} />}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3 order-2 md:order-3 ml-auto md:ml-0 shrink-0">
          {/* Dark/Light toggle */}
          <button
            id="theme-toggle"
            onClick={() => setDark(!dark)}
            title="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] text-[var(--muted)] hover:text-[#F5C518] hover:border-[#F5C518] transition-all duration-200 text-base"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Favourites */}
          <Link
            to="/favourites"
            id="nav-favourites"
            className="no-underline flex items-center gap-2 px-4 py-[7px] rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[#F5C518] hover:text-[#F5C518] transition-all duration-200 text-sm font-medium"
          >
            <span>♥</span>
            <span>Favourites</span>
            {favourites.length > 0 && (
              <span className="bg-[#F5C518] text-black font-bold font-mono text-[0.6rem] rounded-full w-5 h-5 flex items-center justify-center leading-none">
                {favourites.length}
              </span>
            )}
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
