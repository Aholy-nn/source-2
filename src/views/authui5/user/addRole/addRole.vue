<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-09 16:49:26
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('userManage.title.addRole')" fixed max-height="500" width="900">
   <vxe-table
          ref="addRoles"
          border
          resizable
          row-id="id"
          highlight-current-row
          show-header-overflow
          show-overflow
          :tree-config="{children: 'children', expandAll: true}"
          :checkbox-config="{checkStrictly: true,checkMethod:checkMethod}"
          :loading="loading"
           align='center'
          :data="tableData">
          <vxe-table-column field="roleId" :title="$t('userManage.title.roleId')" :visible="false"></vxe-table-column>
          <vxe-table-column field="parentId" :title="$t('userManage.title.parentId')" :visible="false"></vxe-table-column>
          <vxe-table-column field="showFlag" :title="$t('userManage.title.showFlag')" :visible="false"></vxe-table-column>
          <vxe-table-column field="isAdminRole" :title="$t('userManage.title.isAdminRole')" :visible="false"></vxe-table-column>
          <vxe-table-column field="roleName" :title="$t('userManage.title.roleName')" tree-node></vxe-table-column>
          <vxe-table-column field="roleCode" :title="$t('userManage.title.roleCode')"></vxe-table-column>
          <vxe-table-column field="isAdminRoleDesc" :title="$t('userManage.title.isAdminRoleDesc')" ></vxe-table-column>
          <vxe-table-column field="createBy" :title="$t('userManage.title.createBy')"></vxe-table-column>
          <vxe-table-column field="createDate" :title="$t('userManage.title.createDate')" :formatter="formatTime" width="200"></vxe-table-column>
          <vxe-table-column field="checkFlag" :title="$t('userManage.title.checkFlag')" :visible="false"></vxe-table-column>
          <vxe-table-column field="roleId" :title="$t('userManage.title.uncheckRoleId')"  type="checkbox" align="center"></vxe-table-column>
        </vxe-table>
   <div slot="footer" class="ilead-modal-footer">
      <z-button type="primary" icon="checkmark" @click="handleSubmit">{{$t('common.button.save')}}</z-button>
      <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
    </div>
</z-modal>
</template>
<script>
import XEUtils from 'xe-utils'
import userApi from '../api/api.js'
import '@/components/framework/vxe-table'
export default {
  name: 'addSearchOrg',
  data: function () {
    return {
      modelIsOpen: false,
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10000,
        records: 0
      },
      userId: null,
      addRoleModel: {
        checkRole: '',
        adminRoleNum: 0 // 计算选中的管理员角色个数，一个用户只能配置一个管理角色
      }
    }
  },
  methods: {
    query: function () {
      let that = this
      if (!this.userId) {
        return
      }
      this.loading = true
      userApi.queryRoles(this.tablePage, that.userId).then(function (response) {
        that.tableData = response.data.rows
        // that.tablePage.records = response.data.records
        that.checkRowsFunc(response.data.rows)
        setTimeout(function () {
          let table = that.$refs['addRoles']
          if (table) {
            // 表格树展开
            table.setAllTreeExpansion(true)
          }
          that.loading = false
        })
      })
    },
    // 禁用root
    checkMethod: function ({row}) {
      if (row.name === 'root') {
        return false
      } else {
        return true
      }
    },
    // 初始化选中行
    checkRowsFunc: function (rows) {
      let table = this.$refs['addRoles']
      rows.forEach(item => {
        if (item.checkFlag) {
          // this.checkRows.push(item.id)
          table.setCheckboxRow(item, true)
        }
        if (item.children && item.children.length !== 0) {
          this.checkRowsFunc(item.children)
        }
      })
    },
    handleSubmit: function () {
      let that = this
      // 若保存的管理角色数量大于1，则不允许保存
      let table = this.$refs['addRoles']
      let rows = table.getCheckboxRecords()
      let ids = []
      for (let i = 0; i < rows.length; i++) {
        ids.push(rows[i].id)
        if (rows[i].isAdminRole === '1') {
          this.addRoleModel.adminRoleNum += 1
        }
      }
      if (this.addRoleModel.adminRoleNum > 1) {
        that.$Message.error('一个用户只能配置一个管理角色')
        return false
      }
      ids = ids.toString()
      userApi.saveUserRoleInfo({'userId': this.userId, 'roleIds': ids}).then(function (response) {
        if (response.data.code === '1') {
          that.$Message.success('配置角色成功！')
          that.$parent.refreshTable()
          that.modelIsOpen = false
        } else {
          that.$Message.error('配置角色发生异常，请联系管理员！')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    close: function () {
      this.tableData = []
      this.modelIsOpen = false
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    }
  }
}
</script>
