<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 10:46:28
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="frame-page">
    <z-search-panel>
      <z-form id="sysPropertyForm" name="sysPropertyForm" :label-width="80" label-position="left">
        <z-row :gutter="15">
            <z-col span="8" :xs="24" :sm="8" :lg="8">
                <z-form-item label="属性代码:">
                    <z-input v-model="sysPropertyModel.propertyCode" placeholder="请输入..."></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="8" :lg="8">
                <z-form-item label="备注:">
                    <z-input v-model="sysPropertyModel.remarks" placeholder="请输入..."></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="8" :lg="8">
                <z-form-item label="租户标识:">
                    <z-select v-model="sysPropertyModel.tenantId" transfer>
                        <z-option v-for="item in tenantList" :value="item.code" :key="item.code">{{ item.name }}</z-option>
                    </z-select>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="6" :lg="6" class="btns-group">
                <z-button type="primary" icon="ios-search" @click="query">查询</z-button>
                <z-button icon="android-refresh" @click="reset">重置</z-button>
            </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <z-list-panel class="m-t-15">
        <div slot="title">系统属性列表</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="add">添加</z-button>
        </div>
        <!-- 表格 -->
        <vxe-table
          ref="childTable"
          border
          row-id="id"
          size="medium"
          highlight-current-row
          show-header-overflow
          show-overflow
          :loading="loading"
          :data="tableData"
           align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="propertyId" title="系统属性标识" :visible="false" sortable></vxe-table-column>
          <vxe-table-column field="propertyCode" title="系统属性编码"></vxe-table-column>
          <vxe-table-column field="propertyValue" title="系统属性值"></vxe-table-column>
          <vxe-table-column field="propertyType" title="系统属性类型" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="remarks" title="备注"></vxe-table-column>
          <vxe-table-column field="tenantId" title="租户标识"></vxe-table-column>
           <vxe-table-column title="操作" width="120">
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
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange"
          >
        </vxe-pager>
    </z-list-panel>
    <!-- 弹出 -->
    <edit-sys-property ref="editSysProperty" :title="editTitle" :model-type="modelType"></edit-sys-property>
  </div>
</template>
<script>

import '@/components/framework/vxe-table'
import sysPropertyApi from '../api/api.js'
import editSysProperty from '../editSysProperty/editSysProperty'
export default {
  name: 'sysPropertyManage',
  components: {
    'edit-sys-property': editSysProperty
  },
  data: function () {
    return {
      sysPropertyModel: {
        propertyCode: '',
        remarks: '',
        tenantId: ''
      },
      tenantList: this.getTenantList(),
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editTitle: '',
      modelType: ''
    }
  },
  created: function () {
    this.query()
  },
  mounted: function () {},
  methods: {
    // 查询
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.sysPropertyModel, this.tablePage)
      sysPropertyApi.query(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
      })
    },
    getTenantList: function () {
      var that = this
      setTimeout(function () {
        sysPropertyApi.tenantListQuery().then(function (response) {
          console.log(response)
          that.tenantList = response.data.data
        }).catch(function (error) {
          console.log(error)
        })
      }, 500)
      return []
    },
    add: function () {
      this.modelType = 'add'
      this.editTitle = '新增系统应用'
      this.$refs.editSysProperty.modelIsOpen = true
      this.$refs.editSysProperty.handleReset()
      this.$refs.editSysProperty.editPropertyModel.propertyType = '0'
    },
    edit: function (data) {
      this.modelType = 'edit'
      this.editTitle = '编辑系统应用'
      // 赋值
      this.$refs.editSysProperty.modelIsOpen = true
      let ref = this.$refs.editSysProperty
      ref.editPropertyModel.propertyId = data.propertyId
      ref.editPropertyModel.propertyCode = data.propertyCode
      ref.editPropertyModel.propertyValue = data.propertyValue
      ref.editPropertyModel.propertyType = data.propertyType
      ref.editPropertyModel.remarks = data.remarks
      ref.editPropertyModel.tenantId = data.tenantId
    },
    delBatch: function (data) {
      let that = this
      that.$Modal.confirm({
        title: '确认',
        content: '是否批量删除？',
        onOk: function () {
          setTimeout(function () {
            sysPropertyApi.deletePropertyInfo(data.propertyId).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }

      })
    },
    // 重置
    reset: function () {
      this.sysPropertyModel.propertyCode = ''
      this.sysPropertyModel.remarks = ''
      this.sysPropertyModel.tenantId = ''
    },
    // 分页
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '默认'
        case '1':
          return '密码'
      }
    }
  }

}
</script>
