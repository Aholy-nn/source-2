<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-16 14:27:07
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('orgManage.title.showRoles')" fixed max-height="500" width="900">
    <!-- 表格 -->
  <vxe-table
    ref="showRoles"
    border
    row-id="id"
    size="medium"
    show-header-overflow
    show-overflow
    :tree-config="{children: 'children', expandAll: true}"
    :loading="loading"
    :data="tableData">
    <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
    <vxe-table-column field="roleName" :title="$t('roleManage.title.roleName')" sortable></vxe-table-column>
    <vxe-table-column field="roleCode" :title="$t('roleManage.title.roleCode')"></vxe-table-column>
    <vxe-table-column field="isAdminRoleDesc" :title="$t('roleManage.title.isAdminRoleDesc')"></vxe-table-column>
    <vxe-table-column field="createBy" :title="$t('roleManage.title.createBy')"></vxe-table-column>
    <vxe-table-column field="createDate" :title="$t('roleManage.title.createDate')"></vxe-table-column>
  </vxe-table>
  <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
  </div>
</z-modal>
</template>
<script>
import '@/components/framework/vxe-table'
import orgApi from '../api/api.js'
export default {
  name: 'showUsers',
  data: function () {
    return {
      modelIsOpen: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 100,
        records: 0
      },
      loading: false,
      orgId: ''
    }
  },
  created: function () {
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        this.query()
      }
    }
  },
  methods: {
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      orgApi.getOrgRoles(that.tablePage, that.orgId).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
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
