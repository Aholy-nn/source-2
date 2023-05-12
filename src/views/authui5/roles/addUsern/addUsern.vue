<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-12 13:15:54
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fullscreen>
<z-search-panel>
    <z-form :label-width="100" label-position="right">
        <Row :gutter="10">
            <z-col span="8">
                <form-item :label="$t('userManage.title.orgName')">
                    <z-input  readonly v-model="orgTreeValue" @on-focus="drawerShow = true" clearable  @on-clear="orgClear"></z-input>
                        <z-drawer :title="$t('userManage.title.orgName')" :closable="false" v-model="drawerShow" transfer placement="left" width="300">
                            <z-vtree ref="userOrgTree" :option="options" :node-icon="true"  @select="onSelectTree" v-model="treeValue" :toggleOnSelect="false"></z-vtree>
                        </z-drawer>
                </form-item>
            </z-col>
        </Row>
    </z-form>
</z-search-panel>
<Row v-if="modelIsOpen" type="flex" class="m-t-10">
    <z-col span="11">
        <card>
            <p slot="title" style="margin: 10px 15px;">{{$t('userManage.title.unchooseUserList')}}</p>
            <z-form ref="addModel" :model="addModel" :label-width="50" label-position="right">
                <Row :gutter="10">
                    <z-col span="8">
                        <form-item :label="$t('userManage.title.userName')">
                            <z-input v-model="addModel.userName"></z-input>
                        </form-item>
                    </z-col>
                    <z-col span="8">
                            <form-item :label="$t('userManage.title.userCode')">
                            <z-input v-model="addModel.userCode"></z-input>
                        </form-item>
                    </z-col>
                    <z-col span="8">
                        <z-button type="primary" style="margin-left: 8px;margin-bottom:5px;" @click="addQuery">{{$t('common.button.search')}}</z-button>
                        <z-button type="primary" ghost style="margin-left: 8px;margin-bottom:5px;" @click="addReset">{{$t('common.button.reset')}}</z-button>
                    </z-col>
                </Row>
            </z-form>
            <!-- 表格 -->
            <z-list-panel class="m-t-15">
                <vxe-table
                    ref="addTable"
                    border
                    row-id="id"
                    highlight-current-row
                    :loading="addLoading"
                    :data="addData"
                    :checkbox-config="{trigger: 'row', highlight: true, range: true,checkMethod:checkMethod}"
                    max-height="400px"
                    align='center'>
                    <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
                    <vxe-table-column type="checkbox" width="60"></vxe-table-column>
                    <vxe-table-column field="userId" title="用户ID" :visible="false"></vxe-table-column>
                    <vxe-table-column field="orgId" title="组织ID" :visible="false"></vxe-table-column>
                    <vxe-table-column field="userCode" title="用户代码"></vxe-table-column>
                    <vxe-table-column field="userName" title="用户名称"></vxe-table-column>
                    <vxe-table-column field="orgNm" title="所属组织"></vxe-table-column>
                </vxe-table>
                <vxe-pager
                size = "small"
                :loading="addLoading"
                :current-page="addTablePage.page"
                :page-size="addTablePage.rows"
                :total="addTablePage.records"
                :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                @page-change="addPageChange">
                </vxe-pager>
            </z-list-panel>
        </card>
    </z-col>
    <z-col span="2" class="m-t-100">
        <z-button type="primary" style="width:60px;display:block;margin: auto;margin-top:10px;" @click="addUser"><Icon type="chevron-right" ></Icon><Icon type="chevron-right"></Icon></z-button>
        <z-button type="primary" style="width:60px;display:block;margin: auto;margin-top:10px;" @click="deleteUser"><Icon type="chevron-left" ></Icon><Icon type="chevron-left"></Icon></z-button>
    </z-col>
    <z-col span="11">
        <card>
            <p slot="title" style="margin: 10px 15px;">{{$t('userManage.title.chooseUserList')}}</p>
            <z-form ref="listModel" :model="listModel" :label-width="50" label-position="right">
                <Row :gutter="10">
                    <z-col span="8">
                        <form-item :label="$t('userManage.title.userName')">
                            <z-input v-model="listModel.userName"></z-input>
                        </form-item>
                    </z-col>
                    <z-col span="8">
                            <form-item :label="$t('userManage.title.userCode')">
                            <z-input v-model="listModel.userCode"></z-input>
                        </form-item>
                    </z-col>
                    <z-col span="8">
                        <z-button type="primary" style="margin-left: 8px;margin-bottom:5px;" @click="listQuery">{{$t('common.button.search')}}</z-button>
                        <z-button type="primary" ghost style="margin-left: 8px;margin-bottom:5px;" @click="listReset">{{$t('common.button.reset')}}</z-button>
                    </z-col>
                </Row>
            </z-form>
            <!-- 表格 -->
            <z-list-panel class="m-t-15">
                <vxe-table
                    ref="listTable"
                    border
                    row-id="id"
                    highlight-current-row
                    :loading="listLoading"
                    :data="listData"
                    :checkbox-config="{trigger: 'row', highlight: true, range: true}"
                    max-height="400px"
                    align='center'>
                    <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
                    <vxe-table-column type="checkbox" width="60"></vxe-table-column>
                    <vxe-table-column field="userId" :title="$t('userManage.title.userId')" :visible="false"></vxe-table-column>
                    <vxe-table-column field="orgId" :title="$t('userManage.title.orgId')" :visible="false"></vxe-table-column>
                    <vxe-table-column field="userCode" :title="$t('userManage.title.userCode')"></vxe-table-column>
                    <vxe-table-column field="userName" :title="$t('userManage.title.userName')"></vxe-table-column>
                    <vxe-table-column field="orgNm" :title="$t('userManage.title.orgName')"></vxe-table-column>
                </vxe-table>
                <vxe-pager
                size = "small"
                :loading="listLoading"
                :current-page="listTablePage.page"
                :page-size="listTablePage.rows"
                :total="listTablePage.records"
                :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                @page-change="listPageChange">
                </vxe-pager>
            </z-list-panel>
        </card>
    </z-col>
