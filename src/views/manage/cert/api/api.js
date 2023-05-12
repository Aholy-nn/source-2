/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-06-03 17:17:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  query: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'manage/certManage/certManagefs', param)
  },
  save: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'manage/certManage/save/add', data)
  },
  generateCert: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'manage/certManage/generateKey', data)
  },
  downCert: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'manage/certManage/downLoadCert/' + data.certId + '/' + data.certName)
  },
  del: function (data) {
    let delUrl = process.env.IRETAIL_WEB + 'manage/certManage/delete/' + data
    return http.post(delUrl)
  },
  getDownCertUrl: function () {
    return process.env.IRETAIL_WEB + 'manage/certManage/downLoadCert'
  }
}
