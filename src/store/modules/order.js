//import { axiosInstance } from 'src/boot/axios'

const state = {
    
}

const mutations = {

}

const actions = {
    GET_ORDER({commit,rootState, rootGetters}) {
      let order = {}
      order.products = []
      order.isMountRequestActive = false

      rootGetters['cart/cartProducts'].forEach(item => {
        order.items.push({
          id:item.id,
          quantity: item.quantity
        })
      })

      order.isMountRequestActive = rootState.cart.isMountRequestActive
    }
}

const getters = {
    
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}