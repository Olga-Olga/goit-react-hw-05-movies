import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

export const Cast = () => {
  const { id } = useParams({});

  const key = 'caae91fa03dadd61d2d243ec0631262a';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [credits, setCredits] = useState({ dafault: 1234 });

  useEffect(() => {
    axios.get(`/movie/${id}/credits?api_key=${key}`).then(({ data }) => {
      setCredits(data.cast);
    });
  }, [id]);

  return (
    <div>
      <ul>
        {credits.length ? (
          credits.map(credit => (
            <StyledItem key={credit.id}>
              {credit.character}
              <StyledIMG
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                    : 'https://image.tmdb.org/t/p/w185/qoVESlEjMLIbdDzeXwsYrSS2jpw.jpg'
                }
                alt={credit.character}
              />
            </StyledItem>
          ))
        ) : (
          <li>Wait...</li>
        )}
      </ul>
    </div>
  );
};

const StyledIMG = styled.img`
  width: 90px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
