export default {
  getGenres(state, data) {
    state.genres = data;
  },
  getDiscover(state, data) {
    data.forEach((movie) => {
      state.discover.push(movie);
    });
  },
};
