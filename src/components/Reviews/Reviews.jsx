import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/movieApi';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
      {!reviews?.length > 0 && <div>No Reviews</div>}
        {reviews?.length > 0 && reviews.map((review) => (
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
