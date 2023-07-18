import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/movieApi';
import { useParams } from 'react-router-dom';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchMovieCredits();
  }, [movieId]);
  
  return (
    <div>
      <h2>Cast</h2>
      <ul >
        {cast?.length > 0 && cast.map(actor => (
          <li key={actor.id}>{actor.name}
          {/* <p>Character: {actor.character_name}</p> */}
          <img alt={actor.title} src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}></img>

          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Cast;
