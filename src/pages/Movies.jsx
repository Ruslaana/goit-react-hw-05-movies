import React, { useEffect, useState } from 'react';
import { searchMovies } from '../services/movieApi';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import MovieItem from 'components/MovieItem/MovieItem';


const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [startLoader, setStartLoader ] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      // setStartLoader(false);
      return;
    }

    const getImagesFromAPI = () => {
      try {
        setStartLoader(true);

        const data = searchMovies(searchTerm);
        console.log(searchTerm)
        // All right 
        if (data.length) {
          toast.info(<span>Found movies with name {searchTerm}</span>)
        }

        // not found
        if (!data.length) {
          return toast.warning(`Sorry movie('s) not found...`, {
          });
        }

        setMovies(prevImages => [...prevImages, ...data]);

      } catch (error) {
        console.log(error);
      } finally {
        setStartLoader(false);
      }
    };

    getImagesFromAPI();

  }, [searchTerm])

  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm(e.target.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='search'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {startLoader && <Loader />}

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Movies;
