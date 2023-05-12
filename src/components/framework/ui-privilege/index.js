/*
 * @Author: your name
 * @Date: 2020-05-28 11:37:09
 * @LastEditTime: 2020-05-28 12:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui-tenant\src\components\framework\privilege\index.js
 */
import Vue from 'vue'
import uiPrivilege from './ui-privilege.vue'
const uiprivilege = {
  install: function (Vue) {
    Vue.component('ui-privilege', uiPrivilege)
    // 装载其他框架自定义组件.....
  }
}
Vue.use(uiprivilege)
// 导出组件
export default uiprivilege
