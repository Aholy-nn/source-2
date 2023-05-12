<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 15:20:44
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fullscreen footer-hide>
    <z-search-panel>
        <z-form  ref="authResModel" :model="authResModel" :label-width="100" label-position="right">
            <Row :gutter="10">
                <z-col span="7">
                    <form-item :label="$t('userGroupn.label.group')"  prop="groupNm">
                        <z-input v-model="authResModel.groupNm" readonly></z-input>
                    </form-item>
                </z-col>
                <z-col v-if="multiApp" span="7">
                    <form-item :label="$t('common.button.chooseApp')" prop="appId">
                        <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable>
                            <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
                        </z-select>
                    </form-item>
                </z-col>
                <z-col span="7">
                    <form-item :label="$t('resType.label.resType')" prop="resType">
                        <z-select v-model="authResModel.resType" :label-in-value="true" @on-change="resChange" clearable>
                            <z-option v-for="item in resTypeList" :value="item.code" :key="item.code">{{ item.name }}</z-option>
                        </z-select>
                    </form-item>
                </z-col>
            </Row>
        </z-form>
    </z-search-panel>
    <Row v-if="modelIsOpen" type="flex" class="m-t-10">
        <z-col span="11">
            <card>
                <p slot="title" style="margin: 10px 15px;">{{$t('common.title.wait')}}{{authResModel.resTypeNm}}</p>
                <z-form ref="waitModel" :model="waitModel" :label-width="50" label-position="right">
                    <Row :gutter="10">
                        <z-col span="8">
                            <form-item :label="$t('common.label.code')">
                                <z-input v-model="waitModel.code" clearable></z-input>
                            </form-item>
                        </z-col>
                        <z-col span="8">
                                <form-item :label="$t('common.label.name')">
                                <z-input v-model="waitModel.name" clearable></z-input>
                            </form-item>
                        </z-col>
                        <z-col span="8">
                            <z-button type="primary" icon="search" style="margin-left: 8px;margin-bottom:5px;" @click="doQueryWait">{{$t('common.button.search')}}</z-button>
                            <z-button type="primary" ghost icon="refresh" style="margin-left: 8px;margin-bottom:5px;" @click="doResetWait">{{$t('common.button.reset')}}</z-button>
                        </z-col>
                    </Row>
                </z-form>
                <!-- 表格 -->
                <z-list-panel class="m-t-15">
                    <vxe-table
                    ref="waitList"
                    border
                    row-id="id"
                    highlight-current-row
                    show-header-overflow
                    show-overflow
                    :loading="waitLoading"
                    :data="waitListData"
                    :checkbox-config="{trigger: 'row', highlight: true, range: true}"
                    align='center'>
                    <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
                    <vxe-table-column type="checkbox" width="60"></vxe-table-column>
                    <vxe-table-column field="code" :title="$t('common.title.code')"></vxe-table-column>
                    <vxe-table-column field="name" :title="$t('common.title.name')"></vxe-table-column>
                    <vxe-table-column field="supCode" :title="$t('common.title.supCode')" :visible="false"></vxe-table-column>
                    <vxe-table-column field="supName" :title="$t('common.title.supName')"></vxe-table-column>
                    </vxe-table>
                    <vxe-pager
                    size = "small"
                    :loading="waitLoading"
                    :current-page="waitListPage.page"
                    :page-size="waitListPage.rows"
                    :total="waitListPage.records"
                    :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                    @page-change="WaitPageChange">
                    </vxe-pager>
                </z-list-panel>
            </card>
        </z-col>
        <z-col span="2" class="m-t-100">
            <z-button type="primary" style="width:60px;display:block;margin: auto;margin-top:10px;" @click="addSelect"><Icon type="chevron-right" ></Icon><Icon type="chevron-right"></Icon></z-button>
            <z-button type="primary" style="width:60px;display:block;margin: auto;margin-top:10px;" @click="deleteSelect"><Icon type="chevron-left" ></Icon><Icon type="chevron-left"></Icon></z-button>
        </z-col>
        <z-col span="11">
            <card>
                <p slot="title" style="margin: 10px 15px;">{{$t('common.title.select')}}{{authResModel.resTypeNm}}</p>
                <z-form  ref="selectModel" :model="selectModel" :label-width="50" label-position="right">
                    <Row :gutter="10">
                        <z-col span="8">
                            <form-item :label="$t('common.label.code')">
                                <z-input v-model="selectModel.code" clearable></z-input>
                            </form-item>
                        </z-col>
                        <z-col span="8">
                                <form-item :label="$t('common.label.name')">
                                <z-input v-model="selectModel.name" clearable></z-input>
                            </form-item>
                        </z-col>
                        <z-col span="8">
                            <z-button type="primary" icon="search" style="margin-left: 8px;margin-bottom:5px;" @click="doQuerySelect">{{$t('common.button.search')}}</z-button>
                            <z-button type="primary" ghost icon="refresh" style="margin-left: 8px;margin-bottom:5px;" @click="doResetSelect">{{$t('common.button.reset')}}</z-button>
                        </z-col>
                    </Row>
                </z-form>
                <!-- 表格 -->
                <z-list-panel class="m-t-15">
                    <vxe-table
                    ref="selectList"
                    border
                    row-id="id"
                    highlight-current-row
                    show-header-overflow
                    show-overflow
                    :loading="selectLoading"
                    :data="selectListData"
                    :checkbox-config="{trigger: 'row', highlight: true, range: true}"
                    align='center'>
                    <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
                    <vxe-table-column type="checkbox" width="60"></vxe-table-column>
                    <vxe-table-column field="code" :title="$t('common.title.code')"></vxe-table-column>
                    <vxe-table-column field="name" :title="$t('common.title.name')"></vxe-table-column>
                    <vxe-table-column field="supCode" :title="$t('common.title.supCode')" :visible="false"></vxe-table-column>
                    <vxe-table-column field="supName" :title="$t('common.title.supName')"></vxe-table-column>
                    </vxe-table>
                    <vxe-pager
                    size = "small"
                    :loading="selectLoading"
                    :current-page="selectListPage.page"
                    :page-size="selectListPage.rows"
                    :total="selectListPage.records"
                    :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                    @page-change="selectPageChange">
                    </vxe-pager>
                </z-list-panel>
            </card>
        </z-col>
    </Row>
