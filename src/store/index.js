import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFilter: null,
    projectFilter: 'all'
  },
  mutations: {
    setActiveFilter: (state, filter) => (state.activeFilter = filter),
    setProjectFilter: (state, val) => (state.projectFilter = val)
  },
  actions: {
    setActiveFilter({ commit }, data) {
      console.log('data:', data)
      commit('setActiveFilter', data)
    },
    setFilter({ commit }, data) {
      console.log('data', data)
      switch (data.filterType) {
        case 'project':
          commit('setProjectFilter', data.filterValue)

          break;
        default:
          return
      }
    }
  },
})
