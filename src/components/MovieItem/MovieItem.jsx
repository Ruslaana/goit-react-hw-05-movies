import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieItem.module.css'


function MovieItem ({movie}) {
  return (
    <div className={styles.MovieItem}>
      <h3>{movie.title}</h3>
      <p>Release Date:{movie.release_data}</p>
      <img alt={movie.title} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieItem;