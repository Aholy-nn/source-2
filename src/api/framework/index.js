/*
 * @Author: your name
 * @Date: 2019-12-18 12:54:35
 * @LastEditTime: 2020-06-02 15:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\api\framework\index.js
 */
import http from '@/common/http/api-request.js'
import qs from 'qs'
import store from '@/store'
// TODO 要符合单一职责模式，api参数要明确
export default {
  checkPrivileges: function (param) {
    // app判断
    let appId = store.getters.getterCurrAppId
    let url = process.env.IRETAIL_WEB + 'auth/manage/privilege/valid'
    if (appId && appId !== '') {
      url = url + '/' + appId
    }
    return http.post(url, param)
  },
  login: function (loginDTO, headers) {
    return http.post(process.env.IRETAIL_WEB + 'login', qs.stringify(loginDTO), {headers: headers})
  },
  // 多租户相关
  queryTenantByCode: function (tenantCode) {
    return http.get(process.env.IRETAIL_WEB + 'tenant/code/' + tenantCode)
  },
  // 验证码
  getSecurityCode: function () {
    return http.get(process.env.IRETAIL_WEB + 'SecurityCode.sl')
  },
  logout: function () {
    return http.get(process.env.IRETAIL_WEB + 'logout')
  },
  getSessionData: function () {
    return http.get(process.env.IRETAIL_WEB + 'auth/session/store')
  },
  getAllAppDict: function (appId) {
    let url = process.env.IRETAIL_WEB + '/dict/getAllAppDict'
    if (appId && appId !== '') {
      url = url + '/' + appId
    }
    return http.post(url)
  },
  getCurrentUser: function () {
    return http.get(process.env.IRETAIL_WEB + 'auth/manage/user/currentUser')
  },
  menuQuery: function (userId) {
    let appId = store.getters.getterCurrAppId
    if (appId && appId !== '') {
      return http.get(process.env.IRETAIL_WEB + 'auth/manage/function/' + userId + '/menus/' + appId)
    }
    return http.get(process.env.IRETAIL_WEB + 'auth/manage/function/' + userId + '/menus')
  },
  isAuth: function () {
    return http.get(process.env.IRETAIL_WEB + 'auth/manage/isAuth')
  },
  initFuncPrivilege () {
    let appId = store.getters.getterCurrAppId
    let url = process.env.IRETAIL_WEB + 'auth/manage/initFuncPrivilege'
    if (appId && appId !== '') {
      url = url + '/' + appId
    }
    return http.get(url)
  },
  queryUnreadCount () {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/queryUnreadCount')
  },
  queryUserNotice (param) {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/query', param)
  }
}
