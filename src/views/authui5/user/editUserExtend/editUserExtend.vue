<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-09 17:21:09
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editUserExtendModel" :model="editUserExtendModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate" @on-validate="onValidate">
        <z-form-item :label="$t('userManage.label.idCardNo')"  prop="idCardNo">
            <z-input v-model="editUserExtendModel.idCardNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.telNo')"  prop="telNo">
            <z-input v-model="editUserExtendModel.telNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.mailNo')"  prop="mailNo">
            <z-input v-model="editUserExtendModel.mailNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.wechatNo')"  prop="wechatNo">
            <z-input v-model="editUserExtendModel.wechatNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.qqNo')"  prop="qqNo">
            <z-input v-model="editUserExtendModel.qqNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.alipayNo')"  prop="alipayNo">
            <z-input v-model="editUserExtendModel.alipayNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.taobaoNo')"  prop="taobaoNo">
            <z-input v-model="editUserExtendModel.taobaoNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.label.microblogNo')"  prop="microblogNo">
            <z-input v-model="editUserExtendModel.microblogNo" :maxlength="64" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">{{$t('common.button.submit')}}</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
    </div>
</z-modal>
</template>
<script>
import userApi from '../api/api.js'
export default {
  name: 'editUserExtend',
  data: function () {
    return {
      modelIsOpen: false,
      editUserExtendModel: {
        userId: '',
        idCardNo: '',
        telNo: '',
        mailNo: '',
        wechatNo: '',
        qqNo: '',
        alipayNo: '',
        taobaoNo: '',
        microblogNo: ''
      },
      ruleValidate: {
        mailNo: [
          {validator: this.validateMailAddress, trigger: 'blur'}
        ]
      },
      errorMsg: ''
    }
  },
  props: {
    title: {
      type: String
    }
  },
  created: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.editUserExtendModel.userId = data.userId
      this.editUserExtendModel.idCardNo = data.idCardNo
      this.editUserExtendModel.telNo = data.telNo
      this.editUserExtendModel.mailNo = data.mailNo
      this.editUserExtendModel.wechatNo = data.wechatNo
      this.editUserExtendModel.qqNo = data.qqNo
      this.editUserExtendModel.alipayNo = data.alipayNo
      this.editUserExtendModel.taobaoNo = data.taobaoNo
      this.editUserExtendModel.microblogNo = data.microblogNo
    },
    // 取消错误提示
    onValidate: function () {
      this.errorMsg = ''
    },
    handleSubmit: function () {
      let that = this
      this.$refs['editUserExtendModel'].validate(function (valid) {
        if (valid) {
          userApi.userExtendInfoAdd(that.editUserExtendModel).then(function (response) {
            if (response.data.code !== '01') { // 用户名和用户代码校验重复返回错误信息
              that.errorMsg = response.data.msg
            } else {
              that.$Message.success(response.data.msg)
              that.modelIsOpen = false
            }
          }).catch(function (error) {
            console.log(error)
          })
        }
      })
    },
    handleReset: function () {
      this.editUserExtendModel.idCardNo = ''
      this.editUserExtendModel.telNo = ''
      this.editUserExtendModel.mailNo = ''
      this.editUserExtendModel.wechatNo = ''
      this.editUserExtendModel.qqNo = ''
      this.editUserExtendModel.alipayNo = ''
      this.editUserExtendModel.taobaoNo = ''
      this.editUserExtendModel.microblogNo = ''
      this.errorMsg = ''
    }
  },
  validateMailAddress (rule, value, callback) {
    if (value === '') {
      callback()
    }
    if (this.checkMailAddresses(value) === false) {
      callback(new Error('地址不合法'))
    }
    callback()
  },
  checkMailAddresses (value) {
    let arr = value.split(',')
    for (let i = 0; i < arr.length; i++) {
      let index = arr[i].indexOf('@')
      if (index === -1) {
        return false
      }
    }
    return true
  }

}
</script>
