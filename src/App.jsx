import React from 'react';
import { BrowserRouter as  Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <nav>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/movies" activeclassname="active">Movies</NavLink>
      </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={
              <Movies
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchResults={searchResults}
                handleSearch={handleSearch}
              />
            }
          />
          <Route path="/movies/:movieId" element={<MovieDetails />}  />
        </Routes>
    </div>
  );
}

export default App;
