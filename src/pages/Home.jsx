import React, { useState, useCallback } from 'react';
import MovieCard from '../components/MovieCard';
import SkeletonCard from '../components/SkeletonCard';
import useFetch from '../hooks/useFetch';
import './Home.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const Home = ({ searchQuery, onSearch }) => {
  const url = searchQuery
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

  const { data, loading, error } = useFetch(url);
  const movies = data?.results ?? [];

  return (
    <div className="home">
      {error && (
        <p className="error-text">Something went wrong. Try again.</p>
      )}

      {!error && !loading && movies.length === 0 && searchQuery && (
        <p className="empty-text">No movies found for &ldquo;{searchQuery}&rdquo;</p>
      )}

      {!error && (
        <div className="movies-grid">
          {loading
            ? Array(12).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
          }
        </div>
      )}
    </div>
  );
};

export default Home;
