import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
import favourites from './favourites';
import home from './home';

export default createStore({
  state: {
    apiKey: '',
  },
  mutations: {
    setApiKey(state, apiKey) {
      state.apiKey = apiKey;
    },
  },
  modules: {
    favourites,
    home,
  },
  plugins: [
    createPersistedState({
      paths: ['apiKey', 'favourites'],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
});
