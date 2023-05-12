<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:40:09
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="配置应用" fixed max-height="500" width="800">
 <!-- 表格 -->
      <z-list-panel class="m-t-15">
        <div slot="title">应用列表</div>
        <!-- 表格 -->
        <vxe-table
        v-if ="tableShow"
          ref="addApps"
          border
          row-id="appId"
          highlight-current-row
          show-header-overflow
          show-overflow
          :loading="loading"
          :data="tableData"
          :checkbox-config="{checkStrictly: true,checkRowKeys:checkRows}"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="appId" title="应用标识" :visible="false" sortable></vxe-table-column>
          <vxe-table-column field="appName" title="应用名称"></vxe-table-column>
          <vxe-table-column field="appCode" title="应用代码"></vxe-table-column>
          <vxe-table-column field="remarks" title="应用描述"></vxe-table-column>
          <vxe-table-column field="checkFlag" title="是否选中" :visible="false"></vxe-table-column>
          <vxe-table-column title="选择未配置的角色"  type="checkbox" align="center"></vxe-table-column>
        </vxe-table>
        <vxe-pager
           size = "small"
          :loading="loading"
          :current-page="tablePage.page"
          :page-size="tablePage.rows"
          :total="tablePage.records"
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange"
          >
        </vxe-pager>
    </z-list-panel>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">提交</z-button>
        <z-button type="dashed"  @click="handleClose()" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import tenantApi from '../api/api.js'
export default {
  name: 'addApp',
  components: {
  },
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
      tenantId: '',
      checkRows: [],
      tableShow: true
    }
  },
  methods: {
    query: function (type) {
      let that = this
      this.loading = true
      this.tableShow = false
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      tenantApi.queryApps(this.tablePage, that.tenantId).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.checkRowsFunc(response.data.rows)
        that.$nextTick(function () {
          that.tableShow = true
          that.loading = false
        })
      })
    },
    // 分页
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    // 初始化选择行
    checkRowsFunc: function (rows) {
      if (rows) {
        this.checkRows = []
        rows.forEach(item => {
          if (item.checkFlag) {
            this.checkRows.push(item.appId)
          }
        })
      }
    },
    handleSubmit: function () {
      let that = this
      let table = this.$refs['addApps']
      let rows = table.getCheckboxRecords()
      let ids = []
      for (let i = 0; i < rows.length; i++) {
        ids.push(rows[i].appId)
      }
      let str = ids.join(',')
      tenantApi.saveTenantApp({'tenantId': this.tenantId, 'appIds': str}).then(function (response) {
        if (response.data.code === '1') {
          that.$parent.query()
          that.$Message.success('配置应用成功！')
          that.modelIsOpen = false
        } else {
          that.$Message.error('配置应用发生异常，请联系管理员！')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
