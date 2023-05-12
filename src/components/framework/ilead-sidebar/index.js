/*
 * @Author: your name
 * @Date: 2020-05-25 09:26:15
 * @LastEditTime: 2020-05-28 11:39:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ilead-ui\ilead4admin-ui\src\components\framework\ui-privilege\index.js
 */
import Vue from 'vue'
import ileadSidebar from './ilead-sidebar.vue'
import ileadSideMenu from './ilead-side-menu.vue'

const IleadSidebar = {
  install: function (Vue) {
    Vue.component('ilead-sidebar', ileadSidebar)
    Vue.component('ilead-side-menu', ileadSideMenu)
  }
}
Vue.use(IleadSidebar)
export default IleadSidebar
