import { useFavourites } from '../context/FavouritesContext'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'

function Favourites() {
  const { favourites } = useFavourites()

  return (
    <main className="pt-24 px-6 pb-10 max-w-[1400px] mx-auto min-h-screen">

      {/* Header */}
      <div className="mb-6 pb-4 border-b border-[#1f1f1f]">
        <p className="text-[#555] text-[0.75rem] font-mono uppercase tracking-widest mb-1">
          Your Collection
        </p>
        <div className="flex items-baseline justify-between">
          <h1 className="text-white text-3xl font-bold font-sans tracking-tight">
            Favourites
          </h1>
          <span className="text-[#555] text-[0.75rem] font-mono">
            {favourites.length} {favourites.length === 1 ? 'movie' : 'movies'}
          </span>
        </div>
      </div>

      {/* Empty State */}
      {favourites.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-28 gap-3">
          <span className="text-5xl">🎬</span>
          <p className="text-white font-sans font-semibold text-lg mt-2">
            Nothing saved yet.
          </p>
          <p className="text-[#444] font-mono text-[0.78rem]">
            Click ♥ on any movie to save it here.
          </p>
          <Link
            to="/"
            className="mt-4 text-[0.8rem] font-mono text-gold border border-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Browse Movies →
          </Link>
        </div>
      )}

      {/* Movies Grid */}
      {favourites.length > 0 && (
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))' }}
        >
          {favourites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

    </main>
  )
}

export default Favourites
