import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import MovieCard from '../components/MovieCard'
import PageWrapper from '../components/PageWrapper'

function Favourites() {
  const { favourites } = useFavourites()

  return (
    <PageWrapper>
      <Helmet>
        <title>FlixMovies — Your Favourites</title>
        <meta name="description" content="Your saved favourite movies on FlixMovies." />
      </Helmet>

      <main className="pt-24 px-6 pb-10 max-w-[1400px] mx-auto min-h-screen">

        {/* Header */}
        <motion.div
          className="mb-6 pb-4 border-b border-[#1f1f1f]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
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
        </motion.div>

        {/* Empty State */}
        {favourites.length === 0 && (
          <motion.div
            className="flex flex-col items-center justify-center mt-28 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        )}

        {/* Movies Grid */}
        {favourites.length > 0 && (
          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))' }}
          >
            {favourites.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} index={i} />
            ))}
          </div>
        )}

      </main>
    </PageWrapper>
  )
}

export default Favourites
