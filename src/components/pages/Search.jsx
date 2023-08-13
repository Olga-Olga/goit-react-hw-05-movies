import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmitSeart = e => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  useEffect(() => {
    console.log(12);
  }, []);

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
    </div>
  );
};
