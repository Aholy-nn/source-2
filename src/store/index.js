/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 09:51:28
 * @LastEditTime : 2019-12-31 13:18:37
 * @LastEditors  : Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import storesFramework from './framework/stores-framework'
import stores from './stores'

Vue.use(Vuex)

let state = Object.assign(storesFramework.state, stores.state)
let getters = Object.assign(storesFramework.getters, stores.getters)
let mutations = Object.assign(storesFramework.mutations, stores.mutations)
let actions = Object.assign(storesFramework.actions, stores.actions)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
