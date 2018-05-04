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
      path: '/faq',
      component: Faq,
    },
    {
      path: '/faq/:lang',
      component: Faq,
    },
    {
      path: '/:lang',
      component: Route,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
