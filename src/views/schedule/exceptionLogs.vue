<template>
    <div class="frame-page">
    <z-search-panel>
       <z-form ref="expLogsCondition" :model="expLogsCondition" :label-width="86" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="搜索条件：">
              <z-input v-model="expLogsCondition.expression" :maxlength="100" placeholder="请输入任务或异常关键字..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="开始时间" prop="timeLowerLimit">
            <z-date-picker type="datetime" placeholder="请选择日期时间..." v-model.trim="expLogsCondition.timeLowerLimit" @on-change="expLogsCondition.timeLowerLimit=$event" transfer clearable></z-date-picker>
          </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="截止时间" prop="timeUpperLimit">
            <z-date-picker type="datetime" placeholder="请选择日期时间..." v-model.trim="expLogsCondition.timeUpperLimit" @on-change="expLogsCondition.timeUpperLimit=$event" transfer clearable></z-date-picker>
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
        <div slot="title">任务运行日志列表</div>
        <div slot="buttons">
            <ui-privilege url="/jobs/delexception"><z-button type="text" icon="close" @click="deleteLogs">删除日志</z-button></ui-privilege>
        </div>
        <!-- 表格 -->
        <vxe-table
          ref="childTable"
          border
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
          <vxe-table-column field="recordId" title="ID" :visible="false"></vxe-table-column>
          <vxe-table-column field="jobKey" title="任务"></vxe-table-column>
          <vxe-table-column field="occurrTime" title="发生时间"></vxe-table-column>
          <vxe-table-column field="exceptionInfo" title="异常信息"></vxe-table-column>
          <vxe-table-column title="操作" :width="140">
            <template v-slot="{ row, seq }">
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
  </div>
</template>
<script>
import Vue from 'vue'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import XEUtils from 'xe-utils'
import scheduleApi from '@/views/schedule/api/api.js'
Vue.use(vxeTableExport)
export default {
  name: 'exceptionLogs',
  components: {
  },
  data: function () {
    return {
      expLogsCondition: {
        expression: '',
        timeLowerLimit: '',
        timeUpperLimit: ''
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
      }
    }
  },
  created: function () {
    this.query()
  },
  methods: {
    query: function (type) {
      let that = this
      let startTime
      let endTime
      if (this.expLogsCondition.timeLowerLimit) {
        startTime = new Date(this.expLogsCondition.timeLowerLimit).getTime()
      } else {
        startTime = 0
      }
      if (this.expLogsCondition.timeUpperLimit) {
        endTime = new Date(this.expLogsCondition.timeUpperLimit).getTime()
      } else {
        endTime = 0
      }
      let param = {
        expression: this.expLogsCondition.expression,
        timeLowerLimit: startTime,
        timeUpperLimit: endTime
      }
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(param, this.tablePage)
      scheduleApi.queryExceptionLogs(params).then(function (response) {
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
      this.expLogsCondition.expression = ''
      this.expLogsCondition.timeLowerLimit = ''
      this.expLogsCondition.timeUpperLimit = ''
    },
    deleteLogs: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      let logIds = []
      rows.forEach(item => {
        logIds.push(item.recordId)
      })
      scheduleApi.deleteExceptions(logIds).then(function (response) {
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
            rows.push(data.recordId)
            scheduleApi.deleteExceptions(rows).then(function (response) {
              if (response.data.code === '200 OK') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error('删除日志失败')
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
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    }
  }
}
</script>
