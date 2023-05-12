/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-02-27 10:51:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  query: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'sysappinfo/sysappinfos', param)
  },
  sysAppInfoDel: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'sysappinfo/delete/' + param, param)
  },
  sysAppInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'sysappinfo/save/add', param)
  },
  sysAppInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'sysappinfo/save/update', param)
  }
}
