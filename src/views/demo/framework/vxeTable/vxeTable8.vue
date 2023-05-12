<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-26 11:15:10
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <div class="m-t-20">
      <div class="desc">
        <header>编辑表格</header>
        <header>手动触发、autoClear关闭默认的单元格清除激活行为</header>
      </div>
        <vxe-table
          ref="xTable"
          border
          resizable
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'manual', mode: 'row', autoClear: false}">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="role" title="Role" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'select', options: sexList}"></vxe-table-column>
          <vxe-table-column field="num6" title="Number" :edit-render="{name: 'input', attrs: {type: 'number'}}"></vxe-table-column>
          <vxe-table-column field="date12" title="Date" :edit-render="{name: 'input', attrs: {type: 'date'}}"></vxe-table-column>
          <vxe-table-column field="address" title="Address" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column title="操作">
            <template v-slot="{ row }">
              <template v-if="$refs.xTable.isActiveByRow(row)">
                <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
                <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
              </template>
              <template v-else>
                <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
              </template>
            </template>
          </vxe-table-column>
        </vxe-table>
      </div>
    <div class="m-t-20">
      <div class="desc">
        <header>点击触发(cell、row)、双击触发(cell、row)</header> </div>
        <vxe-table
          border
          resizable
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'dblclick', mode: 'row'}"
          @edit-actived="editActivedEvent"
          @edit-closed="editClosedEvent">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="role" title="Role" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'select', options: sexList}"></vxe-table-column>
          <vxe-table-column field="num6" title="Number" :edit-render="{name: 'input', attrs: {type: 'number'}}"></vxe-table-column>
          <vxe-table-column field="date12" title="Date" :edit-render="{name: 'input', attrs: {type: 'date'}}"></vxe-table-column>
        </vxe-table>
        </div>
    <div class="m-t-20">
      <div class="desc">
        <header>选中内容</header>
      </div>
          <vxe-table
          border
          resizable
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell'}">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input', autoselect: true}"></vxe-table-column>
          <vxe-table-column field="sex5" title="Sex" :edit-render="{name: 'select', optionGroups: sexGriupList}"></vxe-table-column>
          <vxe-table-column field="date13" title="Date" :edit-render="{name: 'input', attrs: {type: 'date'}, autoselect: true}"></vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
        <div class="desc">
          <header>插入数据</header>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent()">在第1行插入</vxe-button>
            <vxe-button @click="insertEvent(tableData[2])">在第3行插入并激活 Sex 单元格</vxe-button>
            <vxe-button @click="insertEvent(-1)">在最后行插入</vxe-button>
            <vxe-button @click="$refs.xTable1.removeSelecteds()">删除选中</vxe-button>
            <vxe-button @click="getInsertEvent()">保存</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          keep-source
          ref="xTable1"
          max-height="400"
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell'}">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" sortable :edit-render="{name: 'input', defaultValue: '默认的名字'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable :edit-render="{name: 'input', defaultValue: 18}"></vxe-table-column>
        </vxe-table>
      </div>
        <div class="m-t-20">
        <div class="desc">
          <header>插入数据</header>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent1()">在第1行插入</vxe-button>
            <vxe-button @click="$refs.xTable2.remove(tableData[1])">删除第2行</vxe-button>
            <vxe-button @click="$refs.xTable2.removeSelecteds()">删除选中</vxe-button>
            <vxe-button @click="getRemoveEvent()">获取删除</vxe-button>
            <vxe-button @click="getSelectionEvent1()">获取选中</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable2"
          border
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell'}">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
        </div>
         <div class="m-t-20">
        <div class="desc">
          <header>还原数据、禁用cell</header>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="$refs.xTable3.revertData()">还原全部</vxe-button>
            <vxe-button @click="$refs.xTable3.removeSelecteds()">删除选中</vxe-button>
          </template>
        </vxe-toolbar>
        <vxe-table
          ref="xTable3"
          border
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell', showStatus: true, activeMethod: activeCellMethod}" @edit-disabled="editDisabledEvent">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column title="操作">
            <template v-slot="{ row }">
              <vxe-button @click="$refs.xTable3.revertData(row)">还原</vxe-button>
            </template>
          </vxe-table-column>
        </vxe-table>
        </div>
          <div class="m-t-20">
        <div class="desc">
          <header>禁用编辑行</header>
        </div>
        <vxe-table
          border
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row', activeMethod: activeRowMethod1}"
          @edit-disabled="editDisabledEvent1">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="date12" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
        <vxe-table
          border
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row'}"
          @edit-actived="editActivedEvent2">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input', attrs: {disabled: isNameDisabled}}"></vxe-table-column>
          <vxe-table-column field="age" title="Age" :edit-render="{name: 'input', attrs: {disabled: isAgeDisabled}}"></vxe-table-column>
          <vxe-table-column field="date12" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
      </div>
        <div class="m-t-20">
        <div class="desc">
          <header>编辑状态</header>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent2()">新增</vxe-button>
            <vxe-button @click="$refs.xTable4.removeSelecteds()">删除选中</vxe-button>
            <vxe-button @click="getInsertEvent1">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent1">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent1">获取修改</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          ref="xTable4"
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="date3" title="Date" :formatter="formatDate"></vxe-table-column>
          <vxe-table-column title="操作" width="200">
            <template v-slot="{ row, rowIndex }">
              <template v-if="!row.date3">
                <vxe-button @click="saveEvent2(row)" :loading="row.loading">更新并替换新数据</vxe-button>
              </template>
              <template v-else-if="rowIndex % 2 === 0">
                <vxe-button @click="saveEvent(row)" :loading="row.loading">更新行数据</vxe-button>
              </template>
              <template v-else>
                <vxe-button type="primary" @click="saveEvent(row, 'name')" :loading="row.loading">更新 Name 列</vxe-button>
              </template>
            </template>
          </vxe-table-column>
        </vxe-table>
         </div>
   </div>
