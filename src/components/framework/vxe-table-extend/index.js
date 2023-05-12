/*
 * @Author: your name
 * @Date: 2020-06-14 20:14:28
 * @LastEditTime: 2020-06-15 16:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\components\framework\vxe-table-extend\index.js
 */
import Table from 'vxe-table/lib/table'
import Pager from 'vxe-table/lib/pager'
import tableExtend from './table-extend'
import pagerExtend from './pager-extend'

export const extend = {
  install (Vue) {
    Table.mixins.push(tableExtend)
    Pager.mixins = [pagerExtend]
  }
}

export default extend
