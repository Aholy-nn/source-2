<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:18:02
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('resType.title.authRes')" fixed max-height="500" width="600">
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
    <div v-if="!multiApp || showRes" :class="{'multi-apply-tree':multiApp}">
    <z-form  ref="authResModel" :model="authResModel" :label-width="100" label-position="left" class="ilead-modal-form">
        <form-item :label="$t('resType.label.treeShowStyle')"  prop="treeShowStyle" v-show="false">
            <z-input v-model="authResModel.treeShowStyle"></z-input>
        </form-item>
        <form-item :label="$t('resType.label.groupId')"  prop="groupId" v-show="false">
            <z-input v-model="authResModel.groupId"></z-input>
        </form-item>
        <form-item :label="$t('resType.label.resType')" prop="resType">
            <z-select v-model="authResModel.resType" @on-change="resChange" clearable transfer>
                <z-option v-for="item in resTypeList" :value="item.code" :key="item.code">{{ item.name }}</z-option>
            </z-select>
        </form-item>
        <form-item :label="$t('resType.label.ifContains')" prop="ifContains" v-show="false">
            <z-select v-model="authResModel.ifContains" @on-change="resChange" transfer>
                <z-option value="1" checked>{{$t('resType.option.ifContains1')}}</z-option>
                <z-option value="0">{{$t('resType.option.ifContains1')}}</z-option>
            </z-select>
        </form-item>
    </z-form>
    <z-vtree ref="authResTree" :multiple="true" :option="options" choose-mode="some" v-model="value" :choose="treeChoose"></z-vtree>
    </div>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('authResModel')">{{$t('common.button.submit')}}</z-button>
        <z-button type="primary" ghost icon="refresh" @click="reset()" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
        <z-button type="dashed"  @click="handleClose('authResModel')" style="margin-left: 8px">{{$t('common.button.close')}}</z-button>
    </div>
</z-modal>
</template>
<script>
import resApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'authRes',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      authResModel: {
        resType: '',
        groupId: '',
        ifContains: '1',
        treeShowStyle: '0'// 从config.properties中获取树显示样式标识符，0为默认父子联动选择，保存时只保存子节点数据; 1为父子不联动选择，保存时父、子节点均保存
      },
      resTypeList: this.getResTypeList(),
      // 树
      value: [],
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        datas: []
      },
      type: '',
      // 多应用
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      showRes: false,
      multiApp: Config.multiApp
    }
  },
  created: function () {
    this.treeQuery()
  },
  methods: {
    treeQuery: function () {
      let that = this
      resApi.treeShowStyleQuery().then(function (response) {
        that.authResModel.treeShowStyle = response.data.data
        if (that.authResModel.treeShowStyle === '1') { // 父子不联动
          // that.treeCheck.chkboxType = { "Y": "", "N": "" };
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    resChange: function () {
      let that = this
      if (this.authResModel && this.authResModel.resType) {
        let param = {
          'groupId': this.authResModel.groupId,
          'resTypeCode': this.authResModel.resType,
          'ifContains': this.authResModel.ifContains
        }
        resApi.resGrpResTree(param).then(function (response) {
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
          that.options.datas = response.data
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    getResTypeList: function () {
      let that = this
      setTimeout(function () {
        let appId = that.appModel.appId
        if (appId && appId !== '') {
          resApi.resTypeInfoQuery(appId).then(function (response) {
            that.resTypeList = response.data.data
            // that.authResModel.resType = response.data.data[0].code
            // that.resChange(response.data.data[0])
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          resApi.resTypeInfoQuery().then(function (response) {
            that.resTypeList = response.data.data
            // that.authResModel.resType = response.data.data[0].code
            // that.resChange(response.data.data[0])
          }).catch(function (error) {
            console.log(error)
          })
        }
      }, 500)
      return []
    },
    treeChoose: function () {

    },
    handleSubmit: function (name) {
      let that = this
      let nodes = this.$refs.authResTree.getFullChoose()
      let ids = ''
      if (this.authResModel.treeShowStyle === '1') { // 父子节点不联动，包括父节点在内的所有选择项均保存
        for (let i = 0; i < nodes.length; i++) {
          ids += nodes[i].id + ','
        }
      } else if (this.authResModel.treeShowStyle === '2') { // 父子节点联动选择，只保存全选状态的最上一级的父节点
        for (let i = 0; i < nodes.length; i++) {
          // let halfCheck = nodes[i].getCheckStatus();
          // if(!halfCheck.half) {
          //   if(nodes[i].getParentNode() != null) {
          //     let halfCheckParent = nodes[i].getParentNode().getCheckStatus();
          //     if (halfCheckParent.half) {
          //       ids += nodes[i].id + ",";
          //     }
          //   }else {
          //     if (!halfCheck.half) {
          //       ids += nodes[i].id + ",";
          //     }
          //   }
          // }
          ids += nodes[i].id + ','
        }
      } else { // 父子节点联动选择，只保存子节点
        for (let i = 0; i < nodes.length; i++) {
          if (!nodes[i].isParent) {
            ids += nodes[i].id + ','
          }
        }
      }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
      }
      let params = {
        'resourceIds': ids,
        'groupId': that.authResModel.groupId,
        'resTypeCode': that.authResModel.resType,
        'ifContains': that.authResModel.ifContains,
        'appId': that.appModel.appId
      }
      resApi.saveGroupResInfo(params).then(function (response) {
        console.log(response)
        that.$Message.success(response.data.msg)
        that.handleClose()
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleClose: function (name) {
      this.modelIsOpen = false
      this.reset()
      if (this.multiApp) {
        this.appClear()
      }
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
      this.showRes = true
      this.reset()
      this.getResTypeList()
    },
    appClear: function () {
      this.appModel.appId = ''
      this.showRes = false
    },
    reset: function () {
      this.authResModel.resType = ''
      this.options.datas = ''
      this.value = ''
    }
  }

}
</script>
