<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-12 13:16:20
 * @LastEditors: Please set LastEditors
 * 此页面为角色管理页面
 -->
<template>
<div class="frame-page">
    <z-list-panel>
        <div slot="title">{{$t('roleManage.title.roleManageList')}}</div>
        <div slot="buttons">
          <z-button type="text" icon="plus-round" @click="addRole">{{$t('roleManage.button.addRole')}}</z-button>
          <z-button type="text" icon="navicon-round"  @click="addUser">{{$t('roleManage.button.addUser')}}</z-button>
          <z-button type="text" icon="navicon-round"  @click="addOrg">{{$t('roleManage.button.addOrg')}}</z-button>
          <z-button type="text" icon="navicon-round"  @click="doPrivilege" >{{$t('roleManage.button.doPrivilege')}}</z-button>
          <z-button type="text" icon="navicon-round" @click="doBusiPrivilege" >{{$t('roleManage.button.doBusiPrivilege')}}</z-button>
          <z-button type="text" icon="navicon-round" @click="doDataPrivilege" >{{$t('roleManage.button.doDataPrivilege')}}</z-button>
          <ui-privilege url="/role/exportAllFuncPrivilege"><z-button type="text" icon="navicon-round" @click="exportAllFuncPrivilege" >功能授权数据导出</z-button></ui-privilege>
        </div>
        <vxe-table
            ref="rolesManage"
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
            <vxe-table-column field="roleId" :title="$t('roleManage.title.roleId')" :visible="false"></vxe-table-column>
            <vxe-table-column field="parentId" :title="$t('roleManage.title.parentId')" :visible="false"></vxe-table-column>
            <vxe-table-column field="showFlag" :title="$t('roleManage.title.showFlag')" :visible="false"></vxe-table-column>
            <vxe-table-column field="isAdminRole" :title="$t('roleManage.title.isAdminRole')" :visible="false"></vxe-table-column>
            <vxe-table-column field="roleName" :title="$t('roleManage.title.roleName')" tree-node></vxe-table-column>
            <vxe-table-column field="roleCode" :title="$t('roleManage.title.roleCode')"></vxe-table-column>
            <vxe-table-column field="isAdminRoleDesc" :title="$t('roleManage.title.isAdminRoleDesc')"></vxe-table-column>
            <vxe-table-column field="createBy" :title="$t('roleManage.title.createBy')"></vxe-table-column>
            <vxe-table-column field="createDate" :title="$t('roleManage.title.createDate')"></vxe-table-column>
            <vxe-table-column :title="$t('roleManage.title.operate')">
              <template v-slot="{ row, seq }">
                <a class="link" @click="edit(row, seq)">{{$t('common.button.edit')}}</a>
                <div class="divider"></div>
                <a class="link" @click="delBatch(row, seq)">{{$t('common.button.delete')}}</a>
              </template>
            </vxe-table-column>
        </vxe-table>
        <!-- <vxe-pager
             size = "small"
            :loading="loading"
            :current-page="tablePage.page"
            :page-size="tablePage.rows"
            :total="tablePage.records"
            :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
            @page-change="handlePageChange"
            >
        </vxe-pager> -->
     </z-list-panel>
     <!-- 弹出 -->
     <edit-roles ref="editRoles" :title="editRoleTitle" :model-type="modelType"></edit-roles>
     <add-user ref="addUser"></add-user>
     <add-org ref="addOrg"></add-org>
     <role-privilege ref="rolePrivilege"></role-privilege>
     <data-privilege ref="dataPrivilege"></data-privilege>
</div>
</template>
<script>
import '@/components/framework/vxe-table'
import rolesApi from '../api/api.js'
import exportApi from '@/components/framework/vxe-table-export/api.js'
import editRoles from '../editRoles/editRoles'
import addUser from '../addUsern/addUsern'
import addOrg from '../addOrg/addOrg'

