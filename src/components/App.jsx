import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <Outlet />
      </nav>

        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={Home} />
          <Route path="/movies" element={Movies} />
          <Route path="/movies/:movieId" element={MovieDetails} />
          <Route path="/movies/:movieId/cast" element={Cast} />
          <Route path="/movies/:movieId/reviews" element={Reviews} />
          <Route path="/" component={Home} />
        </Routes>
          </Suspense>
    </div>
  );
}

export default App;
