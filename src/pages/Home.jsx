import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
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
    <PageWrapper>
      <Helmet>
        <title>FlixMovies — Discover Popular Films</title>
        <meta name="description" content="Search and discover popular movies powered by TMDB. Find your next favourite film." />
        <meta property="og:title" content="FlixMovies — Discover Popular Films" />
        <meta property="og:description" content="Search movies, save favourites, discover what to watch next." />
      </Helmet>

      <main className="pt-24 px-6 pb-10 max-w-[1400px] mx-auto">

        {/* Hero text */}
        {!searchQuery && (
          <motion.div
            className="mb-6 pb-6 border-b border-[#1f1f1f]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h1 className="text-white text-3xl font-bold font-sans tracking-tight">
              Discover your next favourite film.
            </h1>
            <p className="text-[#555] text-[0.78rem] font-mono mt-1 tracking-wide uppercase">
              Trending today
            </p>
          </motion.div>
        )}

        {/* Search heading */}
        {searchQuery && (
          <motion.div
            className="mb-6 pb-4 border-b border-[#1f1f1f]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#666] text-[0.78rem] font-mono uppercase tracking-wide">
              Results for
            </p>
            <h2 className="text-white text-xl font-bold font-sans mt-1">
              "{searchQuery}"
            </h2>
          </motion.div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center mt-20">
            <p className="text-4xl mb-4">⚠️</p>
            <p className="text-white font-sans font-semibold text-lg">
              Something went wrong.
            </p>
            <p className="text-[#444] font-mono text-xs mt-1">
              API is having a bad day. Try again later.
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && movies.length === 0 && searchQuery && (
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-4xl mb-4">🎬</p>
            <p className="text-white font-sans font-semibold text-lg">
              No results found.
            </p>
            <p className="text-[#444] font-mono text-xs mt-2">
              Try searching a different movie name.
            </p>
          </motion.div>
        )}

        {/* Movie Grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))' }}
        >
          {loading
            ? Array(12).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : movies.map((movie, i) => (
                <MovieCard key={movie.id} movie={movie} index={i} />
              ))
          }
        </div>

      </main>
    </PageWrapper>
  )
}

export default Home
