import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Layout } from './Layout';
import { Test } from './pages/Test.jsx';
import { NotFound } from './pages/NotFound';
import { Users } from './pages/Users';
import { SingleUser } from './pages/SingleUser';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="collection" element={<Test />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<SingleUser />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
