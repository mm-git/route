// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import FlagIcon from 'vue-flag-icon';
import App from './App';
import router from './js/router';
import i18n from './js/i18n';

Vue.use(BootstrapVue);
Vue.use(FlagIcon);
Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
