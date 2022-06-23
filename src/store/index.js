import Vue from 'vue'
import Vuex from 'vuex'
import promotions from './modules/promotions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    promotions
  }
})
