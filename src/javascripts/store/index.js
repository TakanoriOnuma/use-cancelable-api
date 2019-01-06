import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import api from './api/module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    api
  },
  plugins: process.env.NODE_ENV !== 'production' ? [
    createLogger({
      collapsed: false
    })
  ] : []
});

export default store;
