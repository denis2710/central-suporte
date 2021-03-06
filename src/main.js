import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import router from './router'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})