/*
 * @Author: your name
 * @Date: 2020-03-06 10:10:25
 * @LastEditTime: 2020-07-12 13:42:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\common\auth\index.js
 */
import Router from '@/router'
import Zview from 'zview'
import frameConfig from '@/config'
import {storageUtils} from 'ilead-utils'
import uiUtils from '@/utils'
import store from '@/store'
import i18n from '@/locale'

export default {
  // 接口认证
  authHandler: function (obj) {
    let errorObj = {
      token: [
        'token002', // 未传递认证标识
        'token003', // 认证方式异常或是不支持的认证方式
        'token004', // 请求中缺少refreshToken信息
        'token005', // 获取用户信息失败
        'token006', // 获取用户信息异常
        'token007', // 用户不存在
        'token008', // 用户密码错误
        'token009', // 未传递UserCode！
        'token010', // 未传递Token！
        'token011', // accessToken超时！
        'token012', // accessToken和userCode信息不符！
        'token000' // token服务异常
      ],
      aksk: [
        'aksk002', // 缺少AK参数
        'aksk003', // 未传递Ak或Signature！
        'aksk004', // 缺少认证参数signature或token！
        'aksk005' // ak和sk认证失败！
      ],
      app: [
        'app002' // 无权限访问此应用
      ],
      session: [
        'session002',
        '03', // 尚未登陆
        'login02'// 登录后台异常
      ]
      // TODO 多租户的错误枚举
    }
    let code = obj.code
    let msg = obj.msg
    let that = this
    if (!code) {
    //  console.log('缺少接口返回code为：')
    }
    if (!msg) {
      // console.log('缺少接口返回msg为：')
    }
    for (let attr in errorObj) {
      let array = errorObj[attr]
      array.forEach(function (value, index) {
        if (value === code) {
          that.errorHandler(obj, attr)
        }
      })
    }
  },
  // 错误处理，跳转到登录
  errorHandler: function (obj, errType) {
    this.removeAuthToken()
    store.commit('setPageLoading', false)
    Zview.Spin.hide()
    Zview.Modal.error({
      title: i18n.t('common.title.errorInfo'),
      content: obj.msg + ((frameConfig.ifSSO && frameConfig.ifSSO === true) ? '<p>' + i18n.t('framework.tips.redirectToPage') + '</p>' : ''),
      cancelText: '',
      onOk: () => {
        if (frameConfig.ifSSO && frameConfig.ifSSO === true) {
          switch (errType) {
            case 'token': window.location.href = obj.redirectUrl; break
            case 'app': window.location.href = obj.redirectUrl; break
            case 'session': window.location.href = obj.redirectUrl; break
            default:window.location.href = 'about:blank'
          }
        } else {
          if (Router.currentRoute && Router.currentRoute.path !== '/login') {
            Router.push('/login')
          }
        }
      }
    })
  },
  getAuthHeader () {
    let authHeader = {}
    if (frameConfig.ifSSO && frameConfig.ifSSO === true) {
      authHeader.authToken = storageUtils.getCookie('AUTH_TOKEN')
      authHeader.userCode = storageUtils.getCookie('USER_CODE')
      // authHeader.tenantId = storageUtils.getCookie('tenant-id')
      if (frameConfig.authType === '') {
        authHeader.tokenSession = storageUtils.getCookie('x-auth-token')
      } else {
        authHeader.tokenSession = sessionStorage.getItem('token')
      }
      authHeader.tenantId = sessionStorage.getItem('tenantId')
    } else {
      authHeader.authToken = sessionStorage.getItem('authToken')
      authHeader.userCode = sessionStorage.getItem('userCode')
      authHeader.tokenSession = sessionStorage.getItem('token')
      authHeader.tenantId = sessionStorage.getItem('tenantId')
    }
    return authHeader
  },
  setAuthToken (obj) {
    sessionStorage.setItem('authToken', obj.authToken)
    sessionStorage.setItem('userCode', obj.userCode)
    sessionStorage.setItem('token', obj.token)
    if (frameConfig.ifTenant) {
      sessionStorage.setItem('tenantId', obj.tenantId)
    }
  },
  checkLocalAuthToken (url) {
    let reData = {}
    reData.code = 'auth01'
    reData.msg = 'success'
    if (url && url !== '') {
      if (uiUtils.ifUrlWhiteList(url) === true) {
        return reData
      }
    }
    console.log(sessionStorage.getItem('token'))
    console.log(sessionStorage.getItem('authToken'))
    console.log(sessionStorage.getItem('userCode'))
    let sysTokenSession = sessionStorage.getItem('token')
    let sysAuthToken = sessionStorage.getItem('authToken')
    let sysUserCode = sessionStorage.getItem('userCode')
    if (!sysAuthToken || !sysUserCode || sysAuthToken === '' || sysUserCode === '') {
      reData.code = 'auth02'
      reData.msg = i18n.t('framework.messsage.auth02')
    } else if ((!sysTokenSession || sysTokenSession === '') && frameConfig.authType !== '3') {
      reData.code = 'auth02-1'
      reData.msg = i18n.t('framework.messsage.auth02_1')
    } else {
      let authTokenData = this.getAuthHeader()
      let authToken = authTokenData.authToken
      let userCode = authTokenData.userCode
      let tokenSession = authTokenData.tokenSession
      if (!authToken || !userCode || !tokenSession) {
        reData.code = 'auth03'
        reData.msg = i18n.t('framework.messsage.auth03')
      }
      if (frameConfig.authType !== '3' && !tokenSession) {
        reData.code = 'auth03'
        reData.msg = i18n.t('framework.messsage.auth03')
      }
      if (authToken !== sysAuthToken || userCode !== sysUserCode) {
        reData.code = 'auth04'
        reData.msg = i18n.t('framework.messsage.auth04')
      }
    }
    if (reData.code !== 'auth01') {
      store.commit('setPageLoading', false)
      Zview.Spin.hide()
      this.removeAuthToken()
      if (url && url !== '' && url === '_home') {
        return reData
      }
      Zview.Modal.error({
        title: i18n.t('common.title.errorInfo'),
        content: reData.msg + i18n.t('framework.tips.redirectToLoginPage'),
        cancelText: '',
        onOk: () => {
          if (reData.code === 'auth04') {
            if (frameConfig.ifSSO && frameConfig.ifSSO === true) {
              window.location.reload(true)
            } else {
              Router.push('/login')
            }
          }
        }
      })
    }
    return reData
  },
  removeAuthToken (act) {
    store.commit('setOrgId', '')
    store.commit('setUserCode', '')
    store.commit('setUserName', '')
    if (frameConfig.ifSSO && frameConfig.ifSSO === true) {
      let authToken = storageUtils.getCookie('AUTH_TOKEN')
      let userCode = storageUtils.getCookie('USER_CODE')
      let tokenSession = storageUtils.getCookie('x-auth-token')
      let token = sessionStorage.getItem('token')
      let tenantId = sessionStorage.getItem('token')
      if (authToken && authToken !== null) {
        if (act === 'all') {
          storageUtils.saveCookie('AUTH_TOKEN', '', frameConfig.mainDomain, null, -1)
        }
      }
      if (userCode && userCode !== null) {
        if (act === 'all') {
          storageUtils.saveCookie('USER_CODE', '', frameConfig.mainDomain, null, -1)
        }
      }
      if (tokenSession && tokenSession !== null) {
        if (act === 'all') {
          storageUtils.saveCookie('x-auth-token', '', frameConfig.mainDomain, null, -1)
          sessionStorage.removeItem('token')
        } else {
          if (frameConfig.authType === '') {
            storageUtils.saveCookie('x-auth-token', '', frameConfig.mainDomain, null, -1)
          } else {
            sessionStorage.removeItem('token')
          }
        }
      }
      if (token && token != null && token !== '') {
        sessionStorage.removeItem('token')
      }
      if (tenantId && tenantId != null && tenantId !== '') {
        sessionStorage.removeItem('tenantId')
      }
    }
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userCode')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('tenantId')
  }
// 页面认证
// 菜单权鉴
// 元素认证
}
