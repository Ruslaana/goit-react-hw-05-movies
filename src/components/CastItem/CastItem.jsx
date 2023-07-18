import React from 'react';
import PropTypes from 'prop-types';

function CastItem ({ actor }) {
  return (
    <div>
      <h4>{actor.name}</h4>
      <p>Character: {actor.character_name}</p>
    </div>
  );
}

CastItem.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    }).isRequired,
};

export default CastItem;