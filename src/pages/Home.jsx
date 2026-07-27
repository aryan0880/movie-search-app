import MovieCard from '../components/MovieCard'
import SkeletonCard from '../components/SkeletonCard'
import useFetch from '../hooks/useFetch'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

function Home({ searchQuery }) {
  const url = searchQuery
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

  const { data, loading, error } = useFetch(url)
  const movies = data?.results || []

  return (
    <main className="min-h-screen" style={{ paddingTop: '80px' }}>

      {/* ── Hero Section (shown when NOT searching) ── */}
      {!searchQuery && (
        <section
          className="relative overflow-hidden px-6 md:px-8 py-14 md:py-20"
          style={{
            background: 'linear-gradient(180deg, rgba(245,197,24,0.06) 0%, transparent 100%)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Background decorative circles */}
          <div
            className="absolute top-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.09) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-[-40px] left-[10%] w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)' }}
          />

          <div className="max-w-[1400px] mx-auto relative">
            <p className="text-[#F5C518] text-[0.72rem] font-mono uppercase tracking-[0.18em] mb-3 fade-up">
              🎬 Now Trending
            </p>
            <h1
              className="font-bold tracking-tight leading-tight fade-up gradient-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                animationDelay: '0.05s',
              }}
            >
              Discover Your<br />Next Favourite Film.
            </h1>
            <p
              className="mt-4 text-[var(--muted)] max-w-md text-[0.9rem] leading-relaxed fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Explore thousands of movies, save your favourites, and never miss a great film.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex items-center gap-6 fade-up" style={{ animationDelay: '0.15s' }}>
              {[
                { label: 'Movies', value: '500K+' },
                { label: 'Updated', value: 'Daily' },
                { label: 'Free', value: 'Always' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-[var(--text)] font-bold text-lg">{value}</p>
                  <p className="text-[var(--muted)] text-[0.68rem] font-mono uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Content Section ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">

        {/* Section label */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[var(--text)] font-semibold text-base">
              {searchQuery ? `Results for "${searchQuery}"` : 'Popular Right Now'}
            </h2>
            {!loading && movies.length > 0 && (
              <p className="text-[var(--muted)] text-[0.72rem] font-mono mt-0.5">
                {movies.length} titles
              </p>
            )}
          </div>
          {!searchQuery && (
            <span
              className="text-[#F5C518] text-[0.72rem] font-mono uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ border: '1px solid rgba(245,197,24,0.3)', background: 'rgba(245,197,24,0.06)' }}
            >
              Trending
            </span>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <span className="text-4xl">⚠️</span>
            <p className="text-[var(--text)] font-semibold">API is having a bad day.</p>
            <p className="text-[var(--muted)] text-sm font-mono">Please try again later.</p>
          </div>
        )}

        {/* Empty search */}
        {!loading && !error && movies.length === 0 && searchQuery && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <span className="text-5xl">🔍</span>
            <p className="text-[var(--text)] font-semibold text-lg mt-2">No results found.</p>
            <p className="text-[var(--muted)] text-sm font-mono">Try a different title or keyword.</p>
          </div>
        )}

        {/* Grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))' }}
        >
          {loading
            ? Array(16).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : movies.map((movie, i) => (
                <div key={movie.id} style={{ animationDelay: `${i * 0.03}s` }}>
                  <MovieCard movie={movie} />
                </div>
              ))
          }
        </div>
      </section>

    </main>
  )
}

export default Home
