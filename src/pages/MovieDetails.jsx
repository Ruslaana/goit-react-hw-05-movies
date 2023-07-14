import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../api/movieApi';
import CastItem from '../components/CastItem';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const match = useParams();
  const movieId = match.params.movieId;
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

  return (
    <div>
      {movie && (
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
      )}
    </div>
  );
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
