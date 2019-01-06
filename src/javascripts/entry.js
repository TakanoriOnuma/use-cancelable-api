import 'promise-polyfill/src/polyfill';
import 'babel-polyfill';

import Vue from 'vue';
import App from './App.vue';
import store from './store/';

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<app />'
});
