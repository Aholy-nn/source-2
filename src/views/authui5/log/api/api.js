/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-05-28 16:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  auditLogQuery: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'log/audits', param)
  },
  logonLogQuery: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'log/logon', param)
  },
  operateLogQuery: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'log/oper', param)
  },
  sqlLogQuery: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'log/sql', param)
  }
}
