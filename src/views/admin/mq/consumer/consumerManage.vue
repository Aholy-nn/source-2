<!--
 * @Description: producerManage
 * @Author: wangzelinq
 * @Date: 2020-12-17 10:08:37
 * @LastEditTime: 2020-11-17 15:41:37
 * @LastEditors: wangzelin
 -->

 <template>
 <div class ="frame-page">
     <z-search-panel>
         <z-form ref="model" :model="model" :label-width="86" label-position="left">
             <z-row :gutter="15">
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="消息主题">
                         <z-input v-model="model.messageDestination" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="消费者编码">
                        <z-input v-model="model.consumerCode" :maxlength="60" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="消费起始时间:" prop="receiveDate">
                         <date-picker v-model="model.processDateStart"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.processDateStart=$event" transfer placeholder="发送起始时间" clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="消费终止时间:" prop="receiveDate">
                         <date-picker v-model="model.processDateEnd"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.processDateEnd=$event" transfer placeholder="发送终止时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="处理状态:">
                        <z-select v-model="model.processState" clearable placeholder="请选择" transfer>
                        <z-option value="0">状态未知</z-option>
                        <z-option value="1">处理成功</z-option>
                        <z-option value="2">处理失败</z-option>
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
         <div slot="title">消费者信息列表</div>
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
          <vxe-table-column field="messageId" title="消息编号" sortable></vxe-table-column>
          <vxe-table-column field="messageDestination" title="消息主题"></vxe-table-column>
          <vxe-table-column field="messageContent" title="消息内容"></vxe-table-column>
          <vxe-table-column field="processDate" title="消费时间" :formatter="formatTime" sortable></vxe-table-column>
          <vxe-table-column field="processCount" title="消费次数" sortable></vxe-table-column>
          <vxe-table-column field="consumerCode" title="消费者编码"></vxe-table-column>
          <vxe-table-column field="processState" title="消费状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="errorMsg" title="错误信息"></vxe-table-column>
          <vxe-table-column title="操作" :width="140">
            <template v-slot="{ row, consumerMessage }">
              <a class="link" @click="edit(row, consumerMessage)">编辑</a>
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
     <edit-consumer-message ref="editConsumerMessage" :title="editConsumerMessageTitle"></edit-consumer-message>
 </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import consumerMessageApi from './api/api.js'
import editConsumerMessage from './editConsumerMessage'
Vue.use(vxeTableExport)
export default {
  name: 'consumerManage',
  components: {
    'edit-consumer-message': editConsumerMessage
  },
  data: function () {
    return {
      model: {
        processDateStart: '',
        processDateEnd: '',
        processState: '',
        messageDestination: '',
        consumerCode: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editConsumerMessageTitle: '',
      // modelType: '',
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'consumer/consumer',
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
      consumerMessageApi.consumerMessageInfoQuery(params).then(function (response) {
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
      this.model.messageDestination = ''
      this.model.consumerCode = ''
      this.model.processDateStart = ''
      this.model.processDateEnd = ''
      this.model.processState = ''
    },
    // 刷新
    refreshTable: function () {
      let table = this.$refs['childTable']
      table.syncData()
      this.query()
    },
    // 编辑
    edit: function (data) {
      this.$refs.editConsumerMessage.modelIsOpen = true
      this.editConsumerMessageTitle = '编辑'
      this.$refs.editConsumerMessage.isStateDisable = false
      this.$refs.editConsumerMessage.getData(data)
    },
    // 删除
    delBatch: function (data) {
      let that = this
      this.$Modal.confirm({
        title: '确认',
        content: '是否删除？',
        onOk: function () {
          setTimeout(function () {
            consumerMessageApi.consumerMessageInfoDel(data.consumerMessageId).then(function (response) {
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
          return '状态未知'
        case '1':
          return '处理成功'
        case '2':
          return '处理失败'
      }
    }
  }
}
</script>
