import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  backColor: ["lightsalmon", "lightskyblue", "lightsalmon"],
  user: {
    name: "shauxin",
    about: "keep passion"
  },
  cards: [
    {
      name: "Today",
      icon: "iconfont icon-edit",
      des: "今天"
    },
    {
      name: "Overdue",
      icon: "iconfont icon-clock",
      des: "过期"
    },
    {
      name: "All",
      icon: "iconfont icon-instruction",
      des: "全部"
    }
  ],
};

import mutations from './mutations'
import actions from './actions'
import Today from './modules/today'
import Overdue from './modules/overdue'
import All from './modules/all'




export default new Vuex.Store({
  state: state,
  mutations,
  actions,
  modules: {
    Today,
    Overdue,
    All
  }
})
