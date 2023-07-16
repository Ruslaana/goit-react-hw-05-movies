import React, { lazy, useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import {
  getMovieDetails,
  // getMovieCredits,
  // getMovieReviews,
} from '../services/movieApi';
// import CastItem from '../components/CastItem/CastItem';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const [cast, setCast] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    // const fetchMovieCast = async () => {
    //   const movieCast = await getMovieCredits(movieId);
    //   setCast(movieCast);
    // };

    // const fetchMovieReviews = async () => {
    //   const movieReviews = await getMovieReviews(movieId);
    //   setReviews(movieReviews);
    // };

    fetchMovieDetails();
    // fetchMovieCast();
    // fetchMovieReviews();
  }, [movieId]);

  // if (!movie) {
  //   return null;
  // }

  return (
    <div>
      {movie && (
        <>
          {' '}
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </>
      )}

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>

      <Link to='Cast'>Cast</Link>
      <Link to='Reviews'>Rewies</Link>
      {/* <h2>Cast</h2>
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
      </ul> */}
    </div>
  );
};

export default MovieDetails;
