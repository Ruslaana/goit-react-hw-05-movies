import React, { useEffect, useState } from 'react';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../services/movieApi';
import CastItem from './CastItem';

const MovieDetails = ({ match }) => {
  const { movieId } = match.params;
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    const fetchMovieCast = async () => {
      const movieCast = await getMovieCredits(movieId);
      setCast(movieCast);
    };

    const fetchMovieReviews = async () => {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews);
    };

    fetchMovieDetails();
    fetchMovieCast();
    fetchMovieReviews();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <CastItem actor={actor} />
          </li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>Author: {review.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
