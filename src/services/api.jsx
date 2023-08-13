import axios from 'axios';

const key = 'caae91fa03dadd61d2d243ec0631262a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchSearchMovie = query => {
  return axios.get(`/search/movie`, {
    params: {
      query,
      api_key: key,
    },
  });
};

export const fetchCredits = id => {
  return axios.get(`/movie/${id}/credits?api_key=${key}`);
};

export const fetchTrendingMovie = () => {
  return axios.get(`/trending/movie/day?api_key=${key}`);
};

export const fetchMovieById = id => {
  return axios.get(`/movie/${id}?api_key=${key}`);
};

export const fetchMovieReview = id => {
  return axios.get(`/movie/${id}/reviews?api_key=${key}`);
};
