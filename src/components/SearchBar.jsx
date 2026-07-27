import { useState, useEffect, useRef } from 'react'

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
      className="relative flex items-center w-full"
      style={{
        borderRadius: '10px',
        border: `1.5px solid ${focused ? '#F5C518' : 'var(--border)'}`,
        background: 'var(--surface)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: focused ? '0 0 0 3px rgba(245,197,24,0.1)' : 'none',
      }}
    >
      {/* Search icon */}
      <span className="absolute left-3 text-[var(--muted)] text-sm pointer-events-none select-none">
        🔍
      </span>

      <input
        ref={inputRef}
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search movies, actors..."
        className="w-full bg-transparent text-[var(--text)] text-sm font-sans placeholder-[var(--muted2)] pl-9 pr-9 py-[9px] focus:outline-none"
      />

      {/* Clear button */}
      {query && (
        <button
          id="search-clear"
          onClick={handleClear}
          className="absolute right-3 text-[var(--muted)] hover:text-[#F5C518] transition-colors duration-150 text-base leading-none"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
