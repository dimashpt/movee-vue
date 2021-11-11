export default {
  getGenres(state, data) {
    state.genres = data;
  },
  getDiscover(state, { data, isLoadMore }) {
    if (isLoadMore) data.forEach((movie) => state.discover.push(movie));
    else state.discover = data;
  },
};
