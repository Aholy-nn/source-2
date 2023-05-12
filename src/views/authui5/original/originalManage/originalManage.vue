<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:39:23
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form :model="originalModel" :label-width="100" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="权限模板编码:">
              <z-input v-model="originalModel.originalCode" placeholder="请输入..."></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="权限模板名称:">
             <z-input v-model="originalModel.originalName" placeholder="请输入..."></z-input>
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
        <div slot="title">系统权限模板列表</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="add">添加</z-button>
            <z-button type="text" icon="navicon-round"  @click="editTemplate" >配置模板</z-button>
            <z-button type="text" icon="navicon-round"  @click="copyTemplate" >复制模板</z-button>
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
          <vxe-table-column field="originalId" title="权限模板标识" :visible="false" sortable></vxe-table-column>
          <vxe-table-column field="originalCode" title="权限模板编码"></vxe-table-column>
          <vxe-table-column field="originalName" title="权限模板名称"></vxe-table-column>
          <vxe-table-column field="originalType" title="权限模板类型" :formatter="formatType"></vxe-table-column>
          <vxe-table-column field="state" title="权限模板状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="remarks" title="备注"></vxe-table-column>
          <vxe-table-column title="操作">
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
     <edit-original ref="editOriginal" :title="editOriginalTitle" :model-type="modelType"></edit-original>
     <edit-template ref="editTemplate" :title="editTemplateTitle"></edit-template>
     <copy-template ref="copyTemplate" :title="copyTemplateTitle"></copy-template>
     <role-template ref="roleTemplate"></role-template>
  </div>
</template>
<script>
import '@/components/framework/vxe-table'
import originalApi from '../api/api.js'
import editOriginal from '../editOriginal/editOriginal'
// 配置模板
import editTemplate from '../initFuncs/initFuncs'
import copyTemplate from '../copyOriginal/copyOriginal'
import roleTemplate from '../../roleTemplate/roleTemplateManage/roleTemplateManage'
import Config from '@/config/index.js'
export default {
  name: 'originalManage',
  components: {
    'edit-original': editOriginal,
    'edit-template': editTemplate,
    'copy-template': copyTemplate,
    'role-template': roleTemplate
  },
  data: function () {
    return {
      originalModel: {
        originalCode: '',
        originalName: ''
      },
      // 表数据
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      loading: false,
      // 弹出
      modelType: '',
      editOriginalTitle: '',
      editTemplateTitle: '',
      copyTemplateTitle: ''
    }
  },
  created: function () {
    this.loadTable()
  },
  mounted: function () {},
  methods: {
    // 检索事件
    query: function (type) {
      let table = this.$refs['childTable']
      table.clearCurrentRow()
      this.loadTable(type)
    },
    loadTable: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.originalModel, this.tablePage)
      originalApi.queryUrl(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
      })
    },
    // 重置
    reset: function () {
      this.originalModel.originalCode = ''
      this.originalModel.originalName = ''
    },
    // 分页
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    add: function () {
      this.$refs.editOriginal.modelIsOpen = true
      this.modelType = 'add'
      this.$refs.editOriginal.handleReset()
      this.editOriginalTitle = '新增权限模板'
      this.$refs.editOriginal.state = '1'
    },
    edit: function (data) {
      this.$refs.editOriginal.modelIsOpen = true
      this.modelType = 'edit'
      this.$refs.editOriginal.handleReset()
      this.editOriginalTitle = '编辑权限模板'
      this.$refs.editOriginal.editOriginalModel.originalId = data.originalId
      this.$refs.editOriginal.editOriginalModel.originalCode = data.originalCode
      this.$refs.editOriginal.editOriginalModel.originalName = data.originalName
      this.$refs.editOriginal.editOriginalModel.originalType = data.originalType
      this.$refs.editOriginal.editOriginalModel.state = data.state
      this.$refs.editOriginal.editOriginalModel.remarks = data.remarks
    },
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            originalApi.deleteOriginalInfo(data.originalId).then(function (response) {
              that.$Message.success(response.data.msg)
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 配置模板
    editTemplate: function () {
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error('请选择一条记录！')
        return
      }
      // 根据不同的模板类型显示不同的弹出配置页面
      let oriId = data.originalId
      let oriType = data.originalType
      if (oriType === '1') { // 菜单模板
        this.$refs.editTemplate.modelIsOpen = true
        this.editTemplateTitle = '初始化菜单'
        this.$refs.editTemplate.appClear()
        this.$refs.editTemplate.originalId = oriId
        this.$refs.editTemplate.originalType = oriType
        this.$refs.editTemplate.appModel.appId = ''
        if (!Config.multiApp) {
          this.$refs.editTemplate.query()
        }
      } else if (oriType === '2') { // 角色模板
        this.$refs.roleTemplate.modelIsOpen = true
        this.$refs.roleTemplate.originalId = oriId
      }
    },
    // 复制模板
    copyTemplate: function () {
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        this.$Message.error('请选择一条记录！')
        return
      }
      if (data.state === '0') {
        this.$Message.error('已停用的模板不能复制！')
        return
      }
      //  添加属性
      this.$refs.copyTemplate.modelIsOpen = true
      this.copyTemplateTitle = '复制模板'
      this.$refs.copyTemplate.handleReset()
      this.$refs.copyTemplate.copyOriginalModel.originalId = data.originalId
      this.$refs.copyTemplate.copyOriginalModel.originalType = data.originalType
    },
    formatType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '1':
          return '初始菜单'
        case '2':
          return '角色模板'
      }
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '停用'
        case '1':
          return '正常'
      }
    }
  }
}
</script>
