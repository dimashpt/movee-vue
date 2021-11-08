import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
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
    createPersistedState(),
  ],
});
