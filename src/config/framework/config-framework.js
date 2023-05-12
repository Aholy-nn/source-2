/*
 * @Author: your name
 * @Date: 2019-12-31 10:56:55
 * @LastEditTime: 2020-09-04 14:07:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ilead-ui\ilead4admin-ui\src\config\framework\config-framework.js
 */
export default {
  /**
     * @description 配置显示在浏览器标签的title
     */
  title: '',
  /**
     * @description token在Cookie中存储的天数，默认1天
     */
  cookieExpires: 1,
  /**
     * @description 是否使用国际化，默认为false
     *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
     *              用来在菜单中显示文字
     */
  useI18n: true,
  /**
     * @description api请求基础路径
     */
  baseUrl: {
    development: '/api/',
    testing: '/api/',
    production: '/api/'
  },
  /**
     * @description 默认打开的首页的路由name值，默认为home
     */
  homeName: '/home',
  /**
     * @description 需要加载的插件
     */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },
  ifTitle: '',
  // 是否显示面包屑
  ifBreadcrumb: true,
  // 默认不开启缓存模式
  ifCache: false,
  ajaxType: 'AJAX_REQUEST', // HTTP_CLIENT
  // 认证方式
  authType: '1',
  // 是否是国际化
  ifLocale: true,
  // 是否显示demo菜单
  ifDemoMenu: true,
  // 动态菜单的显示类型，type为1时本地路由，type为2时动态获取
  menuType: 1,
  // 是否SSO登录
  ifSSO: false,
  // 单点登录类型 CAS/OAuth2/iLead
  SSOType: 'CAS',
  // CAS单点登录配置
  CAS: {
    // CAS服务器地址(注意最后不要加/)
    server: 'http://localhost:8080/cas',
    // CAS客户端地址(注意最后不要加/)
    client: 'http://localhost:8086',
    // CAS客户端标识
    clientName: 'webapp'
  },
  // OAuth2单点登录配置
  OAuth2: {
    loginUrl: 'http://localhost:9080/oauth/authorize',
    logoutUrl: 'http://localhost:9080/logout',
    clientName: 'webapp'
  },
  mainDomain: '.ilead-dhc.com',
  // 白名单
  urlWhiteList: [process.env.IRETAIL_WEB + 'login', process.env.IRETAIL_WEB + 'SecurityCode.sl.*', process.env.IRETAIL_WEB + 'tenant/code.*', process.env.IRETAIL_WEB + 'auth/manage/isAuth'],
  // 是否多应用
  multiApp: false,
  // 是否多租户
  ifTenant: false,
  // content-type
  http: {
    header: {
      'content-type': 'application/json;charset=UTF-8'
    }
  },
  // 是否tab
  ifTab: true,
  // 是否开启站内信功能
  ifNotice: false,
  // 站内信服务器地址
  NoticeWsUrl: 'http://localhost:8082',
  // 是否开启密码加密传输，开启后，修改密码时，前端将按照EncryptMode配置，传递加密后的密码
  PasswordEncryptTransfer: true,
  // 前后端密码传输加密方式，sm4/md5/aes/sha256；选择aes加密时，目前采用aes-ECB模式
  EncryptMode: 'md5',
  // 加密模式为aes时的加密密钥
  AesSecretKey: 'abcdsxyzhkj12345',
  // 加密模式为SM4时的加密密钥
  SM4SecretKey: '1691219580620394',
  // 配置值为true时，登录页面使用加载验证码
  isVerifySecurcode: false
}
