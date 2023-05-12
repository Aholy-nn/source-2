<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:39:07
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="$t('orgManage.title.showUsers')" fixed max-height="500" width="900">
    <z-search-panel>
      <z-form ref="userQueryForm" :model="userModel" inline :label-width="80">
          <z-form-item :label="$t('userManage.title.userName')"  prop="userName">
            <z-input v-model="userModel.userName" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.title.userCode')"  prop="userCode">
            <z-input v-model="userModel.userCode" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item>
            <z-button type="primary" icon="search" @click="query">{{$t('common.button.query')}}</z-button>
            <z-button type="primary" ghost icon="android-refresh" @click="reset">{{$t('common.button.reset')}}</z-button>
        </z-form-item>
      </z-form>
    </z-search-panel>
    <!-- 表格 -->
  <vxe-table
    ref="showUsersTable"
    border
    row-id="id"
    size="medium"
    :checkbox-config="{trigger: 'row', highlight: true, range: true}"
    show-header-overflow
    show-overflow
    :loading="loading"
    :data="tableData">
    <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
    <vxe-table-column field="userName" :title="$t('userManage.title.userName')" sortable></vxe-table-column>
    <vxe-table-column field="userCode" :title="$t('userManage.title.userCode')"></vxe-table-column>
    <vxe-table-column field="orgName" :title="$t('userManage.title.orgName')"></vxe-table-column>
    <vxe-table-column field="orgId" :title="$t('userManage.title.orgId')" :visible="false"></vxe-table-column>
    <vxe-table-column field="userId" :title="$t('userManage.title.userId')" :visible="false"></vxe-table-column>
  </vxe-table>
  <vxe-pager
    border
    :loading="loading"
    :current-page="tablePage.page"
    :page-size="tablePage.rows"
    :total="tablePage.records"
    :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
    @page-change="handlePageChange"
    >
  </vxe-pager>
  <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">{{$t('common.button.close')}}</z-button>
  </div>
</z-modal>
</template>
<script>
import '@/components/framework/vxe-table'
import orgApi from '../api/api.js'
export default {
  name: 'showUsers',
  data: function () {
    return {
      modelIsOpen: false,
      userModel: {
        userName: '',
        userCode: ''
      },
      loading: false,
      tableData: [],
      orgId: '',
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      }
    }
  },
  created: function () {
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        this.query()
      }
    }
  },
  methods: {
    query: function (type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.userModel, this.tablePage)
      orgApi.getOrgUsers(params, that.orgId).then(function (response) {
        that.tableData = response.data.rows
        that.tablePage.records = response.data.records
        that.loading = false
      })
    },
    // 重置
    reset: function () {
      this.userModel.userName = ''
      this.userModel.userCode = ''
      this.$refs['userQueryForm'].resetFields()
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('page')
    },
    close: function () {
      this.modelIsOpen = false
    }
  }

}
</script>
