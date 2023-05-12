<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:38:33
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="model" :model="model" :label-width="100" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('auditLog.searchLabel.loggerLevel')" prop="loggerLevel">
               <z-input v-model="model.loggerLevel" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('auditLog.searchLabel.userId')" prop="userId">
               <z-input v-model="model.userId" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('auditLog.searchLabel.busiStatus')" prop="busiStatus">
               <z-input v-model="model.busiStatus" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('auditLog.searchLabel.writeTimeStart')" prop="writeTimeStart">
                <z-date-picker type="datetime" :placeholder="$t('common.placeholder.dateChoose')" format="yyyy-MM-dd HH:mm:ss" v-model="model.writeTimeStart" @on-change="model.writeTimeStart=$event" clearable transfer></z-date-picker>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('auditLog.searchLabel.writeTimeEnd')" prop="writeTimeEnd">
               <z-date-picker type="datetime" :placeholder="$t('common.placeholder.dateChoose')" format="yyyy-MM-dd HH:mm:ss" v-model="model.writeTimeEnd" @on-change="model.writeTimeEnd=$event" clearable transfer></z-date-picker>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
               <z-button type="primary" icon="ios-search" @click="query">{{$t('common.button.query')}}</z-button>
               <z-button icon="android-refresh" @click="reset">{{$t('common.button.reset')}}</z-button>
          </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
     <z-list-panel class="m-t-15">
        <div slot="title">{{$t('auditLog.title.auditInfo')}}</div>
        <div slot="buttons">
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
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="id" title="ID" :visible="false"></vxe-table-column>
          <vxe-table-column field="loggerLevel" :title="$t('auditLog.title.loggerLevel')"></vxe-table-column>
          <vxe-table-column field="serverModule" :title="$t('auditLog.title.serverModule')"></vxe-table-column>
          <vxe-table-column field="busiTypeName" :title="$t('auditLog.title.busiTypeName')"></vxe-table-column>
          <vxe-table-column field="userIp" :title="$t('auditLog.title.userIp')"></vxe-table-column>
          <vxe-table-column field="url" :title="$t('auditLog.title.url')"></vxe-table-column>
          <vxe-table-column field="logMassage" :title="$t('auditLog.title.logMassage')"></vxe-table-column>
          <vxe-table-column field="startDateTime" :title="$t('auditLog.title.startDateTime')"></vxe-table-column>
          <vxe-table-column field="endDateTime" :title="$t('auditLog.title.endDateTime')"></vxe-table-column>
        </vxe-table>
        <vxe-pager
           size = "small"
          :loading="loading"
          :current-page="tablePage.page"
          :page-size="tablePage.rows"
          :total="tablePage.records"
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
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import autditApi from '../api/api.js'
Vue.use(vxeTableExport)

export default {
  name: 'auditLog',
  data: function () {
    return {
      model: {
        loggerLevel: '',
        userCode: '',
        busiTypeName: '',
        busiStatus: '',
        writeTimeStart: '',
        writeTimeEnd: ''
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
        exportOnlinePath: 'log/audits',
        exportOnlineAction: 'post',
        postData: this.getModel
      }
    }
  },
  created: function () {
    this.query()
  },
  mounted: function () {},
  methods: {
    query: function (type) {
      let that = this
      let param = this.model
      let wts = param.writeTimeStart
      let wte = param.writeTimeEnd
      // if (wts !== '' && wte !== '') {
      //   param.writeTimeStart = wts.format('yyyy-MM-dd HH:mm:ss')
      //   param.writeTimeEnd = wte.format('yyyy-MM-dd HH:mm:ss')
      // }
      if (wts === '' && wte !== '') {
        that.$Message.error(this.$t('auditLog.message.inputWriteTimeStart'))
        return
      }
      if (wts !== '' && wte === '') {
        that.$Message.error(this.$t('auditLog.message.inputWriteTimeEnd'))
        return
      }
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.model, this.tablePage)
      this.loading = true
      autditApi.auditLogQuery(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$nextTick(function () {
          that.$refs['childTable'].clearCurrentRow()
        })
      })
    },
    reset: function () {
      this.$refs.model.resetFields()
    },
    getModel: function () {
      return this.model
    },
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    }
  }

}
</script>
