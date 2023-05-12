<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-09-04 10:28:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <z-modal v-model="modelIsOpen" :title="title" fixed :height="500" :width="600">
    <div class="m-b-20" v-if="multiApp">
      <label class="ilead-label-just-right">{{$t('common.button.chooseApp')}}:</label>
      <z-select
        v-model="appModel.appId"
        @on-change="appChange"
        @on-clear="appClear"
        clearable
        style="width:230px"
      >
        <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
      </z-select>
    </div>
    <div v-if="!multiApp || showPrivilege" :class="{'multi-apply-tree':multiApp}">
      <z-spin fix v-if="multiApp && treeLoading">
        <Icon type="load-c" size="30"></Icon>
      </z-spin>
      <z-vtree
        ref="addUserTree"
        :multiple="true"
        :option="options"
        :choose-mode="chooseMode"
        @choose="choose"
        v-model="value"
      ></z-vtree>
    </div>
    <div slot="footer" class="ilead-modal-footer">
      <z-button type="primary" icon="checkmark" @click="handleSubmit">{{$t('common.button.submit')}}</z-button>
      <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
    </div>
  </z-modal>
</template>
<script>
import rolesApi from '../api/api.js'
import Config from '@/config/index.js'
// import funManageApi from '../../function/api/api'

export default {
  name: 'addUser',
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
      chooseMode: 'some',
      title: '',
      roleId: '',
      authType: '',
      // 多应用
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      showPrivilege: false,
      multiApp: Config.multiApp,
      treeLoading: false,
      connectInterface: []
    }
  },
  computed: {

  },
  methods: {
    query: function () {
      let that = this
      this.treeLoading = true
      // 判断多应用
      let param
      if (this.multiApp) {
        param = {
          roleId: this.roleId,
          authType: this.authType,
          appId: this.appModel.appId,
          chooseMode: this.chooseMode
        }
      } else {
        param = { roleId: this.roleId, authType: this.authType, chooseMode: this.chooseMode }
      }
      // console.log(this.connectInterface);

      rolesApi.rolePrivilege(param).then(function (response) {
        let data = response.data
        // 返回一个选择的数据和全体数据
        let value = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].checked) {
            value.push(data[i].id)
          }
        }
        that.treeLoading = false
        that.value = value
        that.connectInterface.forEach(element => {
          data = data.filter(item => {
            return item.id !== element.id
          })
        })
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
    choose: function (val) {},
    reset: function () {
      this.value = []
      this.options.datas = []
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['addUserTree'].getFullChoose()
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
          ids: ids,
          roleId: this.roleId,
          authType: authType,
          appId: appId
        }
      } else {
        params = { ids: ids, roleId: this.roleId, authType: authType }
      }
      rolesApi
        .saveRolePrivilege(params)
        .then(function (response) {
          that.$Message.success(that.$t('roleManage.message.submitSuccess'))
          that.modelIsOpen = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    close: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
