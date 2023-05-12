<!--
 * @vxe-headription: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-25 16:44:54
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <Anchor show-ink affix :offset-top="100" :scroll-offset="140" class="anchor-box">
        <AnchorLink href="#anchor1" title="数据校验cell" />
        <AnchorLink href="#anchor2" title="数据校验row" />
        <AnchorLink href="#anchor3" title="键盘导航" />
        <AnchorLink href="#anchor4" title="表尾合计+实时更新" />
        <AnchorLink href="#anchor5" title="展开行、事件绑定" />
        <AnchorLink href="#anchor6" title="联动下拉选项" />
        <AnchorLink href="#anchor7" title="自定义模板" />
    </Anchor>
    <div class="m-t-20" id="anchor1">
      <div class="vxe-head">
        <header>数据校验cell</header>
      </div>
       <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent">新增</vxe-button>
            <vxe-button @click="validEvent">校验</vxe-button>
            <vxe-button @click="fullValidEvent">完整校验</vxe-button>
            <vxe-button @click="selectValidEvent">选中校验</vxe-button>
            <vxe-button @click="getSelectEvent">获取选中</vxe-button>
            <vxe-button @click="getInsertEvent">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          keep-source
          ref="xTable"
          :data="tableData"
          :edit-rules="validRules"
          :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="role" title="role" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor2">
      <div class="vxe-head">
        <header>数据校验row</header>
      </div>
       <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent1">新增</vxe-button>
            <vxe-button @click="validEvent1">校验</vxe-button>
            <vxe-button @click="fullValidEvent1">完整校验</vxe-button>
            <vxe-button @click="selectValidEvent1">选中校验</vxe-button>
            <vxe-button @click="getInsertEvent1">获取新增</vxe-button>
            <vxe-button @click="getInsertEvent1">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent1">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent1">获取修改</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable1"
          border
          show-overflow
          keep-source
          :data="tableData"
          :edit-rules="validRules"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor3">
      <div class="vxe-head">
        <header>键盘导航</header>
      </div>
      <vxe-table
        border
        show-overflow
        keep-source
        :data="tableData"
        :mouse-config="{selected: true}"
        :keyboard-config="{isArrow: true, isDel: true, isTab: true, isEdit: true}"
        :edit-config="{trigger: 'dblclick', mode: 'cell'}">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column type="checkbox" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="date" title="Date"></vxe-table-column>
        <vxe-table-column field="address" title="Address" :edit-render="{name: 'input'}"></vxe-table-column>
      </vxe-table>
    </div>
    <div class="m-t-20" id="anchor4">
        <div class="vxe-head">
            <header>表尾合计+实时更新</header>
        </div>
        <vxe-toolbar>
            <template v-slot:buttons>
            <vxe-button @click="insertEvent2">新增</vxe-button>
            <vxe-button @click="getInsertEvent2">获取新增</vxe-button>
            </template>
        </vxe-toolbar>

        <vxe-table
            border
            show-footer
            show-overflow
            highlight-hover-row
            keep-source
            ref="xTable2"
            class="editable-footer"
            :footer-method="footerMethod"
            :footer-cell-class-name="footerCellClassName"
            :data="tableData"
            :edit-config="{trigger: 'click', mode: 'row'}">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
            <vxe-table-column field="age1" title="Age" :edit-render="{name: 'input', immediate: true, events: {input: updateFooterEvent}}"></vxe-table-column>
            <vxe-table-column field="num6" title="Num" :edit-render="{name: 'input', immediate: true, events: {input: updateFooterEvent}}"></vxe-table-column>
            <vxe-table-column field="rate1" title="Rate" :edit-render="{name: 'input', immediate: true, events: {input: updateFooterEvent}}"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor5">
        <div class="vxe-head">
            <header>展开行、事件绑定</header>
        </div>
        <vxe-table
            border
            resizable
            keep-source
            :data="tableData"
            :edit-config="{trigger: 'click', mode: 'cell'}">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column type="expand" width="60">
                <template v-slot:content="{ row }">
                <ul class="expand-form">
                    <li>
                    <span class="title">Name：</span>
                    <span class="content">
                        <vxe-input v-model="row.name"></vxe-input>
                    </span>
                    </li>
                    <li>
                    <span class="title">Sex：</span>
                    <span class="content">
                        <vxe-input v-model="row.sex"></vxe-input>
                    </span>
                    </li>
                    <li>
                    <span class="title">Age：</span>
                    <span class="content">
                        <vxe-input v-model="row.age"></vxe-input>
                    </span>
                    </li>
                </ul>
                </template>
            </vxe-table-column>
            <vxe-table-column field="name" title="Name" :edit-render="{name: 'input', events: {keydown: keydownEvent}}"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input', events: {change: changeEvent}}"></vxe-table-column>
            <vxe-table-column field="date" title="Date" :edit-render="{name: 'input', events: {focus: focusEvent}}"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor6">
        <div class="vxe-head">
            <header>联动下拉选项</header>
        </div>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent()">新增</vxe-button>
          </template>
        </vxe-toolbar>
        <vxe-table
          border
          resizable
          keep-source
          ref="xTable3"
          max-height="400"
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row'}"
          @edit-actived="editActivedEvent">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="attr3" title="Project type" :edit-render="{name: 'select', options: ptypeList, events: {change: ptypeChangeEvent}}"></vxe-table-column>
          <vxe-table-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">
            <template v-slot:edit="{ row }">
              <select class="vxe-default-select" v-model="row.attr4">
                <option v-for="item in pnameList" :key="item.value" :value="item.value">{{ item.label }}</option>
              </select>
            </template>
          </vxe-table-column>
          <vxe-table-column field="date12" title="Date" :edit-render="{name: 'input', attrs: {type: 'date'}}"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor7">
        <div class="vxe-head">
            <header>自定义模板</header>
        </div>
        <vxe-table
            border
            show-overflow
            keep-source
            :data="tableData"
            :edit-config="{trigger: 'click', mode: 'cell'}">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}">
                <template v-slot:edit="{ row }">
                    <input type="text" v-model="row.name" class="custom-input">
                </template>
            </vxe-table-column>
            <vxe-table-column field="age" title="Age" :edit-render="{autofocus: '.custom-input'}">
                <template v-slot:edit="{ row }">
                    <input type="number" v-model="row.age" class="custom-input">
                </template>
            </vxe-table-column>
            <vxe-table-column field="date3" title="Date" :edit-render="{name: 'input'}">
                <template v-slot:edit="{ row }">
                    <input type="date" v-model="row.date3" class="custom-input">
                </template>
                <template v-slot="{ row }">选中日期：{{ row.date3 }}</template>
            </vxe-table-column>
        </vxe-table>
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
    // 自定义校验
    const nameValid = ({ cellValue }) => {
      return new Promise((resolve, reject) => {
        if (cellValue.length < 3 || cellValue.length > 50) {
          reject(new Error('名称长度在 3 到 50 个字符之间'))
        } else {
          resolve()
        }
      })
    }
    const roleValid = ({ cellValue }) => {
      if (cellValue && !['前端', '后端', '设计师', '项目经理', '测试'].includes(cellValue)) {
        return Promise.reject(new Error('角色输入不正确'))
      }
    }
    return {
      tableData: [],
      validRules: {
        name: [
          { required: true, message: '名称必须填写' },
          { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' },
          { validator: nameValid }
        ],
        role: [
          { validator: roleValid }
        ],
        sex: [
          { required: true, message: '性别必须填写' }
        ]
      },
      ptypeList: [
        {
          label: '',
          value: ''
        },
        {
          label: '项目1',
          value: '1'
        },
        {
          label: '项目2',
          value: '2'
        },
        {
          label: '项目3',
          value: '3'
        }
      ],
      pnameList: [],
      cachePnameList: []
    }
  },
  created () {
    this.tableData = Data.data
  },
  methods: {
    validEvent () {
      this.$refs.xTable.validate(valid => {
        if (valid) {
          this.$XModal.message({ status: 'success', message: '校验成功！' })
        } else {
          this.$XModal.message({ status: 'error', message: '校验不通过！' })
        }
      })
    },
    fullValidEvent () {
      this.$refs.xTable.fullValidate((valid, errMap) => {
        if (valid) {
          this.$XModal.message({ status: 'success', message: '校验成功！' })
        } else {
          let msgList = []
          Object.values(errMap).forEach(errList => {
            errList.forEach(params => {
              let { rowIndex, column, rules } = params
              rules.forEach(rule => {
                msgList.push(`第 ${rowIndex} 行 ${column.title} 校验错误：${rule.message}`)
              })
            })
          })
          this.$XModal.message({
            status: 'error',
            message: () => {
              return [
                <div class="red" style="max-height: 400px;overflow: auto;">
                  {
                    msgList.map(msg => {
                      return <div>{ msg }</div>
                    })
                  }
                </div>
              ]
            }
          })
        }
      })
    },
    selectValidEvent () {
      let selectRecords = this.$refs.xTable.getSelectRecords()
      if (selectRecords.length > 0) {
        this.$refs.xTable.validate(selectRecords, valid => {
          if (valid) {
            this.$XModal.message({ status: 'success', message: '校验成功！' })
          } else {
            this.$XModal.message({ status: 'error', message: '校验不通过！' })
          }
        })
      } else {
        this.$XModal.message({ status: 'warning', message: '未选中数据！' })
      }
    },
    insertEvent () {
      this.$refs.xTable.insert().then(({ row }) => {
        // 插入一条数据并触发校验
        this.$refs.xTable.validate(row, valid => {
          if (valid) {

          }
        })
      })
    },
    getSelectEvent () {
      let selectRecords = this.$refs.xTable.getSelectRecords()
      this.$XModal.alert(selectRecords.length)
    },
    getInsertEvent () {
      let insertRecords = this.$refs.xTable.getInsertRecords()
      this.$XModal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      let removeRecords = this.$refs.xTable.getRemoveRecords()
      this.$XModal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      let updateRecords = this.$refs.xTable.getUpdateRecords()
      this.$XModal.alert(updateRecords.length)
    },
    validEvent1 () {
      this.$refs.xTable1.validate(valid => {
        if (valid) {
          this.$XModal.message({ status: 'success', message: '校验成功！' })
        } else {
          this.$XModal.message({ status: 'error', message: '校验不通过！' })
        }
      })
    },
    fullValidEvent1 () {
      this.$refs.xTable1.fullValidate((valid, errMap) => {
        if (valid) {
          this.$XModal.message({ status: 'success', message: '校验成功！' })
        } else {
          let msgList = []
          Object.values(errMap).forEach(errList => {
            errList.forEach(params => {
              let { rowIndex, column, rules } = params
              rules.forEach(rule => {
                msgList.push(`第 ${rowIndex} 行 ${column.title} 校验错误：${rule.message}`)
              })
            })
          })
          this.$XModal.message({
            status: 'error',
            message: () => {
              return [
                <div class="red" style="max-height: 400px;overflow: auto;">
                  {
                    msgList.map(msg => <div>{ msg }</div>)
                  }
                </div>
              ]
            }
          })
        }
      })
    },
    selectValidEvent1 () {
      let selectRecords = this.$refs.xTable1.getSelectRecords()
      if (selectRecords.length > 0) {
        this.$refs.xTable1.validate(selectRecords, valid => {
          if (valid) {
            this.$XModal.message({ status: 'success', message: '校验成功！' })
          } else {
            this.$XModal.message({ status: 'error', message: '校验不通过！' })
          }
        })
      } else {
        this.$XModal.message({ status: 'warning', message: '未选中数据！' })
      }
    },
    insertEvent1 () {
      this.$refs.xTable1.insert().then(({ row }) => {
        // 插入一条数据并触发校验
        this.$refs.xTable1.validate(row, valid => {
          if (valid) {

          }
        })
      })
    },
    getSelectEvent1 () {
      let selectRecords = this.$refs.xTable1.getSelectRecords()
      this.$XModal.alert(selectRecords.length)
    },
    getInsertEvent1 () {
      let insertRecords = this.$refs.xTable1.getInsertRecords()
      this.$XModal.alert(insertRecords.length)
    },
    getRemoveEvent1 () {
      let removeRecords = this.$refs.xTable1.getRemoveRecords()
      this.$XModal.alert(removeRecords.length)
    },
    getUpdateEvent1 () {
      let updateRecords = this.$refs.xTable1.getUpdateRecords()
      this.$XModal.alert(updateRecords.length)
    },
    footerCellClassName ({ $rowIndex, column, columnIndex }) {
      if (columnIndex === 0) {
        if ($rowIndex === 0) {
          return 'col-blue'
        } else {
          return 'col-red'
        }
      }
    },
    // 在值发生改变时更新表尾合计
    updateFooterEvent (params) {
      let xTable2 = this.$refs.xTable2
      xTable2.updateFooter()
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age1', 'rate1', 'num6'].includes(column.property)) {
            return Utils.mean(data, column.property)
          }
          return null
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['rate1', 'num6'].includes(column.property)) {
            return Utils.sum(data, column.property)
          }
          return null
        })
      ]
    },
    insertEvent2 () {
      let record = {
        name: 'New name'
      }
      this.$refs.xTable2.insert(record)
        .then(({ row }) => this.$refs.xTable2.setActiveCell(row, 'age'))
    },
    getInsertEvent2 () {
      let insertRecords = this.$refs.xTable2.getInsertRecords()
      this.$XModal.alert(insertRecords.length)
    },
    keydownEvent ({ column }, event) {
      console.log(`${column.title} 触发 keydown 事件`)
    },
    focusEvent ({ column }, event) {
      console.log(`${column.title} 触发 focus 事件`)
    },
    changeEvent ({ column }, event) {
      console.log(`${column.title} 触发 change 事件`)
    },
    insertEvent3 () {
      let record = {

      }
      this.$refs.xTable3.insert(record)
    },
    // 格式化显示名称
    formatPanmeLabel ({ cellValue, row }) {
      let ptype = row.attr3
      let ptypeItem = this.cachePnameList.find(item => item.ptype === ptype)
      if (ptypeItem && ptypeItem.pnameList) {
        let pnameItem = ptypeItem.pnameList.find(item => item.value === cellValue)
        if (pnameItem) {
          return pnameItem.label
        }
      }
      return ''
    },
    // 更新级联选项列表
    updatePnameList (row) {
      let ptype = row.attr3
      let pnameList = [
        {
          label: '',
          value: ''
        }
      ]
      if (ptype) {
        let item = this.cachePnameList.find(item => item.ptype === ptype)
        if (item) {
          pnameList = item.pnameList
        } else {
          // 模拟后台数据
          Array.from(new Array(Utils.random(3, 8))).forEach((item, index) => {
            pnameList.push({
              label: `${ptype}-名称${index}`,
              value: `${ptype}_${index}`
            })
          })
          this.cachePnameList.push({ ptype, pnameList })
        }
      }
      this.pnameList = pnameList
    },
    ptypeChangeEvent ({ row }, evnt) {
      // 使用内置 select 需要手动更新，使用第三方组件如果是 v-model 就不需要手动赋值
      row.attr3 = evnt.target.value
      // 类型切换时更新级联的下拉数据
      row.attr4 = ''
      this.updatePnameList(row)
    },
    editActivedEvent ({ row }) {
      this.updatePnameList(row)
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
