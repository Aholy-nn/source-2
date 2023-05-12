<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:38:42
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="logonModel" :model="logonModel" :label-width="100" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('logonLog.searchLabel.userCode')" prop="userCode">
               <z-input v-model="logonModel.userCode" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('logonLog.searchLabel.userIp')" prop="userIp">
               <z-input v-model="logonModel.userIp" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('logonLog.searchLabel.startTime')" prop="startTime">
                <date-picker v-model="logonModel.startTime"  type="date" format="yyyy-MM-dd HH:mm:ss" :placeholder="$t('logonLog.placeHolder.startTime')" @on-change="logonModel.startTime=$event"
                    clearable></date-picker>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('logonLog.searchLabel.endTime')" prop="endTime">
               <date-picker v-model="logonModel.endTime"  type="date" format="yyyy-MM-dd HH:mm:ss" :placeholder="$t('logonLog.placeHolder.endTime')" @on-change="logonModel.endTime=$event"
                    clearable></date-picker>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
               <z-button type="primary" icon="ios-search" @click="query">{{$t('common.button.search')}}</z-button>
               <z-button icon="android-refresh" @click="reset">{{$t('common.button.reset')}}</z-button>
          </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
     <z-list-panel class="m-t-15">
        <div slot="title">{{$t('logonLog.title.logonHis')}}</div>
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
          <vxe-table-column field="userCode" :title="$t('logonLog.title.userCode')"></vxe-table-column>
          <vxe-table-column field="sessionId" :title="$t('logonLog.title.sessionId')"></vxe-table-column>
          <vxe-table-column field="userIp" :title="$t('logonLog.title.userIp')"></vxe-table-column>
          <vxe-table-column field="logonFlag" :title="$t('logonLog.title.logonFlag')" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="logonTime" :title="$t('logonLog.title.logonTime')"></vxe-table-column>
          <vxe-table-column field="logoffTime" :title="$t('logonLog.title.logoffTime')"></vxe-table-column>
          <vxe-table-column field="logFailedReason" :title="$t('logonLog.title.logFailedReason')"></vxe-table-column>
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
import autditApi from '../api/api.js'
import vxeTableExport from '@/components/framework/vxe-table-export'
Vue.use(vxeTableExport)

export default {
  name: 'logonLog',
  data: function () {
    return {
      logonModel: {
        userCode: '',
        userIp: '',
        startTime: '',
        endTime: ''
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
        exportOnlinePath: 'log/logon',
        exportOnlineAction: 'post',
        postData: this.getLogonModel
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
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.logonModel, this.tablePage)
      autditApi.logonLogQuery(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$nextTick(function () {
          that.$refs['childTable'].clearCurrentRow()
        })
      })
    },
    reset: function () {
      this.$refs.logonModel.resetFields()
    },
    // 表格日期格式化
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '01':
          return this.$t('logonLog.option.logonFlag01')
        case '02':
          return this.$t('logonLog.option.logonFlag02')
      }
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    getLogonModel: function () {
      return this.logonModel
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }

}
</script>
