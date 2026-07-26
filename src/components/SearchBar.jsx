import { useState, useEffect, useRef } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onSearch(query)
    }, 500)
    return () => clearTimeout(timerRef.current)
  }, [query])

  return (
    <div className="w-full md:w-auto md:flex-1 md:max-w-[400px]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full bg-[#111] text-white text-sm font-sans placeholder-[#444] px-3 py-2 border-b border-[#2a2a2a] focus:border-gold focus:outline-none transition-colors duration-200"
      />
    </div>
  )
}

export default SearchBar
