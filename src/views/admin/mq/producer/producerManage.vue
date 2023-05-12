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
                     <z-form-item label="生产者编码">
                        <z-input v-model="model.producerCode" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送起始时间:" prop="sendDate">
                         <date-picker v-model="model.sendDateStart"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.sendDateStart=$event" transfer  placeholder="发送起始时间" clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送终止时间:" prop="sendDate">
                         <date-picker v-model="model.sendDateEnd"  type="date" format="yyyy-MM-dd HH:mm:ss" @on-change="model.sendDateEnd=$event" transfer  placeholder="发送终止时间" clearable></date-picker>
                    </z-form-item>
                 </z-col>
                <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送状态:">
                        <z-select v-model="model.sendState" clearable placeholder="请选择" transfer>
                        <z-option value="0">未发送</z-option>
                        <z-option value="1">发送成功</z-option>
                        <z-option value="2">发送失败</z-option>
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
         <div slot="title">生产者信息列表</div>
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
          <vxe-table-column field="sendDate" title="发送时间" :formatter="formatTime" sortable></vxe-table-column>
          <vxe-table-column field="sendCount" title="发送次数" sortable></vxe-table-column>
          <vxe-table-column field="producerCode" title="生产者编码"></vxe-table-column>
          <vxe-table-column field="sendState" title="发送状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="errorMsg" title="错误信息"></vxe-table-column>
          <vxe-table-column title="操作" :width="140">
            <template v-slot="{ row, producerMessage }">
              <a class="link" @click="edit(row, producerMessage)">编辑</a>
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
    <edit-producer-message ref="editProducerMessage" :title="editProducerMessageTitle"></edit-producer-message>
 </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import producerMessageApi from './api/api.js'
import editProducerMessage from './editProducerMessage'
Vue.use(vxeTableExport)
export default {
  name: 'produceManage',
  components: {
    'edit-producer-message': editProducerMessage
  },
  data: function () {
    return {
      model: {
        sendDateStart: '',
        sendDateEnd: '',
        sendState: '',
        messageDestination: '',
        producerCode: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      tableExport: {
        // 默认选中类型
        type: 'html',
        // 自定义类型
        types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
        exportType: ['local', 'online'],
        exportOnlinePath: 'producer/producer',
        exportOnlineAction: 'post'
      },
      editProducerMessageTitle: ''
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
      producerMessageApi.producerMessageInfoQuery(params).then(function (response) {
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
      this.model.producerCode = ''
      this.model.sendDateStart = ''
      this.model.sendDateEnd = ''
      this.model.sendState = ''
    },
    // 修改
    edit: function (data) {
      this.$refs.editProducerMessage.modelIsOpen = true
      this.editProducerMessageTitle = '编辑'
      this.$refs.editProducerMessage.isStateDisable = false
      this.$refs.editProducerMessage.getData(data)
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
            producerMessageApi.producerMessageInfoDel(data.messageId).then(function (response) {
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
          return '未发送'
        case '1':
          return '发送成功'
        case '2':
          return '发送失败'
      }
    }
  }
}
</script>
