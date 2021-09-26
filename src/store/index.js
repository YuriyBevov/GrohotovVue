import Vue from 'vue'
import Vuex from 'vuex'

import catalog from './modules/catalog'
import cart from './modules/cart'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catalog,
    cart,
    order
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING
})