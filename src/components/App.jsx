import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

import styles from './App.module.css'

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy (() => import('../components/Cast/Cast'));
const Reviews = lazy (() => import('../components/Reviews/Reviews'))


function App() {
  return (
    <>
      <nav className={styles.Navigation}>
        <NavLink className={styles.link} to="/">Home</NavLink>
        <NavLink className={styles.link} to="/movies">Movies</NavLink>
      </nav>

      <Suspense fallback={<Loader /> }>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