</Row>
<div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" ghost icon="close" @click="close">{{$t('common.button.close')}}</z-button>
  </div>
</z-modal>
</template>
<script>

import rolesApi from '../api/api.js'
import 'xe-utils'
export default {
  name: 'addUser',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      drawerShow: false,
      treeValue: '',
      orgTreeValue: '',
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        getDatas: this.getDatas
      },
      // 选择用户
      addModel: {
        userName: '',
        userCode: '',
        orgCd: ''
      },
      // 表格
      addLoading: false,
      addData: [],
      addTablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      // 已添加用户
      listModel: {
        userName: '',
        userCode: '',
        orgCd: ''

      },
      roleId: '',
      // 表格
      listLoading: false,
      listData: [],
      listTablePage: {
        page: 1,
        rows: 10,
        records: 0
      }
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
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        this.doQuery()
      }
    }
  },
  methods: {
    getDatas: function (parent, resolve) {
      setTimeout(() => {
        let params = {}
        if (!parent) {
          params = {}
        } else {
          params = {id: parent.id, name: parent.name, type: 'org', otherParam: 'zTreeAsyncTest'}
        }
        rolesApi.getUserOrgTree(params).then(function (response) {
          let data = response.data
          resolve(data)
        })
      }, 100)
    },
    doQuery: function () {
      this.listQuery()
      this.addQuery()
    },
    // 禁用admin
    checkMethod: function ({row}) {
      if (row.userCode === 'admin') {
        return false
      } else {
        return true
      }
    },
    onSelectTree: function () {
      let selected = this.$refs['userOrgTree'].getSelect()
      this.orgTreeValue = selected.name
      this.listModel.orgCd = selected.orgCode
      this.addModel.orgCd = selected.orgCode
      this.drawerShow = false
      this.doQuery()
    },
    orgClear: function () {
      this.orgTreeValue = ''
      this.listModel.orgCd = ''
      this.addModel.orgCd = ''
      this.doQuery()
    },
    // 添加
    addUser: function () {
      let addTable = this.$refs['addTable']
      let rows = addTable.getCheckboxRecords()
      if (rows.length === 0) {
        this.$Message.info(this.$t('common.tips.chooseLeastOneRecord'))
        return
      }
      let that = this
      that.$Modal.confirm({
        title: that.$t('common.title.confirm'),
        content: that.$t('common.tips.confirmAdd'),
        onOk: function () {
          setTimeout(function () {
            let data = []
            if (rows.length !== 0) {
              for (let i = 0; i < rows.length; i++) {
                let obj = {
                  roleId: that.roleId,
                  userId: rows[i].userId,
                  actionType: 'add'
                }
                data.push(obj)
              }
            }
            rolesApi.changeBatch(data).then(function (response) {
              if (response.data.code === '01') {
                that.doQuery()
                that.$Message.success(that.$t('common.messsage.addSuccess'))
              } else {
                that.$Message.error(that.$t('common.messsage.addFail'))
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 删除
    deleteUser: function () {
      let listTable = this.$refs['listTable']
      let rows = listTable.getCheckboxRecords()
      if (rows.length === 0) {
        this.$Message.info(this.$t('common.tips.chooseLeastOneRecord'))
        return
      }
      let that = this
      that.$Modal.confirm({
        title: that.$t('common.title.confirm'),
        content: that.$t('common.tips.confirmDelete'),
        onOk: function () {
          setTimeout(function () {
            let data = []
            if (rows.length !== 0) {
              for (let i = 0; i < rows.length; i++) {
                let obj = {
                  roleId: that.roleId,
                  userId: rows[i].userId,
                  actionType: 'delete'
                }
                data.push(obj)
              }
            }
            rolesApi.changeBatch(data).then(function (response) {
              if (response.data.code === '01') {
                that.doQuery()
                that.$Message.success(that.$t('common.messsage.delSuccess'))
              } else {
                that.$Message.error(that.$t('common.messsage.delFail'))
              }
            }).catch(function (error) {
              console.log(error)
            })
          }, 500)
        }
      })
    },
    // 未添加
    addQuery: function () {
      let that = this
      this.waitLoading = true
      this.addModel.roleId = this.roleId
      let params = Object.assign(this.addModel, this.addTablePage)
      rolesApi.roleUserWaitList(params).then(function (response) {
        that.addData = response.data.rows
        that.addTablePage.records = response.data.records
        that.waitLoading = false
      })
    },
    addReset: function () {
      this.addModel.userCode = ''
      this.addModel.userName = ''
    },
    addPageChange: function ({ currentPage, pageSize }) {
      this.addTablePage.page = currentPage
      this.addTablePage.rows = pageSize
      this.addQuery()
    },
    //  已添加
    listQuery: function () {
      let that = this
      this.waitLoading = true
      this.listModel.roleId = this.roleId
      let params = Object.assign(this.listModel, this.listTablePage)
      rolesApi.roleUserList(params).then(function (response) {
        that.listData = response.data.rows
        that.listTablePage.records = response.data.records
        that.waitLoading = false
      })
    },
    listReset: function () {
      this.listModel.userCode = ''
      this.listModel.userName = ''
    },
    listPageChange: function ({ currentPage, pageSize }) {
      this.listTablePage.page = currentPage
      this.listTablePage.rows = pageSize
      this.listQuery()
    },
    handleSubmit: function () {
    },
    close: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
<style>
.zvu-drawer-wrap{
    z-index: 2000 !important;
}
.zvu-drawer-mask{
    z-index: 2000 !important;
}
</style>
