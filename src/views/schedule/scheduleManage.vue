<template>
    <div class="frame-page">
    <z-search-panel>
       <z-form ref="jobCondition" :model="jobCondition" :label-width="86" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="任务名称：">
              <z-input v-model="jobCondition.jobName" :maxlength="100" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="任务组：">
              <z-input v-model="jobCondition.jobGroup" :maxlength="100" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="任务类：">
              <z-input v-model="jobCondition.jobClassName" :maxlength="100" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="任务状态：">
               <z-select v-model="jobCondition.triggerState" clearable placeholder="请输入" transfer>
                <z-option value="WAITING">等待执行</z-option>
                <z-option value="ACQUIRED">即将发起</z-option>
                <z-option value="EXECUTING">已发起</z-option>
                <z-option value="COMPLETE">任务终止</z-option>
                <z-option value="BLOCKED">阻塞</z-option>
                <z-option value="PAUSED">暂停</z-option>
                <z-option value="ERROR">错误</z-option>
            </z-select>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
               <z-button type="primary" icon="ios-search" @click="query">查询</z-button>
               <z-button icon="android-refresh" @click="reset">重置</z-button>
          </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <z-list-panel class="m-t-15">
        <div slot="title">任务列表</div>
        <div slot="buttons">
            <ui-privilege url="/jobs/addjob"><z-button type="text" icon="unlocked" @click="createJob">创建任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/schedulejob"><z-button type="text" icon="navicon-round" @click="scheduleJob">调度任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/reschedulejob"><z-button type="text" icon="navicon-round" @click="rescheduleJob">重新调度任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/unschedulejob"><z-button type="text" icon="navicon-round" @click="unscheduleJob">取消任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/pausejob"><z-button type="text" icon="navicon-round" @click="pauseJob">暂停任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/resumejob"><z-button type="text" icon="navicon-round" @click="resumeJob">恢复任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/triggerjob"><z-button type="text" icon="navicon-round" @click="triggerJob">立刻执行任务</z-button></ui-privilege>
            <ui-privilege url="/jobs/deletejob"><z-button type="text" icon="close" @click="deleteJob">删除任务</z-button></ui-privilege>
        </div>
        <!-- 表格 -->
        <vxe-table
          ref="childTable"
          border
          resizable
          row-id="id"
          highlight-current-row
          show-header-overflow
          show-overflow
          :loading="loading"
          :data="tableData"
          :export-config="tableExport"
          @on-table-refresh="refreshTable"
          :checkbox-config="{trigger: 'row', highlight: true, range: true}"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column field="jobName" title="任务名称" width="200" sortable></vxe-table-column>
          <vxe-table-column field="jobGroup" title="任务分组" width="100"></vxe-table-column>
          <vxe-table-column field="jobClassName" title="任务类" width="350"></vxe-table-column>
          <vxe-table-column field="requestsRecovery" title="故障恢复" width="80" :formatter="formatRequestsRecovery"></vxe-table-column>
          <vxe-table-column field="taskStrategyText" title="失败处理策略" width="250"></vxe-table-column>
          <vxe-table-column field="cronExpression" title="cron表达式" width="200"></vxe-table-column>
          <vxe-table-column field="triggerState" title="任务状态" width="100" :formatter="formatTriggerState"></vxe-table-column>
          <vxe-table-column field="startTimeText" title="任务开始时间" width="150"></vxe-table-column>
          <vxe-table-column field="endTimeText" title="任务终止时间" width="150"></vxe-table-column>
          <vxe-table-column field="misfireInstr" title="misfire策略" width="150" :formatter="formatMisfireInstr"></vxe-table-column>
          <vxe-table-column field="prevFireTimeText" title="上次触发时间" width="150"></vxe-table-column>
          <vxe-table-column field="nextFireTimeText" title="下次触发时间" width="150"></vxe-table-column>
          <vxe-table-column field="description" title="任务描述" width="400"></vxe-table-column>
          <vxe-table-column title="操作" :width="140" fixed="right">
            <template v-slot="{ row, seq }">
              <a class="link" @click="edit(row, seq)">编辑</a>
              <div class="divider"></div>
              <a class="link" @click="delBatch(row, seq)">删除</a>
            </template>
          </vxe-table-column>
        </vxe-table>
        <vxe-pager
           size = "small"
          :loading="loading"
          :current-page="tablePage.page"
          :page-size="tablePage.rows"
          :total="tablePage.records"
          refresh
          export
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange"
          >
        </vxe-pager>
    </z-list-panel>
  <edit-Job ref="editJob" :title="editJobTitle"></edit-Job>
  <schedule-Job ref="scheduleJob" :title="scheduleJobTitle"></schedule-Job>
  </div>
