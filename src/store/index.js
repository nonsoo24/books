import Vue from 'vue';
import Vuex from 'vuex';
import api from '../Api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getBookList: async () => {
      try {
        const response = await api.get('/Books');
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
  modules: {
  },
});
