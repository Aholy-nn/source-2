<!--
 * @Description: adminNoticeManage
 * @Author: wangzelin
 * @Date: 2021-1-11 10:08:37
 * @LastEditTime: 2021-1-11 15:41:37
 * @LastEditors: wangzelin
 -->
<template>
 <div class ="frame-page">
     <z-search-panel>
         <z-form ref="model" :model="model" :label-width="86" label-position="left">
             <z-row :gutter="15">
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="公告标题">
                         <z-input v-model="model.noticeTitle" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="创建人编码">
                        <z-input v-model="model.createBy" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="创建起始时间:" prop="createDate">
                         <date-picker v-model="model.createStartDate"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.createStartDate=$event" placeholder="创建起始时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="创建终止时间:" prop="createDate">
                         <date-picker v-model="model.createEndDate"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.createEndDate=$event" placeholder="创建终止时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="公告状态:">
                        <z-select v-model="model.adminStatus" clearable placeholder="请选择" transfer>
                        <z-option value="0">未发送</z-option>
                        <z-option value="1">已发送</z-option>
                         </z-select>
                    </z-form-item>
                </z-col>
             </z-row>
             <z-row :gutter="15">
                <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
                        <z-button type="primary" icon="ios-search" @click="query">查询</z-button>
                        <z-button icon="android-refresh" @click="reset">重置</z-button>
                </z-col>
             </z-row>
         </z-form>
     </z-search-panel>
     <z-list-panel class="m-t-15">
         <div slot="title">管理员公告管理列表</div>
         <div slot="buttons">
             <ui-privilege url="/admin/addNotice">
                <z-button type="text" icon="plus-round" @click="add">添加</z-button>
             </ui-privilege>
             <ui-privilege url="/admin/sendNotice">
                <z-button type="text" icon="navicon-round" @click="send">发送</z-button>
             </ui-privilege>
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
          <vxe-table-column field="noticeTextId" title="公告编号" :visible="false"></vxe-table-column>
          <vxe-table-column field="noticeTitle" title="公告标题" width="100"></vxe-table-column>
          <vxe-table-column field="noticeContent" title="公告内容" width="100"></vxe-table-column>
          <vxe-table-column field="createBy" title="创建人" width="75"></vxe-table-column>
          <vxe-table-column field="createDate" title="创建时间" width="100" :formatter="formatTime" sortable></vxe-table-column>
          <vxe-table-column field="updateBy" title="修改人" width="75"></vxe-table-column>
          <vxe-table-column field="updateDate" title="修改时间" width="100" :formatter="formatTime" sortable></vxe-table-column>
          <vxe-table-column field="sendBy" title="发送人" width="75"></vxe-table-column>
          <vxe-table-column field="sendDate" title="发送时间" :formatter="formatTime" width="100" sortable></vxe-table-column>
          <vxe-table-column field="expireTime" title="失效时间" :formatter="formatTime" width="100" sortable></vxe-table-column>
          <vxe-table-column field="noticeStatus" title="公告状态" :formatter="formatStatus" width="100" sortable></vxe-table-column>
          <vxe-table-column title="操作" :width="210" fixed="right">
            <template v-slot="{ row, seq }">
              <a class="link" @click="show(row, seq)">详情</a>
              <div class="divider"></div>
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
    <!-- 弹出 -->
    <edit-notice ref="editNotice" :title="editNoticeTitle" :model-type="modelType"></edit-notice>
    <send-notice ref="sendNotice"></send-notice>
    <admin-notice-datail ref="adminNoticeDetail" :title="adminNoticeDetailTitle"></admin-notice-datail>
 </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import adminNoticeApi from './api/api.js'
import editNotice from './editNotice'
import sendNotice from './sendNotice'
import adminNoticeDetail from '@/views/admin/notice/admin/adminNoticeDetail'
Vue.use(vxeTableExport)
export default {
  name: 'adminNoticeManage',
  components: {
    'edit-notice': editNotice,
    'send-notice': sendNotice,
    'admin-notice-datail': adminNoticeDetail
  },
  data: function () {
    return {
      model: {
        noticeTitle: '',
        createBy: '',
        createStartDate: '',
        createEndDate: '',
        adminStatus: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editNoticeTitle: '',
      adminNoticeDetailTitle: '',
      modelType: '',
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'mail/mail',
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
      adminNoticeApi.adminNoticeQuery(params).then(function (response) {
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
      this.model.noticeTitle = ''
      this.model.createBy = ''
      this.model.createStartDate = ''
      this.model.createEndDate = ''
      this.model.adminStatus = ''
    },
    // 添加
    add: function () {
      this.$refs.editNotice.modelIsOpen = true
      this.editNoticeTitle = '新增公告'
      this.modelType = 'add'
      this.$refs.editNotice.isNoticeTitleDisable = false
      this.$refs.editNotice.isNoticeContentDisable = false
      this.$refs.editNotice.isExpireTimeDisable = false
      this.$refs.editNotice.defaultPlacholders = '请输入...'
      this.$refs.editNotice.handleReset()
    },
    // 刷新
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.syncData()
      this.query()
    },
    // 编辑
    edit: function (data) {
      if (data.noticeStatus === '0') {
        this.$refs.editNotice.modelIsOpen = true
        this.editNoticeTitle = '编辑公告'
        this.modelType = 'edit'
        this.$refs.editNotice.isNoticeTitleDisable = false
        this.$refs.editNotice.isNoticeContentDisable = false
        this.$refs.editNotice.isExpireTimeDisable = false
        this.$refs.editNotice.getData(data)
      } else if (data.noticeStatus === '1') {
        this.$refs.editNotice.modelIsOpen = true
        this.editNoticeTitle = '编辑公告'
        this.modelType = 'edit'
        this.$refs.editNotice.isNoticeTitleDisable = true
        this.$refs.editNotice.isNoticeContentDisable = true
        this.$refs.editNotice.isExpireTimeDisable = true
        this.$refs.editNotice.getData(data)
      }
    },
    // 公告详情
    show: function (data) {
      this.$refs.adminNoticeDetail.modelIsOpen = true
      this.adminNoticeDetailTitle = '公告详情'
      this.$refs.adminNoticeDetail.getData(data)
    },
    // 删除
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            adminNoticeApi.adminNoticeDel(data.noticeTextId).then(function (response) {
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
    // 发送
    send: function () {
      let that = this
      let table = this.$refs['childTable']
      let data = table.getCurrentRecord()
      if (!data) {
        that.$Message.error('请选择一条记录！')
        return
      }
      if (data.noticeStatus === '1') {
        that.$Message.error('无法发送状态为已发送的公告！')
        return
      }
      let now = new Date()
      let current = new Date(data.expireTime)
      if (current <= now) {
        that.$Message.error('无法发送已失效的公告！')
        return
      }
      this.$refs.sendNotice.modelIsOpen = true
      this.$refs.sendNotice.noticeTextId = data.noticeTextId
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
        case '0':
          return '未发送'
        case '1':
          return '已发送'
      }
    }
  }
}
</script>
