import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import VueRouter from '../node_modules/vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router