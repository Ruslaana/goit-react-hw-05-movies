import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/movieApi';
import MovieItem from '../components/MovieItem/MovieItem';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

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
          <Link state={{ from: location }} to={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </ul>
    </div>
  );
};


export default Home;
