import axios from 'axios';
import ENDPOINTS from '@/config/endpoints';

export const getGenres = (key) => axios.get(ENDPOINTS.movies.genres, {
  params: {
    api_key: key,
  },
});

export const getMovies = (key) => axios.get(ENDPOINTS.movies.list, {
  params: {
    api_key: key,
  },
});
