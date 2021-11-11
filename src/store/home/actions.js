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
  async getDiscover({ commit, rootState }, data) {
    try {
      const results = await MOVIES.getDiscover(rootState.apiKey, data);

      if (results) {
        commit('getDiscover', {
          data: results.data.results,
          isLoadMore: data.isLoadMore,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
