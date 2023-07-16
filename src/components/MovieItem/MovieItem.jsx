import React from 'react';
// import PropTypes from 'prop-types';

function MovieItem ({movie}) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release Date:{movie.release_data}</p>
    </div>
  );
}

// MovieItem.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     release_data: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default MovieItem;