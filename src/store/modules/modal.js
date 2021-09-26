const state = {
    modalState: {
        message: '',
        isModalOpened: false
    }
}

const getters = {
    modalState: state => state.modalState
}

const actions = {
    CHANGE_STATUS_MODAL({commit}, modalState) {
      commit('SET_STATUS_MODAL_STATUS', modalState)
    }
}

const mutations = {
  SET_STATUS_MODAL_STATUS(state, modalState) {

    modalState.message !== '' ?
    state.modalState.message = modalState.message : null
    state.modalState.isModalOpened = modalState.isModalOpened
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}