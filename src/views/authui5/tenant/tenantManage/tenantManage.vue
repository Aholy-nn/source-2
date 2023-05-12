<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:40:16
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="frame-page">
    <z-search-panel>
       <z-form :model="tenantModel" :label-width="100" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="租户名称:">
              <z-input v-model="tenantModel.tenantName" placeholder="请输入..."></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="租户代码:">
             <z-input v-model="tenantModel.tenantCode" placeholder="请输入..."></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="应用名称:">
             <z-input v-model="tenantModel.appName" placeholder="请输入..."></z-input>
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
        <div slot="title">租户管理列表</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="add">添加</z-button>
            <z-button type="text" icon="navicon-round"  @click="tenantAdminEdit" >管理员配置</z-button>
            <z-button type="text" icon="navicon-round"  @click="tenantAdminPassReset" >管理员密码重置</z-button>
            <z-button type="text" icon="navicon-round"  @click="doAdminPrivilege" >菜单授权</z-button>
            <z-button type="text" icon="navicon-round"  @click="tenantRest" >启用租户</z-button>
            <z-button type="text" icon="navicon-round"  @click="tenantStop" >停用租户</z-button>
            <z-button type="text" icon="navicon-round"  @click="addApp" >配置应用</z-button>
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
          :checkbox-config="{trigger: 'row', highlight: true, range: true}"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column field="tenantName" title="租户名称" sortable></vxe-table-column>
          <vxe-table-column field="tenantCode" title="租户代码"></vxe-table-column>
          <vxe-table-column field="tenantType" title="租户类别" :formatter="formatType"></vxe-table-column>
          <vxe-table-column field="appNames" title="应用名称"></vxe-table-column>
          <vxe-table-column field="state" title="当前状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="remarks" title="备注"></vxe-table-column>
          <vxe-table-column field="createBy" title="创建人"></vxe-table-column>
          <vxe-table-column field="createDate" title="创建时间" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="tenantId" title="租户标识" :visible="false"></vxe-table-column>
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
     <edit-tenant ref="editTenant" :title="editTenantTitle" :model-type="modelType"></edit-tenant>
     <tenant-admin-edit ref="tenantAdminEdit" :title="tenantAdminEditTitle"></tenant-admin-edit>
     <tenant-admin-privilege ref="tenantAdminPrivilege" :title="tenantAdminPrivilegeTitle"></tenant-admin-privilege>
     <tenant-add-app ref="tenantAddApp"></tenant-add-app>
  </div>
