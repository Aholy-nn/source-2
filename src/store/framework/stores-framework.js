/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 09:51:28
 * @LastEditTime: 2020-06-02 14:07:43
 * @LastEditors: Please set LastEditors
 */
import Router from '@/router'
import Utils from '@/utils'
import config from '@/config'
export default {
  state: {
    menuData: [],
    userId: '',
    userName: '',
    userCode: '',
    orgId: '',
    orgCode: '',
    orgName: '',
    // 本地语言
    locale: (navigator.language && navigator.language.substr(0, 2)) + '-' + (navigator.language && navigator.language.substr(3, 2)) || navigator.userLanguage.substr(0, 2) + '- ' + navigator.userLanguage.substr(3, 2),
    localeMap: [], // 后台国际化配置
    currentAdminRoleId: '',
    userPswRule: '',
    sysAppInfos: [],
    // 是否是超级管理员1是，0否， 空 否
    isAdminRootRole: '',
    // 是否是超级管理员或者租户管理员1是，0否， 空 否
    isRootRole: '',
    appId: '',
    appCode: '',
    currentRoute: '',
    errorList: [],
    hasReadErrorPage: false,
    // menuList: [],
    menuAction: {},
    breadCrumbList: [],
    tabList: [],
    homeRoute: {},
    // 是否显示页面loading
    pageLoading: false
  },
  getters: {
    getterUserCode (state) {
      return state.userCode
    },
    getterUserName (state) {
      return state.userName
    },
    getterUserId (state) {
      return state.userId
    },
    getterCurrAppId (state) {
      return state.appId
    },
    getterCurrOrgId (state) {
      return state.orgId
    },
    getterCurrentAdminRoleId (state) {
      return state.currentAdminRoleId
    }
  },
  mutations: {
    setMenuData: function (state, routers) {
      this.state.menuData = Utils.getMenuByRouter(routers)
    },
    setUserId: function (state, userId) {
      this.state.userId = userId
    },
    setUserName: function (state, userName) {
      this.state.userName = userName
    },
    setUserCode: function (state, userCode) {
      this.state.userCode = userCode
    },
    setOrgId: function (state, orgId) {
      this.state.orgId = orgId
    },
    setOrgCode: function (state, orgCode) {
      this.state.orgCode = orgCode
    },
    setOrgName: function (state, orgName) {
      this.state.orgName = orgName
    },
    setLocale: function (state, locale) {
      this.state.locale = locale
    },
    setLocaleMap: function (state, localeMap) {
      this.state.localeMap = localeMap
    },
    setUserPswRule: function (state, userPswRule) {
      this.state.userPswRule = userPswRule
    },
    setCurrentAdminRoleId: function (state, currentAdminRoleId) {
      this.state.currentAdminRoleId = currentAdminRoleId
    },
    setSysAppInfos: function (state, sysAppInfos) {
      this.state.sysAppInfos = sysAppInfos
    },
    setISAdminRootRole: function (state, isAdminRootRole) {
      this.state.isAdminRootRole = isAdminRootRole
    },
    setISRootRole: function (state, isRootRole) {
      this.state.isRootRole = isRootRole
    },
    setAppId: function (state, appId) {
      this.state.appId = appId
    },
    setAppCode: function (state, appCode) {
      this.state.appCode = appCode
    },
    setCurrentRoute: function (state, currentRoute) {
      this.state.currentRoute = currentRoute
    },
    setHasReadErrorLoggerStatus (state, status = true) {
      state.hasReadErrorPage = status
    },
    addError (state, error) {
      state.errorList.push(error)
    },
    // setMenuList (state, menuList) {
    //   this.state.menuList = menuList
    // },
    setMenuAction (state, menuAction) {
      this.state.menuAction = menuAction
    },
    setBreadCrumbList (state, route) {
      this.state.breadCrumbList = Utils.getBreadCrumbList(route)
    },
    setTabList (state, tabList) {
      this.state.tabList = tabList
    },
    setHomeRoute (state, home) {
      let routes = Router.options.routes
      this.state.homeRoute = Utils.getHomeRoute(routes, home)
    },
    setPageLoading (state, pageLoading) {
      this.state.pageLoading = pageLoading
    }
  },
  actions: {
    addErrorLog ({ commit, rootState }, info) {
      console.log(info)
    // if (!window.location.href.includes('error_logger_page')) commit('setHasReadErrorLoggerStatus', false)
    // const { user: { token, userId, userName } } = rootState
    // let data = {
    //   ...info,
    //   time: Date.parse(new Date()),
    //   token,
    //   userId,
    //   userName
    // }
    // 保存数据库
    // saveErrorLogger(info).then(() => {
    //   commit('addError', data)
    // })
    },
    setSessionStore ({ state, commit }, obj) {
      let data = obj
      let sysAppInfos = data['sysAppInfos']
      let isAdminRootRole = data['isAdminRootRole']
      let adminRoleId = data['adminRoleId']
      let userPswRule = data['userPswRule']
      let appIdCurr = data['appIdCurr']
      let userId = data['userId']
      let userCode = data['userCode']
      let userName = data['userName']
      let orgId = data['orgId']
      let orgName = data['orgName']
      commit('setUserId', userId)
      commit('setUserCode', userCode)
      commit('setUserName', userName)
      commit('setOrgId', orgId)
      commit('setSysAppInfos', sysAppInfos)
      commit('setISAdminRootRole', isAdminRootRole)
      commit('setCurrentAdminRoleId', adminRoleId)
      commit('setUserPswRule', userPswRule)
      commit('setAppId', appIdCurr)
      commit('setOrgName', orgName)
      if (config.ifLocale) {
        commit('setLocaleMap', data['langConfig'])
      }
    },
    getCurrAppId ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          resolve(state.appId)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
