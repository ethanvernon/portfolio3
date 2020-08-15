import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFilter: null,
    projectFilter: 'all',
    countryFilter: 'any',

  },
  mutations: {
    setActiveFilter: (state, filter) => (state.activeFilter = filter),
    setProjectFilter: (state, val) => (state.projectFilter = val),
    setCountryFilter: (state, val) => (state.countryFilter = val),
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
        case 'country':
          commit('setCountryFilter', data.filterValue)
          break;
        default:
          return
      }
    }
  },
})
