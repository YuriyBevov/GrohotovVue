import { catalogMockData } from '../mock/catalog.js'

const actions = {
    GET_PRODUCT_LIST({commit}){
        commit('FILL_CATALOG', catalogMockData)
    }
}

const mutations = {
    FILL_CATALOG(state, products) {
        state.catalog = products
    }
}

const state = {
    catalog: [],
}

const getters = {
    productList: state => state.catalog,
    watchedList: state => state.catalog.filter(product => product.isWatched !== false)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}