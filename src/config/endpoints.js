import ENV from './env';

export default {
  IMAGE: 'https://image.tmdb.org/t/p/w220_and_h330_face',
  MOVIES: {
    GENRES: `${ENV.API_URI}/genre/movie/list`,
    DISCOVER: `${ENV.API_URI}/discover/movie`,
  },
};
