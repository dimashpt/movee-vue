import { createStore } from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import actions from './actions';

export default createStore({
  state: {
    apiKey: '',
    genres: [],
    discover: [],
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
