<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:38:51
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="operLogModel" :model="operLogModel" :label-width="80" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('operateLog.searchLabel.userCode')" prop="userCode">
               <z-input v-model="operLogModel.userCode" :placeholder="$t('operateLog.placeHolder.start')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
               <z-form-item :label="$t('operateLog.searchLabel.startTime')" prop="startTime">
                <date-picker v-model="operLogModel.startTime" type="date" format="yyyy-MM-dd HH:mm:ss" :placeholder="$t('operateLog.placeHolder.start')" @on-change="operLogModel.startTime=$event"  clearable></date-picker>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('operateLog.searchLabel.costTimeFrom')" prop="costTimeFrom">
                <input-number v-model="operLogModel.costTimeFrom" :placeholder="$t('operateLog.placeHolder.start')"></input-number>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('operateLog.searchLabel.userIp')" prop="userIp">
               <z-input v-model="operLogModel.userIp" :placeholder="$t('common.placeholder.input')"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('operateLog.searchLabel.endTime')" prop="endTime">
                <date-picker v-model="operLogModel.endTime" type="date" format="yyyy-MM-dd HH:mm:ss" :placeholder="$t('operateLog.placeHolder.end')" @on-change="operLogModel.endTime=$event" clearable></date-picker>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('operateLog.searchLabel.costTimeEnd')" prop="costTimeEnd">
               <input-number v-model="operLogModel.costTimeEnd" :placeholder="$t('operateLog.placeHolder.end')"></input-number>
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
        <div slot="title">{{$t('operateLog.title.opLogQuery')}}</div>
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
          <vxe-table-column field="userCode" :title="$t('operateLog.title.userCode')"></vxe-table-column>
          <vxe-table-column field="userIp" :title="$t('operateLog.title.userIp')"></vxe-table-column>
          <vxe-table-column field="url" :title="$t('operateLog.title.url')"></vxe-table-column>
          <vxe-table-column field="startTime" :title="$t('operateLog.title.startTime')"></vxe-table-column>
          <vxe-table-column field="endTime" :title="$t('operateLog.title.endTime')"></vxe-table-column>
          <vxe-table-column field="timeCost" :title="$t('operateLog.title.timeCost')"></vxe-table-column>
          <vxe-table-column field="description" :title="$t('operateLog.title.description')"></vxe-table-column>
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
      operLogModel: {
        userCode: '',
        userIp: '',
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
        exportOnlinePath: 'log/oper',
        exportOnlineAction: 'post',
        postData: this.getOperLogModel
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
      let params = Object.assign(this.operLogModel, this.tablePage)
      autditApi.operateLogQuery(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$nextTick(function () {
          that.$refs['childTable'].clearCurrentRow()
        })
      })
    },
    reset: function () {
      this.$refs.operLogModel.resetFields()
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    getOperLogModel: function () {
      return this.operLogModel
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }
}
</script>
