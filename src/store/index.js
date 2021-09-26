import Vue from 'vue'
import Vuex from 'vuex'

import loader from './modules/loader'
import catalog from './modules/catalog'
import cart from './modules/cart'
import order from './modules/order'
import modal from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loader,
    catalog,
    cart,
    order,
    modal
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING
})