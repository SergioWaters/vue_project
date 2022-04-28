import Vue from 'vue'
import App from './App_.vue'
import store from './store'
import router from './router/router'
import modal from './plugins/Modal/modal'
import ContextPlugin from './plugins/Context/ContextPlugin'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

Vue.use(modal)
Vue.use(ContextPlugin)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
