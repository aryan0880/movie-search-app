import { useState, useMemo } from 'react'
import MovieCard from '../components/MovieCard'
import SkeletonCard from '../components/SkeletonCard'
import useFetch from '../hooks/useFetch'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

function Home({ searchQuery }) {
  const url = searchQuery
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

  const { data, loading, error } = useFetch(url)
  const movies = data?.results || []

  return (
    <main className="pt-24 px-6 pb-8 max-w-[1400px] mx-auto">

      {/* Hero text */}
      {!searchQuery && (
        <div className="mb-6">
          <h1 className="text-white text-xl md:text-3xl font-bold font-sans tracking-tight">
            Discover your next favourite film.
          </h1>
          <p className="text-[#666] text-[0.8rem] font-mono mt-1">
            Trending today
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-[#666] font-mono text-sm mt-16">
          API is having a bad day. Try again.
        </p>
      )}

      {/* Empty */}
      {!loading && !error && movies.length === 0 && searchQuery && (
        <p className="text-center text-[#666] font-mono text-sm mt-16">
          No results for "{searchQuery}"
        </p>
      )}

      {/* Grid */}
      <div className="grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}
      >
        {loading
          ? Array(12).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>

    </main>
  )
}

export default Home
