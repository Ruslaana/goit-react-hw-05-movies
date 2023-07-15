import React from 'react';
import PropTypes from 'prop-types';
import { searchMovies } from '../api/movieApi';
import MovieItem from '../components/MovieItem/MovieItem';

const Movies = ({ searchTerm, searchResults, handleSearch, setSearchTerm }) => {
  const handleClick = async () => {
    const results = await searchMovies(searchTerm);
    handleSearch(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleSearch: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Movies;
