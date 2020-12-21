import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'

import VueRouter from 'vue-router'
import { routes } from './routes/routes'

import PrismicVue from 'prismic-vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(PrismicVue, {
  endpoint: 'https://recipe-share.cdn.prismic.io/api/v2'

});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
