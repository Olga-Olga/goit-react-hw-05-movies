import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const Search = () => {
  const key = 'caae91fa03dadd61d2d243ec0631262a';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [value, setValue] = useState('love');
  const [list, setList] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmitSeart = e => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      axios
        .get(`/search/movie`, {
          params: {
            query,
            api_key: key,
          },
        })
        .then(({ data }) => {
          setList(data.results);
        });
    }
  }, [query]);

  return (
    <div>
      <h1>Search movies</h1>
      <form onSubmit={onSubmitSeart}>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
          name="lastName"
          placeholder="Enter film"
        />
        <button>Search</button>
      </form>
      <hr />
      <ul>
        {list && list.map(el => <li key={list.id}>{el.original_title}</li>)}
      </ul>
    </div>
  );
};