</template>
<script>
import Vue from 'vue'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import scheduleApi from '@/views/schedule/api/api.js'
import editJob from './editJob'
import scheduleJob from './scheduleJob'
Vue.use(vxeTableExport)
export default {
  name: 'scheduleStorageManage',
  components: {
    'edit-Job': editJob,
    'schedule-Job': scheduleJob
  },
  data: function () {
    return {
      jobCondition: {
        jobName: '', // 任务名称
        jobGroup: '', // 任务分组
        jobClassName: '', // 任务类
        triggerState: '' // 任务状态
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'mail/mail',
        exportOnlineAction: 'post'
      },
      editJobTitle: '',
      scheduleJobTitle: ''
    }
  },
  created: function () {
    this.query()
  },
  methods: {
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.jobCondition, this.tablePage)
      scheduleApi.queryJob(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        if (that.$refs['childTable']) {
          that.$refs['childTable'].clearCurrentRow()
        }
      })
    },
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.syncData()
      this.query()
    },
    reset: function () {
      this.jobCondition.jobName = ''
      this.jobCondition.jobGroup = ''
      this.jobCondition.jobClassName = ''
      this.jobCondition.triggerState = ''
    },
    createJob: function () {
      this.$refs.editJob.modelIsOpen = true
      this.editJobTitle = '创建任务'
      this.$refs.editJob.action = 'create'
      this.$refs.editJob.disabled = false
      this.$refs.editJob.handleReset()
    },
    edit: function (data) {
      let that = this
      this.$refs.editJob.modelIsOpen = true
      this.editJobTitle = '编辑用户'
      this.$refs.editJob.action = 'edit'
      this.$refs.editJob.disabled = true
      scheduleApi.getJobDetail(data).then(function (response) {
        if (response.data.code === '200 OK') {
          that.$refs.editJob.getData(response.data.data)
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    scheduleJob: function () {
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      this.$refs.scheduleJob.modelIsOpen = true
      this.scheduleJobTitle = '安排任务'
      this.$refs.scheduleJob.action = 'schedule'
      this.$refs.scheduleJob.jobs = rows
      this.$refs.scheduleJob.handleReset()
    },
    rescheduleJob: function () {
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      this.$refs.scheduleJob.modelIsOpen = true
      this.scheduleJobTitle = '重新安排任务'
      this.$refs.scheduleJob.action = 'reschedule'
      this.$refs.scheduleJob.jobs = rows
      this.$refs.scheduleJob.handleReset()
    },
    unscheduleJob: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      scheduleApi.unscheduleJob(rows).then(function (response) {
        if (response.data.code === '200 OK') {
          that.refreshTable()
          that.$Message.success('任务取消成功')
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    pauseJob: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      scheduleApi.pauseJob(rows).then(function (response) {
        if (response.data.code === '200 OK') {
          that.refreshTable()
          that.$Message.success('任务暂停成功')
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    resumeJob: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      scheduleApi.resumeJob(rows).then(function (response) {
        if (response.data.code === '200 OK') {
          that.refreshTable()
          that.$Message.success('任务恢复成功')
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    triggerJob: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      scheduleApi.triggerJob(rows).then(function (response) {
        if (response.data.code === '200 OK') {
          that.refreshTable()
          that.$Message.success('任务执行成功')
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    deleteJob: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      scheduleApi.deleteJob(rows).then(function (response) {
        if (response.data.code === '200 OK') {
          that.refreshTable()
          that.$Message.success('删除任务成功')
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            let rows = []
            rows.push(data)
            scheduleApi.deleteJob(rows).then(function (response) {
              if (response.data.code === '200 OK') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error('删除任务失败')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    formatRequestsRecovery: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '1':
          return '是'
        case '0':
          return '否'
      }
    },
    formatTriggerState: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case 'WAITING':
          return '等待执行'
        case 'ACQUIRED':
          return '即将发起'
        case 'EXECUTING':
          return '已发起'
        case 'COMPLETE':
          return '任务终止'
        case 'BLOCKED':
          return '阻塞'
        case 'PAUSED':
          return '暂停'
        case 'ERROR':
          return '错误'
      }
    },
    formatMisfireInstr: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return ''
        case '2':
          return '什么都不做'
        case '-1':
          return '所有misfire全部执行'
        case '1':
          return '只执行一次'
      }
    }
  }
}
</script>
