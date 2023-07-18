import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieApi';
import Loader from '../components/Loader/Loader';

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
      <Link to={backLinkHref.current}>Go back</Link>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img alt={movie.title} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>
          <p>Release date: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      )}

      <Link state={{ from: location.state?.from ?? '/' }} to={"cast"}>Cast</Link>
      <Link state={{ from: location.state?.from ?? '/' }} to={"reviews"}>Reviews</Link>

      <Suspense fallback={ <Loader /> }>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;