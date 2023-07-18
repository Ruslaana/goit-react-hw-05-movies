import React from 'react';
import PropTypes from 'prop-types';
function MovieItem({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
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
