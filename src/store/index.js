import { createStore } from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    apiKey: '',
  },
  mutations: {
    setApiKey(state, apiKey) {
      state.apiKey = apiKey;
    },
  },
  actions: {
    setApiKey({ commit }, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setApiKey', data.key);
          resolve();
        }, 2000);
      });
    },
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: (key) => Cookies.remove(key),
    }),
  ],
});
