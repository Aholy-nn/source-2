/*
 * @Author: your name
 * @Date: 2020-05-28 11:52:36
 * @LastEditTime: 2020-06-15 15:17:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui-tenant\src\components\framework\vxe-table\index.js
 */
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import locale from '@/locale'
import vxeTableExtend from '../vxe-table-extend/index.js'
Vue.use(vxeTableExtend)

// vxe-table，国际化
Vue.use(VXETable, {
  translate: key => locale.t(key),
  i18n: key => locale.t(key)
})
const VxeTable = {
}

// 导出组件
export default VxeTable
