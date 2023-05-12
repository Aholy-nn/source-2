/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 15:32:41
 * @LastEditTime: 2020-05-21 15:08:36
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import store from '@/store'
import frameConfig from '@/config'
import auth from '../auth'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  // eslint-disable-next-line no-undef
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    // TODO 放到Config统一配置
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': frameConfig.http.header['content-type'],
        'X-Requested-With': 'XMLHttpRequest',
        '__REQUEST_TYPE': 'AJAX_REQUEST'
      },
      timeout: 50000,
      withCredentials: true
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // if (config.method === 'post' && config.headers.post['Content-Type'].indexOf('application/x-www-form-urlencoded') >= 0) {
      //   config.data = qs.stringify(config.data)
      // }
      let checkData = auth.checkLocalAuthToken(url)
      if (checkData.code === 'auth01') {
        let authHeader = auth.getAuthHeader()
        let authToken = authHeader.authToken
        let userCode = authHeader.userCode
        // 获取session相关token('x-auth-token')
        let tokenSession = authHeader.tokenSession
        let tenantId = authHeader.tenantId
        if (authToken && userCode && authToken !== '' && userCode !== '' && authToken !== null && userCode !== null) {
          config.headers['AUTH_TOKEN'] = authToken
          config.headers['USER_CODE'] = userCode
          if (tenantId && tenantId != null && tenantId !== '') {
            config.headers['tenant-id'] = tenantId
          }
        }
        // 只要前端session存储了x-auth-token就在请求头中附加传送到后端，这样保证在登录失败获取验证码时，前后端session始终维持一个
        if (tokenSession && tokenSession != null && tokenSession !== '') {
          config.headers['x-auth-token'] = tokenSession
        }
      } else {
        console.log('axios error!' + checkData.msg)
      }
      config.headers['AUTH_TYPE'] = frameConfig.authType
      if (frameConfig.ifLocale) {
        let locale = sessionStorage.getItem('locale')
        config.headers['locale'] = locale
      }
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      // 由于在登录请求在失败时的后端返回的x-auth-token在请求头中，而为了在登录失败时可以获取x-auth-token，不再过滤请求头信息
      if (url !== 'login') {
        const { data, status } = res
        auth.authHandler(data)
        return { data, status }
      } else {
        const { data, status, headers } = res
        auth.authHandler(data)
        return { data, headers, status }
      }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
