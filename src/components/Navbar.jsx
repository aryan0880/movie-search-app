import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
      className={`fixed top-0 left-0 w-full z-50 navbar-glass transition-all duration-500 ${
        scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : ''
      }`}
    >
      {/* Glowing gold top bar */}
      <div className="navbar-gold-bar" />

      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 h-auto md:h-[64px] py-3 md:py-0 flex flex-wrap md:flex-nowrap items-center gap-3">

        {/* Logo */}
        <Link to="/" className="no-underline shrink-0 flex items-center gap-2.5 group logo-glow">
          <motion.div
            className="logo-icon w-8 h-8 rounded-lg bg-gradient-to-br from-[#f5c518] to-[#e8a800] flex items-center justify-center text-black font-bold text-sm shadow-[0_2px_10px_rgba(245,197,24,0.3)] transition-all duration-300"
            whileHover={{ rotate: 12, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            F
          </motion.div>
          <span className="text-[var(--text)] font-bold text-xl font-sans tracking-tight">
            Flix<span className="text-[var(--gold)]">Movies</span>
          </span>
        </Link>

        {/* Search — grows in middle */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-[480px] order-3 md:order-2 md:mx-6">
          {location.pathname === '/' && <SearchBar onSearch={onSearch} />}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3 order-2 md:order-3 ml-auto md:ml-0 shrink-0">
          {/* Dark/Light toggle pill */}
          <motion.button
            id="theme-toggle"
            onClick={() => setDark(!dark)}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`theme-toggle${!dark ? ' is-light' : ''}`}
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9 }}
          >
            <span className="toggle-icons">
              <span>🌙</span>
              <span>☀️</span>
            </span>
            <span className="toggle-thumb" />
          </motion.button>

          {/* Favourites Link */}
          <Link
            to="/favourites"
            id="nav-favourites"
            className="relative no-underline flex items-center gap-2 px-4 py-[7px] rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 text-sm font-medium hover:shadow-[0_0_16px_rgba(245,197,24,0.12)]"
          >
            <motion.span
              animate={location.pathname === '/favourites' ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              ♥
            </motion.span>
            <span>Favourites</span>
            <AnimatePresence mode="wait">
              {favourites.length > 0 && (
                <motion.span
                  key={favourites.length}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  className="bg-gradient-to-br from-[#f5c518] to-[#e8a800] text-black font-bold font-mono text-[0.6rem] rounded-full w-5 h-5 flex items-center justify-center leading-none badge-glow"
                >
                  {favourites.length}
                </motion.span>
              )}
            </AnimatePresence>
            {/* Active dot indicator */}
            {location.pathname === '/favourites' && (
              <motion.div
                className="nav-active-dot"
                layoutId="activeNav"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
