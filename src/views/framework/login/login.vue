<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 14:39:08
 * @LastEditTime: 2020-09-01 21:22:59
 -->
<template>
    <div class="ilead-login bg">
        <div class="container" v-cloak id="ileadLogin">
            <div class="ilead-login-subject">
                <img class="img-responsive" src="~assetspath/framework/login/ilead-login-subject.png" />
            </div>
            <div class="ilead-login-line">
                <img class="img-responsive" src="~assetspath/framework/login/ilead-login-line.png" />
            </div>
            <z-form ref="loginModel" :model="loginModel" :rules="rules" @keyup.enter.native="handleSubmit">
                <div class="ilead-login-box">
                    <div class="ilead-login-logo"><img class="img-responsive" src="~assetspath/framework/login/ilead-login-logo.png" />
                    </div>
                     <z-form-item prop="usercode">
                        <z-input type="text" size="large" :readonly="isReadonly" v-model="loginModel.usercode" placeholder="Username">
                            <z-icon type="android-person" slot="prepend"></z-icon>
                        </z-input>
                    </z-form-item>
                    <z-form-item prop="passwd">
                        <z-input type="password" size="large" :readonly="isReadonly" v-model="loginModel.passwd" placeholder="Password">
                            <z-icon type="ios-locked" slot="prepend"></z-icon>
                        </z-input>
                    </z-form-item>
                    <z-form-item prop="tenant"  v-if="ifTenant">
                        <z-input type="text" size="large" :readonly="isReadonly" v-model="tenantModel.tenantCode" placeholder="Tenant">
                            <z-icon type="android-person" slot="prepend"></z-icon>
                        </z-input>
                    </z-form-item>
                     <z-form-item  v-if="securityShow">
                       <!-- <div class="captcha"></div> -->
                       <z-row>
                        <z-col span="12">
                            <z-input id="securitycode" name="securitycode" v-model="loginModel.securitycode" type="text"
                                class="" placeholder="请输入验证码" />
                        </z-col>
                        <z-col span="12" class="text-center">
                           <img id="security_img" alt="点击图片刷新" :src="scodeURL" @click="refreshScode" />
                        </z-col>
                      </z-row>
                    </z-form-item>
                    <z-form-item>
                        <z-button type="primary" long :loading="isReadonly"  @click="handleSubmit">立即登录</z-button>
                    </z-form-item>
                    <div class="external-error">
                        {{errorMsg}}
                    </div>
                    <!-- 国际化 -->
                    <z-select v-if="ifLocale" @on-change="swtichLang" placeholder="语言" class="ilead-login_locale">
                        <z-option v-for="item in langs" :value="item.value" :key="item.value">{{item.text}}</z-option>
                    </z-select>
                </div>
            </z-form>
        </div>
    </div>

</template>
<script>
import Api from '@/api/framework'
import CryptoJS from 'crypto-js'
import config from '@/config'
import auth from '@/common/auth'
import locale from '@/locale'

