<!--
 * @Description: mailManage
 * @Author: wangzelin
 * @Date: 2020-11-17 10:08:37
 * @LastEditTime: 2020-11-17 15:41:37
 * @LastEditors: wangzelin
 -->

 <template>
 <div class ="frame-page">
     <z-search-panel>
         <z-form ref="model" :model="model" :label-width="86" label-position="left">
             <z-row :gutter="15">
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="发件人地址">
                         <z-input v-model="model.mailFrom" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="收件人地址">
                        <z-input v-model="model.mailTo" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                     <z-form-item label="邮件主题">
                        <z-input v-model="model.mailSubject" :maxlength="40" placeholder="请输入..." clearable/>
                     </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送起始时间:">
                         <date-picker v-model="model.mailSendDateStart" @on-change="model.mailSendDateStart=$event" type="date" format="yyyy-MM-dd HH:mm:ss" placeholder="发送起始时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送终止时间:">
                         <date-picker v-model="model.mailSendDateEnd" @on-change="model.mailSendDateEnd=$event" type="date" format="yyyy-MM-dd HH:mm:ss" placeholder="发送终止时间"
                            clearable></date-picker>
                    </z-form-item>
                 </z-col>
                 <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="邮件类型:">
                        <z-select v-model="model.mailType" clearable placeholder="请选择" transfer>
                        <z-option value="0">文本类型邮件</z-option>
                        <z-option value="1">带附件类型邮件</z-option>
                         </z-select>
                    </z-form-item>
                </z-col>
             </z-row>
             <z-row :gutter="15">
                <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="发送状态:">
                        <z-select v-model="model.mailStatus" clearable placeholder="请选择" transfer>
                        <z-option value="00">未发送</z-option>
                        <z-option value="01">发送成功</z-option>
                        <z-option value="02">发送失败</z-option>
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
         <div slot="title">邮件管理列表</div>
         <div slot="buttons">
             <ui-privilege url="/addMail">
                <z-button type="text" icon="plus-round" @click="add">添加</z-button>
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
          <vxe-table-column field="mailFrom" title="发件人地址" sortable></vxe-table-column>
          <vxe-table-column field="mailTo" title="收件人地址"></vxe-table-column>
          <vxe-table-column field="mailSubject" title="邮件主题"></vxe-table-column>
          <vxe-table-column field="mailAttachFileNames" title="附件文件名"></vxe-table-column>
          <vxe-table-column field="mailCc" title="抄送"></vxe-table-column>
          <vxe-table-column field="mailBcc" title="密送"></vxe-table-column>
          <vxe-table-column field="mailReplyTo" title="回复"></vxe-table-column>
          <vxe-table-column field="mailSendDate" title="发送时间" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field=mailType title="邮件类型" :formatter="formatType"></vxe-table-column>
          <vxe-table-column field="mailStatus" title="发送状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="mailId" title="邮件编号" :visible="false"></vxe-table-column>
          <vxe-table-column field="mailSenddate" title="发送时间" :visible="false" :formatter="formatTime"></vxe-table-column>
          <vxe-table-column field="mailContent" title="邮件内容" :visible="false"></vxe-table-column>
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
    <edit-mail ref="editMail" :title="editMailTitle" :model-type="modelType"></edit-mail>
 </div>
</template>
<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import vxeTableExport from '@/components/framework/vxe-table-export'
import '@/components/framework/ui-privilege'
import mailApi from './api/api.js'
import editMail from './editMail'
Vue.use(vxeTableExport)
export default {
  name: 'mailManage',
  components: {
    'edit-mail': editMail
  },

  data: function () {
    return {
      model: {
        mailFrom: '',
        mailTo: '',
        mailSubject: '',
        mailCc: '',
        mailBcc: '',
        mailReplyTo: '',
        mailType: '',
        mailSendDateStart: '',
        mailSendDateEnd: '',
        mailAttachFileNames: '',
        mailStatus: '',
        mailContent: '',
        mailId: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editMailTitle: '',
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
      mailApi.mailInfoQuery(params).then(function (response) {
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
      this.model.mailFrom = ''
      this.model.mailTo = ''
      this.model.mailSubject = ''
      this.model.mailType = ''
      this.model.mailStatus = ''
      this.model.mailSendDateStart = ''
      this.model.mailSendDateEnd = ''
    },

    // 添加
    add: function () {
      this.$refs.editMail.modelIsOpen = true
      this.editMailTitle = '新增邮件'
      this.modelType = 'add'
      this.$refs.editMail.isStatusDisable = true
      this.$refs.editMail.isSendDateDisable = true
      this.$refs.editMail.isAttachFileNamesDisable = false
      this.$refs.editMail.isFromDisable = false
      this.$refs.editMail.isToDisable = false
      this.$refs.editMail.isSubjectDisable = false
      this.$refs.editMail.isCcDisable = false
      this.$refs.editMail.isBccDisable = false
      this.$refs.editMail.isReplyToDisable = false
      this.$refs.editMail.isContentDisable = false
      this.$refs.editMail.defaultPlacholder = '请输入...'
      this.$refs.editMail.defaultPlacholders = '请输入(如有多个用,分开)'
      this.$refs.editMail.handleReset()
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
            mailApi.mailInfoDel(data.mailId).then(function (response) {
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
      if (data.mailStatus === '00') {
        this.$refs.editMail.modelIsOpen = true
        this.editMailTitle = '编辑邮件'
        this.modelType = 'edit'
        this.$refs.editMail.isStatusDisable = false
        this.$refs.editMail.isAttachFileNamesDisable = false
        this.$refs.editMail.isFromDisable = false
        this.$refs.editMail.isToDisable = false
        this.$refs.editMail.isSubjectDisable = false
        this.$refs.editMail.isCcDisable = false
        this.$refs.editMail.isBccDisable = false
        this.$refs.editMail.isReplyToDisable = false
        this.$refs.editMail.isContentDisable = false
        this.$refs.editMail.getData(data)
      } else if (data.mailStatus === '02') {
        this.$refs.editMail.modelIsOpen = true
        this.editMailTitle = '编辑邮件'
        this.modelType = 'edit'
        this.$refs.editMail.isStatusDisable = false
        this.$refs.editMail.isAttachFileNamesDisable = true
        this.$refs.editMail.isFromDisable = true
        this.$refs.editMail.isToDisable = true
        this.$refs.editMail.isSubjectDisable = true
        this.$refs.editMail.isCcDisable = true
        this.$refs.editMail.isBccDisable = true
        this.$refs.editMail.isReplyToDisable = true
        this.$refs.editMail.isContentDisable = true
        this.$refs.editMail.getData(data)
      } else if (data.mailStatus === '01') {
        this.$refs.editMail.modelIsOpen = true
        this.editMailTitle = '编辑邮件'
        this.modelType = 'edit'
        this.$refs.editMail.isStatusDisable = true
        this.$refs.editMail.isAttachFileNamesDisable = true
        this.$refs.editMail.isFromDisable = true
        this.$refs.editMail.isToDisable = true
        this.$refs.editMail.isSubjectDisable = true
        this.$refs.editMail.isCcDisable = true
        this.$refs.editMail.isBccDisable = true
        this.$refs.editMail.isReplyToDisable = true
        this.$refs.editMail.isContentDisable = true
        this.$refs.editMail.getData(data)
      }
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
        case '00':
          return '未发送'
        case '01':
          return '发送成功'
        case '02':
          return '发送失败'
      }
    },
    formatType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '0':
          return '文本'
        case '1':
          return '带附件'
      }
    }
  }
}
</script>
