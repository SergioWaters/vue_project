import Vue from 'vue'
import Vuex from 'vuex'
import addExpence from './modules/addExpence'
import expences from './modules/expences'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expences,
    addExpence
  }
})
