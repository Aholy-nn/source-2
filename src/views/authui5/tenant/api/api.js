/*
 * @Author: your name
 * @Date: 2020-04-30 11:24:44
 * @LastEditTime: 2020-05-19 20:33:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\original\api\originalAPI.js
 */
import http from '@/common/http/api-request.js'
export default {
  queryUrl: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/tenants', params)
  },
  initFuncListQuery: function () {
    return http.get(process.env.IRETAIL_WEB + 'tenant/init/funcs')
  },
  tenantAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/save/add', param)
  },
  tenantUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/save/update', param)
  },
  tenantDel: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/delete/' + param, param)
  },
  // 管理员配置
  tenantAdminInfo: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/admin/info', params)
  },
  tenantAdminInfoEdit: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/admin/edit', params)
  },
  // 密码重置
  tenantAdminPassReset: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/resetpass', params)
  },
  // 菜单权限
  queryTenantAdminRoleId: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/admin/role', params)
  },
  adminPrivilegeTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'role/roleFuncTree/synchro', param)
  },
  saveAdminPrivilege: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/admin/save/adminPrivilege', param)
  },
  // 启用
  tenantBatchReset: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/update/' + param, param)
  },
  // 停用
  tenantBatchStop: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/stop/' + param, param)
  },
  queryApps: function (param, id) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/apps/' + id, param)
  },
  saveTenantApp: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'tenant/saveTenantApp', param)
  }
}
