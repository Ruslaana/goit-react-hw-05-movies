import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/movieApi';

function Reviews({ match }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(match.params.movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [match.params.movieId]);

  return (
    <div>
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
}

export default Reviews;
