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
                         <z-input v-model="model.noticeTitle" :maxlength="40" placeholder="请输入..." clearable/>                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="发送人编码">
                        <z-input v-model="model.sendBy" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="9" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送起始时间:" prop="sendDate">
                         <date-picker v-model="model.sendStartDate"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.sendStartDate=$event" placeholder="发送起始时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="9" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送终止时间:" prop="sendDate">
                         <date-picker v-model="model.sendEndDate"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.sendEndDate=$event" placeholder="发送终止时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="公告状态:">
                        <z-select v-model="model.userStatus" clearable placeholder="请选择" transfer>
                        <z-option value="0">未读</z-option>
                        <z-option value="1">已读</z-option>
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
         <div slot="title">用户公告管理列表</div>
         <div slot="buttons">
             <ui-privilege url="/user/batchMarkRead">
                <z-button type="text" icon="navicon-round" @click="batchMarkRead">标记为已读</z-button>
             </ui-privilege>
             <ui-privilege url="/user/allMarkRead">
                <z-button type="text" icon="navicon-round" @click="allMarkRead">全部已读</z-button>
             </ui-privilege>
             <ui-privilege url="/user/batchDelete">
                <z-button type="text" icon="navicon-round" @click="batchDelete">批量删除</z-button>
             </ui-privilege>
             <ui-privilege url="/user/allDelete">
                <z-button type="text" icon="navicon-round" @click="allDelete">全部删除</z-button>
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
          :checkbox-config="{trigger: 'row', highlight: true, range: true}"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column field="noticeTextId" title="公告编号" :visible="false"></vxe-table-column>
          <vxe-table-column field="noticeTitle" title="公告标题"></vxe-table-column>
          <vxe-table-column field="noticeContent" title="公告内容"></vxe-table-column>
          <vxe-table-column field="sendBy" title="发送人"></vxe-table-column>
          <vxe-table-column field="sendDate" title="发送时间" :formatter="formatTime" sortable></vxe-table-column>
          <vxe-table-column field="expireTime" title="失效时间" :formatter="formatTime" sortable></vxe-table-column>
          <vxe-table-column field="noticeStatus" title="公告状态" :formatter="formatStatus" sortable></vxe-table-column>
          <vxe-table-column title="操作" :width="140" fixed="right">
            <template v-slot="{ row, seq }">
              <a class="link" @click="show(row, seq)">详情</a>
              <div class="divider"></div>
              <a class="link" @click="del(row, seq)">删除</a>
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
    <user-notice-datail ref="userNoticeDetail" :title="userNoticeDetailTitle"></user-notice-datail>
 </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import userNoticeApi from '@/views/admin/notice/user/api/api.js'
import userNoticeDetail from '@/views/admin/notice/user/userNoticeDetail'
Vue.use(vxeTableExport)
export default {
  name: 'userNoticeManage',
  components: {
    'user-notice-datail': userNoticeDetail
  },
  data: function () {
    return {
      model: {
        noticeTitle: '',
        sendBy: '',
        sendStartDate: '',
        sendEndDate: '',
        userStatus: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      userNoticeDetailTitle: '',
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
  mounted: function () {
    // console.log('mounted')
  },
  methods: {
    // 检索事件
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.model, this.tablePage)
      userNoticeApi.userNoticeQuery(params).then(function (response) {
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
      this.model.sendBy = ''
      this.model.sendStartDate = ''
      this.model.sendEndDate = ''
      this.model.userStatus = ''
    },
    // 批量标记为已读
    batchMarkRead: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否标记为已读？',
        onOk: function () {
          setTimeout(function () {
            let noticeTextIds = rows[0].noticeTextId
            for (let i = 1; i < rows.length; i++) {
              noticeTextIds = noticeTextIds + ',' + rows[i].noticeTextId
            }
            userNoticeApi.batchMarkRead(noticeTextIds).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error('操作失败')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 全部标记为已读
    allMarkRead: function () {
      let that = this
      that.$Modal.confirm({
        title: '确认',
        content: '是否全部标记为已读？',
        onOk: function () {
          setTimeout(function () {
            userNoticeApi.allMarkRead().then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error('操作失败')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 批量删除
    batchDelete: function () {
      let that = this
      let table = this.$refs['childTable']
      let rows = table.getCheckboxRecords()
      if (!rows || rows.length === 0) {
        this.$Message.error('请至少选择一条记录！')
        return
      }
      that.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            let noticeTextIds = rows[0].noticeTextId
            for (let i = 1; i < rows.length; i++) {
              noticeTextIds = noticeTextIds + ',' + rows[i].noticeTextId
            }
            userNoticeApi.batchDelete(noticeTextIds).then(function (response) {
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
    // 全部删除
    allDelete: function () {
      let that = this
      that.$Modal.confirm({
        title: '确认',
        content: '是否全部删除？',
        onOk: function () {
          setTimeout(function () {
            userNoticeApi.allDelete().then(function (response) {
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
    // 刷新
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.syncData()
      this.query()
    },
    // 公告详情
    show: function (data) {
      let that = this
      this.$refs.userNoticeDetail.modelIsOpen = true
      this.userNoticeDetailTitle = '公告详情'
      this.$refs.userNoticeDetail.getData(data)
      if (data.noticeStatus === '0') {
        userNoticeApi.batchMarkRead(data.noticeTextId).then(function (response) {
          if (response.data.code === '01') {
            that.$Message.success(response.data.msg)
            that.query()
          } else {
            that.$Message.error(response.data.msg)
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    // 删除
    del: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            userNoticeApi.batchDelete(data.noticeTextId).then(function (response) {
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
          return '未读'
        case '1':
          return '已读'
      }
    }
  }
}
</script>
