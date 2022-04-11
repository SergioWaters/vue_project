import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalView from '../views/ModalView.vue'
import AddExpence from '../components/ExpenceAdd.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ModalView/',
    name: 'ModalView',
    component: ModalView,
  },
  {
    path: '/addExpence/',
    name: 'addExpence',
    component: AddExpence,
  },
  {
    path: '/addExpence/:cost',
    name: 'addExpence',
    component: AddExpence,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
