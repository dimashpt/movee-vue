import actions from './actions';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    genres: [],
    discover: [],
  },
  mutations,
  actions,
};
