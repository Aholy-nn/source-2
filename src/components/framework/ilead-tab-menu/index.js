/*
 * @Author: your name
 * @Date: 2020-05-28 11:36:52
 * @LastEditTime: 2020-05-28 12:17:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui-tenant\src\components\framework\ilead-tab-menu\index.js
 */
import Vue from 'vue'
import ileadTabMenu from './ilead-tab-menu.vue'

const IleadTabMenu = {
  install: function (Vue) {
    Vue.component('ilead-tab-menu', ileadTabMenu)
  }
}
Vue.use(IleadTabMenu)
export default IleadTabMenu
