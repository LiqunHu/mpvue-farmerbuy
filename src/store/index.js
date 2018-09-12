import Vue from 'vue'
import Vuex from 'vuex'

import access from './modules/access'
import shopchart from './modules/shopchart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    access: {
      namespaced: true,
      ...access
    },
    shopchart: {
      namespaced: true,
      ...shopchart
    }
  }
})

export default store
