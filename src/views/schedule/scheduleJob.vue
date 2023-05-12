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
     <z-form ref="scheduleJobModel" :model="scheduleJobModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="cron表达式"  prop="cronExpression">
            <z-input v-model="scheduleJobModel.cronExpression" :maxlength="100" :placeholder="defaultPlacholder" clearable></z-input>
        </z-form-item>
        <z-form-item label="misfire策略"  prop="misfireInstr">
           <z-select v-model="scheduleJobModel.misfireInstr" clearable>
                <z-option value="2">什么都不做</z-option>
                <z-option value="-1">所有Misfire全部执行</z-option>
                <z-option value="1">只执行一次</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="开始时间" prop="startTime">
            <z-date-picker type="datetime" placeholder="请选择日期时间..." v-model.trim="scheduleJobModel.startTime" @on-change="scheduleJobModel.startTime=$event" clearable transfer></z-date-picker>
        </z-form-item>
        <z-form-item label="终止时间" prop="endTime">
            <z-date-picker type="datetime" placeholder="请选择日期时间..." v-model.trim="scheduleJobModel.endTime" @on-change="scheduleJobModel.endTime=$event" clearable transfer></z-date-picker>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('scheduleJobModel')" style="margin-left: 8px">重置</z-button>
    </div>
     <!-- 弹出 -->
</z-modal>
</template>
<script>
import scheduleApi from '@/views/schedule/api/api.js'
export default {
  name: 'scheduleJob',
  data: function () {
    return {
      modelIsOpen: false,
      action: '',
      defaultPlacholder: '请输入...',
      jobs: [],
      scheduleJobModel: {
        cronExpression: '',
        misfireInstr: '2',
        startTime: '',
        endTime: ''
      },
      errorMsg: '',
      ruleValidate: {
        cronExpression: [
          {required: true, message: '请填写cron表达式', trigger: 'blur'}
        ],
        misfireInstr: [
          {required: true, message: '请选择misfire策略', trigger: 'change'}
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
    handleSubmit: function (name) {
      let that = this
      this.$refs['scheduleJobModel'].validate(function (valid) {
        if (valid) {
          let schedulers = []
          that.jobs.forEach(function (job) {
            let jobStartTime
            let jobEndTime
            if (that.scheduleJobModel.startTime) {
              jobStartTime = new Date(that.scheduleJobModel.startTime).getTime()
            } else {
              jobStartTime = 0
            }
            if (that.scheduleJobModel.endTime) {
              jobEndTime = new Date(that.scheduleJobModel.endTime).getTime()
            } else {
              jobEndTime = 0
            }
            schedulers.push({
              jobName: job.jobName,
              jobGroup: job.jobGroup,
              cronExpression: that.scheduleJobModel.cronExpression,
              misfireInstr: that.scheduleJobModel.misfireInstr,
              startTime: jobStartTime,
              endTime: jobEndTime
            })
          })
          if (that.action === 'schedule') {
            scheduleApi.scheduleJob(schedulers).then(function (response) {
              if (response.data.code !== '200 OK') {
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success('任务安排成功')
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            scheduleApi.rescheduleJob(schedulers).then(function (response) {
              if (response.data.code !== '200 OK') {
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success('任务重新安排成功')
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
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    handleReset: function () {
      this.$refs['scheduleJobModel'].resetFields()
      this.errorMsg = ''
    }
  }
}
</script>
