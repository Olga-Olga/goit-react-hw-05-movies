import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { Test } from './Test.jsx';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">Collection</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index elemant={<div>Home Page</div>} />
          <Route path="collection" elemant={<Test />} />
          <Route path="*" element={<h1>Error from my app</h1>} />
        </Route>
        {/* <Route path="*" element={<h1>Error from my app</h1>} /> */}
      </Routes>
    </div>
  );
};
