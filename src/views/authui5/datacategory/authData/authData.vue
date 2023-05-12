<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-12 13:03:37
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="数据授权" fixed height="500" width="600">
    <div class="m-b-20" v-if="multiApp">
        <label class="ilead-label-just-right">选择应用: </label>
        <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
            <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
        </z-select>
    </div>
    <div v-if="!multiApp || showAuthData" :class="{'multi-apply-tree':multiApp}">
        <z-spin fix v-if="multiApp && treeLoading">
            <Icon type="load-c" size=30></Icon>
        </z-spin>
        <z-vtree ref="authDataTree" :multiple="true" :option="options" choose-mode="all" v-model="value"></z-vtree>
   </div>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">提交</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">关闭</z-button>
  </div>
</z-modal>
</template>
<script>
import dataCategoryApi from '../api/api.js'
import Config from '@/config/index.js'
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
      roleId: '',
      // 多应用
      showAuthData: false,
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
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
        param = {'roleId': this.roleId, 'appId': this.appModel.appId}
      } else {
        param = {'roleId': this.roleId}
      }
      dataCategoryApi.dataRoleTreeURL(param).then(function (response) {
        let data = response.data
        let value = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].checked) {
            // for (let j = 0; j < data.length; j++) {
            //   if (data[j].id === data[i].pId) {
            //     value.push(data[j].pId)
            //   }
            // }
            value.push(data[i].id)
            // value.push(data[i].pId)
          }
          if (!data[i].isParent && data[i].pId === '****') {
            data[i].disabled = true
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
      this.showAuthData = true
      this.reset()
      this.query()
    },
    appClear: function () {
      this.reset()
      this.showAuthData = false
    },
    reset: function () {
      this.value = []
      this.options.datas = []
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['authDataTree'].getChoose()
      let ids = ''
      let pIds = ''
      function idsFunc (choose) {
        choose.forEach(item => {
          if (!item.isParent) {
            ids += item.id + ','
            pIds += item.pId + ','
          } else {
            if (item.children) {
              idsFunc(item.children)
            }
          }
        })
      }
      idsFunc(choose)
      //   for (let i = 0; i < choose.length; i++) {
      //     if (!choose[i].isParent) {
      //       ids += choose[i].id + ','
      //       pIds += choose[i].pId + ','
      //     }
      //   }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
        pIds = pIds.substring(0, pIds.length - 1)
      }
      // 判断多应用
      let params
      if (this.multiApp) {
        params = {
          'attributeIds': ids,
          'categoryIds': pIds,
          'roleId': this.roleId,
          'appId': this.appModel.appId
        }
      } else {
        params = {
          'attributeIds': ids,
          'categoryIds': pIds,
          'roleId': this.roleId
        }
      }
      dataCategoryApi.saveRoleDataCateInfo(params).then(function (response) {
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
