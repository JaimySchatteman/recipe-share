import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'


import VueRouter from 'vue-router'
import { routes } from './routes/routes'

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter);



import PrismicVue from 'prismic-vue'

Vue.use(PrismicVue, {
  endpoint: 'https://recipe-share.cdn.prismic.io/api/v2'

});

const EventBus = new Vue();
export default EventBus;



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
