import { useFavourites } from '../context/FavouritesContext'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'

function Favourites() {
  const { favourites, clearFavourites } = useFavourites()

  return (
    <main className="min-h-screen" style={{ paddingTop: '80px' }}>

      {/* Header band */}
      <section
        className="px-6 md:px-8 py-10"
        style={{
          background: 'linear-gradient(180deg, rgba(245,197,24,0.05) 0%, transparent 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#F5C518] text-[0.72rem] font-mono uppercase tracking-[0.18em] mb-2 fade-up">
            ♥ Your Collection
          </p>
          <div className="flex items-end justify-between gap-4 fade-up" style={{ animationDelay: '0.05s' }}>
            <h1 className="text-[var(--text)] font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Favourites
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-[var(--muted)] text-[0.75rem] font-mono">
                {favourites.length} {favourites.length === 1 ? 'movie' : 'movies'}
              </span>
              {favourites.length > 0 && (
                <button
                  id="clear-favourites"
                  onClick={() => {
                    if (window.confirm('Remove all favourites?')) clearFavourites?.()
                  }}
                  className="text-[0.72rem] font-mono text-[var(--muted2)] hover:text-red-400 transition-colors duration-200 border border-[var(--border)] px-3 py-1 rounded-full hover:border-red-400"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">

        {/* Empty State */}
        {favourites.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 gap-4 text-center fade-up">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
              style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
            >
              🎬
            </div>
            <div>
              <p className="text-[var(--text)] font-semibold text-xl mt-2">Nothing saved yet.</p>
              <p className="text-[var(--muted)] text-sm font-mono mt-1">
                Click ♥ on any movie to add it here.
              </p>
            </div>
            <Link
              to="/"
              id="browse-movies-link"
              className="mt-2 no-underline text-[0.82rem] font-mono text-[#F5C518] px-5 py-2.5 rounded-full transition-all duration-200 font-medium"
              style={{
                border: '1.5px solid #F5C518',
                background: 'rgba(245,197,24,0.06)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#F5C518'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,197,24,0.06)'}
              onMouseOver={e => { e.currentTarget.style.color = '#000'; e.currentTarget.style.background = '#F5C518' }}
              onMouseOut={e => { e.currentTarget.style.color = '#F5C518'; e.currentTarget.style.background = 'rgba(245,197,24,0.06)' }}
            >
              Browse Movies →
            </Link>
          </div>
        )}

        {/* Grid */}
        {favourites.length > 0 && (
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))' }}
          >
            {favourites.map((movie, i) => (
              <div key={movie.id} className="fade-up" style={{ animationDelay: `${i * 0.04}s` }}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}

      </section>
    </main>
  )
}

export default Favourites
