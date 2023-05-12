/*
 * @Author: your name
 * @Date: 2020-04-30 11:24:44
 * @LastEditTime: 2020-05-07 13:45:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\original\api\originalAPI.js
 */
import http from '@/common/http/api-request.js'
export default {
  queryUrl: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/originals', param)
  },
  originalInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/save/add', param)
  },
  originalInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/save/update', param)
  },
  deleteOriginalInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/logic/delete/' + param, param)
  },
  initFuncsTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/initFuncsTree/synchro', param)
  },
  initFuncsAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/initfuncs/save', param)
  },
  originalInfoCopy: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'original/copy', param)
  }
}