</template>

<script>
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import Data from './data.js'

Vue.use(VXETable)
export default {
  data () {
    return {
      tableData: [],
      sexList: [
        {label: '', spell: '', value: '', value2: null, val: ''},
        {label: '男', spell: 'nan', value: '1', value2: 1, val: 'x'},
        {label: '女', spell: 'nv', value: '0', value2: 0, val: 'o'}
      ],
      sexGriupList: [
        {
          label: '第一分组',
          options: [
            {
              value: '1',
              label: '男'
            }
          ]
        },
        {
          label: '第二分组',
          options: [
            {
              value: '0',
              label: '女'
            }
          ]
        },
        {
          label: '其他',
          options: [
            {
              value: '',
              label: '无'
            }
          ]
        }
      ],
      isNameDisabled: false,
      isAgeDisabled: false
    }
  },
  created () {
    this.tableData = Data.data
    this.findSexList()
  },
  methods: {
    findSexList () {

    },
    editRowEvent (row) {
      this.$refs.xTable.setActiveRow(row)
    },
    saveRowEvent (row) {
      this.$refs.xTable.clearActived().then(() => {
        this.$XModal.alert('success')
      })
    },
    cancelRowEvent (row) {
      this.$refs.xTable.clearActived()
    },
    editActivedEvent ({ row, column }, event) {
      console.log(`打开 ${column.title} 列编辑`)
    },
    editClosedEvent ({ row, column }, event) {
      console.log(`关闭 ${column.title} 列编辑`)
    },
    insertEvent (row) {
      let record = {
        sex: '1'
      }
      this.$refs.xTable1.insertAt(record, row)
        .then(({ row }) => this.$refs.xTable1.setActiveCell(row, 'sex'))
    },
    getInsertEvent () {
      let insertRecords = this.$refs.xTable1.getInsertRecords()
      this.$XModal.alert(insertRecords.length)
    },
    insertEvent1 (row) {
      let record = {
        sex: '1'
      }
      this.$refs.xTable2.insertAt(record, row)
        .then(({ row }) => this.$refs.xTable2.setActiveCell(row, 'sex'))
    },
    getRemoveEvent () {
      let removeRecords = this.$refs.xTable2.getRemoveRecords()
      this.$XModal.alert(removeRecords.length)
    },
    getSelectionEvent1 () {
      let removeRecords = this.$refs.xTable2.getSelectRecords()
      this.$XModal.alert(removeRecords.length)
    },
    activeCellMethod ({ column, columnIndex }) {
      return columnIndex !== 2
    },
    activeRowMethod ({ row, rowIndex }) {
      return rowIndex !== 2
    },
    editDisabledEvent ({ row, column }) {
      alert('禁止编辑')
    },
    activeRowMethod1 ({ row, rowIndex }) {
      return rowIndex !== 1
    },
    editDisabledEvent1 ({ row, column }) {
      this.$XModal.alert('禁止编辑')
    },
    editActivedEvent2 ({ row, rowIndex }) {
      // name 为 'x' 开头的列禁止编辑
      this.isNameDisabled = (row.name || '').indexOf('a') === 0
      // age 小于 27 的列禁止编辑
      this.isAgeDisabled = row.age < 27
    },
    // 编辑状态
    insertEvent2 () {
      this.$refs.xTable4.insert()
        .then(({ row }) => this.$refs.xTable.setActiveCell(row, 'name'))
    },
    saveEvent (row, field) {
      let xTable4 = this.$refs.xTable4
      if (xTable4.isUpdateByRow(row)) {
        row.loading = true
        this.submitSave(row).then(data => {
          // 局部保存，并将行数据恢复到初始状态（如果 record 为空则不改动行数据，只恢复状态）
          xTable4.reloadRow(row, null, field)
          this.$XModal.message({ message: '保存成功！', status: 'success' })
          row.loading = false
        })
      } else {
        this.$XModal.message({ message: '数据未改动！', status: 'info' })
      }
    },
    saveEvent2 (row, field) {
      let xTable4 = this.$refs.xTable4
      if (xTable4.isUpdateByRow(row)) {
        row.loading = true
        this.submitSave(row).then(data => {
          // 局部保存，并更新本地数据
          xTable4.reloadRow(row, data, field)
          this.$XModal.message({ message: '保存成功！', status: 'success' })
          row.loading = false
        })
      } else {
        this.$XModal.message({ message: '数据未改动！', status: 'info' })
      }
    },
    submitSave (row) {
      return new Promise(resolve => {
        let rest = {
          date3: this.$utils.toDateString(new Date())
        }
        if (row.name) {
          rest.name = row.name
        }
        if (row.sex) {
          rest.sex = row.sex
        }
        setTimeout(() => resolve(rest), 500)
      })
    },
    getInsertEvent1 () {
      let insertRecords = this.$refs.xTable4.getInsertRecords()
      this.$XModal.alert(insertRecords.length)
    },
    getRemoveEvent1 () {
      let removeRecords = this.$refs.xTable4.getRemoveRecords()
      this.$XModal.alert(removeRecords.length)
    },
    getUpdateEvent1 () {
      let updateRecords = this.$refs.xTable4.getUpdateRecords()
      this.$XModal.alert(updateRecords.length)
    },
    formatDate ({ cellValue }) {
      return XEUtils.toDateString(cellValue, 'yyyy-dd-MM')
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
