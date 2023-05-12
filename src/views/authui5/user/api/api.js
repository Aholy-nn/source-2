/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-06-02 15:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 添加
  noticefrontEndTest: function (params) {
    return http.get(process.env.IRETAIL_NOTICE_SERVICE + 'notice/frontEndTest/' + params)
  },
  // 查询所有用户信息
  userInfoQuery: function (model) {
    return http.post(process.env.IRETAIL_WEB + 'user/users', model)
  },
  // 查询指定用户扩展信息
  userExtendInfoById: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'user/userExtendOnly/' + param)
  },
  // 重置过期用户
  userReset: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/resetuser/' + params)
  },
  // 解锁
  unlock: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/unlock/' + params)
  },
  // 重置密码
  pasReset: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/resetpass/' + params)
  },
  // 所属组织查询
  orgTreeQuery: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'org/getOrgsTree', params)
  },
  // 添加
  userInfoAdd: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/add', params)
  },
  // 添加,编辑用户扩展信息
  userExtendInfoAdd: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/saveExtend', params)
  },
  // 删除
  userInfoDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/del/' + params)
  },
  // 编辑
  userInfoEdit: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/edit', params)
  },
  getOrgs: function (pid) {
    let temp = '' + process.env.IRETAIL_WEB
    if (pid) {
      temp = 'org/org/' + pid + '/orgs'
    } else {
      temp = 'org/org/root/orgs'
    }
    return http.get(temp)
  },
  // 修改密码
  userPasUpdate: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/changepassword', params)
  },
  // 修改当前用户密码，传递密文
  userSelfPasEncryptUpdate: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/changeSelfPassword/security', params)
  },
  // 修改密码，传递密文
  userPasEncryptUpdate: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/changePassword/security', params)
  },
  // 配置用户组
  getUserGroupTree: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'group/getUserGroupTree', params)
  },
  saveGroupInfo: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/saveGroup', params)
  },
  // 配置角色
  queryRoles: function (params, id) {
    return http.post(process.env.IRETAIL_WEB + 'role/tree/' + id, params)
  },
  saveUserRoleInfo: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'user/saveUserRole', params)
  }
}
