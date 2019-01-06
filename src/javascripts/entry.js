import 'promise-polyfill/src/polyfill';

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  components: { App },
  template: '<app />'
});
