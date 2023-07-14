import axios from 'axios'

const API_KEY = 'a1f5b9e9409662faaf8dea1424605128';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovies(searchTerm) {
  try {
    const response = await axios.get(`${BASE_URL}/search/search-movies`, {
      params: {
        api_key: API_KEY,
        query: searchTerm,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function getTrendingMovies () {
  try {
    const response = await axios.get(`${BASE_URL}/trending/get-trending`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error getting trending movies:', error);
    return[];
  }
}

export async function getMovieDetails (movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movies/get-movie-details`, {
      params: {
        api_key: API_KEY,
        movie_id: movieId,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting movie details:', error);
    return null;
  }
}

export async function getMovieCredits (movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movies/get-movie-credits`, {
      params: {
        api_key: API_KEY,
        movie_id: movieId,
      }
    });
    return response.data.cast;
  } catch (error) {
    console.error('Error getting movie credits:', error);
    return [];
  }
}

export async function getMovieReviews (movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movies/get-movie-reviews`, {
      params: {
        api_key: API_KEY,
        movie_id: movieId,
      }
    });
    return response.results;
  } catch (error) {
    console.error('Error getting movie reviews:', error);
    return [];
  }
}



