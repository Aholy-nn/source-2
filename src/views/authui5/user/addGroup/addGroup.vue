<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-10 09:48:41
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('userManage.title.addGroup')" fixed max-height="500" width="900">
    <vxe-table
        ref="addGroup"
        border
        resizable
        row-id="id"
        highlight-current-row
        show-header-overflow
        show-overflow
        :tree-config="{children: 'children', expandAll: true}"
        :checkbox-config="{checkStrictly: true}"
        :loading="loading"
        align='center'
        :data="tableData">
       <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="id" :title="$t('userManage.title.groupId')" :visible="false" sortable></vxe-table-column>
          <vxe-table-column field="name" :title="$t('userManage.title.groupName')"></vxe-table-column>
          <vxe-table-column field="groupCode" :title="$t('userManage.title.groupCode')"></vxe-table-column>
        <vxe-table-column field="id" :title="$t('userManage.title.chooseGroup')"  type="checkbox" align="center"></vxe-table-column>
    </vxe-table>
  <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit('userGroupForm')">{{$t('common.button.save')}}</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
  </div>
</z-modal>
</template>
<script>
import userApi from '../api/api.js'
export default {
  name: 'addGroup',
  data: function () {
    return {
      modelIsOpen: false,
      userId: null,
      loading: false,
      tablePage: {
        page: 1,
        rows: 10000,
        records: 0
      },
      tableData: []
    }
  },
  methods: {
    query: function () {
      let that = this
      if (!this.userId) {
        return
      }
      this.loading = true
      let params = {userId: this.userId}
      userApi.getUserGroupTree(params).then(function (response) {
        that.tableData = response.data
        that.checkRowsFunc(response.data)
        that.loading = false
        setTimeout(function () {
          let table = that.$refs['addGroup']
          if (table) {
            // 表格树展开
            table.setAllTreeExpansion(true)
          }
        })
      })
    },
    // 初始化选择行
    checkRowsFunc: function (rows) {
      if (rows) {
        let table = this.$refs['addGroup']
        rows.forEach(item => {
          if (item.checked) {
            table.setCheckboxRow(item, true)
          }
          if (item.children && item.children.length !== 0) {
            this.checkRowsFunc(item.children)
          }
        })
      }
    },
    handleSubmit: function () {
      let that = this
      let table = this.$refs['addGroup']
      let rows = table.getCheckboxRecords()
      let ids = []
      for (let i = 0; i < rows.length; i++) {
        ids.push(rows[i].id)
      }
      ids = ids.toString()
      userApi.saveGroupInfo({'groupIds': ids, 'userId': that.userId}).then(function (response) {
        if (response.data.code === '0') { // 保存成功
          that.$Message.success(response.data.msg)
          that.modelIsOpen = false
        } else { // 失败
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    close: function () {
      this.tableData = []
      this.modelIsOpen = false
    }
  }

}
</script>
