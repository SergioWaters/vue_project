import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import modal from './plugins/Modal/modal'
import ContextPlugin from './plugins/Context/ContextPlugin'

Vue.config.productionTip = false;

Vue.use(modal)
Vue.use(ContextPlugin)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
