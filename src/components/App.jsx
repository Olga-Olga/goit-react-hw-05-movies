import React, { lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
// import { Search } from './pages/Search.jsx';
// import { NotFound } from './pages/NotFound';
// import { HomeList } from './pages/HomeList';
// import { Cast } from './pages/Cast';
// import { Reviews } from './pages/Reviews';
// import { Movie } from './pages/Movie';

const Movie = lazy(() => import('../pages/Movie'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));
const HomeList = lazy(() => import('../pages/HomeList'));
const Search = lazy(() => import('../pages/Search'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeList />} />
          <Route path="movies" element={<Search />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
