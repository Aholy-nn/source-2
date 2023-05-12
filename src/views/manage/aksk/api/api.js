/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-06-01 14:31:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  query: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'akSk/akSks', param)
  },
  save: function () {
    var url = process.env.IRETAIL_WEB + 'akSk/save/add'
    var newParam = '{"keyId":"111"}'
    return http.post(url, newParam)
  },
  update: function (param) {
    var url = process.env.IRETAIL_WEB + 'akSk/save/update'
    return http.post(url, param)
  },
  del: function (param) {
    var url = process.env.IRETAIL_WEB + 'akSk/del/' + param
    return http.get(url)
  },
  akSkResTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappresinfo/getResTree', param)
  },
  saveAkResInfo: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'akSk/saveAkSkRes', params)
  }
}
