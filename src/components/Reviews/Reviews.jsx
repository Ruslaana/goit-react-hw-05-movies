import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/movieApi';

import styles from './Reviews.module.css'

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
            <h3 className={styles.header} >Author: {review.author}</h3>
            <p className={styles.paragraph} >{review.content} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
