<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-04-13 12:24:19
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <div class="m-t-20">
      <div class="desc">
        <header>全表搜索</header>
        <p>表格搜索功能，非常简单就可以实现表格内容搜索</p>
      </div>
        <vxe-toolbar>
        <template v-slot:buttons>
          <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索"></vxe-input>
        </template>
      </vxe-toolbar>
      <vxe-table
        border
        height="300"
        :data="list">
        <vxe-table-column type="seq" width="80"></vxe-table-column>
        <vxe-table-column field="name" title="Name">
          <template v-slot="{ row }">
            <span v-html="row.name"></span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="role" title="Role">
          <template v-slot="{ row }">
            <span v-html="row.role"></span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="age" title="Age">
          <template v-slot="{ row }">
            <span v-html="row.age"></span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="address" title="Address">
          <template v-slot="{ row }">
            <span v-html="row.address"></span>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
     <div class="m-t-20">
      <div class="desc">
        <p>树表格搜索功能，非常简单就可以实现树表格内容搜索</p>
      </div>
      <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-input v-model="filterName1" type="search" placeholder="试试全表搜索"></vxe-input>
          </template>
        </vxe-toolbar>
        <vxe-table
          :data="list1"
          :tree-config="{children: 'children', expandAll: !!filterName1}">
          <vxe-table-column type="seq" width="160" title="序号" tree-node></vxe-table-column>
          <vxe-table-column field="name" title="Name">
            <template v-slot="{ row }">
              <span v-html="row.name"></span>
            </template>
          </vxe-table-column>
          <vxe-table-column field="size" title="Size">
            <template v-slot="{ row }">
              <span v-html="row.size"></span>
            </template>
          </vxe-table-column>
          <vxe-table-column field="type" title="Type">
            <template v-slot="{ row }">
              <span v-html="row.type"></span>
            </template>
          </vxe-table-column>
          <vxe-table-column field="date" title="Date">
            <template v-slot="{ row }">
              <span v-html="row.date"></span>
            </template>
          </vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
      <div class="desc">
        <header>键盘移动高亮</header>
      </div>
         <vxe-table
          border
          resizable
          highlight-current-row
          :data="tableData"
          :keyboard-config="{isArrow: true}">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
      </div>
      <div class="m-t-20">
        <div class="desc">
          <header>多页签切换</header>
        </div>
        <p>
          <vxe-radio v-model="selectTab" name="xtabs" label="tab1">页签1</vxe-radio>
          <vxe-radio v-model="selectTab" name="xtabs" label="tab2">页签2</vxe-radio>
          <vxe-radio v-model="selectTab" name="xtabs" label="tab3">页签3</vxe-radio>
        </p>
        <div v-show="selectTab === 'tab1'">
          <vxe-table
            border
            :sync-resize="selectTab === 'tab1'"
            :data="tableData">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
          </vxe-table>
        </div>
        <div v-show="selectTab === 'tab2'">
          <vxe-table
            border
            :sync-resize="selectTab === 'tab2'"
            :data="tableData">
            <vxe-table-column type="radio" width="60"></vxe-table-column>
            <vxe-table-column field="role" title="Rolw"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
            <vxe-table-column field="num" title="Num"></vxe-table-column>
            <vxe-table-column field="date12" title="Date"></vxe-table-column>
          </vxe-table>
        </div>
        <div v-show="selectTab === 'tab3'">
          <vxe-table
            border
            :sync-resize="selectTab === 'tab3'"
            :data="tableData">
            <vxe-table-column type="checkbox" width="60"></vxe-table-column>
            <vxe-table-column field="nickname" title="nickname"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
            <vxe-table-column field="date12" title="Date"></vxe-table-column>
            <vxe-table-column field="region" title="Region"></vxe-table-column>
            <vxe-table-column field="rate" title="Rate"></vxe-table-column>
          </vxe-table>
        </div>
      </div>
       <div class="m-t-20">
        <div class="desc">
          <header>分页</header>
        </div>
         <vxe-table
          border
          show-overflow
          row-id="id"
          :loading="loading"
          :data="tableData">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="rate" title="Rate"></vxe-table-column>
        </vxe-table>

        <vxe-pager
          background
          :loading="loading"
          :current-page="tablePage.currentPage"
          :page-size="tablePage.pageSize"
          :total="tablePage.totalResult"
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange">
        </vxe-pager>
       </div>
   </div>
</template>

<script>
import Vue from 'vue'
import Utils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import Data from './data.js'

Vue.use(VXETable)
export default {
  data () {
    return {
      filterName: '',
      filterName1: '',
      tableData: [],
      selectTab: 'tab1',
      loading: false,
      tablePage: {
        currentPage: 1,
        pageSize: 3,
        totalResult: 0
      }
    }
  },
  created () {
    this.tableData = Data.data
    this.tableData1 = Data.treeData
    // this.findList()
  },
  computed: {
    list () {
      let filterName = Utils.toString(this.filterName).trim().toLowerCase()
      if (filterName) {
        let filterRE = new RegExp(filterName, 'gi')
        let searchProps = ['name', 'role', 'age', 'address']
        let rest = this.tableData.filter(item => searchProps.some(key => Utils.toString(item[key]).toLowerCase().indexOf(filterName) > -1))
        return rest.map(row => {
          let item = Object.assign({}, row)
          searchProps.forEach(key => {
            item[key] = Utils.toString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
          return item
        })
      }
      return this.tableData
    },
    list1 () {
      let filterName1 = Utils.toString(this.filterName1).trim().toLowerCase()
      if (filterName1) {
        let filterRE = new RegExp(filterName1, 'gi')
        let options = { children: 'children' }
        let searchProps = ['name', 'size', 'type', 'date']
        let rest = Utils.searchTree(this.tableData1, item => searchProps.some(key => Utils.toString(item[key]).toLowerCase().indexOf(filterName1) > -1), options)
        Utils.eachTree(rest, item => {
          searchProps.forEach(key => {
            item[key] = Utils.toString(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          })
        }, options)
        return rest
      }
      return this.tableData1
    }

  },
  methods: {
    findList () {
      this.loading = true
      this.$ajax.doGet(`/api/user/page/list/${this.tablePage.pageSize}/${this.tablePage.currentPage}`, this.formData).then(response => {
        let { page, result } = response.data
        this.tableData = result
        this.tablePage.totalResult = page.totalResult
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage
      this.tablePage.pageSize = pageSize
      // this.findList()
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
