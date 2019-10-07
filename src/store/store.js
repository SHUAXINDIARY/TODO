import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {};

import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state: state,
  mutations,
  actions,
})
