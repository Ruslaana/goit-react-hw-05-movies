import React, { useEffect, useState } from 'react';
import { searchMovies } from '../services/movieApi';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/Loader/Loader';
import MovieItem from '../components/MovieItem/MovieItem';
import { Link, useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [startLoader, setStartLoader] = useState(false);

  useEffect(() => {

    if (!search) {
      setStartLoader(false);
      return;
    }

    const getImagesFromAPI = async () => {
      
      try {
        setStartLoader(true);

        const data = await searchMovies(search);

        if (data.length) {
          toast.info(<span>Found movies with name {search}</span>)
        }

        if (!data.length) {
          return toast.warning(`Sorry movie('s) not found...`, {
          });
        }

        setMovies(data);

      } catch (error) {
        console.log(error);
      } finally {
        setStartLoader(false);
      }
    };

    getImagesFromAPI();

  }, [search])

  const handleSubmit = e => {
    e.preventDefault();
    // setSearchTerm(e.target.elements.search.value);
    setSearchParams({search: e.target.elements.search.value});
    setSearchTerm('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='search'
          type="text"
          defaultValue={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
      {startLoader && <Loader />}

      <ul>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </ul>
      <ToastContainer hideProgressBar />
    </div>

  );
};


export default Movies;