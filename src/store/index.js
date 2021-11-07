import { createStore } from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import { getGenres } from '@/services/movies';

export default createStore({
  state: {
    apiKey: '',
    genres: [],
  },
  mutations: {
    setApiKey(state, apiKey) {
      state.apiKey = apiKey;
    },
    setGenres(state, data) {
      state.genres = data;
    },
  },
  actions: {
    async getGenres({ commit, state }) {
      try {
        const results = await getGenres(state.apiKey);

        if (results) {
          commit('setGenres', results.data.genres);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
  plugins: [
    // createPersistedState({
    //   getItem: (key) => Cookies.get(key),
    //   setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    //   removeItem: (key) => Cookies.remove(key),
    // }),
  ],
});
