import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import MovieCard from '../components/MovieCard'
import SkeletonCard from '../components/SkeletonCard'
import useFetch from '../hooks/useFetch'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

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

      <main className="pt-24 px-6 pb-10 max-w-[1400px] mx-auto relative z-[1]">

        {/* Hero Section */}
        {!searchQuery && (
          <motion.div
            className="mb-8 pb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1
              className="gradient-text text-4xl md:text-5xl font-extrabold font-sans tracking-tight leading-tight"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Discover your next
              <br />
              favourite film.
            </motion.h1>
            <motion.p
              className="text-[var(--muted)] text-[0.78rem] font-mono mt-3 tracking-[0.2em] uppercase flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-block w-8 h-[1px] bg-[var(--gold)]" />
              Trending today
            </motion.p>
            <div className="divider-glow mt-6" />
          </motion.div>
        )}

        {/* Search heading */}
        {searchQuery && (
          <motion.div
            className="mb-8 pb-4 relative"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <p className="text-[var(--muted)] text-[0.75rem] font-mono uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="inline-block w-6 h-[1px] bg-[var(--gold)]" />
              Results for
            </p>
            <h2 className="text-[var(--text)] text-2xl font-bold font-sans mt-2 tracking-tight">
              "{searchQuery}"
            </h2>
            <div className="divider-glow mt-4" />
          </motion.div>
        )}

        {/* Error state */}
        {error && (
          <motion.div
            className="text-center mt-24 glass-card p-10 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-5xl mb-5"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ⚠️
            </motion.p>
            <p className="text-[var(--text)] font-sans font-bold text-xl">
              Something went wrong
            </p>
            <p className="text-[var(--muted2)] font-mono text-xs mt-2 leading-relaxed">
              The API is having a bad day. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-gold mt-6"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && !error && movies.length === 0 && searchQuery && (
          <motion.div
            className="text-center mt-24 glass-card p-10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-5xl mb-5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              🎬
            </motion.p>
            <p className="text-[var(--text)] font-sans font-bold text-xl">
              No results found
            </p>
            <p className="text-[var(--muted2)] font-mono text-xs mt-2 leading-relaxed">
              Try searching with a different movie name.
            </p>
          </motion.div>
        )}

        {/* Movie Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {loading
            ? Array(12).fill(0).map((_, i) => <SkeletonCard key={i} index={i} />)
            : movies.map((movie, i) => (
                <MovieCard key={movie.id} movie={movie} index={i} />
              ))
          }
        </motion.div>

      </main>
    </PageWrapper>
  )
}

export default Home
