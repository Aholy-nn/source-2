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
                <label class="tata-label-just-right">{{$t('common.button.chooseApp')}}: </label>
                <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
                    <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
                </z-select>
            </z-col>
        </z-row>
    <z-search-panel v-if="!multiApp || showDict" class="m-t-15">
      <z-form id="dictForm" name="dictForm" :label-width="110" class="form-inline" method="post" label-position="left">
        <z-row :gutter="15">
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item :label="$t('dictManage.searchLabel.dictCode')">
                    <z-input v-model="dictModel.dictCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item :label="$t('dictManage.searchLabel.itemCode')">
                    <z-input v-model="dictModel.itemCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item :label="$t('dictManage.searchLabel.supDictCode')">
                    <z-input v-model="dictModel.supDictCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="9" :lg="9">
                <z-form-item :label="$t('dictManage.searchLabel.supItemCode')">
                    <z-input v-model="dictModel.supItemCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
                </z-form-item>
            </z-col>
            <z-col span="8" :xs="24" :sm="6" :lg="6" class="btns-group">
                <z-button type="primary" icon="ios-search" @click="query">{{$t('common.button.query')}}</z-button>
                <z-button icon="android-refresh" @click="reset">{{$t('common.button.reset')}}</z-button>
            </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <z-list-panel v-if="!multiApp || showDict" class="m-t-15">
        <div slot="title">{{$t('dictManage.title.dictList')}}</div>
        <div slot="buttons">
            <z-button type="text" icon="plus-round" @click="add">{{$t('dictManage.button.add')}}</z-button>
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
          <vxe-table-column field="dictId" :title="$t('dictManage.label.dictId')" :visible="false"></vxe-table-column>
          <vxe-table-column field="dictCode" :title="$t('dictManage.label.dictCode')"></vxe-table-column>
          <vxe-table-column field="dictName" :title="$t('dictManage.label.dictName')"></vxe-table-column>
          <vxe-table-column field="itemCode" :title="$t('dictManage.label.itemCode')"></vxe-table-column>
          <vxe-table-column field="itemValue" :title="$t('dictManage.label.itemValue')"></vxe-table-column>
          <vxe-table-column field="supDictCode" :title="$t('dictManage.label.supDictCode')"></vxe-table-column>
          <vxe-table-column field="supItemCode" :title="$t('dictManage.label.supItemCode')"></vxe-table-column>
          <vxe-table-column field="itemSortOrder" :title="$t('dictManage.label.itemSortOrder')" :visible="false"></vxe-table-column>
          <vxe-table-column field="dictDesc" :title="$t('dictManage.label.dictDesc')" :visible="false"></vxe-table-column>
          <vxe-table-column field="dictStatus" :title="$t('dictManage.label.dictStatus')" :visible="false"></vxe-table-column>
          <vxe-table-column field="dictVersion" :title="$t('dictManage.label.dictVersion')" :visible="false"></vxe-table-column>
          <vxe-table-column field="dictType" :title="$t('dictManage.label.dictType')" :visible="false"></vxe-table-column>
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
    <edit-dict ref="editDict" :title="editTitle" :model-type="modelType"></edit-dict>
  </div>
</template>
<script>
import '@/components/framework/vxe-table'
import dictApi from '../api/api.js'
import editDict from '../editDict/editDict'
import Config from '@/config/index.js'
export default {
  name: 'dictManage',
  components: {
    'edit-dict': editDict
  },
  data: function () {
    return {
      dictModel: {
        dictCode: '',
        itemCode: '',
        supDictCode: '',
        supItemCode: '',
        appId: ''
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
      showDict: false,
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
      let params = ''
      if (this.multiApp) {
        this.dictModel.appId = this.appModel.appId
        params = Object.assign(this.dictModel, this.tablePage)
        dictApi.query(params).then(function (response) {
          that.tableData = response.data.rows
          that.tablePage.records = response.data.records
          that.loading = false
        })
      } else {
        this.dictModel.appId = '1'
        params = Object.assign(this.dictModel, this.tablePage)
        dictApi.query(params).then(function (response) {
          that.tableData = response.data.rows
          that.tablePage.records = response.data.records
          that.loading = false
        })
      }
    },
    add: function () {
      this.modelType = 'add'
      this.editTitle = this.$t('dictManage.title.addDict')
      this.$refs.editDict.modelIsOpen = true
      this.$refs.editDict.handleReset()
      this.$refs.editDict.isReadOnly = false
      this.$refs.editDict.appModel.appId = this.appModel.appId
    },
    edit: function (data) {
      this.modelType = 'edit'
      this.editTitle = this.$t('dictManage.title.editDict')
      // 赋值
      this.$refs.editDict.modelIsOpen = true
      this.$refs.editDict.handleReset()
      this.$refs.editDict.isReadOnly = true
      this.$refs.editDict.appModel.appId = this.appModel.appId
      this.$refs.editDict.getData(data)
    },
    delBatch: function (data) {
      let that = this
      that.$Modal.confirm({
        title: this.$t('common.title.confirm'),
        content: this.$t('common.tips.confirmDelete'),
        onOk: function () {
          setTimeout(function () {
            dictApi.delDict(data.dictId).then(function (response) {
              if (response.data.code === '01') {
                that.$Message.success(response.data.msg)
                that.query()
              } else {
                that.$Message.error(response.data.msg)
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 重置
    reset: function () {
      this.dictModel.dictCode = ''
      this.dictModel.itemCode = ''
      this.dictModel.supDictCode = ''
      this.dictModel.supItemCode = ''
      this.dictModel.appId = ''
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
      this.showDict = true
      this.reset()
      this.query()
    },
    appClear: function () {
      this.reset()
      this.showDict = false
    }
  }

}
</script>
