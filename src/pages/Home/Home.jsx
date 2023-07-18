import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/movieApi';
import MovieItem from '../../components/MovieItem/MovieItem';
import { Link, useLocation } from 'react-router-dom';

import styles from './Home.module.css'

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
      <h1 className={styles.header}>Popular Movies</h1>
      <ul className={styles.container}>
        {movie.map((movie) => (
          <Link className={styles.item} state={{ from: location }} to={`/movies/${movie.id}`} key={movie.id}>
          <img className={styles.image} alt={movie.title} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </ul>
    </div>
  );
};


export default Home;
