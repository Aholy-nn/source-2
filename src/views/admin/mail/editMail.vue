<!--
 * @Description: editMail
 * @Author: wangzelin
 * @Date: 2020-11-17 15:41:37
 * @LastEditTime: 2020-11-18 15:41:37
 * @LastEditors: wangzelin
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editMailModel" :model="editMailModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate" @on-validate="onValidate">
        <z-form-item label="发送人地址"  prop="mailFrom">
            <z-input v-model="editMailModel.mailFrom" :maxlength="40" :placeholder="defaultPlacholders" :disabled="isFromDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="收件人地址"  prop="mailTo">
            <z-input v-model="editMailModel.mailTo" :maxlength="40" :placeholder="defaultPlacholders" :disabled="isToDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="抄送"  prop="mailCc">
            <z-input v-model="editMailModel.mailCc " :maxlength="40" :placeholder="defaultPlacholders" :disabled="isCcDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="密送"  prop="mailBcc">
            <z-input v-model="editMailModel.mailBcc " :maxlength="40" :placeholder="defaultPlacholders" :disabled="isBccDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="回复"  prop="mailReplyTo">
            <z-input v-model="editMailModel.mailReplyTo " :maxlength="40" :placeholder="defaultPlacholders" :disabled="isReplyToDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="邮件主题"  prop="mailSubject">
            <z-input v-model="editMailModel.mailSubject " :maxlength="40" :placeholder="defaultPlacholder" :disabled="isSubjectDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="邮件内容"  prop="mailContent">
            <z-input v-model="editMailModel.mailContent " :maxlength="40" :placeholder="defaultPlacholder" :disabled="isContentDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="发送状态"  prop="mailStatus">
               <z-select v-model="editMailModel.mailStatus" clearable :disabled="isStatusDisable" transfer>
                <z-option value="00">未发送</z-option>
                <z-option value="01">发送成功</z-option>
                <z-option value="02">发送失败</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="发送时间"  prop="mailSendDate" >
            <z-input v-model="editMailModel.mailSendDate " :maxlength="40"  :disabled="isSendDateDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="邮件附件名"  prop="mailAttachFileNames">
            <z-input v-model="editMailModel.mailAttachFileNames " :maxlength="40" :placeholder="defaultPlacholders" :disabled="isAttachFileNamesDisable" clearable></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">重置</z-button>
    </div>
     <!-- 弹出 -->
</z-modal>
</template>
<script>
import mailApi from './api/api.js'
export default {
  name: 'editMail',
  data: function () {
    return {
      modelIsOpen: false,
      isFromDisable: '',
      isToDisable: '',
      isSubjectDisable: '',
      isCcDisable: '',
      isBccDisable: '',
      isReplyToDisable: '',
      isContentDisable: '',
      isStatusDisable: '',
      isSendDateDisable: '',
      isAttachFileNamesDisable: '',
      defaultPlacholder: '',
      defaultPlacholders: '',
      editMailModel: {
        mailId: '',
        mailFrom: '',
        mailTo: '',
        mailSubject: '',
        mailCc: '',
        mailBcc: '',
        mailReplyTo: '',
        mailContent: '',
        // mailType: '',
        mailSendDate: '',
        mailStatus: '',
        mailAttachFileNames: ''
      },
      actionType: '',
      errorMsg: '',
      ruleValidate: {
        mailFrom: [
          {required: true, validator: this.validateFromTo}
        ],
        mailTo: [
          {required: true, validator: this.validateFromTo}
        ],
        mailCc: [
          {validator: this.validateMailAddress}
        ],
        mailBcc: [
          {validator: this.validateMailAddress}
        ],
        mailReplyTo: [
          {validator: this.validateMailReplyTo}
        ]
      }
    }
  },
  props: {
    title: {
      type: String
    },
    modelType: {
      type: String
    }
  },
  created: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.editMailModel.mailId = data.mailId
      this.editMailModel.mailFrom = data.mailFrom
      this.editMailModel.mailTo = data.mailTo
      this.editMailModel.mailSubject = data.mailSubject
      this.editMailModel.mailStatus = data.mailStatus
      this.editMailModel.mailCc = data.mailCc
      this.editMailModel.mailBcc = data.mailBcc
      this.editMailModel.mailReplyTo = data.mailReplyTo
      this.editMailModel.mailSendDate = data.mailSendDate
      this.editMailModel.mailAttachFileNames = data.mailAttachFileNames
      this.editMailModel.mailContent = data.mailContent
      this.editMailModel.mailStatus = data.mailStatus
    },
    onValidate: function () {
      this.errorMsg = ''
    },
    validateMailReplyTo (rule, value, callback) {
      if (value === '') {
        callback()
      }
      if (this.checkMailAddresses(value) === false) {
        callback(new Error('地址不合法'))
      }
      let attachFileNames = this.editMailModel.mailAttachFileNames
      let result = this.editMailModel.mailReplyTo.indexOf(',')
      if (attachFileNames === '' && result !== -1) {
        callback(new Error('文本类型邮件至多只能有一个回复人'))
      }
      callback()
    },
    validateFromTo (rule, value, callback) {
      if (value === '') {
        callback(new Error('不可为空'))
      }
      if (this.checkMailAddresses(value) === false) {
        callback(new Error('地址不合法'))
      }
      callback()
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
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs['editMailModel'].validate(function (valid) {
        if (valid) {
          if (that.modelType === 'add') {
            mailApi.mailInfoAdd(that.editMailModel).then(function (response) {
              if (response.data.code !== '01') {
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            mailApi.mailInfoEdit(that.editMailModel).then(function (response) {
              if (response.data.code !== '01') {
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        }
      }
      )
    },
    handleReset: function () {
      if (this.modelType === 'add') {
        this.$refs['editMailModel'].resetFields()
      } else {
        this.editMailModel.mailStatus = ''
      }
      this.errorMsg = ''
    }
  }
}
</script>
