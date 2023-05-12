/*
 * @Author: your name
 * @Date: 2020-05-14 13:47:39
 * @LastEditTime: 2020-05-28 11:38:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\components\framework\vxeTablePlugin\index.js
 */
import Vue from 'vue'
import VXETable from 'vxe-table/lib/v-x-e-table'
import ExportPanel from './export-panel'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
VXETable.use(VXETablePluginExportXLSX)

export const Export = {
  install (Vue) {
    Object.assign(VXETable.types, { csv: 1, html: 1, xml: 1, txt: 1 })
    Vue.component(ExportPanel.name, ExportPanel)
  }
}
Vue.use(Export)
export default Export
