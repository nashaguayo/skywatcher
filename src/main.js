import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import titleMixin from '@/lib/titleMixin';
import LazyYoutube from 'vue-lazytube';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faInfo,
  faQuestion,
  faSkull,
  faEllipsisVertical,
  faXmark,
  faSatellite,
} from '@fortawesome/free-solid-svg-icons';

import './registerServiceWorker'

library.add(faInfo);
library.add(faQuestion);
library.add(faSkull);
library.add(faEllipsisVertical);
library.add(faXmark);
library.add(faSatellite);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.use(LazyYoutube);

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
