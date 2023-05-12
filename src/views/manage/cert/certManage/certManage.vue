<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-04 09:47:04
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-search-panel>
       <z-form ref="certManageForm" :model="model" :label-width="86" label-position="left">
        <z-row :gutter="15">
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="证书名称:" prop="certName">
              <z-input v-model="model.certName" placeholder="请输入..." style="width: 200px"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公用名称:" prop="certCommonName">
              <z-input v-model="model.certCommonName" placeholder="请输入..." style="width: 200px"></z-input>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="证书状态:" prop="state">
                <z-select v-model="model.state" clearable placeholder="请选择" style="width: 200px">
                    <z-option value="2">使用</z-option>
                    <z-option value="1">未使用</z-option>
                    <z-option value="0">已禁用</z-option>
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
        <div slot="title">证书管理</div>
        <div slot="buttons">
            <z-button type="text" icon="navicon-round" @click="add">添加自有证书</z-button>
            <z-button type="text" icon="navicon-round" @click="generate" >生成测试证书</z-button>
        </div>
        <!-- 表格 -->
        <vxe-table
          ref="certManageList"
          border
          row-id="id"
          highlight-current-row
          show-header-overflow
          show-overflow
          :loading="loading"
          :data="tableData"
          align='center'>
          <vxe-table-column type="seq" title="序号" width="40" fixed = 'left'></vxe-table-column>
          <vxe-table-column field="certId" title="证书ID" fixed = 'left'></vxe-table-column>
          <vxe-table-column field="certName" title="证书名称"></vxe-table-column>
          <vxe-table-column field="state" title="状态" :formatter="formatStatus"></vxe-table-column>
          <vxe-table-column field="certCommonName" title="公用名称"></vxe-table-column>
          <vxe-table-column field="certIndate" title="证书有效期"></vxe-table-column>
          <vxe-table-column field="certType" title="证书类型" :formatter="formatStatusCertType"></vxe-table-column>
          <vxe-table-column title="操作" width="200">
            <template v-slot="{ row, seq }">
              <a class="link" @click="downLoad(row, seq)">下载证书</a>
              <div class="divider"></div>
              <a class="link" @click="del(row, seq)">禁用证书</a>
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
    <cert-edit ref="certEdit"></cert-edit>
    <cert-generate ref="certGenerate"></cert-generate>
  </div>
</template>
<script>
import 'xe-utils'
import '@/components/framework/vxe-table'
import certEdit from '../certEdit/certEdit'
import certGenerate from '../certGenerate/certGenerate'
import CertManageListAPI from '../api/api.js'
export default {
  name: 'certManage',
  components: {
    'cert-edit': certEdit,
    'cert-generate': certGenerate
  },
  data: function () {
    return {
      // 表数据
      model: {
        certId: '',
        certName: '',
        state: '',
        certCommonName: '',
        certIndate: ''
      },
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
      let params = Object.assign(this.model, this.tablePage)
      CertManageListAPI.query(params).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
        that.$nextTick(function () {
          that.$refs['certManageList'].clearCurrentRow()
        })
      })
    },
    reset: function () {
      this.$refs.certManageList.resetFields()
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    add: function () {
      this.$refs.certEdit.modelIsOpen = true
      this.$refs.certEdit.handleReset()
    },
    generate: function () {
      this.$refs.certGenerate.modelIsOpen = true
      this.$refs.certGenerate.handleReset()
    },
    downLoad: function (data, index) {
      if (data.certType !== '2') {
        this.$Message.success('只能下载测试证书')
        this.$Spin.hide()// 关闭loading遮罩遮罩
        return
      }
      if (data.state === '0') {
        this.$Message.success('不允许下载已经禁用的证书')
        this.$Spin.hide()// 关闭loading遮罩遮罩
      }

      var certId = data.certId
      var certName = data.certName
      var that = this
      CertManageListAPI.downCert({'certId': certId, 'certName': certName}).then(function (response) {
        that.$refs.certManageList.exportData({
          type: 'csv',
          dataFilterMethod: (row, rowIndex) => rowIndex === index
        })
        // var downCertUrl = CertManageListAPI.getDownCertUrl() + '/' + certId + '/' + certName
        // var form = $('<form method="POST" action="' + downCertUrl + '">')
        // $.each(table.getRowData(ids), function (k, v) {
        //   form.append($('<input type="hidden" name="' + k +
        //         '" value="' + v + '">'))
        // })
        // $('body').append(form)
        // form.submit() // 自动提交
        that.$Spin.hide()// 关闭loading遮罩遮罩
        that.$Message.success('下载成功')
      }).catch(function (error) {
        console.log(error)
      })
    },
    del: function (data) {
      var that = this
      var delCertId = data.certId
      // 后台删除
      that.$Modal.confirm({
        title: '确认',
        content: '是否禁用该证书？',
        onOk: function () {
          setTimeout(function () {
            CertManageListAPI.del(delCertId).then(function (response) {
              that.$Message.success('禁用成功')
              that.query()
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    formatStatus: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '2':
          return '使用'
        case '1':
          return '未使用'
        case '0':
          return '已禁用'
      }
    },
    formatStatusCertType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '2':
          return '测试证书'
        case '1':
          return '自有证书'
      }
    }
  }
}
</script>
