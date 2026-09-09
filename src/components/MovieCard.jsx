import { motion } from 'framer-motion'
import { useState } from 'react'
import { useFavourites } from '../context/FavouritesContext'

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
    filter: 'blur(6px)',
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.05,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

function MovieCard({ movie, index }) {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites()
  const isFav = isFavourite(movie.id)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [justToggled, setJustToggled] = useState(false)

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  const year = movie.release_date?.slice(0, 4)
  const rating = movie.vote_average?.toFixed(1)

  const handleFavClick = (e) => {
    e.stopPropagation()
    isFav ? removeFavourite(movie.id) : addFavourite(movie)
    setJustToggled(true)
    setTimeout(() => setJustToggled(false), 500)
  }

  return (
    <motion.div
      className="group relative rounded-[12px] overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{
        scale: 1.04,
        y: -6,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ willChange: 'transform' }}
    >
      {/* Gold glow on hover */}
      <div className="absolute -inset-[1px] rounded-[12px] bg-gradient-to-b from-[rgba(245,197,24,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Poster */}
      <div className="relative z-[1]">
        {poster ? (
          <>
            {!imgLoaded && (
              <div className="w-full aspect-[2/3] bg-[#0e0e12] rounded-[12px] animate-pulse" />
            )}
            <img
              src={poster}
              alt={movie.title}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`w-full block rounded-[12px] transition-all duration-500 group-hover:brightness-110 group-hover:saturate-[1.1] ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            />
          </>
        ) : (
          <div className="w-full aspect-[2/3] bg-[#0e0e12] rounded-[12px] flex flex-col items-center justify-center text-[#333] gap-2">
            <span className="text-2xl">🎬</span>
            <span className="text-xs font-mono tracking-wider">NO POSTER</span>
          </div>
        )}
      </div>

      {/* Rating Badge */}
      {rating && (
        <motion.div
          className="absolute top-2.5 left-2.5 bg-gradient-to-r from-[#f5c518] to-[#e8a800] text-black text-[0.62rem] font-mono font-bold px-2 py-[3px] rounded-md z-10 leading-none shadow-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: (index * 0.05) + 0.3, duration: 0.3 }}
          style={{ boxShadow: '0 2px 12px rgba(245, 197, 24, 0.3)' }}
        >
          ★ {rating}
        </motion.div>
      )}

      {/* Favourite Button */}
      <motion.button
        onClick={handleFavClick}
        whileTap={{ scale: 0.7, rotate: -15 }}
        whileHover={{ scale: 1.3 }}
        className={`absolute top-2.5 right-2.5 w-[34px] h-[34px] rounded-full flex items-center justify-center text-[1rem] z-10 border-[1.5px] backdrop-blur-sm transition-all duration-300
          ${isFav
            ? 'bg-gradient-to-br from-[#f5c518] to-[#e8a800] text-black border-transparent shadow-[0_0_16px_rgba(245,197,24,0.4)]'
            : 'bg-black/50 text-white/70 border-white/10 hover:border-[#f5c518]/50 hover:text-[#f5c518] hover:shadow-[0_0_12px_rgba(245,197,24,0.2)]'
          }
          ${justToggled ? 'fav-pulse' : ''}`}
      >
        {isFav ? '♥' : '♡'}
      </motion.button>

      {/* Bottom Gradient Overlay — always slightly visible, full on hover */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pt-12 pb-3 z-[2]
        bg-gradient-to-t from-black/95 via-black/60 to-transparent 
        rounded-b-[12px] translate-y-[60%] group-hover:translate-y-0 
        transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        
        <h3 className="text-white text-[0.88rem] font-semibold font-sans leading-tight line-clamp-2 mb-1.5 drop-shadow-lg">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-white/50 text-[0.7rem] font-mono">{year}</span>
          <span className="text-[#f5c518] text-[0.7rem] font-mono font-medium">★ {rating}</span>
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-[12px] border border-white/0 group-hover:border-[rgba(245,197,24,0.2)] transition-all duration-500 pointer-events-none z-[3]" />

    </motion.div>
  )
}

export default MovieCard
