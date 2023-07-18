import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieApi';
import Loader from '../../components/Loader/Loader';

import styles from './MovieDetails.module.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");


  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link className={styles.button} to={backLinkHref.current}>Go back</Link>
      {movie && (
        <div>
          <h1 className={styles.title} >{movie.title}</h1>
          <div className={styles.cont_text}>
          <img alt={movie.title} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>
          <div className={styles.p_cont}>
          <p className={styles.paragraph} >Release date: {movie.release_date}</p>
          <p className={styles.text} >{movie.overview}</p>
          </div>
          </div>
        </div>
      )}

      <Link className={styles.button} state={{ from: location.state?.from ?? '/' }} to={"cast"}>Cast</Link>
      <Link className={styles.button} state={{ from: location.state?.from ?? '/' }} to={"reviews"}>Reviews</Link>

      <Suspense fallback={ <Loader /> }>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;