/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-02-28 09:05:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  authAppQuery: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappinfo/authappinfos', param)
  },
  authResQuery: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappresinfo/authappresinfos', param)
  },
  appResInfoDelete: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappresinfo/delete/' + param, param)
  },
  appResInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappresinfo/save/add', param)
  },
  appResInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'authappresinfo/save/update', param)
  },
  getAppResTree: function (param) {
    let url = ''
    if (param.pid) {
      url = process.env.IRETAIL_WEB + 'authappresinfo/appResTree/' + param.pid + '/' + param.appId
    } else {
      url = process.env.IRETAIL_WEB + 'authappresinfo/appResTree/root/' + param.appId
    }
    return http.get(url)
  }
}
