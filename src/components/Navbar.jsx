import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
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
          <span className="fav-badge">0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
