<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:39:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="角色模板列表" fullscreen>
    <z-list-panel>
        <div slot="title">角色配置列表</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="addTempRole">添加</z-button>
            <z-button type="text" icon="navicon-round" @click="doBusiPrivilege" >菜单授权</z-button>
            <z-button type="text" icon="navicon-round" @click="doDataPrivilege" >数据授权</z-button>
        </div>
        <vxe-table
            ref="roleTemplateManage"
            border
            resizable
            row-id="id"
            highlight-current-row
            show-header-overflow
            show-overflow
            :tree-config="{children: 'children', expandAll: true}"
            :loading="loading"
            align='center'
            :data="tableData">
            <vxe-table-column field="originalId" title="模板标识" :visible="false"></vxe-table-column>
            <vxe-table-column field="roleId" title="角色标识" :visible="false"></vxe-table-column>
            <vxe-table-column field="parentId" title="上级节点" :visible="false"></vxe-table-column>
            <vxe-table-column field="isAdminRole" title="是否管理角色" :visible="false"></vxe-table-column>
            <vxe-table-column field="roleName" title="角色名称" tree-node></vxe-table-column>
            <vxe-table-column field="roleCode" title="角色代码"></vxe-table-column>
            <vxe-table-column field="isAdminRoleDesc" title="是否管理角色" :formatter="formatStatus"></vxe-table-column>
            <vxe-table-column field="createBy" title="创建人"></vxe-table-column>
            <vxe-table-column field="createDate" title="创建时间"  :formatter="formatTime"></vxe-table-column>
            <vxe-table-column title="操作">
                <template v-slot="{ row, seq }">
                <a class="link" @click="editTempRole(row, seq)">编辑</a>
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
     <div slot="footer" class="ilead-modal-footer">
       <z-button type="dashed"  @click="handleClose()" style="margin-left: 8px">关闭</z-button>
    </div>
    <!-- 弹出 -->
     <new-template-roles ref="newTemplateRoles" :title="newTempRolesTitle"></new-template-roles>
     <role-template-privilege ref="roleTemplatePrivilege"></role-template-privilege>
     <auth-data-temp ref="authDataTemp"></auth-data-temp>
</z-modal>
</template>
<script>
import XEUtils from 'xe-utils'
import roleTemplateApi from '../api/api.js'
import newTemplateRoles from '../newTemplateRoles/newTemplateRoles'
import roleTemplatePrivilege from '../roleTemplatePrivilege/roleTemplatePrivilege'
import authDataTemp from '../authDataTemp/authDataTemp'
import Config from '@/config/index.js'
export default {
  name: 'roleTemplateManage',
  components: {
    'new-template-roles': newTemplateRoles,
    'role-template-privilege': roleTemplatePrivilege,
    'auth-data-temp': authDataTemp
  },
  data: function () {
    return {
      modelIsOpen: false,
      originalId: '',
      tableData: [],
      tablePage: {
        page: 1,
        rows: 100,
        records: 0
      },
      loading: false,
      isAdminRoleCurrent: '0',
      // 弹出
      newTempRolesTitle: '',
      modelType: ''
    }
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        let adminRoleId = this.$store.state.currentAdminRoleId
        if (adminRoleId !== '') {
          this.isAdminRoleCurrent = '1'
        } else {
          this.isAdminRoleCurrent = '0'
        }
        this.query()
      }
    }
  },
  methods: {
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      roleTemplateApi.queryRoles(this.originalId, this.tablePage).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$refs['roleTemplateManage'].clearCurrentRow()
      })
    },
    // 添加
    addTempRole: function () {
      if (this.isAdminRoleCurrent === '0') {
        this.$Message.error('此用户无管理角色，不允许操作！')
        return
      }
      let table = this.$refs['roleTemplateManage']
      let data = table.getCurrentRecord()
      let role = data ? data.roleName : '无'
      let roleId = data ? data.roleId : undefined
      this.$refs.newTemplateRoles.modelType = 'add'
      this.newTempRolesTitle = '新增角色'
      this.$refs.newTemplateRoles.modelIsOpen = true
      this.$refs.newTemplateRoles.handleReset()
      this.$refs.newTemplateRoles.parentId = []
      this.$refs.newTemplateRoles.parentId = roleId
      this.$refs.newTemplateRoles.parentRoleNm = role
      this.$refs.newTemplateRoles.addOriginalId = this.originalId
      this.$refs.newTemplateRoles.getTempRoleTreeList()
    },
    // 编辑
    editTempRole: function (data) {
      if (this.isAdminRoleCurrent === '0') {
        this.$Message.error('此用户无管理角色，不允许操作！')
        return
      }
      let table = this.$refs['roleTemplateManage']
      let supRoleId = []
      let i = 0
      let noRoot = true
      let temp = data
      while (noRoot) {
        if (!temp || temp.parentId === '*') {
          noRoot = false
          break
        }
        supRoleId[i] = temp.parentId
        let id = temp.parentId
        temp = table.getRowById(id)
        i = i + 1
      }
      // 转换顺序
      supRoleId = supRoleId.reverse()
      this.newTempRolesTitle = '编辑角色'
      this.$refs.newTemplateRoles.modelIsOpen = true
      this.$refs.newTemplateRoles.modelType = 'edit'
      this.$refs.newTemplateRoles.editOriginalId = this.originalId
      this.$refs.newTemplateRoles.getData(data, supRoleId)
      this.$refs.newTemplateRoles.getTempRoleTreeList()
    },
    // 删除
    delBatch: function (data) {
      if (this.isAdminRoleCurrent === '0') {
        this.$Message.error('此用户无管理角色，不允许操作！')
        return
      }
      let that = this
      that.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            roleTemplateApi.rolesTempInfoDel(data.roleId).then(function (response) {
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
    doBusiPrivilege: function () {
      let table = this.$refs['roleTemplateManage']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error('请选择一条记录！')
        return
      }
      if (this.adminRoleIdCurrent === '1' && this.adminRoleIdCurrent === data.roleId) {
        this.$Message.error('超级管理员不能配置自己的管理授权！')
        return
      }
      // 赋值
      this.$refs.roleTemplatePrivilege.modelIsOpen = true
      this.$refs.roleTemplatePrivilege.title = '业务授权'
      this.$refs.roleTemplatePrivilege.appClear()
      this.$refs.roleTemplatePrivilege.roleId = data.roleId
      this.$refs.roleTemplatePrivilege.authType = '0'
      this.$refs.roleTemplatePrivilege.appModel.appId = ''
      if (!Config.multiApp) {
        this.$refs.roleTemplatePrivilege.query()
      }
    },
    doDataPrivilege: function () {
      let table = this.$refs['roleTemplateManage']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error('请选择一条记录！')
        return
      }
      this.$refs.authDataTemp.modelIsOpen = true
      this.$refs.authDataTemp.appClear()
      this.$refs.authDataTemp.roleId = data.roleId
      this.$refs.authDataTemp.appModel.appId = ''
      if (!Config.multiApp) {
        this.$refs.authDataTemp.query()
      }
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '是'
        case '1':
          return '否'
      }
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }
}
</script>