</z-modal>
</template>
<script>

import resourceAPI from './api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'authResource',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      authResModel: {
        resType: '', // 资源类型编码
        resTypeNm: '', // 资源类型名称
        groupId: '', // 用户组主键
        groupNm: '', // 用户组名称
        ifContains: '1' // 是否包含-是
      },
      groupId: '',
      waitModel: {
        code: '',
        name: ''
      },
      selectModel: {
        code: '',
        name: ''
      },
      resTypeList: this.getResTypeList(),
      // 表格
      waitListData: [],
      waitListPage: {
        page: 1,
        rows: 10,
        records: 0
      },
      waitLoading: false,
      selectListData: [],
      selectListPage: {
        page: 1,
        rows: 10,
        records: 0
      },
      selectLoading: false,
      // 是否多应用
      multiApp: Config.multiApp
    }
  },
  props: {
    title: {
      type: String
    },
    modelType: {
      type: String
    }
  },
  methods: {
    getAppList: function () {
      let appList = this.$store.state.sysAppInfos
      return appList
    },
    appClear: function () {
      this.clearModel()
      this.getResTypeList()
    },
    appChange: function () {
      let appId = this.appModel.appId
      if (!appId) {
        return
      }
      let that = this
      this.$nextTick(function () {
        that.clearModel()
        that.getResTypeList()
      })
    },
    // 切换资源类型
    resChange: function (item) {
      let that = this
      if (item && item.label) {
        that.authResModel.resTypeNm = item.label
        this.doQuery()
      }
    },
    // 取得资源类型
    getResTypeList: function () {
      let that = this
      setTimeout(function () {
        let appId = that.appModel.appId
        if (appId && appId !== '') {
          resourceAPI.resTypeInfoQuery(appId).then(function (response) {
            that.resTypeList = response.data.data
            // that.authResModel.resType = response.data.data[0].code
            // that.resChange(response.data.data[0])
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          resourceAPI.resTypeInfoQuery().then(function (response) {
            that.resTypeList = response.data.data
            // that.authResModel.resType = response.data.data[0].code
            // that.resChange(response.data.data[0])
          }).catch(function (error) {
            console.log(error)
          })
        }
      }, 500)
      return []
    },
    clearModel: function () {
      this.authResModel.resType = ''
    },
    /**
     * 查询-双列表
     */
    doQuery: function () {
      this.doQueryWait()
      this.doQuerySelect()
    },
    /**
     * 待选列表
     */
    doQueryWait: function (type) {
      let that = this
      this.waitLoading = true
      if (type !== 'page') {
        this.waitListPage.page = 1
      }
      let param = {
        'code': that.waitModel.code,
        'name': that.waitModel.name,
        'groupId': that.groupId,
        'resTypeCode': that.authResModel.resType,
        'ifContains': that.authResModel.ifContains
      }
      let params = Object.assign(param, this.waitListPage)
      resourceAPI.queryWaitList(params).then(function (response) {
        that.waitListData = response.data.rows
        that.waitListPage.records = response.data.records
        that.waitLoading = false
      })
    },
    // 分页
    WaitPageChange ({ currentPage, pageSize }) {
      this.waitListPage.page = currentPage
      this.waitListPage.rows = pageSize
      this.doQueryWait('page')
    },
    // 重置
    doResetWait: function () {
      this.waitModel.code = ''
      this.waitModel.name = ''
    },
    /**
     * 已选列表
     */
    doQuerySelect: function (type) {
      let that = this
      this.selectLoading = true
      if (type !== 'page') {
        this.selectListPage.page = 1
      }
      let param = {
        'code': that.selectModel.code,
        'name': that.selectModel.name,
        'groupId': that.groupId,
        'resTypeCode': that.authResModel.resType,
        'ifContains': that.authResModel.ifContains
      }
      let params = Object.assign(param, this.selectListPage)
      resourceAPI.querySelectList(params).then(function (response) {
        that.selectListData = response.data.rows
        that.selectListPage.records = response.data.records
        that.selectLoading = false
      })
    },
    // 重置
    doResetSelect: function () {
      this.selectModel.code = ''
      this.selectModel.name = ''
    },
    selectPageChange ({ currentPage, pageSize }) {
      this.selectListPage.page = currentPage
      this.selectListPage.rows = pageSize
      this.doQuerySelect('page')
    },
    addSelect: function () {
      let that = this
      let data = []
      let table = this.$refs['waitList']
      let rows = table.getCheckboxRecords()
      if (rows.length === 0) {
        this.$Message.info(this.$t('common.tips.chooseLeastOneRecord'))
        return
      }
      for (let i = 0; i < rows.length; i++) {
        let obj = {
          'resId': rows[i].code,
          'groupId': that.groupId,
          'resTypeCode': that.authResModel.resType,
          'ifContains': that.authResModel.ifContains
        }
        data.push(obj)
      }
      // 执行增加授权
      resourceAPI.addSelect(data).then(function (response) {
        if (response.data.code === '1') {
          // 双列表查询
          that.doQuery()
        } else {
          that.$Modal.error({
            title: that.$t('userGroupn.tips.addAuthResourceFail'),
            content: response.data.msg,
            onOk: function () {
              // 双列表查询
              that.doQuery()
            }
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    deleteSelect: function () {
      let that = this
      let data = []
      let table = this.$refs['selectList']
      let rows = table.getCheckboxRecords()
      if (rows.length === 0) {
        this.$Message.info(this.$t('common.tips.chooseLeastOneRecord'))
        return
      }
      for (let i = 0; i < rows.length; i++) {
        let obj = {
          'resId': rows[i].code,
          'groupId': that.groupId,
          'resTypeCode': that.authResModel.resType,
          'ifContains': that.authResModel.ifContains
        }
        data.push(obj)
      }
      // 执行增加授权
      resourceAPI.delSelect(data).then(function (response) {
        if (response.data.code === '1') {
          // 双列表查询
          that.doQuery()
        } else {
          that.$Modal.error({
            title: that.$t('userGroupn.tips.addAuthResourceFail'),
            content: response.data.msg,
            onOk: function () {
              // 双列表查询
              that.doQuery()
            }
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    reset: function () {
      this.authResModel.groupNm = ''
      this.appModel.appId = ''
      this.authResModel.resType = ''
    }
  }
}
</script>
