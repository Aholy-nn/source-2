<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-15 15:19:51
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="model" :model="model" :label-width="86" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('userManage.searchLabel.userName')">
              <z-input v-model="model.userName" :maxlength="54" :placeholder="$t('common.placeholder.input')" clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('userManage.searchLabel.userCode')">
              <z-input v-model="model.userCode" :maxlength="32" :placeholder="$t('common.placeholder.input')" clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item :label="$t('userManage.searchLabel.orgName')">
               <z-input v-model="model.orgName" :placeholder="$t('common.placeholder.input')" readonly clearable @on-clear="clearOrg">
                <z-button slot="append" icon="ios-search" @click="openOrgModal"></z-button>
              </z-input>
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
        <div slot="title">{{$t('userManage.title.userManageList')}}</div>
        <div slot="buttons">
            <ui-privilege url="/user/addUser"><z-button type="text" icon="plus-round" @click="add">{{$t('userManage.button.add')}}</z-button></ui-privilege>
            <z-button type="text" icon="refresh" @click="resetUser" >{{$t('userManage.button.resetUser')}}</z-button>
            <z-button type="text" icon="unlocked" @click="unlock" >{{$t('userManage.button.unlock')}}</z-button>
            <z-button type="text" icon="refresh" @click="resetPas" >{{$t('userManage.button.resetPas')}}</z-button>
            <z-button type="text" icon="wrench" @click="editPas" >{{$t('userManage.button.editPas')}}</z-button>
            <z-button type="text" icon="navicon-round"  @click="addRole" >{{$t('userManage.button.addRole')}}</z-button>
            <z-button type="text" icon="navicon-round"  @click="addGroup" >{{$t('userManage.button.addGroup')}}</z-button>
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
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="userName" :title="$t('userManage.title.userName')" sortable></vxe-table-column>
          <vxe-table-column field="userCode" :title="$t('userManage.title.userCode')"></vxe-table-column>
          <vxe-table-column field="orgName" :title="$t('userManage.title.orgName')"></vxe-table-column>
          <vxe-table-column field="posName" :title="$t('userManage.title.posName')"></vxe-table-column>
          <vxe-table-column field="roleNames" :title="$t('userManage.title.roleNames')"></vxe-table-column>
          <vxe-table-column field="stateName" :title="$t('userManage.title.stateName')"></vxe-table-column>
          <vxe-table-column field="createBy" :title="$t('userManage.title.createBy')"></vxe-table-column>
          <vxe-table-column field="createDate" :title="$t('userManage.title.createDate')" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="expireTime" :title="$t('userManage.title.expireTime')" :visible="false" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="positionId" :title="$t('userManage.title.positionId')" :visible="false"></vxe-table-column>
          <vxe-table-column field="orgId" :title="$t('userManage.title.orgId')" :visible="false"></vxe-table-column>
          <vxe-table-column field="orgName" :title="$t('userManage.title.orgName')" :visible="false"></vxe-table-column>
          <vxe-table-column field="userId" :title="$t('userManage.title.userId')" :visible="false"></vxe-table-column>
          <vxe-table-column field="state" :title="$t('userManage.title.state')" :visible="false"></vxe-table-column>
          <vxe-table-column :title="$t('userManage.title.operate')" :width="150" fixed="right">
            <template v-slot="{ row, seq }">
              <a class="link" @click="extend(row, seq)">{{$t('common.button.detail')}}</a>
              <div class="divider"></div>
              <a class="link" @click="edit(row, seq)">{{$t('common.button.edit')}}</a>
              <div class="divider"></div>
              <a class="link" @click="delBatch(row, seq)">{{$t('common.button.delete')}}</a>
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
    <!-- 弹出 -->
  <add-search-group ref="addSearchOrg" @orgName="addOrgName"></add-search-group>
  <edit-user ref="editUser" :title="editUserTitle" :model-type="modelType"></edit-user>
  <edit-user-extend ref="editUserExtend" :title="editUserExtendTitle"></edit-user-extend>
  <edit-pas ref="editPas"></edit-pas>
  <add-group ref="addGroup"></add-group>
  <add-role ref="addRole"></add-role>
  </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import userApi from '../api/api.js'
