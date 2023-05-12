<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:16:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="frame-page">
    <z-card bordered dis-hover>
     <z-row :gutter="40">
      <z-col span="12" :xs="24" :sm="10">
         <z-list-panel class="m-t-15">
            <div slot="title">系统应用列表</div>
            <!-- 系统应用列表 -->
            <vxe-table
              ref="appTableForRes"
              border
              row-id="id"
              size="medium"
              highlight-current-row
              :loading="authAppLoading"
              :data="authAppTableData"
              align='center'
              @current-change="changeRow">
              <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
              <vxe-table-column field="appCode" title="应用代码"></vxe-table-column>
              <vxe-table-column field="appName" title="应用名称" sortable></vxe-table-column>
              <vxe-table-column field="appId" title="应用ID" :visible="false"></vxe-table-column>
            </vxe-table>
            <vxe-pager
              size = "small"
              :loading="authAppLoading"
              :current-page="authAppTablePage.page"
              :page-size="authAppTablePage.rows"
              :total="authAppTablePage.records"
              :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
              @page-change="authAppPageChange"
              >
            </vxe-pager>
        </z-list-panel>
      </z-col>
      <z-col span="12" :xs="24" :sm="14">
          <z-list-panel class="m-t-15">
            <div slot="title">系统资源列表</div>
            <div slot="buttons">
                <z-button type="text" icon="plus-round" @click="add">添加</z-button>
            </div>
            <!-- 系统资源列表 -->
            <vxe-table
              ref="appResTable"
              border
              row-id="id"
              size="medium"
              highlight-current-row
              :loading="authResLoading"
              :data="authResTableData"
              align='center'>
              <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
              <vxe-table-column field="appresName" title="资源名称" width="100" sortable></vxe-table-column>
              <vxe-table-column field="appresCode" title="资源代码" width="90"></vxe-table-column>
              <vxe-table-column field="appresDesc" title="资源描述" width="90"></vxe-table-column>
              <vxe-table-column field="appresType" title="资源类型" width="90" :formatter="appresType"></vxe-table-column>
              <vxe-table-column field="appresPath" title="资源路径" width="90"></vxe-table-column>
              <vxe-table-column field="appresOperType" title="操作类型" width="90" :formatter="appresOperType"></vxe-table-column>
              <vxe-table-column field="state" title="状态" width="70" :formatter="appresStatus"></vxe-table-column>
              <vxe-table-column field="appresId" title="资源ID" :visible="false"></vxe-table-column>
              <vxe-table-column field="displaySeq" title="资源排序" :visible="false"></vxe-table-column>
              <vxe-table-column field="parentId" title="父资源" :visible="false"></vxe-table-column>
              <vxe-table-column field="appId" title="应用ID" :visible="false"></vxe-table-column>
              <vxe-table-column title="操作" width="120">
                <template v-slot="{ row, seq }">
                  <a class="link" @click="edit(row, seq)">编辑</a>
                  <div class="divider"></div>
                  <a class="link" @click="delBatch(row, seq)">删除</a>
                </template>
              </vxe-table-column>
            </vxe-table>
            <vxe-pager
              size = "small"
              :loading="authResLoading"
              :current-page="authResTablePage.page"
              :page-size="authResTablePage.rows"
              :total="authResTablePage.records"
              :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
              @page-change="authResPageChange"
              >
            </vxe-pager>
        </z-list-panel>
      </z-col>
    </z-row>
    </z-card>
    <!-- 弹出 -->
    <edit-authappresinfo ref="editAuthAppResInfo" :title="editTitle" :model-type="modelType"></edit-authappresinfo>
  </div>
</template>
<script>
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import authAppResApi from '../api/api.js'
import editAuthAppResInfo from '../editAuthAppResInfo/editAuthAppResInfo'
Vue.use(VXETable)
export default {
  name: 'authAppResInfoManage',
  components: {
    'edit-authappresinfo': editAuthAppResInfo
  },
  data: function () {
    return {
      // 系统应用列表
      authAppLoading: false,
      authAppTableData: [],
      authAppTablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      // 系统资源列表
      authResLoading: false,
      authResTableData: [],
      authResTablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editTitle: '',
      modelType: ''
    }
  },
  created: function () {
    this.authAppQuery()
  },
  mounted: function () {},
  methods: {
    // 查询
    authAppQuery: function () {
      let that = this
      this.authAppLoading = true
      authAppResApi.authAppQuery(that.authAppTablePage).then(function (response) {
        that.authAppTableData = response.data.rows
        that.authAppTablePage.records = response.data.records
        that.authAppLoading = false
      })
    },
    authResQuery: function (appId) {
      let that = this
      this.authResLoading = true
      let params = Object.assign({appId: appId}, this.tablePage)
      authAppResApi.authResQuery(params).then(function (response) {
        that.authResTableData = response.data.rows
        that.authResTablePage.records = response.data.records
        that.authResLoading = false
      })
    },
    // 分页
    authAppPageChange ({ currentPage, pageSize }) {
      this.authAppTableData.page = currentPage
      this.authAppTablePage.rows = pageSize
      this.query()
    },
    authResPageChange ({ currentPage, pageSize }) {
      this.authResTableData.page = currentPage
      this.authResTablePage.rows = pageSize
      this.query()
    },
    // 选择行
    changeRow: function (currentRow) {
      let appId = currentRow.row.appId
      this.authResQuery(appId)
    },
    add: function () {
      let table = this.$refs['appTableForRes']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error('请从左侧选择一条系统应用！')
        return
      }
      this.modelType = 'add'
      this.editTitle = '新增资源'
      let ref = this.$refs.editAuthAppResInfo
      ref.modelType = 'add'
      ref.handleReset()
      ref.editAppResModel.parentId = ['****']
      ref.editAppResModel.supAppresId = '****'
      ref.editAppResModel.appId = data.appId
      ref.operTypeIsShow = false
      ref.isNotAble = false
      ref.modelIsOpen = true
    },
    edit: function (data) {
      this.modelType = 'edit'
      this.editTitle = '编辑资源'
      let ref = this.$refs.editAuthAppResInfo
      // 循环获取上级节点
      // 赋值
      ref.editAppResModel.appresId = data.appresId
      ref.editAppResModel.appresName = data.appresName
      ref.editAppResModel.appresCode = data.appresCode
      ref.editAppResModel.appresDesc = data.appresDesc
      ref.editAppResModel.parentId = ['****']
      ref.editAppResModel.supAppresId = '****'
      ref.editAppResModel.appresType = data.appresType
      ref.editAppResModel.appresPath = data.appresPath
      ref.editAppResModel.appresOperType = data.appresOperType
      ref.editAppResModel.displaySeq = data.displaySeq
      ref.editAppResModel.state = data.state
      ref.editAppResModel.appId = data.appId
      ref.isNotAble = true
      ref.modelIsOpen = true
    },
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            authAppResApi.appResInfoDelete(data.appresId).then(function (response) {
              if (response.data.code === '0') { // 删除失败，该应用已经与资源进行了关联
                that.$Message.error(response.data.msg)
              } else {
                that.$Message.success(response.data.msg)
                let table = that.$refs['appTableForRes']
                let data = table.getCurrentRecord()
                if (data) {
                  that.authResQuery(data.appId)
                }
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
    appresType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '1':
          return 'API网关'
        case '2':
          return '消息队列'
        case '3':
          return 'HTTP'
        case '4':
          return '分布式服务'
      }
    },
    appresOperType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '1':
          return '操作1'
        case '2':
          return '操作2'
      }
    },
    appresStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '不可用'
        case '1':
          return '可用'
      }
    }
  }

}
</script>
