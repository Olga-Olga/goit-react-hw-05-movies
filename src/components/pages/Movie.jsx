import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';

const Movie = () => {
  const { id } = useParams({});
  const navigate = useNavigate();
  const [info, setInfo] = useState({ dafault: 1234 });
  // const location = useLocation();
  useEffect(() => {
    fetchMovieById(id).then(({ data }) => {
      setInfo(data);
    });
  }, [id]);

  const { title, genres, backdrop_path, vote_average, overview } = info;

  return (
    <div>
      <button onClick={() => navigate(-1)}> Go back</button>
      {/* <Link to={location.state?.from || '/'}> Go back</Link> */}
      <hr />
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w185/${backdrop_path}`
            : 'https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg'
        }
        alt={title}
      />
      <h1>{title}</h1>
      <div>User score: {vote_average}</div>
      <h2>Overview</h2>
      <p> {overview}</p>
      <div>
        Genres:
        {genres ? (
          genres.map(el => <p key={el.id}>{el.name}</p>)
        ) : (
          <div>No genres</div>
        )}
      </div>
      <hr />
      <div>Addition information</div>
      <li>
        <Link to="cast">Show Cast</Link>
      </li>
      <li>
        <Link to="reviews">Show Reviews</Link>
      </li>
      <hr />
      <Outlet />
    </div>
  );
};

export default Movie;
