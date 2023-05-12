<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2021-01-13 10:00:37
 * @LastEditTime: 2021-01-13 14:27:57
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="选择组织" fixed max-height="500" width="600">
   <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
    <z-dropdown class="float-right">
        <Button type="primary" ghost>
            树操作
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <z-dropdown-menu slot="list">
            <z-dropdown-item @click.native="chooseAll">全部勾选</z-dropdown-item>
            <z-dropdown-item @click.native="cancelAll">取消全选</z-dropdown-item>
            <z-dropdown-item @click.native="expandAll">展开所有</z-dropdown-item>
            <z-dropdown-item @click.native="foldAll">合并所有</z-dropdown-item>
        </z-dropdown-menu>
    </z-dropdown>
    <z-vtree ref="addOrgTree" :multiple="true" :option="options" choose-mode="independent" @choose ="choose" v-model="value"></z-vtree>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">发送</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">关闭</z-button>
  </div>
</z-modal>
</template>
<script>
import adminNoticeApi from './api/api.js'
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
      errorMsg: '',
      noticeTextId: '',
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
      if (!this.noticeTextId) {
        return false
      }
      this.treeLoading = true
      adminNoticeApi.getOrgTree().then(function (response) {
        let data = response.data
        that.options.datas = data
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
      adminNoticeApi.saveOrgNoticeInfo({'orgIds': ids, 'noticeTextId': that.noticeTextId}).then(function (response) {
        if (response.data.code !== '01') {
          that.errorMsg = response.data.msg
        } else {
          that.$parent.refreshTable()
          that.loading = false
          that.$Message.success(response.data.msg)
          that.modelIsOpen = false
        }
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
