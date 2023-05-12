/*
 * @Author: your name
 * @Date: 2020-02-16 18:55:14
 * @LastEditTime: 2020-02-28 11:30:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\function\api\api.js
 */
import http from '@/common/http/api-request.js'
export default {
  // 树列表
  getUserGroupTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'group/getUserGroupTree', param)
  },
  addGroupInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'group/save/add', param)
  },
  updateGroupInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'group/save/update', param)
  },
  deleteGroupInfo: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'group/delete/' + param)
  }
}
