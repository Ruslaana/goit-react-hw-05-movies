import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/movies" activeclassname="active">Movies</NavLink>
        <Outlet />

      </nav>

        <Routes>
        <Route exact path="/" element={Home} />
          <Route exact path="/movies" element={Movies} />
          <Route exact path="/movies/:movieId" element={MovieDetails} />
          <Route exact path="/movies/:movieId/cast" element={Cast} />
          <Route exact path="/movies/:movieId/reviews" element={Reviews} />
          <Route path="/" component={Home} />
        </Routes>
    </div>
  );
}

export default App;