import '@/components/framework/ui-privilege'
import rolePrivilege from '../rolePrivilege/rolePrivilege'
import dataPrivilege from '../../datacategory/authData/authData'
import Config from '@/config/index.js'
export default {
  name: 'rolesManage',
  components: {
    'edit-roles': editRoles,
    'add-user': addUser,
    'add-org': addOrg,
    'role-privilege': rolePrivilege,
    'data-privilege': dataPrivilege
  },
  data: function () {
    return {
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10000,
        records: 0
      },
      editRoleTitle: '',
      loading: false,
      isAdminRoleCurrent: '0',
      editParentData: '',
      modelType: '',
      adminRoleIdCurrent: ''
    }
  },
  created: function () {
    this.query()
  },
  mounted: function () {
    let that = this
    let adminRoleId = this.$store.state.currentAdminRoleId
    if (adminRoleId !== '') {
      that.isAdminRoleCurrent = '1'
    } else {
      that.isAdminRoleCurrent = '0'
    }
    that.adminRoleIdCurrent = adminRoleId
  },
  methods: {
    query: function () {
      let that = this
      this.loading = true
      rolesApi.queryRoles(this.tablePage).then(function (response) {
        that.tableData = response.data.rows
        that.loading = false
        setTimeout(function () {
          let table = that.$refs['rolesManage']
          if (table) {
            table.setAllTreeExpansion(true)
            table.clearCurrentRow()
          }
        })
      })
    },
    // 刷新
    refreshTable: function () {
      let table = this.$refs['rolesManage']
      table.syncData()
      this.query()
    },
    // 配置用户
    addUser: function () {
      let that = this
      let table = this.$refs['rolesManage']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error(that.$t('common.tips.chooseOneRecord'))
        return
      }
      if (that.adminRoleIdCurrent === '1' && that.adminRoleIdCurrent === data.roleId) {
        that.$Message.error(that.$t('roleManage.tips.adminRootRoleCanNotAddUser'))
        return
      }
      this.$refs.addUser.modelIsOpen = true
      this.$refs.addUser.roleId = data.roleId
    },
    // 配置组织
    addOrg: function () {
      let that = this
      let table = this.$refs['rolesManage']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error(that.$t('common.tips.chooseOneRecord'))
        return
      }
      if (that.adminRoleIdCurrent === '1' && that.adminRoleIdCurrent === data.roleId) {
        that.$Message.error(that.$t('roleManage.tips.adminRootRoleCanNotAddOrg'))
        return
      }
      this.$refs.addOrg.modelIsOpen = true
      this.$refs.addOrg.roleId = data.roleId
    },
    // 管理授权
    doPrivilege: function () {
      // 挂载页面
      let table = this.$refs['rolesManage']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error(this.$t('common.tips.chooseOneRecord'))
        return
      }
      if (this.adminRoleIdCurrent === '1' && this.adminRoleIdCurrent === data.roleId) {
        this.$Message.error(this.$t('roleManage.tips.adminRootRoleCanNotDoPrivilege'))
        return
      }
      if (data.isAdminRole !== '1') {
        this.$Message.error(this.$t('roleManage.tips.nonAdminRoleCanNotDoPrivilege'))
        return
      }
      // 赋值
      this.$refs.rolePrivilege.modelIsOpen = true
      this.$refs.rolePrivilege.title = this.$t('roleManage.title.doPrivilege')
      this.$refs.rolePrivilege.appClear()
      this.$refs.rolePrivilege.roleId = data.roleId
      this.$refs.rolePrivilege.authType = '1'
      this.$refs.rolePrivilege.appModel.appId = ''
      if (!Config.multiApp) {
        this.$refs.rolePrivilege.query()
      }
    },
    // 业务授权
    doBusiPrivilege: function () {
      let table = this.$refs['rolesManage']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error(this.$t('common.tips.chooseOneRecord'))
        return
      }
      if (this.adminRoleIdCurrent === '1' && this.adminRoleIdCurrent === data.roleId) {
        this.$Message.error(this.$t('roleManage.tips.adminRootRoleCanNotDoBusPrivilege'))
        return
      }
      // 赋值
      this.$refs.rolePrivilege.modelIsOpen = true
      this.$refs.rolePrivilege.title = this.$t('roleManage.title.doBusdoPrivilege')
      this.$refs.rolePrivilege.appClear()
      this.$refs.rolePrivilege.roleId = data.roleId
      this.$refs.rolePrivilege.authType = '0'
      this.$refs.rolePrivilege.appModel.appId = ''
      if (!Config.multiApp) {
        this.$refs.rolePrivilege.query()
      }
    },
    // 配置数据授权
    doDataPrivilege: function () {
      let table = this.$refs['rolesManage']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error(this.$t('common.tips.chooseOneRecord'))
        return
      }
      this.$refs.dataPrivilege.modelIsOpen = true
      this.$refs.dataPrivilege.appClear()
      this.$refs.dataPrivilege.roleId = data.roleId
      this.$refs.dataPrivilege.appModel.appId = ''
      if (!Config.multiApp) {
        this.$refs.dataPrivilege.query()
      }
    },
    // 添加
    addRole: function () {
      if (this.isAdminRoleCurrent === '0') {
        this.$Message.error(this.$t('roleManage.tips.nonAdminRoleCanNotOperate'))
        return
      }
      this.$refs.editRoles.handleReset()
      this.modelType = 'add'
      this.editRoleTitle = this.$t('roleManage.title.addRole')
      this.$refs.editRoles.modelIsOpen = true
    },
    // 编辑
    edit: function (data) {
      let that = this
      if (this.isAdminRoleCurrent === '0') {
        this.$Message.error(this.$t('roleManage.tips.nonAdminRoleCanNotOperate'))
        return
      }
      let table = this.$refs['rolesManage']
      if (that.adminRoleIdCurrent === '1' && that.adminRoleIdCurrent === data.roleId) {
        that.$Message.error(that.$t('roleManage.tips.adminRootRoleCanNotEditSelf'))
        return
      }
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
      this.$refs.editRoles.handleReset()
      this.modelType = 'edit'
      this.$refs.editRoles.modelIsOpen = true
      this.$refs.editRoles.getData(data, supRoleId)
      this.editRoleTitle = this.$t('roleManage.title.editRole')
    //   this.$refs.editRoles.getRoleTreeList()
    },
    // 删除
    delBatch: function (data) {
      if (this.isAdminRoleCurrent === '0') {
        this.$Message.error(this.$t('roleManage.tips.nonAdminRoleCanNotOperate'))
        return
      }
      let that = this
      if (that.adminRoleIdCurrent === '1' && that.adminRoleIdCurrent === data.roleId) {
        that.$Message.error(that.$t('roleManage.tips.adminRootRoleCanNotDelSelf'))
        return
      }
      that.$Modal.confirm({
        title: that.$t('common.title.confirm'),
        content: that.$t('common.tips.confirmDelete'),
        onOk: function () {
          setTimeout(function () {
            rolesApi.rolesInfoDel(data.roleId).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error(response.data.msg)
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    exportAllFuncPrivilege: function () {
      let filename = new Date().getTime() + '.xlsx'
      let getAllFuncPrivilegeURL = '/role/allRoleFuncList'
      let config = {
        method: 'post'
      }
      let data = {
        exportHttpData: {
          codeMappingKey: '[]',
          codeMappingKeyCol: '[]',
          codeMappingSeparator: '[]',
          codeTableData: '{}',
          colDateCode: '{}',
          colModel: JSON.stringify(['roleId', 'roleCode', 'roleName', 'supRoleId', 'isAdminRole', 'tenantId', 'functionId', 'functionName', 'functionType', 'functionUrl', 'functionDesc', 'supFuncId', 'state', 'menuType', 'appId', 'authorityType']),
          colNames: JSON.stringify(['角色标识', '角色编码', '角色名称', '上级角色标识', '是否管理角色', '租户标识', '功能标识', '功能名称', '功能类型', '功能URL', '功能描述', '上级功能标识', '状态', '菜单类型', '应用标识', '授权类型']),
          colRelation: '[]',
          exportFlag: '1',
          exportHideCol: 'yes',
          exportMode: 'cur',
          exportVersion: '2007',
          footData: '',
          groupHeader: '[]',
          queryMethod: getAllFuncPrivilegeURL,
          rowsReader: 'rows',
          udReader: 'userdata'
        },
        page: 0,
        rows: 0
      }
      let paramData = Object.assign({}, data)
      exportApi.download(getAllFuncPrivilegeURL, paramData, config).then(function (res) {
        if (typeof window.chrome !== 'undefined') {
          // Chrome version
          let blob = new Blob([res.data])
          let downloadElement = document.createElement('a')
          let href = window.URL.createObjectURL(blob) // 创建下载的链接
          downloadElement.href = href
          downloadElement.download = filename // 下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click() // 点击下载
          document.body.removeChild(downloadElement) // 下载完成移除元素
          window.URL.revokeObjectURL(href) // 释放掉blob对象
        } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
          // IE version
          let blob = new Blob([res.data], { type: 'application/force-download' })
          window.navigator.msSaveBlob(blob, filename)
        } else {
          // Firefox version
          let file = new File([res.data], filename, { type: 'application/force-download' })
          window.open(URL.createObjectURL(file))
        }
      })
    }
    // handlePageChange ({ currentPage, pageSize }) {
    //   this.tablePage.page = currentPage
    //   this.tablePage.rows = pageSize
    //   this.query('page')
    // }
  }
}
</script>
