export default {
  state: {
    parentTitle: 'DEFAULT TITLE',
  },
  getters: {
    parentTitle(state) {
      return state.parentTitle;
    },
  },
  mutations: {
    changeParentTitle(state, payload) {
      state.parentTitle = payload;
    },
  },
  actions: {
    fetchParentTitle({ commit }) {
      const data = 'test'; // async call to get data
      commit('changeParentTitle', data);
    },
  },
};
