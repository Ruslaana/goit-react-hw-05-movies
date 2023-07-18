import React, { lazy, useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import {
  getMovieDetails,
  // getMovieCredits,
  // getMovieReviews,
} from '../services/movieApi';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date:{movie.release_date}</p>
          <img alt={movie.title} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>

        </>
      )}

      <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>

      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieDetails;
