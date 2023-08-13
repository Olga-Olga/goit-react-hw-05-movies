import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Layout } from './Layout';
import { Test } from './pages/Test.jsx';
import { NotFound } from './pages/NotFound';
import { HomeList } from './pages/HomeList';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';
import { Movie } from './pages/Movie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeList />} />
          <Route path="movies" element={<Test />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
