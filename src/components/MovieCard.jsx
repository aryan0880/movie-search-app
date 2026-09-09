import { motion } from 'framer-motion'
import { useFavourites } from '../context/FavouritesContext'

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
}

function MovieCard({ movie, index }) {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites()
  const isFav = isFavourite(movie.id)

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  const year = movie.release_date?.slice(0, 4)
  const rating = movie.vote_average?.toFixed(1)

  return (
    <motion.div
      className="group relative rounded-[10px] overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Poster */}
      {poster
        ? <img
            src={poster}
            alt={movie.title}
            className="w-full block rounded-[10px]"
          />
        : <div className="w-full aspect-[2/3] bg-[#111] rounded-[10px] flex items-center justify-center text-[#444] text-xs font-mono">
            No Poster
          </div>
      }

      {/* Rating Badge */}
      {rating && (
        <div className="absolute top-2 left-2 bg-gold text-black text-[0.65rem] font-mono font-bold px-[7px] py-[3px] rounded z-10 leading-none">
          ★ {rating}
        </div>
      )}

      {/* Fav Button */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation()
          isFav ? removeFavourite(movie.id) : addFavourite(movie)
        }}
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.25 }}
        className={`absolute top-2 right-2 w-[32px] h-[32px] rounded-full flex items-center justify-center text-[1rem] z-10 border transition-colors duration-200
          ${isFav
            ? 'bg-gold text-black border-gold'
            : 'bg-black/70 text-white border-[#333] hover:border-gold hover:text-gold'
          }`}
      >
        ♥
      </motion.button>

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pt-8 pb-3 bg-gradient-to-t from-black to-transparent rounded-b-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-[0.88rem] font-semibold font-sans leading-tight line-clamp-2 mb-1">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[#888] text-[0.72rem] font-mono">{year}</span>
          <span className="text-gold text-[0.72rem] font-mono">★ {rating}</span>
        </div>
      </div>

    </motion.div>
  )
}

export default MovieCard
