import { MOVIES } from '@/services';

export default {
  async getGenres({ commit, state }) {
    try {
      const results = await MOVIES.getGenres(state.apiKey);

      if (results) {
        commit('setGenres', results.data.genres);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getDiscover({ commit, state }) {
    try {
      const results = await MOVIES.getDiscover(state.apiKey);

      if (results) {
        commit('setDiscover', results.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
