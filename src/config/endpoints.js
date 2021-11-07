import ENV from './env';

export default {
  movies: {
    genres: `${ENV.API_URI}/genre/movie/list`,
  },
};
