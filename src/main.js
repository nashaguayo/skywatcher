import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import titleMixin from '@/lib/titleMixin';
import LazyYoutube from 'vue-lazytube';

Vue.use(LazyYoutube);

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
