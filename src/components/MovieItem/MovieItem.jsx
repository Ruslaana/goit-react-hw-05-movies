import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieItem.module.css'
function MovieItem({ movie }) {
  return (
    <div>
      <p className={styles.Item}>{movie.title}</p>
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
