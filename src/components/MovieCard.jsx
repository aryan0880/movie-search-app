import { useState } from 'react'
import { useFavourites } from '../context/FavouritesContext'

function MovieCard({ movie }) {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites()
  const isFav = isFavourite(movie.id)
  const [pulse, setPulse] = useState(false)

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  const year = movie.release_date?.slice(0, 4)
  const rating = movie.vote_average?.toFixed(1)

  const handleFav = (e) => {
    e.stopPropagation()
    setPulse(true)
    setTimeout(() => setPulse(false), 400)
    isFav ? removeFavourite(movie.id) : addFavourite(movie)
  }

  return (
    <div
      className="group relative rounded-xl overflow-hidden cursor-pointer fade-up"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'
        e.currentTarget.style.boxShadow = '0 12px 40px -8px rgba(245,197,24,0.18)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Poster */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
        {poster
          ? <img
              src={poster}
              alt={movie.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            />
          : <div className="w-full h-full flex items-center justify-center text-[var(--muted2)] text-sm font-mono"
              style={{ background: 'var(--surface2)' }}>
              No Poster
            </div>
        }

        {/* Dark gradient overlay — always present, darkens more on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Rating Badge */}
        {rating && (
          <div
            className="absolute top-2.5 left-2.5 flex items-center gap-1 text-black font-bold font-mono text-[0.65rem] px-2 py-[3px] rounded-md z-10"
            style={{ background: '#F5C518', lineHeight: 1 }}
          >
            ★ {rating}
          </div>
        )}

        {/* Fav Button */}
        <button
          id={`fav-btn-${movie.id}`}
          onClick={handleFav}
          className={`absolute top-2.5 right-2.5 w-[34px] h-[34px] rounded-full flex items-center justify-center text-[1rem] z-10 border transition-all duration-200 ${pulse ? 'fav-pulse' : ''} ${
            isFav
              ? 'bg-[#F5C518] text-black border-[#F5C518]'
              : 'bg-black/60 text-white border-white/20 hover:border-[#F5C518] hover:text-[#F5C518] hover:scale-110'
          }`}
        >
          ♥
        </button>

        {/* Info overlay — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pt-6 pb-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <h3 className="text-white text-[0.85rem] font-semibold leading-tight line-clamp-2 mb-1">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[#aaa] text-[0.72rem] font-mono">{year}</span>
            <span className="text-[#F5C518] text-[0.72rem] font-mono">★ {rating}</span>
          </div>
        </div>
      </div>

      {/* Card footer — visible always */}
      <div className="px-3 py-2.5">
        <p className="text-[var(--text)] text-[0.82rem] font-medium leading-tight line-clamp-1">
          {movie.title}
        </p>
        <p className="text-[var(--muted)] text-[0.7rem] font-mono mt-0.5">{year}</p>
      </div>
    </div>
  )
}

export default MovieCard
