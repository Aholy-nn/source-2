<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:37:44
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="frame-page">
    <z-search-panel>
      <z-form id="notifForm" name="notifForm" :label-width="86" label-position="left">
        <z-row :gutter="15">
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item label="应用名称：">
                    <z-input v-model="model.appName" :maxlength="118" placeholder="请输入..."></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item label="应用代码：">
                    <z-input v-model="model.appCode" :maxlength="32" placeholder="请输入..."></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="6" :lg="6" class="btns-group">
                <z-button type="primary" icon="ios-search" @click="query">查询</z-button>
                <z-button icon="android-refresh" @click="reset">重置</z-button>
            </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <z-list-panel class="m-t-15">
        <div slot="title">服务应用管理列表</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="add">添加</z-button>
        </div>
        <!-- 表格 -->
        <vxe-table
          ref="childTable"
          border
          row-id="id"
          size="medium"
          highlight-current-row
          show-header-overflow
          show-overflow
          :loading="loading"
          align='center'
          :data="tableData">
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="appName" title="应用名称" sortable></vxe-table-column>
          <vxe-table-column field="appCode" title="应用代码"></vxe-table-column>
          <vxe-table-column field="appDesc" title="应用描述"></vxe-table-column>
          <vxe-table-column field="state" title="状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="createBy" title="创建人"></vxe-table-column>
          <vxe-table-column field="createDate" title="创建时间" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="appId" title="应用" :visible="false"></vxe-table-column>
          <vxe-table-column title="操作">
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
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange"
          >
        </vxe-pager>
    </z-list-panel>
    <!-- 弹出 -->
    <edit-auth-info ref="editAuthAppInfo" :title="editTitle" :model-type="modelType"></edit-auth-info>
  </div>
</template>
<script>
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import sysAppApi from '../api/api.js'
import editAuthAppInfo from '../editAuthAppInfo/editAuthAppInfo'
export default {
  name: 'authAppInfoManage',
  components: {
    'edit-auth-info': editAuthAppInfo
  },
  data: function () {
    return {
      model: {
        appName: '',
        appCode: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editTitle: '',
      modelType: ''
    }
  },
  created: function () {
    this.query()
  },
  mounted: function () {},
  methods: {
    // 查询
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.model, this.tablePage)
      sysAppApi.query(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
      })
    },
    add: function () {
      this.modelType = 'add'
      this.editTitle = '新增服务应用'
      let ref = this.$refs.editAuthAppInfo
      ref.modelIsOpen = true
      ref.editAppModel.state = '1'
      ref.handleReset()
    },
    edit: function (data) {
      this.modelType = 'edit'
      this.editTitle = '编辑服务应用'
      let ref = this.$refs.editAuthAppInfo
      // 赋值
      ref.modelIsOpen = true
      ref.editAppModel.appCode = data.appCode
      ref.editAppModel.appName = data.appName
      ref.editAppModel.appDesc = data.appDesc
      ref.editAppModel.state = data.state
      ref.editAppModel.appId = data.appId
    },
    delBatch: function (data) {
      let that = this
      that.$Modal.confirm({
        title: '确认',
        content: '是否批量删除？',
        onOk: function () {
          setTimeout(function () {
            sysAppApi.authAppInfoDel(data.appId).then(function (response) {
              if (response.data.code === '0') { // 删除失败，该应用已经与资源进行了关联
                that.$Message.error(response.data.msg)
              } else {
                that.$Message.success(response.data.msg)
                that.query()
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 重置
    reset: function () {
      this.model.appName = ''
      this.model.appCode = ''
    },
    // 分页
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '不可用'
        case '1':
          return '可用'
      }
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    }
  }

}
</script>
