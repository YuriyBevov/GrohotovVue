const state = {
    loaderState: true 
}

const getters = {
    isAppLoading: state => state.loaderState
}

const actions = {
    CHANGE_LOADER_STATUS({commit}, bool) {
        commit('SET_LOADER_STATUS', bool)
    }
}

const mutations = {
    SET_LOADER_STATUS(state, bool) {
        state.loaderState = bool
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}