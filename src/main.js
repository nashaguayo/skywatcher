import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import titleMixin from '@/lib/titleMixin';
import LazyYoutube from 'vue-lazytube';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

library.add(faInfo);
library.add(faCircleNotch);
library.add(faQuestion);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.use(LazyYoutube);

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
