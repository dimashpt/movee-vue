import { createStore } from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import actions from './actions';

export default createStore({
  state: {
    apiKey: '',
    genres: [],
    discover: [],
    favourites: [],
  },
  mutations: {
    setApiKey(state, apiKey) {
      state.apiKey = apiKey;
    },
    setGenres(state, data) {
      state.genres = data;
    },
    setDiscover(state, data) {
      state.discover = data;
    },
    addFavourite(state, data) {
      const isFavouriteExist = state.favourites.find((movie) => movie.id === data.id);

      if (isFavouriteExist) {
        state.favourites.splice(state.favourites.indexof(data), 1);
      } else {
        state.favourites.push(data);
      }
    },
  },
  actions,
  modules: {},
  plugins: [
    createPersistedState({
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: (key) => Cookies.remove(key),
    }),
  ],
});
