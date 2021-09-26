import { axiosInstance } from '@/boot/axios'

const actions = {
    GET_ORDER({ dispatch, rootState }) {
      let order = [{
        items: rootState.cart.cart,
        isMountRequestActive: rootState.cart.isMountRequestActive 
      }]

      dispatch('loader/CHANGE_LOADER_STATUS', true, {root: true})

      axiosInstance.post('/products', order)
      .then(resp => {
        dispatch('modal/CHANGE_STATUS_MODAL', {
          message: 'Ваш заказ успешно оформлен !',
          isModalOpened: true
        }, {root: true})

      })
      .catch(err => {
        dispatch('modal/CHANGE_STATUS_MODAL', {
          message: 'Произошла ошибка... Попробуйте снова !',
          isModalOpened: true
        }, {root: true})
      })
      .finally(() => {
        dispatch('loader/CHANGE_LOADER_STATUS', false, {root: true})
      })
    }
}

export default {
  namespaced: true,
  actions
}