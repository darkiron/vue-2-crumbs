import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: {}
  },
  mutations: {
    SET_ITEM (state, item) {
      state.item = item
    }
  },
  actions: {
    setItem ({ commit }, item) {
      commit('SET_ITEM', item)
    }
  }
})
