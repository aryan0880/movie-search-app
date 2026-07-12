import { useFavourites } from "../context/FavouritesContext";
import MovieCard from "../components/MovieCard";
import "./Favourites.css";

function Favourites() {
  const { favourites } = useFavourites();

  return (
    <div className="favourites-page">
      <div className="favourites-header">
        <h1>Your Favourites</h1>
        <span className="fav-total">
          {favourites.length} {favourites.length === 1 ? "movie" : "movies"}
        </span>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">🎬</p>
          <p className="empty-title">No movies added .</p>
          <p className="empty-sub">Add movies to your favourites.</p>
        </div>
      ) : (
        <div className="favourites-grid">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
