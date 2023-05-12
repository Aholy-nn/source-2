<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-13 14:05:43
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="userGroupModal" :model="model" :label-width="100" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <form-item :label="$t('userGroupn.label.groupCode')" >
                <z-input v-model="model.groupCode" :placeholder="$t('common.placeholder.input')" clearable></z-input>
            </form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
             <form-item :label="$t('userGroupn.label.groupName')" >
                <z-input v-model="model.groupName" :placeholder="$t('common.placeholder.input')" clearable></z-input>
            </form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
               <z-button type="primary" icon="ios-search" @click="doQuery">{{$t('common.button.query')}}</z-button>
               <z-button icon="android-refresh" @click="doReset">{{$t('common.button.reset')}}</z-button>
          </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
 <z-list-panel class="m-t-15">
        <!-- <div slot="title"></div> -->
        <div slot="buttons">
            <ui-privilege url="/sys/usergroup/add">
                <z-button type="text" icon="plus-round" @click="doAdd">{{$t('common.button.add')}}</z-button>
            </ui-privilege>
             <ui-privilege url="/sys/usergroup/authres">
                <z-button type="text" icon="paper-airplane" @click="doAuthResource">{{$t('userGroupn.button.doAuthResource')}}</z-button>
            </ui-privilege>
            <ui-privilege url="/sys/usergroup/authres">
                <z-button type="text" icon="paper-airplane" @click="doAddUser">{{$t('userGroupn.button.doAddUser')}}</z-button>
            </ui-privilege>
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
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="groupId" :title="$t('userGroupn.title.groupId')" :visible="false" sortable></vxe-table-column>
          <vxe-table-column field="groupCode" :title="$t('userGroupn.title.groupCode')"></vxe-table-column>
          <vxe-table-column field="groupName" :title="$t('userGroupn.title.groupName')"></vxe-table-column>
          <vxe-table-column field="createBy" :title="$t('userGroupn.title.createBy')"></vxe-table-column>
          <vxe-table-column field="createDate" :title="$t('userGroupn.title.createDate')" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="updateBy" :title="$t('userGroupn.title.updateBy')" :visible="false"></vxe-table-column>
          <vxe-table-column field="updateDate" :title="$t('userGroupn.title.updateDate')" :visible="false"></vxe-table-column>
          <vxe-table-column :title="$t('common.title.operate')">
            <template v-slot="{ row, seq }">
              <a class="link" @click="doEdit(row, seq)">{{$t('common.button.edit')}}</a>
              <div class="divider"></div>
              <a class="link" @click="doDelete(row, seq)">{{$t('common.button.delete')}}</a>
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
     <user-group-edit ref="userGroupEdit" :title="userGroupEditTitle" :model-type="modelType"></user-group-edit>
     <auth-resource ref="authResource" :title="authResourceTitle"></auth-resource>
     <group-add-user ref="groupAddUser" :title="groupAddUserTitle"></group-add-user>
  </div>
</template>
<script>
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import userGroupAPI from '../api/api.js'
import userGroupEdit from '../userGroupEdit/userGroupEdit'
import '@/components/framework/ui-privilege'
import authResource from '../resource/authResource'
import groupAddUser from '../groupAddUser/groupAddUser'
import Config from '@/config/index.js'
export default {
  name: 'userGroupManage',
  components: {
    'user-group-edit': userGroupEdit,
    'auth-resource': authResource,
    'group-add-user': groupAddUser
  },
  data: function () {
    return {
      model: {
        groupCode: '', // 用户组编码
        groupName: '' // 用户组名称
      },
      // 表数据
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      loading: false,
      userGroupEditTitle: '',
      modelType: '',
      authResourceTitle: '',
      groupAddUserTitle: '',
      ifMultiApp: Config.multiApp
    }
  },
  created: function () {
    this.doQuery()
  },
  mounted: function () {},
  methods: {
    // 查询
    doQuery: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.model, this.tablePage)
      userGroupAPI.queryUrl(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$refs['childTable'].clearCurrentRow()
      })
    },
    // 重置
    doReset: function () {
      this.model.groupCode = ''
      this.model.groupName = ''
    },
    // 新建
    doAdd: function () {
      this.$refs.userGroupEdit.modelIsOpen = true
      this.modelType = 'add'
      this.userGroupEditTitle = this.$t('userGroupn.title.userGroupAddTitle')
      this.$refs.userGroupEdit.editModel = {
        groupId: '',
        groupCode: '',
        groupName: '',
        parentGroupId: '****'
      }
    },
    // 编辑
    doEdit: function (data) {
      this.$refs.userGroupEdit.modelIsOpen = true
      this.modelType = 'update'
      this.$refs.userGroupEdit.handleReset()
      this.userGroupEditTitle = this.$t('userGroupn.title.userGroupEditTitle')
      for (let key in data) {
        this.$refs.userGroupEdit.editModel[key] = data[key]
      }
    },
    // 删除
    doDelete: function (data) {
      let that = this
      this.$Modal.confirm({
        title: this.$t('common.title.confirm'),
        content: this.$t('common.tips.confirmDelete'),
        onOk: function () {
          setTimeout(function () {
            let array = []
            array.push(data.groupId)
            userGroupAPI.deleteUserGroup(array).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.doQuery()
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
    // 资源授权
    doAuthResource: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error(this.$t('common.tips.chooseOneRecord'))
        return
      }
      this.authResourceTitle = this.$t('userGroupn.title.authResourceTitle')
      this.$refs.authResource.modelIsOpen = true
      this.$refs.authResource.reset()
      this.$refs.authResource.groupId = data.groupId
      this.$refs.authResource.authResModel.groupNm = data.groupName
      // this.$refs.authResource.doQuery()
    },
    // 配置用户
    doAddUser: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error(this.$t('common.tips.chooseOneRecord'))
        return
      }
      this.groupAddUserTitle = this.$t('userGroupn.title.groupAddUserTitle')
      this.$refs.groupAddUser.modelIsOpen = true
      this.$refs.groupAddUser.groupId = data.groupId
      this.$refs.groupAddUser.orgClear()
    },
    // 刷新
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.refreshData()
      this.doQuery()
    },
    // 分页
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.doQuery('page')
    },
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }
}
</script>
