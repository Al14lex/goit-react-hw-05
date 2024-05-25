import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify';

import Load from './components/Load/Load.jsx';
import Navigation from './components/Navigation/Navigation.jsx';


const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'));

export default function App() {

  return (
    <>
    <ToastContainer />
      <Navigation/>
      <Suspense fallback={<Load />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}> 
              {/* <Route path="cast" element={<MovieCast />}/>
              <Route path="reviews" element={<MovieReviews />}/> */}
          </Route>
          
        </Routes>
      </Suspense>
    </>
  );
}

