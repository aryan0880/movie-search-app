import React from 'react';
import './MovieCard.css';
import { useFavourites } from '../context/FavouritesContext';

const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const year = movie.release_date?.slice(0, 4);
  const rating = movie.vote_average?.toFixed(1);
  const hasPoster = !!movie.poster_path;

return (
      <div className="movie-card">
      <div className="card-poster">
        {hasPoster ? (
          <img
            src={`${POSTER_BASE}${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
        ) : (
          <div className="no-poster">No Poster</div>
        )}
        <button
          className={`fav-btn ${isFavourite(movie.id) ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            isFavourite(movie.id)
              ? removeFavourite(movie.id)
              : addFavourite(movie);
          }}
        >
          🤍
        </button>
        <div className="card-overlay">
          <h3 className="card-title">{movie.title}</h3>
          <div className="card-meta">
            <span className="card-year">{year}</span>
            <span className="card-rating">★ {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
