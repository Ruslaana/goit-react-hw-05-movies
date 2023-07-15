import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTrendingMovies } from '../services/movieApi';
import MovieItem from '../components/MovieItem/MovieItem';

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovie(trendingMovies);
    };
    fetchTrendingMovies();
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

Home.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_data: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;
