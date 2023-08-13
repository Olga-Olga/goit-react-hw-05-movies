import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

export const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  return (
    <div>
      SingleUser #{id}
      <h2>Name {user.name}</h2>
      <h2>Email {user.email}</h2>
      <h2>Adress {user.address?.city}</h2>
      <hr />
      <Link to="bio">Show Urer biography</Link>
      <Link to="address">Show Urer adress</Link>
      <Outlet />
    </div>
  );
};
