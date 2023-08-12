import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Layout } from './Layout';
import { Test } from './pages/Test.jsx';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="collection" element={<Test />} />
          <Route path="*" element={<h1>Page is not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
