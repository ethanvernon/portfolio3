import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFilter: null
  },
  mutations: {
    setActiveFilter: (state, filter) => (state.activeFilter = filter),
  },
  actions: {
    setActiveFilter({ commit }, data) {
      console.log('data:', data)
      commit('setActiveFilter', data)
    }
  },
})
