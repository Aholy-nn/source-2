/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-06-16 14:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 树列表
  getOrgExtendTreeSynchro: function () {
    return http.post(process.env.IRETAIL_WEB + 'org/getOrgsExtendTree/synchro')
  },
  // 获取组织类型数据
  getOrgTypeDictItemList: function (param) {
    return http.post(process.env.IRETAIL_WEB + '/dict/DictItems', param)
  },
  // 组织添加
  addOrgExtendInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'org/saveExtend/org/add', param)
  },
  // 组织更新
  updateOrgExtendInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'org/saveExtend/org/update', param)
  },
  // 组织删除
  deleteOrgInfo: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'org/delete/' + param, param)
  },
  // 岗位添加
  addPositionInfo: function (param, parentType) {
    return http.post(process.env.IRETAIL_WEB + 'position/save/' + parentType + '/add', param)
  },
  // 岗位更新
  updatePositionInfo: function (param, parentType) {
    return http.post(process.env.IRETAIL_WEB + 'position/save/' + parentType + '/update', param)
  },
  // 岗位删除
  deletePositionInfo: function (param) {
    return http.get(process.env.IRETAIL_WEB + 'position/delete/' + param, param)
  },
  // 用户列表
  getOrgUsers: function (param, id) {
    return http.post(process.env.IRETAIL_WEB + 'org/users/' + id, param)
  },
  // 角色列表
  getOrgRoles: function (param, orgId) {
    return http.post(process.env.IRETAIL_WEB + 'org/roles/' + orgId, param)
  }
}
