import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { isOnline, isDesktop, isUsingApp } from '@/lib/pwa';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/404',
    name: 'pageNotFound',
    component: () => import('@/views/PageNotFoundView.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/offline',
    name: 'offline',
    component: () => import('@/views/OfflineView.vue'),
  },
  {
    path: '/install',
    name: 'install',
    component: () => import('@/views/InstallView.vue'),
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

router.beforeEach((to, from, next) => {
  if (!isDesktop() && !isUsingApp() && to.name !== 'install') {
    next({ name: 'install' });
    return;
  }

  if (!isOnline() && to.name !== 'offline') {
    next({ name: 'offline' });
    return;
  }
  next();
});

export default router;
