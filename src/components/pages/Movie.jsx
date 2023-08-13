import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Movie = () => {
  const { id } = useParams({});

  const key = 'caae91fa03dadd61d2d243ec0631262a';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [info, setInfo] = useState({ dafault: 1234 });

  useEffect(() => {
    axios.get(`/movie/${id}?api_key=${key}`).then(({ data }) => {
      setInfo(data);
      console.log(info);
    });
  }, [id]);

  const { title, genres, backdrop_path, vote_average, overview } = info;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={title}
      />
      <h1>{title}</h1>
      <div>User score: {vote_average}</div>
      <h2>Overview</h2>
      <p> {overview}</p>
      <div>
        Genres:
        {/* {genres.map(el => (
          <p key={el.id}>{el.name}</p>
        ))} */}
      </div>
    </div>
  );
};
