import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const HomeList = () => {
  const key = 'caae91fa03dadd61d2d243ec0631262a';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(`/trending/movie/day?api_key=${key}`).then(({ data }) => {
      setFilms(data.results);
      //   console.log(data.results);
      //   console.log(films);
    });
  }, []);

  return (
    <div>
      <div>Trending today</div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
