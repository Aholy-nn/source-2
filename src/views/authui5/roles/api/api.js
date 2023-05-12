/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-06-16 14:25:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  queryRoles: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'role/tree/Roles', params)
  },
  getRoleTree: function (pid) {
    let url = '' + process.env.IRETAIL_WEB
    if (pid) {
      url = 'role/getRoleTree' + '/' + pid
    } else {
      url = 'role/getRoleTree/root'
    }
    return http.get(url)
  },
  rolesInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/save/add', param)
  },
  rolesInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/save/update', param)
  },
  rolesInfoDel: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'role/delete/' + param)
  },
  // 配置用户
  getOrgUserTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/orgUserTree', param)
  },
  saveUserRoleInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/saveRoleUser', param)
  },
  getUserOrgTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'org/getOrgsTree', param)
  },
  roleUserWaitList: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'user/query/page/role/wait', param)
  },
  roleUserList: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'user/users/searchUserOrgRole', param)
  },
  changeBatch: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/user/changebatch', param)
  },
  // 配置组织
  getOrgTree: function () {
    return http.post(process.env.IRETAIL_WEB + 'org/getOrgsTree/synchro')
  },
  getOrgChecks: function (roleId) {
    return http.get(process.env.IRETAIL_WEB + 'role/orgIds/' + roleId)
  },

  saveOrgRoleInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/saveOrgRole', param)
  },
  // 管理授权
  rolePrivilege: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/roleFuncTree/synchro', param)
  },
  saveRolePrivilege: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/save/rolePrivilege', param)
  },
  // 配置数据授权
  dataRoleTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'category/dataTree', param)
  }
}
