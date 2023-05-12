<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:20:05
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('userManage.title.orgName')" fixed max-height="500" width="600">
  <div v-if="modelIsShow">
    <z-vtree ref="addSearchOrgTree" :node-icon="true" :option="options" v-model="value"></z-vtree>
  </div>
  <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">{{$t('common.button.save')}}</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
  </div>
</z-modal>
</template>
<script>
import userApi from '../api/api.js'
export default {
  name: 'addSearchOrg',
  data: function () {
    return {
      modelIsOpen: false,
      modelIsShow: true,
      value: '',
      options: {
        keyName: 'id',
        titleName: 'name',
        parentName: 'pid',
        dataMode: 'tree',
        getDatas: this.getDatas
      }
    }
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        this.modelIsShow = false
        this.$nextTick(function () {
          this.modelIsShow = true
        })
      }
    }
  },
  methods: {
    getDatas: function (parent, resolve) {
      if (!this.modelIsOpen) {
        return
      }
      setTimeout(() => {
        if (!parent) {
          userApi.orgTreeQuery({}).then(function (response) {
            resolve(response.data)
          })
        } else if ((parent && parent.isParent)) {
          userApi.orgTreeQuery({id: parent.id, name: parent.name, type: parent.type}).then(function (response) {
            resolve(response.data, false)
          })
        }
      }, 100)
    },
    handleSubmit: function () {
      let tree = this.$refs['addSearchOrgTree'].getSelect()
      if (!tree) {
        this.$Message.error('请选择一条记录！')
        return
      }
      this.$emit('orgName', tree.name, tree.id, tree.type, tree.pId)
      this.modelIsOpen = false
    },
    close: function () {
      this.modelIsOpen = false
    }
  }

}
</script>
