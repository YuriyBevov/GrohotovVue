//import { axiosInstance } from 'src/boot/axios'

import {cartMockData} from '../mock/cart.js'

const state = {
    cart: [],
    isMountRequestActive: false
}

const getters = {
    cartProducts: (state, {}, {}, getters) => {
        return state.cart.map(({id, quantity}) => {
            const product = getters['catalog/productList'].find(product => product.id === id)

            return {
                id: product.id,
                img: product.img,
                title: product.title,
                price: product.price,
                chars: product.chars,
                article: product.article,
                quantity
            }
        })
    },

    cartTotalPrice: ({}, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    },

    cartTotalQuantity: ({}, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.quantity
        }, 0)
    }
}

const actions = {
    INIT_MOCK_CART({ commit }) {  
        commit('FILL_MOCK_CART', cartMockData)
    },  

    ADD_PRODUCT_TO_CART({commit}, productID) {
        commit('PUSH_PRODUCT_TO_CART', productID)
    },

    REMOVE_PRODUCT_FROM_CART({commit}, productID) {
        commit('REMOVE_ITEM_FROM_CART', productID)
    },

    DELETE_PRODUCT_FROM_CART({commit}, productID) {
        commit('DELETE_ITEM_FROM_CART', productID)
    },

    CHANGE_MOUNT_REQUEST_STATUS({commit}, bool) {
        commit('SET_MOUNT_REQUEST_STATUS', bool)
    },

    CLEAR_CART({commit}) {
        commit('CLEAR_CART')
    }
}

const mutations = {
    CLEAR_CART(state) {
        state.cart = []
    },

    FILL_MOCK_CART(state, products) {
        state.cart = products
    },

    PUSH_PRODUCT_TO_CART(state, productID) {

        let product = state.cart.find(item => {
            return item.id === productID
        })

        product ?
        product.quantity++ : null
    },

    REMOVE_ITEM_FROM_CART(state, productID) {
        let product = state.cart.find(item => {
            return item.id === productID
        })

        product.quantity > 1 ?
        product.quantity-- : null
    },  

    DELETE_ITEM_FROM_CART(state, productID) {
        state.cart = state.cart.filter( item => item.id !== productID);
    },

    SET_MOUNT_REQUEST_STATUS(state, bool) {
        state.isMountRequestActive = bool
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}