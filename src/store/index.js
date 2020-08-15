import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFilter: null,
    projectFilter: 'all',
    countryFilter: 'any country',
    languageFilter: 'any language',
    frameworkFilter: 'any framework',
    teamSizeFilter: 'any # of',
    projectData: null,
    projectFilteredData: null

  },
  mutations: {
    setActiveFilter: (state, filter) => (state.activeFilter = filter),
    setProjectFilter: (state, val) => (state.projectFilter = val),
    setCountryFilter: (state, val) => (state.countryFilter = val),
    setLanguageFilter: (state, val) => (state.languageFilter = val),
    setFrameworkFilter: (state, val) => (state.frameworkFilter = val),
    setTeamSizeFilter: (state, val) => (state.teamSizeFilter = val),
    setProjectData: (state, data) => (state.projectData = data),
    setProjectFilteredData: (state, data) => (state.projectFilteredData = data),
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
        case 'language':
          commit('setLanguageFilter', data.filterValue)
          break;
        case 'framework':
          commit('setFrameworkFilter', data.filterValue)
          break;
        case 'teamSize':
          commit('setTeamSizeFilter', data.filterValue)
          break;
        default:
          return
      }
    },
    setProjectData({ commit }, data) {
      commit('setProjectData', data)
    },
    setProjectFilteredData({ commit }, data) {
      commit('setProjectFilteredData', data)
    }
  },
})
