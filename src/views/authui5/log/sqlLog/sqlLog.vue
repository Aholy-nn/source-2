<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-02 14:24:58
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="sqlLogModel" :model="sqlLogModel" :label-width="100" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('sqlLog.searchLabel.userCode')" prop="userCode">
               <z-input v-model="sqlLogModel.userCode" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('sqlLog.searchLabel.success')" prop="success">
             <z-select v-model="sqlLogModel.success" clearable >
                <z-option v-for="item in isSuccessState" :value="item.value" :key="item.value">{{ item.label }}</z-option>
             </z-select>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('sqlLog.searchLabel.userIp')" prop="userIp">
                <z-input v-model="sqlLogModel.userIp" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('sqlLog.searchLabel.type')" prop="type">
                <z-select v-model="sqlLogModel.type" clearable>
                    <z-option v-for="item in sqlType" :value="item.value" :key="item.value">{{ item.label }}</z-option>
                </z-select>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('sqlLog.searchLabel.startTime')" prop="startTime">
               <date-picker v-model="sqlLogModel.startTime" type="date" format="yyyy-MM-dd HH:mm:ss" :placeholder="$t('common.placeholder.dateChoose')" @on-change="sqlLogModel.startTime=$event"
                clearable></date-picker>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8">
             <z-form-item :label="$t('sqlLog.searchLabel.endTime')" prop="endTime">
                <date-picker v-model="sqlLogModel.endTime" type="date" format="yyyy-MM-dd HH:mm:ss" :placeholder="$t('common.placeholder.dateChoose')" @on-change="sqlLogModel.endTime=$event"
                 clearable></date-picker>
             </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8">
             <z-form-item :label="$t('sqlLog.searchLabel.sqlText')" prop="sqlText">
                <z-input v-model="sqlLogModel.sqlText" type="textarea" :placeholder="$t('common.placeholder.input')"></z-input>
             </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
             <z-form-item :label="$t('sqlLog.searchLabel.costTimeFrom')" prop="costTimeFrom">
                <input-number v-model="sqlLogModel.costTimeFrom" :placeholder="$t('common.placeholder.input')"></input-number>
             </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
             <z-form-item :label="$t('sqlLog.searchLabel.costTimeEnd')" prop="costTimeEnd">
               <input-number v-model="sqlLogModel.costTimeEnd" :placeholder="$t('common.placeholder.input')"></input-number>
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
        <div slot="title">{{$t('sqlLog.title.sqlLogQuery')}}</div>
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
          <vxe-table-column field="userCode" :title="$t('sqlLog.title.userCode')"></vxe-table-column>
          <vxe-table-column field="userIp" :title="$t('sqlLog.title.userIp')"></vxe-table-column>
          <vxe-table-column field="sqlText" :title="$t('sqlLog.title.sqlText')"></vxe-table-column>
          <vxe-table-column field="startTime" :title="$t('sqlLog.title.startTime')"></vxe-table-column>
          <vxe-table-column field="endTime" :title="$t('sqlLog.title.endTime')"></vxe-table-column>
          <vxe-table-column field="timeCost" :title="$t('sqlLog.title.timeCost')"></vxe-table-column>
          <vxe-table-column field="type" :title="$t('sqlLog.title.type')" :formatter="formatSQLTypeCode"></vxe-table-column>
          <vxe-table-column field="success" :title="$t('sqlLog.title.success')" :formatter="formatSuccessCode"></vxe-table-column>

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
      isSuccessState: [{ value: '01', label: this.$t('sqlLog.option.isSuccessState01') }, { value: '02', label: this.$t('sqlLog.option.isSuccessState02') }],
      sqlType: [
        { value: 'qry', label: 'query' },
        { value: 'upt', label: 'update' },
        { value: 'uptproc', label: 'update procedure' },
        { value: 'qryproc', label: 'query procedure' }
      ],
      sqlLogModel: {
        userCode: '',
        success: '',
        userIp: '',
        type: '',
        sqlText: '',
        startTime: '',
        endTime: '',
        costTimeFrom: null,
        costTimeEnd: null
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
        exportOnlinePath: 'log/sql',
        exportOnlineAction: 'post',
        postData: this.getSqlLogModel
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
      let params = Object.assign(this.sqlLogModel, this.tablePage)
      autditApi.sqlLogQuery(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$nextTick(function () {
          that.$refs['childTable'].clearCurrentRow()
        })
      })
    },
    reset: function () {
      this.$refs.sqlLogModel.resetFields()
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    getSqlLogModel: function () {
      return this.sqlLogModel
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    },
    formatSQLTypeCode: function ({ cellValue, row, column }) {
      return 'qry:query;upt:update;uptproc:update procedure;qryproc:query procedure'
    },
    formatSuccessCode: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '01':
          return this.$t('sqlLog.option.isSuccessState01')
        case '02':
          return this.$t('sqlLog.option.isSuccessState02')
      }
    }
  }
}
</script>
