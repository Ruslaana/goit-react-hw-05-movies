import axios from 'axios';

const API_KEY = 'a1f5b9e9409662faaf8dea1424605128';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWY1YjllOTQwOTY2MmZhYWY4ZGVhMTQyNDYwNTEyOCIsInN1YiI6IjY0YWU2YjUwNjZhMGQzMDEzYTc0ZDQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0sogxs4DauKrsrU3S5qyHUHTsR5OwOW6huAEekTRIc'

export async function searchMovies(searchTerm) {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/search/movie`,
    params: { query: searchTerm },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    }
  };

  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, options );
    return response.data.results;
  } catch (error) {
    console.error('Error getting trending movies:', error);
    return [];
  }
  
}

export async function getTrendingMovies() {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/trending/all/day`,
    params: { api_key: API_KEY },
  };

  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error getting trending movies:', error);
    return [];
  }
}

export async function getMovieDetails(movieId) {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}`,
    params: { api_key: API_KEY },
  };

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
    return response.data;
  } catch (error) {
    console.error('Error getting movie details:', error);
    return null;
  }
}

export async function getMovieCredits(movieId) {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/credits`,
    params: { api_key: API_KEY },
  };

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
    return response.data.cast;
  } catch (error) {
    console.error('Error getting movie credits:', error);
    return [];
  }
}

export async function getMovieReviews(movieId) {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/reviews`,
    params: { api_key: API_KEY },
  };

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
    return response.data.results;
  } catch (error) {
    console.error('Error getting movie reviews:', error);
    return [];
  }
}
