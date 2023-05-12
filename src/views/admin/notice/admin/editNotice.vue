<!--
 * @Description: editNotice
 * @Author: wangzelin
 * @Date: 2021-1-11 15:41:37
 * @LastEditTime: 2021-1-11 15:41:37
 * @LastEditors: wangzelin
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editNoticeModel" :model="editNoticeModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate" @on-validate="onValidate">
        <z-form-item label="公告标题"  prop="noticeTitle">
            <z-input v-model="editNoticeModel.noticeTitle" :maxlength="40" :placeholder="defaultPlacholders" :disabled="isNoticeTitleDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="公告内容"  prop="noticeContent">
            <z-input v-model="editNoticeModel.noticeContent" :maxlength="1024" :placeholder="defaultPlacholders" :disabled="isNoticeContentDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="失效时间"  prop="expireTime" >
            <z-date-picker v-model.trim="editNoticeModel.expireTime" type="date" placeholder="请选择日期..." format="yyyy-MM-dd HH:mm:ss" :options="dateOption" @on-change="editNoticeModel.expireTime=$event"
            :disabled="isNoticeContentDisable" transfer clearable></z-date-picker>
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
import adminNoticeApi from './api/api.js'
export default {
  name: 'editNotice',
  data: function () {
    return {
      modelIsOpen: false,
      isNoticeTitleDisable: '',
      isNoticeContentDisable: '',
      isExpireTimeDisable: '',
      defaultPlacholders: '',
      editNoticeModel: {
        noticeTextId: '',
        noticeContent: '',
        noticeTitle: '',
        expireTime: ''
      },
      actionType: '',
      errorMsg: '',
      dateOption: {
        disabledDate: function (date) {
          return date && date.valueOf() < Date.now() - 86400000
        }
      },
      ruleValidate: {
        noticeTitle: [
          {required: true, message: '请填写公告标题'}
        ],
        noticeContent: [
          {required: true, message: '请填写公告内容'}
        ],
        expireTime: [
          {required: true, message: '请填写失效时间'}
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
      this.editNoticeModel.noticeTextId = data.noticeTextId
      this.editNoticeModel.noticeTitle = data.noticeTitle
      this.editNoticeModel.noticeContent = data.noticeContent
      this.editNoticeModel.expireTime = data.expireTime
    },
    onValidate: function () {
      this.errorMsg = ''
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs['editNoticeModel'].validate(function (valid) {
        if (valid) {
          if (that.modelType === 'add') {
            // 添加
            adminNoticeApi.adminNoticeAdd(that.editNoticeModel).then(function (response) {
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
            adminNoticeApi.adminNoticeEdit(that.editNoticeModel).then(function (response) {
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
      })
    },
    handleReset: function () {
      if (this.modelType === 'add') {
        this.$refs['editNoticeModel'].resetFields()
      } else {
        this.$refs['editNoticeModel'].resetFields()
      }
      this.errorMsg = ''
    }
  }
}
</script>
