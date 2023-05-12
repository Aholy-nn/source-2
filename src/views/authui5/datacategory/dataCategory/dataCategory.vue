<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:38:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-row v-if="multiApp" :gutter="15" class="m-t-5">
            <z-col span="12">
                <label class="ilead-label-just-right">>选择应用: </label>
                <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
                    <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
                </z-select>
            </z-col>
        </z-row>
    <z-row :gutter="20"  v-if="!multiApp || showDataCate">
      <z-col span="8" :style="{height:height + 'px'}">
        <vue-scroll :ops="ops">
        <z-card dis-hover style="padding:10px">
          <z-vtree ref="dataCategoryTree" :option="options" :node-icon="true" choose-mode="some" v-model="value" :filterable="true" :right-menu="rightMenu" @onRightClick="onRightClick"  @select="onSelectTree" :is-right-menu="true" :toggleOnSelect="false"></z-vtree>
        </z-card>
        </vue-scroll>
      </z-col>
      <z-col span="16">
        <z-card dis-hover style="padding:10px">
          <z-list-panel>
            <div slot="title">数据类型属性列表</div>
            <div slot="buttons">
                <z-button type="text" icon="plus-round" @click="add">添加</z-button>
            </div>
            <!-- 表格 -->
            <vxe-table
              ref="childTable"
              border
              row-id="id"
              size="medium"
              show-header-overflow
              show-overflow
              :loading="loading"
              align="center"
              :data="tableData">
              <vxe-table-column type="seq" title="序号" width="40"></vxe-table-column>
              <vxe-table-column field="attributeCode" title="属性代码" sortable></vxe-table-column>
              <vxe-table-column field="attributeName" title="属性名称"></vxe-table-column>
              <vxe-table-column field="createBy" title="创建人"></vxe-table-column>
              <vxe-table-column field="createDate" title="创建时间" :formatter="formatTime"></vxe-table-column>
              <vxe-table-column field="categoryId" title="数据类型ID" :visible="false"></vxe-table-column>
              <vxe-table-column field="attributeId" title="属性编码" :visible="false"></vxe-table-column>
              <vxe-table-column title="操作">
                <template v-slot="{ row, seq }">
                  <a class="link" @click="edit(row, seq)">编辑</a>
                  <div class="divider"></div>
                  <a class="link" @click="delBatch(row, seq)">删除</a>
                </template>
              </vxe-table-column>
            </vxe-table>
            <vxe-pager
              border
              show-header-overflow
              show-overflow
              :loading="loading"
              :current-page="tablePage.page"
              :page-size="tablePage.rows"
              :total="tablePage.records"
              :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
              @page-change="handlePageChange"
              >
            </vxe-pager>
        </z-list-panel>
        </z-card>
      </z-col>
  </z-row>
  <!-- 弹出 -->
  <edit-category ref="editCategory" :title="treeModelTitle" :model-type="treeModelType"></edit-category>
  <edit-attribute ref="editAttribute" :title="tableModelTitle" :model-type="tableModelType"></edit-attribute>
