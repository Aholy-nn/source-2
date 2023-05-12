/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-02-27 11:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  query: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappinfo/authappinfos', param)
  },
  authAppInfoDel: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappinfo/delete/' + param, param)
  },
  authAppInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappinfo/save/add', param)
  },
  authAppInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappinfo/save/update', param)
  }
}
