import Vue from 'vue'
import expences from './modules/expences'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expences
  }
})
