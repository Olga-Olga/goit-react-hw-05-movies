import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Search } from './pages/Search.jsx';
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
          <Route path="movies" element={<Search />} />
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
