import { useFavourites } from '../context/FavouritesContext'

function MovieCard({ movie }) {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites()
  const isFav = isFavourite(movie.id)

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  const year = movie.release_date?.slice(0, 4)
  const rating = movie.vote_average?.toFixed(1)

  return (
    <div className="group relative rounded-[10px] overflow-hidden cursor-pointer">

      {/* Poster */}
      {poster
        ? <img
            src={poster}
            alt={movie.title}
            className="w-full block rounded-[10px] group-hover:scale-[1.03] transition-transform duration-300"
          />
        : <div className="w-full aspect-[2/3] bg-[#111] rounded-[10px] flex items-center justify-center text-[#444] text-sm font-mono">
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
      <button
        onClick={(e) => {
          e.stopPropagation()
          isFav ? removeFavourite(movie.id) : addFavourite(movie)
        }}
        className={`absolute top-2 right-2 w-[32px] h-[32px] rounded-full flex items-center justify-center text-[1rem] transition-all duration-200 hover:scale-125 z-10 border
          ${isFav
            ? 'bg-gold text-black border-gold'
            : 'bg-black/70 text-white border-[#333] hover:border-gold hover:text-gold'
          }`}
      >
        ♥
      </button>

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pt-8 pb-3 bg-gradient-to-t from-black/97 to-transparent rounded-b-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-[0.88rem] font-semibold font-sans leading-tight line-clamp-2 mb-1">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[#888] text-[0.72rem] font-mono">{year}</span>
          <span className="text-gold text-[0.72rem] font-mono">★ {rating}</span>
        </div>
      </div>

    </div>
  )
}

export default MovieCard
