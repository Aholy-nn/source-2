<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:39:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="frame-page">
      <z-row v-if="multiApp" :gutter="15" class="m-t-5">
            <z-col span="12">
                <label class="ilead-label-just-right">{{$t('common.button.chooseApp')}}: </label>
                <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
                    <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
                </z-select>
            </z-col>
        </z-row>
    <z-search-panel v-if="!multiApp || showRes" class="m-t-15">
      <z-form id="resForm" name="resForm" :label-width="110" class="form-inline" method="post" label-position="left">
        <z-row :gutter="15">
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item :label="$t('resType.label.resTypeCode')">
                    <z-input v-model="resModel.resTypeCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item :label="$t('resType.label.resTypeName')">
                    <z-input v-model="resModel.resTypeName" :maxlength="22" :placeholder="$t('common.placeholder.input')"></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="6" :lg="6" class="btns-group">
                <z-button type="primary" icon="ios-search" @click="query">{{$t('common.button.query')}}</z-button>
                <z-button icon="android-refresh" @click="reset">{{$t('common.button.reset')}}</z-button>
            </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <z-list-panel v-if="!multiApp || showRes" class="m-t-15">
        <div slot="title">{{$t('resType.title.resTypeList')}}</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="add">{{$t('common.button.add')}}</z-button>
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
          align='center'
          :data="tableData">
          <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
          <vxe-table-column field="resTypeCode" :title="$t('resType.label.resTypeCode')" sortable></vxe-table-column>
          <vxe-table-column field="resTypeName" :title="$t('resType.label.resTypeName')"></vxe-table-column>
          <vxe-table-column field="invokeServiceType" :title="$t('resType.label.invokeServiceType')" :formatter="formatType"></vxe-table-column>
          <vxe-table-column field="invokeServiceName" :title="$t('resType.label.invokeServiceName')"></vxe-table-column>
          <vxe-table-column field="remarks" :title="$t('resType.label.remarks')"></vxe-table-column>
          <vxe-table-column :title="$t('common.title.operate')">
            <template v-slot="{ row, seq }">
              <a class="link" @click="edit(row, seq)">{{$t('common.button.edit')}}</a>
              <div class="divider"></div>
              <a class="link" @click="delBatch(row, seq)">{{$t('common.button.delete')}}</a>
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
    <edit-res ref="editRes" :title="editTitle" :model-type="modelType"></edit-res>
  </div>
</template>
<script>
import '@/components/framework/vxe-table'
import resApi from '../api/api.js'
import editRes from '../editRes/editRes'
import Config from '@/config/index.js'
export default {
  name: 'resManage',
  components: {
    'edit-res': editRes
  },
  data: function () {
    return {
      resModel: {
        resTypeCode: '',
        resTypeName: ''
      },
      // 表数据
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      editTitle: '',
      modelType: '',
      showRes: false,
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      // 是否多应用
      multiApp: Config.multiApp
    }
  },
  created: function () {
    if (!this.multiApp) {
      this.query()
    }
  },
  methods: {
    // 查询
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.resModel, this.tablePage)
      if (this.multiApp) {
        let appId = this.appModel.appId
        resApi.query(params, appId).then(function (response) {
          that.tableData = response.data.rows
          that.tablePage.records = response.data.records
          that.loading = false
        })
      } else {
        resApi.query(params).then(function (response) {
          that.tableData = response.data.rows
          that.tablePage.records = response.data.records
          that.loading = false
        })
      }
    },
    add: function () {
      this.modelType = 'add'
      this.editTitle = this.$t('resType.title.addResType')
      this.$refs.editRes.modelIsOpen = true
      this.$refs.editRes.handleReset()
      this.$refs.editRes.appModel.appId = this.appModel.appId
    },
    edit: function (data) {
      this.modelType = 'edit'
      this.editTitle = this.$t('resType.title.editResType')
      let ref = this.$refs.editRes
      // 赋值
      ref.modelIsOpen = true
      ref.editResModel.resTypeCode = data.resTypeCode
      ref.editResModel.resTypeName = data.resTypeName
      ref.editResModel.invokeServiceType = data.invokeServiceType
      ref.editResModel.invokeServiceName = data.invokeServiceName
      ref.editResModel.remarks = data.remarks
      this.$refs.editRes.appModel.appId = this.appModel.appId
    },
    delBatch: function (data) {
      let that = this
      that.$Modal.confirm({
        title: this.$t('common.title.confirm'),
        content: this.$t('common.tips.confirmBatchDelete'),
        onOk: function () {
          setTimeout(function () {
            let resTypeCode = "'" + data.resTypeCode + "'"
            resApi.deleteResTypeInfo(resTypeCode).then(function (response) {
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
      this.resModel.resTypeCode = ''
      this.resModel.resTypeName = ''
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    getAppList: function () {
      let appList = this.$store.state.sysAppInfos
      return appList
    },
    appChange: function () {
      let appId = this.appModel.appId
      if (!appId) {
        return
      }
      this.showRes = true
      this.reset()
      this.query()
    },
    appClear: function () {
      this.reset()
      this.showRes = false
    },
    formatType: function ({ cellValue, row, column }) {
      switch (cellValue) {
        case '01':
          return this.$t('resType.option.invokeServiceType01')
        case '02':
          return this.$t('resType.option.invokeServiceType02')
        case '03':
          return this.$t('resType.option.invokeServiceType03')
      }
    }
  }

}
</script>
