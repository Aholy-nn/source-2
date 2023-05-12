<!--
 * @Description: filestorageManage
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
            <z-form-item label="存储类型：">
               <z-select v-model="model.storageType" clearable placeholder="请输入" transfer>
                <z-option value="NFS">NFS</z-option>
                <z-option value="FTP">FTP</z-option>
                <z-option value="其他">其他</z-option>
            </z-select>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="存储提供者：">
              <z-input v-model="model.storageVendor" :maxlength="20" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="存储操作类：">
               <z-input v-model="model.storageHandler" :maxlength="50" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="存储根路径：">
               <z-input v-model="model.storageBaseUrl" :maxlength="50" placeholder="请输入..." clearable/>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="存储配置信息：">
               <z-input v-model="model.storageSetting" :maxlength="200" placeholder="请输入..." clearable/>
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
        <div slot="title">文件存储信息管理列表</div>
        <div slot="buttons">
            <ui-privilege url="/addFileStorage/addFileStorage"><z-button type="text" icon="plus-round" @click="add">添加</z-button></ui-privilege>
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
          <vxe-table-column field="storageType" title="存储类型" sortable></vxe-table-column>
          <vxe-table-column field="storageVendor" title="存储提供者"></vxe-table-column>
          <vxe-table-column field="storageHandler" title="存储操作类"></vxe-table-column>
          <vxe-table-column field="storageBaseUrl" title="存储根路径"></vxe-table-column>
          <vxe-table-column field="storageSetting" title="存储配置信息"></vxe-table-column>
          <vxe-table-column field="createBy" title="创建人"></vxe-table-column>
          <vxe-table-column field="createDate" title="创建时间" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="updateBy" title="修改人" :visible="false"></vxe-table-column>
          <vxe-table-column field="updateDate" title="修改时间" :visible="false" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="id" title="文件存储信息编码" :visible="false"></vxe-table-column>
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
  <edit-FileStorage ref="editFileStorage" :title="editFileStorageTitle" :model-type="modelType"></edit-FileStorage>
  </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import filesApi from './api/api.js'
import editFileStorage from './editFileStorage'
Vue.use(vxeTableExport)
export default {
  name: 'fileStorageManage',
  components: {
    'edit-FileStorage': editFileStorage
  },
  data: function () {
    return {
      model: {
        storageType: '',
        storageVendor: '',
        storageHandler: '',
        storageBaseUrl: '',
        storageSetting: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editFileStorageTitle: '',
      modelType: '',
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'files/fileStorage',
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
      filesApi.fileStorageInfoQuery(params).then(function (response) {
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
      this.model.storageType = ''
      this.model.storageVendor = ''
      this.model.storageHandler = ''
      this.model.storageBaseUrl = ''
      this.model.storageSetting = ''
    },

    // 添加
    add: function () {
      this.$refs.editFileStorage.modelIsOpen = true
      this.modelType = 'add'
      this.$refs.editFileStorage.handleReset()
      this.editFileStorageTitle = '新增文件存储信息'
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
            filesApi.fileStorageInfoDel(data.id).then(function (response) {
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
      this.$refs.editFileStorage.modelIsOpen = true
      this.editFileStorageTitle = '编辑文件存储信息'
      this.modelType = 'edit'
      this.$refs.editFileStorage.getData(data)
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    // 表格日期格式化
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    }
  }

}
</script>
