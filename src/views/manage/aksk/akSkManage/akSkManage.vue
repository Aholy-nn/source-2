<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:40:36
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-list-panel class="m-t-15">
        <div slot="title">ACCESS KEY管理列表</div>
        <div slot="buttons">
            <z-button type="text" icon="navicon-round" @click="add" >添加</z-button>
            <z-button type="text" icon="navicon-round" @click="addRes" >配置资源</z-button>
        </div>
        <!-- 表格 -->
        <vxe-table
          ref="childTable"
          border
          row-id="id"
          highlight-current-row
          show-header-overflow
          show-overflow
          :loading="loading"
          :data="tableData"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="keyId" title="KEY ID" :visible="false" ></vxe-table-column>
          <vxe-table-column field="accessKey" title="Access Key"></vxe-table-column>
          <vxe-table-column field="secretKey" title="Secret Key"></vxe-table-column>
          <vxe-table-column field="remark" title="说明"></vxe-table-column>
          <vxe-table-column field="state" title="状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="createDate" title="创建时间" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="expiresDate" title="过期时间" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column title="操作" width="200">
            <template v-slot="{ row, seq }">
              <a class="link" @click="edit(row, seq)">编辑</a>
              <div class="divider"></div>
              <a class="link" @click="delBatch(row, seq)">删除</a>
              <div class="divider"></div>
              <a class="link" @click="hrefClick(row.keyId, '2', row.state)">启用</a>
              <div class="divider"></div>
              <a class="link" @click="hrefClick(row.keyId, '3', row.state)">禁用</a>
            </template>
          </vxe-table-column>
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
    <!-- 弹出 -->
    <editAkSk ref="editAkSk"></editAkSk>
    <add-Res ref="addRes"></add-Res>
  </div>
</template>
<script>
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import akSkApi from '../api/api.js'
import editAkSk from '../editAkSk/editAkSk'
import addRes from '../addRes/addRes'

export default {
  name: 'akSkManage',
  components: {
    'editAkSk': editAkSk,
    'add-Res': addRes
  },
  data: function () {
    return {
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      }
    }
  },
  created: function () {
    this.query()
  },
  mounted: function () {},
  methods: {
    // 检索事件
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      akSkApi.query(this.tablePage).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$nextTick(function () {
          that.$refs['childTable'].clearCurrentRow()
        })
      })
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    add: function () {
      var that = this
      akSkApi.save().then(function (response) {
        console.log(response)
        if (response.data.code === '-1') {
          that.$Message.success(response.data.msg)
        } else {
          that.query()
          that.$Message.success('提交成功!')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    edit: function (data) {
      this.$refs.editAkSk.modelIsOpen = true
      this.$refs.editAkSk.formItem.remark = data.remark
      this.$refs.editAkSk.formItem.expiresDate = data.expiresDate
      this.$refs.editAkSk.formItem.keyId = data.keyId
    },
    delBatch: function (data) {
      let that = this
      var state = data.state
      if (state !== '1') {
        that.$Message.error('只有"未发布"状态的数据可以被删除！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            akSkApi.del(data.keyId).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 启用/停用
    hrefClick: function (cellValue, state, currentState) {
      var that = this
      if (currentState === '0') {
        that.$Message.error('删除状态的数据不能启用或禁用！')
        return
      }
      if (state === currentState) {
        if (state === '2') {
          that.$Message.error('该数据已经是启用状态！')
        } else if (state === '2') {
          that.$Message.error('该数据已经是禁用状态！')
        }
      }
      var updateParam = '{"keyId":"' + cellValue + '","state":"' + state + '"}'
      akSkApi.update(updateParam).then(function (response) {
        that.query()
        that.$Message.success('提交成功!')
      }).catch(function (error) {
        console.log(error)
      })
    },
    addRes: function () {
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error('请选择一条记录！')
        return
      }
      this.$refs.addRes.modelIsOpen = true
      this.$refs.addRes.reset()
      this.$refs.addRes.query()
      this.$refs.addRes.keyId = data.keyId
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '已删除'
        case '1':
          return '未发布'
        case '2':
          return '启用'
        case '3':
          return '禁用'
      }
    },
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    }
  }

}
</script>
