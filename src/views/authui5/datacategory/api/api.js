/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-05-08 09:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  saveRoleDataCateInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/saveRoleDataCate', param)
  },
  getCategoryTree: function (param, appId) {
    if (appId) {
      return http.post(process.env.IRETAIL_WEB + 'category/categoryTree' + '/' + appId, param)
    } else {
      return http.post(process.env.IRETAIL_WEB + 'category/categoryTree', param)
    }
  },
  queryCategoryInfo: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'category/' + param)
  },
  saveCateInfo: function (operator, model) {
    var url = process.env.IRETAIL_WEB + 'category/saveCategory'
    if (operator === 'add') {
      url = url + '/add'
    } else {
      url = url + '/update'
    }
    return http.post(url, model)
  },
  delCategory: function (params) {
    var delUrl = process.env.IRETAIL_WEB + 'category/category/del/' + params
    return http.post(delUrl)
  },
  queryAttrInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'category/attributes', param)
  },
  queryTable: function (param, appId) {
    if (appId) {
      return http.post(process.env.IRETAIL_WEB + 'category/attributes' + '/' + appId, param)
    } else {
      return http.post(process.env.IRETAIL_WEB + 'category/attributes', param)
    }
  },
  checkSameAttrCode: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'category/checkSameAttrCode', param)
  },
  saveAttrInfo: function (operator, model) {
    var url = process.env.IRETAIL_WEB + 'category/saveAttribute'
    if (operator === 'add') {
      url = url + '/add'
    } else {
      url = url + '/update'
    }
    return http.post(url, model)
  },
  attrInfoDel: function (params) {
    var delUrl = process.env.IRETAIL_WEB + 'category/attribute/del/' + params
    return http.post(delUrl)
  },
  // 数据授权
  dataRoleTreeURL: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'category/dataTree', param)
  }
}
