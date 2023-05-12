<!--
 * @Description: seqManage
 * @Author: guochongjin
 * @Date: 2020-09-01 15:41:37
 * @LastEditTime: 2020-09-01 15:41:37
 * @LastEditors: guochongjin
 -->

<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="model" :model="model" :label-width="86" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="序号名称：">
              <z-input v-model="model.name" :maxlength="40" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="状态：">
               <z-select v-model="model.status" clearable placeholder="请选择" transfer>
                <z-option value="01">可用</z-option>
                <z-option value="02">锁定</z-option>
            </z-select>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
               <z-button type="primary" icon="ios-search" @click="query">查询</z-button>
               <z-button icon="android-refresh" @click="reset">重置</z-button>
          </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <z-list-panel class="m-t-15">
        <div slot="title">全局序号管理列表</div>
        <div slot="buttons">
            <ui-privilege url="/addSeq/addSeq"><z-button type="text" icon="plus-round" @click="add">添加</z-button></ui-privilege>
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
          :export-config="tableExport"
          @on-table-refresh="refreshTable"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="name" title="序号名称" sortable></vxe-table-column>
          <vxe-table-column field="nextid" title="序号下一值"></vxe-table-column>
          <vxe-table-column field="version" title="版本"></vxe-table-column>
          <vxe-table-column field="status" title="状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column title="操作" :width="140">
            <template v-slot="{ row, seq }">
              <a class="link" @click="edit(row, seq)">编辑</a>
              <div class="divider"></div>
              <a class="link" @click="delBatch(row, seq)">删除</a>
            </template>
          </vxe-table-column>
        </vxe-table>
        <vxe-pager
           size = "small"
          :loading="loading"
          :current-page="tablePage.page"
          :page-size="tablePage.rows"
          :total="tablePage.records"
          refresh
          export
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange"
          >
        </vxe-pager>
    </z-list-panel>
  <edit-Seq ref="editSeq" :title="editSeqTitle" :model-type="modelType"></edit-Seq>
  </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import seqApi from './api/api.js'
import editSeq from './editSeq'
Vue.use(vxeTableExport)
export default {
  name: 'seqManage',
  components: {
    'edit-Seq': editSeq
  },
  data: function () {
    return {
      model: {
        name: '',
        nextid: '',
        version: '',
        status: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editSeqTitle: '',
      modelType: '',
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'seq/seq',
        exportOnlineAction: 'post'
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
      let params = Object.assign(this.model, this.tablePage)
      seqApi.seqInfoQuery(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        if (that.$refs['childTable']) {
          that.$refs['childTable'].clearCurrentRow()
        }
      })
    },
    // 重置
    reset: function () {
      this.model.name = ''
      this.model.nextid = ''
      this.model.version = ''
      this.model.status = ''
    },

    // 添加
    add: function () {
      this.$refs.editSeq.modelIsOpen = true
      this.editSeqTitle = '新增全局序号'
      this.modelType = 'add'
      this.$refs.editSeq.isNameDisable = false
      this.$refs.editSeq.isVersionDisable = true
      this.$refs.editSeq.namePlacholder = '请输入...'
      this.$refs.editSeq.versionPlacholder = '不可添加'
      this.$refs.editSeq.handleReset()
    },
    // 刷新
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.syncData()
      this.query()
    },
    // 删除
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            seqApi.seqInfoDel(data.name).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error('删除失败')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 编辑
    edit: function (data) {
      this.$refs.editSeq.modelIsOpen = true
      this.editSeqTitle = '编辑全局序号'
      this.modelType = 'edit'
      this.$refs.editSeq.isNameDisable = true
      this.$refs.editSeq.isVersionDisable = true
      this.$refs.editSeq.namePlacholder = '不可修改'
      this.$refs.editSeq.versionPlacholder = '不可修改'
      this.$refs.editSeq.getData(data)
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '02':
          return '锁定'
        case '01':
          return '可用'
      }
    }
  }

}
</script>
