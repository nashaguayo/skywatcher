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
    meta: {
      header: true,
      footer: true,
    },
  },
  {
    path: '/404',
    name: 'pageNotFound',
    component: () => import('@/views/PageNotFoundView.vue'),
    meta: {
      header: true,
    },
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      header: true,
      footer: true,
    },
  },
  {
    path: '/offline',
    name: 'offline',
    component: () => import('@/views/OfflineView.vue'),
  },
  {
    path: '/desktop-guardian',
    name: 'desktopGuardian',
    component: () => import('@/views/DesktopGuardianView.vue'),
    meta: {
      footer: true,
    },
  },
  {
    path: '/install',
    name: 'install',
    component: () => import('@/views/InstallView.vue'),
  },
  {
    path: '/installing',
    name: 'installing',
    component: () => import('@/views/InstallingView.vue'),
  },
  {
    path: '/launch-app',
    name: 'launchApp',
    component: () => import('@/views/LaunchAppView.vue'),
  },
  {
    path: '/apod',
    name: 'apod',
    component: () => import('@/views/ApodView.vue'),
    meta: {
      header: true,
      footer: true,
    },
  },
  {
    path: '/neo',
    name: 'neo',
    component: () => import('@/views/NeoView.vue'),
    meta: {
      header: true,
      footer: true,
    },
  },
];

const router = new VueRouter({
  base: '/skywatcher',
  mode: 'hash',
  routes,
});

router.beforeEach((to, from, next) => {
  if (isDesktop() && to.name !== 'desktopGuardian') {
    next({ name: 'desktopGuardian' });
    return;
  }

  if (
    !isDesktop() &&
    !isUsingApp() &&
    to.name !== 'install' &&
    to.name !== 'installing' &&
    to.name !== 'launchApp'
  ) {
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
