import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { id } = useParams({});

  const key = 'caae91fa03dadd61d2d243ec0631262a';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    axios.get(`/movie/${id}/reviews?api_key=${key}`).then(({ data }) => {
      setReviews(data.results);
    });
  }, [id]);

  return (
    <div>
      Reviews:
      <ul>
        {reviews.length ? (
          reviews.map(({ author, content }) => {
            return (
              <li key={author}>
                <h3>Author: {author}</h3>
                <div>{content}</div>
              </li>
            );
          })
        ) : (
          <div>No reviews</div>
        )}
      </ul>
    </div>
  );
};
