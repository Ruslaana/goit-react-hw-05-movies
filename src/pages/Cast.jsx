import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../api/movieApi';

function Cast({ match }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(match.params.movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCredits();
  }, [match.params.movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
