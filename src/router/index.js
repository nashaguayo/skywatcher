import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/apod',
    name: 'apod',
    component: () => import('@/views/ApodView.vue'),
  },
  {
    path: '/neo',
    name: 'neo',
    component: () => import('@/views/NeoView.vue'),
  },
];

const router = new VueRouter({
  base: '/skywatcher',
  mode: 'hash',
  routes,
});

export default router;
