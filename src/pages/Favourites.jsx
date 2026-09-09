import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import MovieCard from '../components/MovieCard'
import PageWrapper from '../components/PageWrapper'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

function Favourites() {
  const { favourites } = useFavourites()

  return (
    <PageWrapper>
      <Helmet>
        <title>FlixMovies — Your Favourites</title>
        <meta name="description" content="Your saved favourite movies on FlixMovies." />
      </Helmet>

      <main className="pt-24 px-6 pb-10 max-w-[1400px] mx-auto min-h-screen relative z-[1]">

        {/* Header */}
        <motion.div
          className="mb-8 pb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            className="text-[var(--muted)] text-[0.72rem] font-mono uppercase tracking-[0.25em] mb-2 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <span className="inline-block w-6 h-[1px] bg-[var(--gold)]" />
            Your Collection
          </motion.p>
          <div className="flex items-baseline justify-between">
            <motion.h1
              className="gradient-text text-4xl font-extrabold font-sans tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Favourites
            </motion.h1>
            <motion.span
              className="text-[var(--muted)] text-[0.75rem] font-mono flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--gold)] text-black text-[0.65rem] font-bold badge-glow">
                {favourites.length}
              </span>
              {favourites.length === 1 ? 'movie' : 'movies'}
            </motion.span>
          </div>
          <div className="divider-glow mt-5" />
        </motion.div>

        {/* Empty State */}
        {favourites.length === 0 && (
          <motion.div
            className="flex flex-col items-center justify-center mt-24 gap-4 glass-card p-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="text-6xl"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              🎬
            </motion.span>
            <p className="text-[var(--text)] font-sans font-bold text-xl mt-1">
              Nothing saved yet
            </p>
            <p className="text-[var(--muted2)] font-mono text-[0.78rem] text-center leading-relaxed">
              Click ♥ on any movie to add it to your collection.
            </p>
            <Link to="/" className="btn-gold mt-3">
              Browse Movies <span className="text-base">→</span>
            </Link>
          </motion.div>
        )}

        {/* Movies Grid */}
        {favourites.length > 0 && (
          <motion.div
            className="grid gap-5"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {favourites.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} index={i} />
            ))}
          </motion.div>
        )}

      </main>
    </PageWrapper>
  )
}

export default Favourites