import addSearchOrg from '../addSearchOrg/addSearchOrg'
import editUser from '../editUser/editUser'
import editUserExtend from '../editUserExtend/editUserExtend'
import editPas from '../editPas/editPas'
import addGroup from '../addGroup/addGroup'
import addRole from '../addRole/addRole'
Vue.use(vxeTableExport)
export default {
  name: 'userManage',
  components: {
    'add-search-group': addSearchOrg,
    'edit-user': editUser,
    'edit-user-extend': editUserExtend,
    'edit-pas': editPas,
    'add-group': addGroup,
    'add-role': addRole
  },
  data: function () {
    return {
      model: {
        userName: '',
        userCode: '',
        orgName: '',
        qOrgId: ''
      },
      // 表数据

      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editUserTitle: '',
      editUserExtendTitle: '',
      modelType: '',
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'user/users',
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
    clearOrg: function () {
      this.model.qOrgId = ''
    },
    // 打开组织树
    openOrgModal: function () {
      this.$refs.addSearchOrg.modelIsOpen = true
    },
    addOrgName: function (name, orgId) {
      this.model.orgName = name
      this.model.qOrgId = orgId
    },
    // 检索事件
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.model, this.tablePage)
      userApi.userInfoQuery(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        if (that.$refs['childTable']) {
          that.$refs['childTable'].clearCurrentRow()
        }
      })
    },
    // 重置
    reset: function () {
      this.model.userName = ''
      this.model.userCode = ''
      this.model.orgName = ''
      this.model.qOrgId = ''
    },

    // 添加
    add: function () {
      this.$refs.editUser.modelIsOpen = true
      this.modelType = 'add'
      this.$refs.editUser.handleReset()
      this.$refs.editUser.isIdShow = true
      this.$refs.editUser.isNameShow = false
      this.$refs.editUser.isNotAble = false
      this.editUserTitle = '添加用户'
    },
    // 重置过期用户
    resetUser: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否重置用户？',
        onOk: function () {
          setTimeout(function () {
            // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
            if (!that.checkIfCanOperate(data.userCode)) {
              that.$Modal.info({
                title: '信息',
                content: '当前登录用户不能操作自己的信息！'
              })
              return
            }
            // 判断操作的数据是否是已过期的用户，如果是，则不能重置
            if (data.state !== '4') {
              that.$Modal.info({
                title: '信息',
                content: '请选择已过期的用户进行重置！'
              })
              return
            }
            userApi.userReset(data.userId).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 解锁
    unlock: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否解锁？',
        onOk: function () {
          setTimeout(function () {
            // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
            if (!that.checkIfCanOperate(data.userCode)) {
              that.$Modal.info({
                title: '信息',
                content: '当前登录用户不能操作自己的信息！'
              })
              return
            }
            userApi.unlock(data.userId).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
              } else {
                that.$Message.error(response.data.msg)
              }
            }).catch(function (error) {
              console.log(error)
              that.$Message.error('解锁失败！')
            })
          }, 500)
        }
      })
    },
    // 重置密码
    resetPas: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否重置密码？',
        onOk: function () {
          setTimeout(function () {
            // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
            if (!that.checkIfCanOperate(data.userCode)) {
              that.$Modal.info({
                title: '信息',
                content: '当前登录用户不能操作自己的信息！'
              })
              return
            }
            userApi.pasReset(data.userId).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
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
    // 修改密码
    editPas: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
      if (!that.checkIfCanOperate(data.userCode)) {
        that.$Modal.info({
          title: '信息',
          content: '当前登录用户不能操作自己的信息！'
        })
        return
      }
      this.$refs.editPas.reset()
      this.$refs.editPas.getData({id: data.id, userId: data.userId})
      this.$refs.editPas.modelIsOpen = true
    },
    // 配置角色
    addRole: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
      if (!this.checkIfCanOperate(data.userCode)) {
        that.$Modal.info({
          title: '信息',
          content: '当前登录用户不能操作自己的信息！'
        })
        return
      }
      this.$refs.addRole.tableData = []
      this.$refs.addRole.userId = data.userId
      this.$refs.addRole.modelIsOpen = true
      this.$refs.addRole.addRoleModel.adminRoleNum = 0
      this.$refs.addRole.query()
    },
    // 配置用户组
    addGroup: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      // let id = data.id
      // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
      if (!this.checkIfCanOperate(data.userCode)) {
        that.$Modal.info({
          title: '信息',
          content: '当前登录用户不能操作自己的信息！'
        })
        return
      }
      this.$refs.addGroup.tableData = []
      this.$refs.addGroup.userId = data.userId
      this.$refs.addGroup.modelIsOpen = true
      this.$refs.addGroup.query()
    },
    // 刷新
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.syncData()
      this.query()
    },
    // 删除
    delBatch: function (data) {
      let that = this
      // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
      if (!this.checkIfCanOperate(data.userCode)) {
        this.$Modal.info({
          title: '信息',
          content: '当前登录用户不能操作自己的信息！'
        })
        return
      }
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            userApi.userInfoDel(data.userId).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error('删除失败')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 编辑扩展信息
    extend: function (data) {
      let that = this
      let currentUserId = this.$store.state.userId
      if (data.userId === currentUserId) {
        this.$Modal.info({
          title: '信息',
          content: '当前登录用户不能操作自己的信息！'
        })
        return
      }
      userApi.userExtendInfoById(data.userId).then(function (response) {
        if (response.data.code === '01') {
          that.$refs.editUserExtend.getData(response.data.data)
          that.$refs.editUserExtend.modelIsOpen = true
          that.editUserExtendTitle = '编辑用户扩展信息'
        } else {
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
        that.$Message.error('获取用户扩展信息失败')
      })
    },
    // 编辑
    edit: function (data) {
      data.createDate = XEUtils.toDateString(data.createDate, 'yyyy-MM-dd')
      data.expireTime = XEUtils.toDateString(data.expireTime, 'yyyy-MM-dd')
      // 判断操作的数据是否为当前登录用户的数据，如果是，则不能操作自己的信息
      if (!this.checkIfCanOperate(data.userCode)) {
        this.$Modal.info({
          title: '信息',
          content: '当前登录用户不能操作自己的信息！'
        })
        return
      }
      this.$refs.editUser.modelIsOpen = true
      this.editUserTitle = '编辑用户'
      this.modelType = 'edit'
      this.$refs.editUser.getData(data)
    },
    checkIfCanOperate: function (operUserCode) {
      let currentUserCode = this.$store.state.userCode
      if (currentUserCode === operUserCode) {
        return false
      } else {
        return true
      }
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    getModel: function () {
      return this.model
    },
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
    }
  }
}
</script>