</template>
<script>
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import tenantApi from '../api/api.js'
import editTenant from '../editTenant/editTenant'
import tenantAdminEdit from '../tenantAdminEdit/tenantAdminEdit'
import tenantAdminPrivilege from '../tenantAdminPrivilege/tenantAdminPrivilege'
import tenantAddApp from '../addApp/addApp'
import Config from '@/config/index.js'
export default {
  name: 'tenantManage',
  components: {
    'edit-tenant': editTenant,
    'tenant-admin-edit': tenantAdminEdit,
    'tenant-admin-privilege': tenantAdminPrivilege,
    'tenant-add-app': tenantAddApp
  },
  data: function () {
    return {
      tenantModel: {
        tenantCode: '',
        tenantName: '',
        appName: ''
      },
      // 表格
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      loading: false,
      // 弹出
      editTenantTitle: '',
      tenantAdminEditTitle: '',
      modelType: '',
      tenantAdminPrivilegeTitle: ''
    }
  },
  created: function () {
    this.query()
  },
  mounted: function () {},
  methods: {
    // 检索事件
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.tenantModel, this.tablePage)
      tenantApi.queryUrl(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
      })
    },
    // 重置
    reset: function () {
      this.tenantModel.tenantCode = ''
      this.tenantModel.tenantName = ''
      this.tenantModel.appName = ''
    },
    // 分页
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    add: function () {
      this.$refs.editTenant.modelIsOpen = true
      this.modelType = 'add'
      this.$refs.editTenant.handleReset()
      this.editTenantTitle = '新增租户'
    },
    edit: function (data) {
      this.$refs.editTenant.modelIsOpen = true
      this.modelType = 'edit'
      this.$refs.editTenant.handleReset()
      this.editTenantTitle = '编辑租户'
      this.$refs.editTenant.editTenantModel.tenantName = data.tenantName
      this.$refs.editTenant.editTenantModel.tenantCode = data.tenantCode
      this.$refs.editTenant.editTenantModel.state = data.state
      this.$refs.editTenant.editTenantModel.remarks = data.remarks
      this.$refs.editTenant.editTenantModel.tenantId = data.tenantId
    },
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            tenantApi.tenantDel(data.tenantId).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 管理员配置
    tenantAdminEdit: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length !== 1) {
        this.$Message.error('请选择一条记录！')
        return
      }
      //  添加属性
      this.$refs.tenantAdminEdit.modelIsOpen = true
      this.tenantAdminEditTitle = '管理员配置'
      tenantApi.tenantAdminInfo(rows[0]).then(function (response) {
        let data = response.data.data
        that.$refs.tenantAdminEdit.editTenantAdminModel.userId = data.userId
        that.$refs.tenantAdminEdit.editTenantAdminModel.userName = data.userName
        that.$refs.tenantAdminEdit.editTenantAdminModel.userCode = data.userCode
        that.$refs.tenantAdminEdit.editTenantAdminModel.tenantId = data.tenantId
      }).catch(function (error) {
        console.log(error)
      })
    },
    // 管理员密码重置
    tenantAdminPassReset: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      this.$Modal.confirm({
        title: '确认',
        content: '是否重置密码？',
        onOk: function () {
          setTimeout(function () {
            let userCodes = ''
            let tenantIds = ''
            for (let i = 0; i < rows.length; i++) {
              userCodes = userCodes + rows[i].tenantCode + ','
              tenantIds = tenantIds + rows[i].tenantId + ','
            }
            let param = {'userCodes': userCodes, 'tenantIds': tenantIds}
            tenantApi.tenantAdminPassReset(param).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 菜单授权
    doAdminPrivilege: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length !== 1) {
        this.$Message.error('请选择一条记录！')
        return
      }
      this.tenantAdminPrivilegeTitle = '菜单授权'
      this.$refs.tenantAdminPrivilege.modelIsOpen = true
      this.$refs.tenantAdminPrivilege.appClear()
      this.$refs.tenantAdminPrivilege.appModel.appId = ''
      this.$refs.tenantAdminPrivilege.authType = '1'
      tenantApi.queryTenantAdminRoleId(rows[0]).then(function (response) {
        that.$refs.tenantAdminPrivilege.roleId = response.data.data.roleId
      }).catch(function (error) {
        console.log(error)
      })
      if (!Config.multiApp) {
        this.$refs.tenantAdminPrivilege.query()
      }
    },
    // 配置应用
    addApp: function () {
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length !== 1) {
        this.$Message.error('请选择一条记录！')
        return
      }
      this.$refs.tenantAddApp.modelIsOpen = true
      this.$refs.tenantAddApp.tenantId = rows[0].tenantId
      this.$refs.tenantAddApp.query()
    },
    // 启用租户
    tenantRest: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否启用租户？',
        onOk: function () {
          setTimeout(function () {
            let tenantIds = ''
            for (let i = 0; i < rows.length; i++) {
              tenantIds = tenantIds + rows[i].tenantId + ','
            }
            tenantApi.tenantBatchReset(tenantIds).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 停用租户
    tenantStop: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是停用租户？',
        onOk: function () {
          setTimeout(function () {
            let tenantIds = ''
            for (let i = 0; i < rows.length; i++) {
              tenantIds = tenantIds + rows[i].tenantId + ','
            }
            tenantApi.tenantBatchStop(tenantIds).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    formatType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return ''
        case '1':
          return '境内'
        case '2':
          return '境外'
      }
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '停用'
        case '1':
          return '正常'
        case '4':
          return '已删除'
      }
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }
}
</script>
