<!--
 * @Description: editJob
 * @Author: gcj
 * @Date: 2021-03-26 9:38:37
 * @LastEditTime: 2021-03-26 9:38:37
 * @LastEditors: gcj
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editJobModel" :model="editJobModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="任务名称"  prop="jobName">
            <z-input v-model="editJobModel.jobName" :maxlength="100" :placeholder="defaultPlacholder" :disabled="disabled" clearable></z-input>
        </z-form-item>
        <z-form-item label="任务组"  prop="jobGroup">
            <z-input v-model="editJobModel.jobGroup" :maxlength="100" :placeholder="defaultPlacholder" :disabled="disabled" clearable></z-input>
        </z-form-item>
        <z-form-item label="任务类"  prop="jobClassName">
            <z-input v-model="editJobModel.jobClassName " :maxlength="100" :placeholder="defaultPlacholder" clearable></z-input>
        </z-form-item>
        <z-form-item label="故障恢复"  prop="requestsRecovery">
               <z-select v-model="editJobModel.requestsRecovery" clearable transfer>
                <z-option value="1">是</z-option>
                <z-option value="0">否</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="失败处理"  prop="failureStrategy">
               <z-select v-model="editJobModel.failureStrategy" clearable transfer>
                <z-option value="0">不处理</z-option>
                <z-option value="1">失败重试</z-option>
                <z-option value="2">终止任务</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="重试次数"  prop="failureRetryTimes">
            <z-input v-model="editJobModel.failureRetryTimes " :maxlength="40" :placeholder="defaultPlacholder" clearable></z-input>
        </z-form-item>
        <z-form-item label="重试间隔(秒)"  prop="failureRetryIntervalSeconds">
            <z-input v-model="editJobModel.failureRetryIntervalSeconds " :maxlength="40" :placeholder="defaultPlacholder" clearable></z-input>
        </z-form-item>
        <z-form-item label="任务描述"  prop="description">
            <z-input v-model="editJobModel.description " type="textarea" :placeholder="defaultPlacholder" clearable></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editJobModel')" style="margin-left: 8px">重置</z-button>
    </div>
     <!-- 弹出 -->
</z-modal>
</template>
<script>
import scheduleApi from './api/api.js'
export default {
  name: 'editMail',
  data: function () {
    return {
      action: '',
      disabled: false,
      modelIsOpen: false,
      defaultPlacholder: '请输入...',
      editJobModel: {
        jobName: '',
        jobGroup: '',
        jobClassName: '',
        requestsRecovery: '',
        failureStrategy: '',
        failureRetryTimes: '',
        failureRetryIntervalSeconds: '',
        description: ''
      },
      errorMsg: '',
      ruleValidate: {
        jobName: [
          {required: true, message: '请填写任务名称', trigger: 'blur'}
        ],
        jobGroup: [
          {required: true, message: '请填写任务组', trigger: 'blur'}
        ],
        jobClassName: [
          {required: true, message: '请填写任务类', trigger: 'blur'}
        ],
        requestsRecovery: [
          {required: true, message: '请选择是否支持故障恢复', trigger: 'change'}
        ],
        failureStrategy: [
          {required: true, message: '请选择失败处理策略', trigger: 'change'}
        ]
      }
    }
  },
  props: {
    title: {
      type: String
    }
  },
  mounted: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.editJobModel.jobName = data.jobName
      this.editJobModel.jobGroup = data.jobGroup
      this.editJobModel.jobClassName = data.jobClassName
      this.editJobModel.requestsRecovery = data.requestsRecovery
      this.editJobModel.failureStrategy = data.failureStrategy
      this.editJobModel.failureRetryTimes = data.failureRetryTimes
      this.editJobModel.failureRetryIntervalSeconds = data.failureRetryIntervalSeconds
      this.editJobModel.description = data.description
    },
    handleSubmit: function () {
      let that = this
      this.$refs['editJobModel'].validate(function (valid) {
        if (valid) {
          if (that.action === 'create') {
            scheduleApi.createJob(that.editJobModel).then(function (response) {
              if (response.data.code !== '200 OK') {
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success('创建任务成功')
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            scheduleApi.editJob(that.editJobModel).then(function (response) {
              if (response.data.code !== '200 OK') {
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success('修改任务成功')
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
      this.$refs['editJobModel'].resetFields()
      this.errorMsg = ''
    }
  }
}
</script>
