import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/api';

export const Search = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmitSeart = e => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      fetchSearchMovie(query).then(({ data }) => {
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
        {list &&
          list.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
              {/* {el.original_title} */}
            </li>
          ))}
      </ul>
    </div>
  );
};