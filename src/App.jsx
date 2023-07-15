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
        <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
          <Route path="/" component={Home} />
        </Routes>
    </div>
  );
}

export default App;
