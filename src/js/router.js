import Vue from 'vue';
import Router from 'vue-router';
import Route from '../components/route';
import Faq from '../components/faq';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Route,
    },
    {
      path: '/:lang',
      component: Route,
    },
    {
      path: '/faq',
      component: Faq,
    },
    {
      path: '/faq/:lang',
      component: Faq,
    },
  ],
});
