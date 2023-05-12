<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 11:48:29
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed height="500" width="600">
    <div class="m-b-20" v-if="multiApp">
        <label class="ilead-label-just-right">选择应用: </label>
        <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
            <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
        </z-select>
    </div>
    <div v-if="!multiApp || showPrivilege" :class="{'multi-apply-tree':multiApp}">
        <z-spin fix v-if="multiApp && treeLoading">
            <Icon type="load-c" size=30></Icon>
        </z-spin>
        <z-vtree ref="addUserTree" :multiple="true" :option="options"  choose-mode="some" @choose="choose" v-model="value"></z-vtree>
    </div>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">提交</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">关闭</z-button>
  </div>
</z-modal>
</template>
<script>
import roleTemplateApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'roleTemplatePrivilege',
  data: function () {
    return {
      modelIsOpen: false,
      value: [],
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        datas: []
      },
      title: '',
      roleId: '',
      authType: '',
      // 多应用
      appList: this.getAppList(),
      appModel: {
        appId: '222'
      },
      showPrivilege: false,
      multiApp: Config.multiApp,
      treeLoading: false
    }
  },
  methods: {
    query: function () {
      let that = this
      this.treeLoading = true
      // 判断多应用
      let param
      if (this.multiApp) {
        param = {'roleId': this.roleId, 'authType': this.authType, 'appId': this.appModel.appId}
      } else {
        param = {'roleId': this.roleId, 'authType': this.authType}
      }

      roleTemplateApi.roleTempPrivilegeTree(param).then(function (response) {
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
    choose: function (val) {
    },
    reset: function () {
      this.value = []
      this.options.datas = []
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['addUserTree'].getChoose()
      let ids = ''
      for (let i = 0; i < choose.length; i++) {
        ids += choose[i].id + ','
      }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
      }
      let authType = '0'
      if (this.authType === '1') {
        authType = '1'
      }

      // 判断多应用
      let params
      if (this.multiApp) {
        let appId = this.appModel.appId
        params = {
          'ids': ids,
          'roleId': this.roleId,
          'authType': authType,
          'appId': appId
        }
      } else {
        params = { 'ids': ids,
          'roleId': this.roleId,
          'authType': authType
        }
      }
      roleTemplateApi.saveRoleTempPrivilege(params).then(function (response) {
        that.$Message.success('提交成功')
        that.modelIsOpen = false
      }).catch(function (error) {
        console.log(error)
      })
    },
    close: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
