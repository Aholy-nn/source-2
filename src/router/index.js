/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 13:03:26
 * @LastEditTime: 2020-06-02 15:16:40
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import routesFrame from './framework/routers-framework'
import routesDemo from './framework/routers-demo'
import routerMenu from '@/router/framework/routers-menu.js'
import routesExt from './routers'
import config from '@/config'
import zView from 'zview'
import framweAPI from '@/api/framework/index.js'
import auth from '@/common/auth'
import store from '@/store'
import uiManage from '@/common/ui-manage'
// import http from '@/common/http/api-request.js'

const { homeName } = config
const isLocal = process.env.IF_LOCAL && process.env.IF_LOCAL === 'local'
let routes = config.ifDemoMenu ? routesFrame.concat(routesDemo) : routesFrame
if (isLocal) {
  // 添加路由
  routes = routes.concat(routesExt)
  // 添加菜单
  store.commit('setMenuData', routes)
} else {
  // 添加菜单
  store.commit('setMenuData', routes)
  // 本地路由时，添加路由
  if (config.menuType === 1) {
    routes = routes.concat(routerMenu, routesExt)
  }
}
Vue.use(Router)
const router = new Router({
  routes
  // mode: 'history' //默认不开启history
})
const LOGIN_PAGE_NAME = 'login'
// 导航守卫
router.beforeEach((to, from, next) => {
  zView.LoadingBar.start()
  // 设置loading
  store.commit('setPageLoading', true)
  let authHeader = auth.getAuthHeader()
  let authToken = authHeader.authToken
  // let tokenSession = authHeader.tokenSession
  let userCode = authHeader.userCode
  if (!to.name) {
    next({
      path: '/abnormal/404'
    })
  }
  let that = this
  if (isLocal) {
    auth.removeAuthToken()
    if (to.name === 'home') {
      zView.Spin.show({
        render: (h) => {
          return h('div', [
            h('z-animate-loading')
          ])
        }
      })
    } else if (to.name === LOGIN_PAGE_NAME) {
      next({
        path: homeName
      })
    }
    next()
  } else {
    if (to.name === LOGIN_PAGE_NAME) {
      if (config.ifSSO === false) {
        next()
        return
      }
    }
    let authData = auth.checkLocalAuthToken(to.name)
    switch (authData.code) {
      case 'auth01': // 成功
        if (to.name === LOGIN_PAGE_NAME) {
          next({
            path: homeName
          })
        } else if (to.name === 'home') {
          zView.Spin.show({
            render: (h) => {
              return h('div', [
                h('z-animate-loading')
              ])
            }
          })
          if (store.getters.getterCurrOrgId === '' && store.getters.getterUserCode === '' && store.getters.getterUserName === '') {
            framweAPI.getSessionData().then(function (response) {
              let data = response.data.data
              framweAPI.getAllAppDict(data.appIdCurr).then(function (response) {
                if (response.data.code === '01') {
                  sessionStorage.setItem('dictData', JSON.stringify(response.data.data))
                } else {
                  console.log(response.data.msg)
                }
              }).catch(function (error) {
                console.log(that.$t('framework.messsage.getDictDataFail') + '||' + error)
              })
              store.dispatch('setSessionStore', data).then(data => {
                uiManage.initFuncurl()
                next()
              }).catch(() => {})
            }).catch(function (error) {
            // 取消loading
              store.commit('setPageLoading', false)
              console.log(that.$t('framework.messsage.getSessionDataFail') + error)
            })
          } else {
            next()
          }
        } else if (to.name === '_home') {
          zView.Spin.show({
            render: (h) => {
              return h('div', [
                h('z-animate-loading')
              ])
            }
          })
          framweAPI.getSessionData().then(function (response) {
            let data = response.data.data
            framweAPI.getAllAppDict(data.appIdCurr).then(function (response) {
              if (response.data.code === '01') {
                sessionStorage.setItem('dictData', JSON.stringify(response.data.data))
              } else {
                console.log(response.data.msg)
              }
            }).catch(function (error) {
              console.log(that.$t('framework.messsage.getDictDataFail') + '||' + error)
            })
            store.dispatch('setSessionStore', data).then(data => {
              uiManage.initFuncurl()
              next({
                path: homeName
              })
            }).catch(() => {})
          }).catch(function (error) {
          // 取消loading
            store.commit('setPageLoading', false)
            console.log(that.$t('framework.messsage.getSessionDataFail') + error)
          })
        } else {
          if (store.getters.getterCurrOrgId === '' && store.getters.getterUserCode === '' && store.getters.getterUserName === '') {
            framweAPI.getSessionData().then(function (response) {
              let data = response.data.data
              framweAPI.getAllAppDict(data.appIdCurr).then(function (response) {
                if (response.data.code === '01') {
                  sessionStorage.setItem('dictData', JSON.stringify(response.data.data))
                } else {
                  console.log(response.data.msg)
                }
              }).catch(function (error) {
                console.log(that.$t('framework.messsage.getDictDataFail') + '||' + error)
              })
              store.dispatch('setSessionStore', data).then(data => {
                uiManage.initFuncurl()
                next()
              }).catch(() => {})
            }).catch(function (error) {
            // 取消loading
              store.commit('setPageLoading', false)
              console.log(that.$t('framework.messsage.getSessionDataFail') + error)
            })
          } else {
            next()
          }
        }
        break
      case 'auth02': // authToken不存在
        if (config.ifSSO && config.ifSSO === true) {
          let xAuthToken = decodeURIComponent((new RegExp('[?|&]x-auth-token=' + '([^&;]+?)(&|#|;|$)').exec(window.location.href) || ['', ''])[1].replace(/\+/g, '%20')) || null
          if (xAuthToken) {
            sessionStorage.setItem('token', xAuthToken)
          }
          framweAPI.isAuth().then(function (response) {
            let data = response.data
            if (data && data.code !== '' && data.code === '01') {
              if (config.SSOType === 'CAS' || config.SSOType === 'OAuth2') {
                framweAPI.login({}).then(function (response) {
                  let loginResultData = response.data
                  if (loginResultData.code === '01') {
                    if (loginResultData.authToken && config.authType === '1') {
                      let authData = {}
                      authData.authToken = loginResultData.authToken
                      authData.token = loginResultData.xAuthToken
                      authData.userCode = loginResultData.userCode
                      auth.setAuthToken(authData)
                      // 单点登录时，国际化写死为zh-CN
                      sessionStorage.setItem('locale', 'zh-CN')
                      next({
                        path: '/'
                      })
                    }
                  }
                }).catch(function (error) {
                  console.log(that.$t('framework.messsage.appLoginFail') + '||' + error)
                })
              } else {
                // 访问到home
                next({
                  path: '/'
                })
              }
            } else if (data && data.code !== '' && data.code === '03' && config.SSOType === 'OAuth2') {
              window.location.href = config.OAuth2.loginUrl + '?client_id=' + config.OAuth2.clientName + '&response_type=code'
            }
          }).catch(function (error) {
            console.log(error)
            if (config.SSOType === 'CAS') {
              window.location.href = config.CAS.server + '/login?service=' + config.CAS.client + config.baseUrl.production + 'callback?client_name=' + config.CAS.clientName
            } else if (config.SSOType === 'OAuth2') {
              window.location.href = config.OAuth2.loginUrl + '?client_id=' + config.OAuth2.clientId + '&response_type=code'
            }
          })
        } else {
          next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
          })
        }
        break
      case 'auth02-1': // x-auth-token不存在
        if (config.ifSSO && config.ifSSO === true) {
          let loginDTO = {'usercode': userCode, 'passwd': '000'}
          // 判断是否是SSO
          framweAPI.login(loginDTO).then(function (response) {
            let loginResultData = response.data
            if (loginResultData.code === '01') {
              if (loginResultData.authToken && config.authType === '1') {
                let authData = {}
                let token = loginResultData.xAuthToken
                authData.authToken = authToken
                authData.token = token
                authData.userCode = userCode
                auth.setAuthToken(authData)
                next({
                  path: '/'
                })
              }
            }
          }).catch(function (error) {
            console.log(that.$t('framework.messsage.appLoginFail') + '||' + error)
          })
        } else {
          next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
          })
        }
        break
      case 'auth03': // 系统缓存token失效
        if (config.ifSSO && config.ifSSO === true) {
          framweAPI.isAuth().then(function (response) {
            let data = response.data
            if (data && data.code !== '' && data.code === '01') {
            // 访问到home
              next({
                path: '/'
              })
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
          })
        }
        break
      case 'auth04': break // token 不一致
      default:window.location.href = 'about:blank'
    }
  }
})
router.onError(function (error) {
  router.push({
    path: '/abnormal/404'
  })
  console.log(error)
  zView.LoadingBar.finish()
  // 取消loading
  store.commit('setPageLoading', false)
  zView.Spin.hide()
})

router.afterEach(to => {
  // http.get('/pageview/update', {
  //   'path': to.path
  // }).then(() => {})
  // 取消loading
  store.commit('setPageLoading', false)
  zView.LoadingBar.finish()
  zView.Spin.hide()
})

export default router
