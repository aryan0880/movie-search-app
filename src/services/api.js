const API_KEY = 'demo-key';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovies(query) {
  if (!query) return [];

  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error('Unable to fetch movies right now.');
  }

  const data = await response.json();
  return data.results || [];
}
