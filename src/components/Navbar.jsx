import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const { favourites } = useFavourites();

  const handleSearch = useCallback((query) => {
    onSearch(query);
  }, [onSearch]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Flix<span>Movies</span>
      </div>

      <div className="navbar-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="navbar-right">
        <Link to="/favourites" className="nav-favourites">
          Favourites
          <span className="fav-badge">{favourites.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
