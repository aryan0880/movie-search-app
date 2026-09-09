import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-[36px] h-[36px] rounded-full flex items-center justify-center
        border border-[#2a2a2a] dark:border-[#2a2a2a]
        bg-[#f0f0f0] dark:bg-[#111]
        text-gold
        hover:border-gold hover:scale-110
        transition-all duration-300 cursor-pointer"
    >
      {/* Sun icon */}
      <span
        className={`absolute text-[1.1rem] transition-all duration-300
          ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
      >
        ☀️
      </span>
      {/* Moon icon */}
      <span
        className={`absolute text-[1rem] transition-all duration-300
          ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
      >
        🌙
      </span>
    </button>
  )
}

export default ThemeToggle
