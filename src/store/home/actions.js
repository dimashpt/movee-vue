import { MOVIES } from '@/services';

export default {
  async getGenres({ commit, rootState }) {
    try {
      const results = await MOVIES.getGenres(rootState.apiKey);

      if (results) {
        commit('getGenres', results.data.genres);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getDiscover({ commit, rootState }, page) {
    try {
      const results = await MOVIES.getDiscover(rootState.apiKey, page);

      if (results) {
        commit('getDiscover', results.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
