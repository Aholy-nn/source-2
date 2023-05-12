<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-09 17:21:34
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('userManage.title.editPasTitle')" fixed max-height="500" width="600">
   <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
   <z-form ref="formItem" :model="formItem" :label-width="80" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate" @on-validate="onValidate">
        <form-item :label="$t('userManage.label.oldPas')"  prop="oldPas" class="m-t-20">
            <z-input type="password" v-model="formItem.oldPas" :maxlength="32" :placeholder="$t('userManage.placeholder.oldPas')" clearable></z-input>
        </form-item>
        <form-item :label="$t('userManage.label.newPas')"  prop="newPas">
            <!-- <z-input type="password" v-model="formItem.newPas" placeholder="请输入新密码..."></z-input> -->
            <!-- <ilead-pwdstrength ref="pwdlevel" :value="formItem.newPas">
            </ilead-pwdstrength> -->
             <z-input ref="pwdlevel" type="password" v-model="formItem.newPas" :maxlength="32" :placeholder="$t('userManage.placeholder.newPas')" pwdstrength :pwdstrength-config="pwdstrengthConfig" clearable></z-input>
        </form-item>
        <form-item :label="$t('userManage.label.repeatPas')"  prop="repeatPas">
            <z-input type="password" v-model="formItem.repeatPas" :maxlength="32"  :placeholder="$t('userManage.placeholder.repeatPas')" clearable></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="save('formItem')">{{$t('common.button.save')}}</z-button>
        <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
   </div>
</z-modal>
</template>
<script>
import userApi from '../api/api.js'
import Config from '@/config'
import CryptoJS from 'crypto-js'
export default {
  name: 'editPass',
  data: function () {
    return {
      modelIsOpen: false,
      formItem: {
        oldPas: '',
        newPas: '',
        repeatPas: ''
      },
      ruleValidate: {
        oldPas: [
          { required: true, message: '原密码不能为空' }
        ],
        newPas: [
          { required: true, message: '新密码不能为空' }
        ],
        repeatPas: [
          { required: true, message: '重复密码不能为空' }
        ]
      },
      from: '',
      errorMsg: '',
      pwdstrengthConfig: {
        // 当userPswRule=3时要求的最短密码长度
        minLength: 8
      },
      sm4Config: {
        key: Config.SM4SecretKey,
        mode: 'ecb', // default
        cipherType: 'hex' // default is base64
      }
    }
  },
  methods: {
    getData: function (data) {
      this.formItem.userId = data.userId
    },
    // 取消错误提示
    onValidate: function () {
      this.errorMsg = ''
    },
    save: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          // 从缓存中获取密码策略
          let userPswRule = that.$store.state.userPswRule
          // 根据输入的密码判断密码的强度
          let pwdLevel = that.$refs.pwdlevel.getPwdLevel()
          if (userPswRule === '1' && pwdLevel === '1') {
            that.$Modal.error({
              title: '密码不符合安全要求',
              content: '密码强度太弱！密码应至少包含英文大写、小写、数字、特殊字符中的两种'
            })
            return
          } else if (userPswRule === '2' && pwdLevel <= 2) {
            that.$Modal.error({
              title: '密码不符合安全要求',
              content: '密码强度太弱！密码应至少包含英文大写、小写、数字、特殊字符中的三种'
            })
            return
          } else if (userPswRule === '3' && pwdLevel <= 3) {
            that.$Modal.error({
              title: '密码不符合安全要求',
              content: '密码强度太弱！密码长度至少' + that.pwdstrengthConfig.minLength + '位，至少包含英文大写、小写、数字、特殊字符中的三种'
              // content: '密码强度太弱！密码应至少包含英文大写、小写、数字、特殊字符中的三种且大于12位'
            })
            return
          }
          if (Config.PasswordEncryptTransfer) {
            // 如果开启密码加密传输，则先加密，后访问相关接口
            if (Config.EncryptMode === 'sha256') {
              // sha256加密
              let sha256 = require('js-sha256').sha256
              that.formItem.oldPas = sha256(that.formItem.oldPas)
              that.formItem.newPas = sha256(that.formItem.newPas)
              that.formItem.repeatPas = sha256(that.formItem.repeatPas)
            } else if (Config.EncryptMode === 'aes') {
              // aes加密
              let keyStr = Config.AesSecretKey
              that.formItem.oldPas = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(that.formItem.oldPas), CryptoJS.enc.Utf8.parse(keyStr), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString().toUpperCase()
              that.formItem.newPas = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(that.formItem.newPas), CryptoJS.enc.Utf8.parse(keyStr), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString().toUpperCase()
              that.formItem.repeatPas = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(that.formItem.repeatPas), CryptoJS.enc.Utf8.parse(keyStr), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString().toUpperCase()
            } else if (Config.EncryptMode === 'sm4') {
              // sm4加密
              const SM4 = require('gm-crypt').sm4
              that.formItem.oldPas = (new SM4(that.sm4Config)).encrypt(that.formItem.oldPas).toUpperCase()
              that.formItem.newPas = (new SM4(that.sm4Config)).encrypt(that.formItem.newPas).toUpperCase()
              that.formItem.repeatPas = (new SM4(that.sm4Config)).encrypt(that.formItem.repeatPas).toUpperCase()
            } else {
              // md5加密
              that.formItem.oldPas = CryptoJS.MD5(that.formItem.oldPas).toString().toUpperCase()
              that.formItem.newPas = CryptoJS.MD5(that.formItem.newPas).toString().toUpperCase()
              that.formItem.repeatPas = CryptoJS.MD5(that.formItem.repeatPas).toString().toUpperCase()
            }
            // 判断是否修改的当前登录用户密码
            if (that.formItem.userId === that.$store.getters.getterUserId) {
              // 修改自己密码
              userApi.userSelfPasEncryptUpdate(that.formItem).then(function (response) {
                if (response.data.msg === '密码修改成功！') {
                  if (that.from !== 'main') {
                    that.$parent.refreshTable()
                  }
                  that.$Message.success(response.data.msg)
                  that.modelIsOpen = false
                } else {
                //   that.$Message.error(response.data.msg)
                  that.errorMsg = response.data.msg
                }
              }).catch(function (error) {
                console.log(error)
              })
            } else {
              // 修改用户管理中其余用户密码
              userApi.userPasEncryptUpdate(that.formItem).then(function (response) {
                if (response.data.msg === '密码修改成功！') {
                  if (that.from !== 'main') {
                    that.$parent.refreshTable()
                  }
                  that.$Message.success(response.data.msg)
                  that.modelIsOpen = false
                } else {
                //   that.$Message.error(response.data.msg)
                  that.errorMsg = response.data.msg
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          } else {
            // 如果未开启密码加密传输，则直接明文传递即可
            userApi.userPasUpdate(that.formItem).then(function (response) {
              if (response.data.msg === '密码修改成功！') {
                if (that.from !== 'main') {
                  that.$parent.refreshTable()
                }
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              } else {
              //   that.$Message.error(response.data.msg)
                that.errorMsg = response.data.msg
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          this.$Modal.info({
            title: '信息',
            content: '保存失败，请检查信息是否完整!'
          })
        }
      })
    },
    reset: function () {
      this.formItem.oldPas = ''
      this.formItem.newPas = ''
      this.formItem.repeatPas = ''
      this.errorMsg = ''
    },
    close: function () {
      this.modelIsOpen = false
    }
  }

}
</script>
