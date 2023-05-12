/*
 * @Author: your name
 * @Date: 2020-02-16 18:55:14
 * @LastEditTime: 2020-06-14 17:36:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\function\api\api.js
 */
import http from '@/common/http/api-request.js'
export default {
  // 树列表
  getFunctionTree: function (param, appId) {
    if (appId) {
      return http.post(process.env.IRETAIL_WEB + 'function/functionTree' + '/' + appId, param)
    } else {
      return http.post(process.env.IRETAIL_WEB + 'function/functionTree', param)
    }
  },
  getSynchroFunctionTree: function (param, appId) {
    if (appId) {
      return http.post(process.env.IRETAIL_WEB + 'function/functionTree/synchro' + '/' + appId, param)
    } else {
      return http.post(process.env.IRETAIL_WEB + 'function/functionTree/synchro', param)
    }
  },
  getFunction: function (functionId) {
    var url = process.env.IRETAIL_WEB + 'function/get/' + functionId
    return http.get(url)
  },
  delFunction: function (functionId) {
    var url = process.env.IRETAIL_WEB + 'function/del/' + functionId
    return http.get(url)
  },
  saveFunInfo: function (operator, model) {
    var url = process.env.IRETAIL_WEB + 'function/save'
    if (operator === 'add') {
      url = url + '/add'
    } else {
      url = url + '/update'
    }
    return http.post(url, model)
  },
  getIconData: function () {
    return http.get('../../../static/data/icon-data.json')
  }
}
