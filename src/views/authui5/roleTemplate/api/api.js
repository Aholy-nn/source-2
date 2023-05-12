/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-05-11 11:55:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  queryRoles: function (originalId, params) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/tree/' + originalId, params)
  },
  getTempRoleTree: function (pid, originalId) {
    var url = '' + process.env.IRETAIL_WEB
    if (pid) {
      url = 'roletemplate/getRoleTree' + '/' + pid + '/' + originalId
    } else {
      url = 'roletemplate/getRoleTree' + '/root'
    }
    return http.get(url)
  },
  rolesTempInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/save/add', param)
  },
  rolesTempInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/save/update', param)
  },
  rolesTempInfoDel: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'roletemplate/delete/' + param)
  },
  // 菜单权限
  roleTempPrivilegeTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/roleFuncTree/synchro', param)
  },
  saveRoleTempPrivilege: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/save/roleTempPrivilege', param)
  },
  dataRoleTempTreeURL: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/dataTree', param)
  },
  saveRoleDataCateTempInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'roletemplate/saveRoleDataCateTemp', param)
  }
}