const { homeName } = config
export default {
  data: function () {
    return {
      loginModel: {
        usercode: '',
        passwd: '',
        securitycode: ''
      },
      securityShow: false,
      errorMsg: '',
      rules: {
        usercode: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        securitycode: [
          { required: true, message: '请输入验证码！', trigger: 'blur' }
        ]
      },
      tenantModel: {
        tenantId: '',
        tenantCode: '',
        tenant: '',
        tenantList: []
      },
      isReadonly: false,
      sid: '',
      scodeURL: '#',
      langs: [
        {
          text: '中文',
          value: 'zh-CN'
        },
        {
          text: 'English',
          value: 'en-US'
        },
        {
          text: '日文',
          value: 'ja-JP'
        }
      ],
      ifLocale: config.ifLocale,
      ifTenant: config.ifTenant,
      sm4Config: {
        key: config.SM4SecretKey,
        mode: 'ecb', // default
        cipherType: 'hex' // default is base64
      }
    }
  },
  created: function () {
    sessionStorage.clear()
    if (config.isVerifySecurcode === true) {
      this.refreshScode()
      this.securityShow = true
    }
  },
  methods: {
    swtichLang: function (value) {
      this.$store.commit('setLocale', value)
      locale.locale = value
    },
    handleSubmit: function () {
      var that = this
      this.$refs['loginModel'].validate((valid) => {
        if (valid) {
          if (config.ifTenant && config.ifTenant === true) {
            Api.queryTenantByCode(that.tenantModel.tenantCode).then(function (response) {
              var tenant = response.data.data
              if (tenant !== null) {
                that.tenantModel.tenantId = tenant.tenantId
                that.loginHandler()
              } else {
                that.tenantModel.tenantCode = ''
                that.errorMsg = '没有获取到租户信息！'
                console.error('没有获取到租户信息！')
              }
            }).catch(function (error) {
              that.$Message.error('校验租户标识失败' + '||' + error)
              console.log('校验租户标识失败' + '||' + error)
            })
          } else {
            this.loginHandler()
          }
        } else {
          that.$Message.error('验证失败')
          console.log('验证失败')
        }
      })
    },
    loginHandler: function () {
      var that = this
      if (config.EncryptMode === 'sha256') {
        // 加密模式sha256
        let sha256 = require('js-sha256').sha256
        that.loginModel.passwd = sha256(that.loginModel.passwd).toString().toUpperCase()
      } else if (config.EncryptMode === 'aes') {
        // 加密模式aes
        let keyStr = config.AesSecretKey
        that.loginModel.passwd = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(that.loginModel.passwd), CryptoJS.enc.Utf8.parse(keyStr), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString().toUpperCase()
      } else if (config.EncryptMode === 'sm4') {
        // 加密模式sm4
        const SM4 = require('gm-crypt').sm4
        that.loginModel.passwd = (new SM4(this.sm4Config)).encrypt(that.loginModel.passwd).toUpperCase()
      } else {
        // 加密模式md5
        that.loginModel.passwd = CryptoJS.MD5(that.loginModel.passwd).toString().toUpperCase()
      }
      var loginDTO = Object.assign({}, that.loginModel)
      if (that.loginModel.securitycode === '') {
        delete loginDTO.securitycode
      }
      // 登录失败时，为了维持前后端（在后端sessionId解析模式为token时）session的一致，从sessionStore中清除信息时x-auth-token信息不清除
      let token = sessionStorage.getItem('token')
      // 清除缓存
      sessionStorage.clear()
      sessionStorage.setItem('token', token)
      if (config.ifLocale === true) {
        var localeValue = this.$store.state.locale
        sessionStorage.setItem('locale', localeValue)
      }
      // 登录后，添加只读状态
      that.isReadonly = true
      var headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', '__REQUEST_TYPE': 'AJAX_REQUEST'}
      // 租户标识
      if (config.ifTenant) {
        headers['tenant-id'] = that.tenantModel.tenantId
      }
      // 验证码
      let sid = this.sid
      if (sid && sid !== '') {
        headers['sid'] = sid
      }
      Api.login(loginDTO, headers).then(function (response) {
        let loginResultData = response.data
        if (loginResultData.code === '01') {
          if (response.data.authToken) {
            let token = response.data.xAuthToken
            let authObj = {}
            authObj.authToken = response.data.authToken
            authObj.userCode = that.loginModel.usercode
            authObj.token = token
            if (config.ifTenant) {
              authObj.tenantId = that.tenantModel.tenantId
            }
            console.log('1===1')
            console.log(authObj)
            auth.setAuthToken(authObj)
          } else {
            // 没有token
            that.securityShow = true
            that.loginModel.passwd = ''
            that.errorMsg = response.data.msg
            that.$Message.error({content: '登录后台失败,前后端分离没有Token！'})
            console.log('登录失败，前后端分离没有Token！')
            that.refreshScode()
            that.$store.commit('setPageLoading', false)
            return
          }
          that.errorMsg = ''
          that.securityShow = false
          that.isReadonly = false
          that.$store.commit('setPageLoading', false)
          that.$router.push(homeName)
          that.scodeURL = '#'
        } else {
          // 登录失败时，将后端返回的x-auth-token设置入请求头中，以保证(在后端sessionId解析模式为token时)每次获取/更新验证码时后端读取的是同一session不变(验证码存储在session中)
          // 注意前端的header中附带了x-auth-token，后端则不会生成
          token = response.headers['x-auth-token']
          // 如果返回信息的头部没有x-auth-token信息(则token变量值为undefined，undefined!==null且undefined!=='')，则不更新x-auth-token
          if (token) {
            let authObj = {}
            authObj.token = token
            auth.setAuthToken(authObj)
          }
          that.securityShow = true
          that.isReadonly = false
          that.$store.commit('setPageLoading', false)
          that.$Message.error('登录失败' + '||' + loginResultData.msg)
          that.reset()
          that.refreshScode()
        }
      }).catch(function (error) {
        that.isReadonly = false
        that.$Message.error('登录失败' + '||' + error)
        console.log('登录失败' + '||' + error)
      })
    },
    refreshScode: function () {
      let that = this
      Api.getSecurityCode().then(function (response) {
        if (response.data && response.data.code === '01') {
          that.scodeURL = response.data.data
        } else {
          that.$Message.error('获取验证码失败' + '||' + response.data.msg)
          console.log('获取验证码失败' + response.data.msg)
        }
      }).catch(function (error) {
        that.$Message.error('获取验证码失败' + '||' + error)
        console.log('获取验证码失败' + '||' + error)
      })
    },
    reset: function () {
      this.$refs.loginModel.resetFields()
    }
  }
}
</script>
<style>
 @import '../../../styles/framework/pages/login/login.css';
</style>
