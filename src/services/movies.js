import axios from 'axios';
import ENDPOINTS from '@/config/endpoints';

export const getGenres = (key) => axios.get(ENDPOINTS.MOVIES.GENRES, {
  params: { api_key: key },
});

export const getDiscover = (key) => axios.get(ENDPOINTS.MOVIES.DISCOVER, {
  params: { api_key: key },
});