</div>
</template>
<script>
import XEUtils from 'xe-utils'
import '@/components/framework/vxe-table'
import dataCategoryApi from '../api/api.js'
import editCategory from '../editCategory/editCategory'
import editAttribute from '../editAttribute/editAttribute'
import Config from '@/config/index.js'
export default {
  name: 'dataCategory',
  components: {
    'edit-category': editCategory,
    'edit-attribute': editAttribute
  },
  data: function () {
    return {
      height: '',
      // 滚动条配置
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          keepShow: true,
          background: '#2163f0',
          opacity: '0.5'
        }
      },
      // 树
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        getDatas: this.getDatas
      },
      showDataCate: false,
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      // 是否多应用
      multiApp: Config.multiApp,
      value: null,
      rightMenu: [],
      selected: '',
      addType: false,
      treeModelTitle: '',
      treeModelType: '',
      newNode: {},
      // 列表
      loading: false,
      tableData: [],
      tablePage: {
        page: 1,
        rows: 10,
        records: 0
      },
      tableModelTitle: '',
      tableModelType: ''
    }
  },
  created: function () {
    if (!this.multiApp) {
      this.query()
    }
  },
  watch: {
    newNode: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      let selectData = this.$refs['dataCategoryTree'].getSelectData()
      let liEl = document.getElementById(selected.id)
      // 如果从未展开过，需要展开按钮再添加
      if (!liEl.classList.contains('zvu-tree-li-opened') && !(selectData.children && selectData.children.length > 0) && selectData.isParent) {
        let arrowEl = liEl.children[0].getElementsByClassName('zvu-icon-ios-arrow-forward')
        arrowEl[0].click()
        this.addType = true
      } else {
        this.addFunc()
      }
    }
  },
  mounted: function () {
    let heigth = document.getElementById('sidebarMenu').children[0].clientHeight
    this.height = (heigth - 140)
  },
  methods: {
    getDatas: function (parent, resolve) {
      let that = this
      if (!this.multiApp || this.appModel.appId !== '') {
        setTimeout(() => {
          let params = {}
          if (!parent) {
            params = {otherParam: 'zTreeAsyncTest'}
          } else {
            params = {id: parent.id, name: parent.name, otherParam: 'zTreeAsyncTest'}
          }
          if (this.multiApp) {
            let appId = this.appModel.appId
            dataCategoryApi.getCategoryTree(params, appId).then(function (response) {
              let data = response.data
              resolve(data)
              if (that.addType) {
              // that.addFunc()
                that.$refs.dataCategoryTree.updateSelect(that.newNode.id)
                that.addType = false
              }
            })
          } else {
            dataCategoryApi.getCategoryTree(params).then(function (response) {
              let data = response.data
              resolve(data)
              if (that.addType) {
              // that.addFunc()
                that.$refs.dataCategoryTree.updateSelect(that.newNode.id)
                that.addType = false
              }
            })
          }
        }, 100)
      }
    },
    // 右键
    onRightClick: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      if (!selected) {
        this.rightMenu = []
      } else if (selected.id === '1000001') {
        this.rightMenu = []
      } else if (selected.id === '1000002') {
        this.rightMenu = [{
          text: '增加数据类型',
          func: this.addClick
        }]
      } else {
        this.rightMenu = [{
          text: '编辑数据类型',
          func: this.editFunc
        },
        {
          text: '删除数据类型',
          func: this.delFunc
        }]
      }
    },
    // 树添加
    addClick: function () {
      let ref = this.$refs.editCategory
      ref.handleReset()
      this.treeModelTitle = '新增数据类型'
      this.treeModelType = 'add'
      ref.modelIsOpen = true
      ref.appModel.appId = this.appModel.appId
    },
    // 添加方法
    addFunc: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      this.$refs.dataCategoryTree.appendTreeItem(selected.id, this.newNode)
      this.$refs.dataCategoryTree.updateSelect(this.newNode.id)
    },
    // 树编辑
    editFunc: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      let that = this
      if (selected) {
        let categoryId = selected.id
        dataCategoryApi.queryCategoryInfo(categoryId).then(function (response) {
          let data = response.data.data
          let ref = that.$refs.editCategory
          ref.editCategoryModel.categoryId = data.categoryId
          ref.editCategoryModel.categoryName = data.categoryName
          ref.editCategoryModel.categoryUrl = data.categoryUrl
          ref.editCategoryModel.categoryDesc = data.categoryDesc
          ref.appModel.appId = that.appModel.appId
          ref.modelIsOpen = true
          that.treeModelTitle = '编辑数据类型'
          that.treeModelType = 'edit'
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    // 树删除
    delFunc: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      let that = this
      if (!selected) {
        this.$Message.error('请选择节点')
        return
      }
      this.$Modal.confirm({
        title: '确认',
        content: '确认删除？',
        onOk: function () {
          setTimeout(function () {
            if (selected.id !== undefined) {
              let param = {'categoryId': selected.id}
              dataCategoryApi.queryAttrInfo(param).then(function (response) {
                let attrCount = response.data.records
                if (attrCount > 0) {
                  that.$Modal.confirm({
                    title: '确认',
                    content: '要删除的数据类型下含有已创建的属性，如果删除将连同其属性值一起删掉。\n\n请确认！',
                    onOk: function () {
                      setTimeout(function () {
                        dataCategoryApi.delCategory(selected.id).then(function (response) {
                          that.$refs.dataCategoryTree.removeTreeItem(selected.id)
                          // that.$refs['dataCategoryTree'].refresh()
                          if (response.data.code === '01') {
                            that.query()
                            that.$Message.success('删除成功')
                          } else {
                            that.$Message.error('删除失败')
                          }
                        }).catch(function (error) {
                          console.log(error)
                        })
                      }, 500)
                    }
                  })
                } else {
                  dataCategoryApi.delCategory(selected.id).then(function (response) {
                    that.$refs.dataCategoryTree.removeTreeItem(selected.id)
                    // that.$refs['dataCategoryTree'].refresh()
                    that.$Message.success(response.data.msg)
                    that.query()
                  }).catch(function (error) {
                    console.log(error)
                  })
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }, 500)
        }
      })
    },
    // 树节点点击
    onSelectTree: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      this.query(selected.id)
    },
    // 表查询
    query: function (id, type) {
      let that = this
      this.loading = true
      if (type !== 'page') {
        this.tablePage.page = 1
      }
      let params = Object.assign(this.tablePage)
      if (id) {
        let obj = {categoryId: id}
        params = Object.assign(obj, this.tablePage)
      }
      if (this.multiApp) {
        let appId = this.appModel.appId
        dataCategoryApi.queryTable(params, appId).then(function (response) {
          that.tableData = response.data.rows
          that.tablePage.records = response.data.records
          that.loading = false
        })
      } else {
        dataCategoryApi.queryTable(params).then(function (response) {
          that.tableData = response.data.rows
          that.tablePage.records = response.data.records
          that.loading = false
        })
      }
    },
    add: function () {
      let selected = this.$refs['dataCategoryTree'].getSelect()
      if (selected) {
        if ((selected.id).indexOf('1000002') === 0) {
          this.$Modal.info({
            title: '信息',
            content: '不能为非全局节点增加数据类型属性！'
          })
          return
        }
        let ref = this.$refs.editAttribute
        this.tableModelTitle = '新增属性'
        this.tableModelType = 'add'
        ref.handleReset()
        ref.editAttributeModel.categoryId = selected.id
        ref.appModel.appId = this.appModel.appId
        ref.modelIsOpen = true
      } else {
        this.$Modal.info({
          title: '信息',
          content: '请从左侧树点击选择一个数据类型！'
        })
      }
    },
    edit: function (data) {
      let ref = this.$refs.editAttribute
      this.tableModelTitle = '编辑属性'
      this.tableModelType = 'edit'
      ref.editAttributeModel.categoryId = data.categoryId
      ref.editAttributeModel.attributeId = data.attributeId
      ref.editAttributeModel.attributeCode = data.attributeCode
      ref.editAttributeModel.attributeName = data.attributeName
      ref.appModel.appId = this.appModel.appId
      ref.modelIsOpen = true
    },
    delBatch: function (data) {
      let that = this
      let selected = this.$refs['dataCategoryTree'].getSelect()
      setTimeout(function () {
        dataCategoryApi.attrInfoDel(data.attributeId).then(function (response) {
          that.$Message.success(response.data.msg)
          that.query(selected.id)
        }).catch(function (error) {
          console.log(error)
        })
      }, 500)
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.page = currentPage
      this.tablePage.rows = pageSize
      this.query('', 'page')
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
      this.showDataCate = true
      // 多应用模式下，在第一次进入功能时，appId为空，dataCategoryTree还未进行初始化，调用refresh方法会报错
      if (this.$refs.dataCategoryTree) {
        this.$refs.dataCategoryTree.refresh()
      }
    },
    appClear: function () {
      this.showDataCate = false
    },
    formatTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    }
  }
}
</script>
