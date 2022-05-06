import Vue from 'vue'
import Vuex from 'vuex'
import expences from './modules/expences'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expences,
  }
})
