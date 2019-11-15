import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import shop from './modules/shop'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop
  },
  state,
  mutations,
  actions,
  getters
})