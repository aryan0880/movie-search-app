import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const timerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onSearch(query)
    }, 450)
    return () => clearTimeout(timerRef.current)
  }, [query])

  const handleClear = () => {
    setQuery('')
    onSearch('')
    inputRef.current?.focus()
  }

  return (
    <div
      className="search-premium relative flex items-center w-full"
    >
      {/* Animated search icon */}
      <motion.span
        className="absolute left-3.5 text-sm pointer-events-none select-none"
        animate={{
          color: focused ? 'var(--gold)' : 'var(--muted2)',
          scale: focused ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{ color: 'var(--muted2)' }}
      >
        🔍
      </motion.span>

      <input
        ref={inputRef}
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search movies, actors..."
        className="w-full bg-transparent text-[var(--text)] text-sm font-sans placeholder-[var(--muted2)] pl-10 pr-10 py-[10px] focus:outline-none"
      />

      {/* Animated clear button */}
      <AnimatePresence>
        {query && (
          <motion.button
            id="search-clear"
            onClick={handleClear}
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2, color: 'var(--gold)' }}
            whileTap={{ scale: 0.8 }}
            className="absolute right-3.5 text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-150 text-base leading-none"
          >
            ✕
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar
