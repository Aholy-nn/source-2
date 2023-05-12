<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 11:48:36
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed height="500" width="600">
    <div class="m-b-20" v-if="multiApp && ifShowAppSelect">
        <label class="ilead-label-just-right">选择应用: </label>
        <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
            <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
        </z-select>
    </div>
    <div v-if="!multiApp || showPrivilege" :class="{'multi-apply-tree':multiApp}">
        <z-spin fix v-if="multiApp && treeLoading">
            <Icon type="load-c" size=30></Icon>
        </z-spin>
        <z-vtree ref="adminPrivilegeTree" :multiple="true" :option="options"  :choose-mode="chooseMode" v-model="value"></z-vtree>
    </div>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">提交</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">关闭</z-button>
  </div>
</z-modal>
</template>
<script>

import tenantApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'tenantAdminPrivilege',
  data: function () {
    return {
      modelIsOpen: false,
      ifShowAppSelect: this.getIfShowAppSelect(),
      showPrivilege: this.getShowPrivilege(),
      value: [],
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        datas: []
      },
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      roleId: '',
      authType: '',
      // 是否多应用
      multiApp: Config.multiApp,
      treeLoading: false,
      chooseMode: 'some'
    }
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    query: function () {
      let that = this
      this.treeLoading = true
      // 判断多应用
      let param
      if (this.multiApp) {
        param = {'roleId': this.roleId, 'authType': this.authType, 'appId': this.appModel.appId, chooseMode: this.chooseMode}
      } else {
        param = {'roleId': this.roleId, 'authType': this.authType, chooseMode: this.chooseMode}
      }
      tenantApi.adminPrivilegeTree(param).then(function (response) {
        let data = response.data
        let value = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].checked) {
            value.push(data[i].id)
          }
        }
        that.treeLoading = false
        that.value = value
        that.options.datas = data
      })
    },
    getAppList: function () {
      let appList = this.$store.state.sysAppInfos
      return appList
    },
    appChange: function () {
      let appId = this.appModel.appId
      if (!appId) {
        return
      }
      this.showPrivilege = true
      this.reset()
      this.query()
    },
    appClear: function () {
      this.reset()
      this.showPrivilege = false
    },
    getShowPrivilege: function () {
      let isRootRole = this.$store.state.isRootRole
      if (isRootRole === '1') {
        return false
      } else {
        return false
      }
    },
    getIfShowAppSelect: function () {
      let isRootRole = this.$store.state.isRootRole
      if (isRootRole === '1') {
        return true
      } else {
        return true
      }
    },
    reset: function () {
      this.value = []
      this.options.datas = []
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['adminPrivilegeTree'].getChoose()
      let ids = ''
      for (let i = 0; i < choose.length; i++) {
        ids += choose[i].id + ','
      }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
      }

      // 判断多应用
      let params
      if (this.multiApp) {
        params = {
          'ids': ids,
          'roleId': this.roleId,
          'authType': this.authType,
          'appId': this.appModel.appId
        }
      } else {
        params = {
          'ids': ids,
          'roleId': this.roleId,
          'authType': this.authType
        }
      }
      this.loading = true
      tenantApi.saveAdminPrivilege(params).then(function (response) {
        that.$Message.success('提交成功')
        that.loading = false
        that.modelIsOpen = false
      }).catch(function (error) {
        that.loading = false
        console.log(error)
      })
    },
    close: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
