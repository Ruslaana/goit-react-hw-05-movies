import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTrendingMovies } from '../api/movieApi';
import MovieItem from '../components/MovieItem/MovieItem';

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchTrandingMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovie(trendingMovies);
    };
    fetchTrandingMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movie.map((movie) => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_data: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;