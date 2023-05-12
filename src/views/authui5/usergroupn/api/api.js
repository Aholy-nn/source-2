/*
 * @Author: your name
 * @Date: 2020-02-16 18:55:14
 * @LastEditTime: 2020-05-10 20:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\function\api\api.js
 */
import http from '@/common/http/api-request.js'
export default {
  queryUrl: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'group/findGroupPageByCondition', param)
  },
  userGroupEdit: function (type, data) {
    return http.post(process.env.IRETAIL_WEB + 'new/group/save/' + type, data)
  },
  deleteUserGroup: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'group/deleteGroups', data)
  },
  groupUserList: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'user/users/searchUserOrgGroup', data)
  },
  getGroupOrgTree: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'org/getOrgsTree', data)
  },
  groupUserWaitList: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'user/query/page/group/wait', data)
  },
  changeBatch: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'new/group/changebatch', data)
  }
}
