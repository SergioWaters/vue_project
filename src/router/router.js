import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ViewtyBoard',
    name: 'ViewtyBoard',
    component: () => import('../views/VuetifyDashView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/common',
    name: 'commonView',
    component: () => import('../views/CommonExpences.vue'),
  },
  {
    path: '/addExpence',
    name: 'addExpenceComponent',
    component: () => import('../components/ExpenceAdd.vue'),
  },
  {
    path: '/addExpence/:category',
    name: 'addExpence',
    component: () => import('../components/ExpenceAdd.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('../views/CalculatorView.vue'),
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404View.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
