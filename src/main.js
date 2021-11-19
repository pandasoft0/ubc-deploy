import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/app.scss"
import VueAgile from 'vue-agile'

import clickOutside from "./directives/click-ouside"

import 'vue-agile/dist/VueAgile.css';

Vue.config.productionTip = false;
Vue.directive("click-outside", clickOutside);
Vue.use(VueAgile);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
