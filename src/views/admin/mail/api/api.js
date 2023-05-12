/*
 * @Author: wangzelin
 * @Date: 2020-11-17 15:41:37
 * @LastEditTime: 2020-11-18 09:28:37
 * @LastEditors:wangzelin
 * @Description: API for mail
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\mail\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  mailInfoQuery: function (mail) {
    return http.post(process.env.IRETAIL_WEB + 'sysMail/query', mail)
  },
  // 添加
  mailInfoAdd: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysMail/save/add', params)
  },
  // 删除
  mailInfoDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysMail/del/' + params)
  },
  // 编辑
  mailInfoEdit: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysMail/save/update', params)
  }
}
