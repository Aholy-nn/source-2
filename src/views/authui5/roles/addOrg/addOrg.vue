<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-16 14:27:57
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('roleManage.title.addOrg')" fixed max-height="500" width="600">
    <z-dropdown class="float-right">
        <Button type="primary" ghost>
            {{$t('common.tree.opTitle')}}
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <z-dropdown-menu slot="list">
            <z-dropdown-item @click.native="chooseAll">{{$t('common.tree.chooseAll')}}</z-dropdown-item>
            <z-dropdown-item @click.native="cancelAll">{{$t('common.tree.cancelAll')}}</z-dropdown-item>
            <z-dropdown-item @click.native="expandAll">{{$t('common.tree.expandAll')}}</z-dropdown-item>
            <z-dropdown-item @click.native="foldAll">{{$t('common.tree.foldAll')}}</z-dropdown-item>
        </z-dropdown-menu>
    </z-dropdown>
    <z-vtree ref="addOrgTree" :multiple="true" :option="options" choose-mode="independent" @choose ="choose" v-model="value"></z-vtree>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">{{$t('common.button.submit')}}</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
  </div>
</z-modal>
</template>
<script>
import rolesApi from '../api/api.js'
export default {
  name: 'addOrg',
  data: function () {
    return {
      modelIsOpen: false,
      value: [],
      // 树
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        datas: []
      },
      roleId: '',
      loading: false,
      treeLoading: false
    }
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        this.reset()
        this.$refs.addOrgTree.refresh()
        this.query()
      }
    }
  },
  methods: {
    choose: function (array) {
    },
    // 查询树
    query: function () {
      let that = this
      if (!this.roleId) {
        return false
      }
      this.treeLoading = true
      rolesApi.getOrgTree(that.roleId).then(function (response) {
        let data = response.data
        that.options.datas = data
        rolesApi.getOrgChecks(that.roleId).then(function (response) {
          let data = response.data
          if (data.code === '01') {
            that.value = data.data
          }
          that.treeLoading = false
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    reset: function () {
      this.value = []
      this.expands = false
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['addOrgTree'].getChoose()
      let ids = ''
      for (let i = 0; i < choose.length; i++) {
        ids += choose[i].id + ','
      }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
      }
      this.loading = true
      rolesApi.saveOrgRoleInfo({'orgIds': ids, 'roleId': that.roleId}).then(function (response) {
        that.$Message.success(response.data.msg)
        that.loading = false
        that.modelIsOpen = false
      }).catch(function (error) {
        console.log(error)
      })
    },
    close: function () {
      this.modelIsOpen = false
    },
    // 全部勾选
    chooseAll: function () {
      this.$refs.addOrgTree.chooseAll()
    },
    // 取消全选
    cancelAll: function () {
      this.value = []
    },
    // 展开所有
    expandAll: function () {
      this.$refs.addOrgTree.expandAll()
    },
    // 合并所有
    foldAll: function () {
      this.$refs.addOrgTree.foldAll()
    }
  }
}
</script>
