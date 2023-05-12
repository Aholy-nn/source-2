<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-26 11:59:21
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <div class="m-t-20">
          <p>事件绑定</p>
          <vxe-table
            border
            highlight-hover-row
            show-overflow
            resizable
            :data="tableData"
            @header-cell-click="headerCellClickEvent"
            @header-cell-dblclick="headerCellDBLClickEvent"
            @cell-click="cellClickEvent"
            @cell-dblclick="cellDBLClickEvent"
            @cell-mouseenter="cellMouseenterEvent"
            @cell-mouseleave="cellMouseleaveEvent"
            @body-scroll="bodyScrollEvent">
            <vxe-table-column type="seq" title="序号" width="60" fixed="left"></vxe-table-column>
            <vxe-table-column field="name" title="Name" width="300"></vxe-table-column>
            <vxe-table-column field="role" title="Role" width="300"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" width="300"></vxe-table-column>
            <vxe-table-column field="date" title="Date" width="300"></vxe-table-column>
            <vxe-table-column field="address" title="Address" fixed="right" width="300"></vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
          <p>自定义模板</p>
          <vxe-toolbar>
            <template v-slot:buttons>
              <vxe-button>新增</vxe-button>
              <vxe-button>
                <template>下拉按钮</template>
                <template v-slot:dropdowns>
                  <vxe-button>删除</vxe-button>
                  <vxe-button>保存</vxe-button>
                </template>
              </vxe-button>
            </template>
          </vxe-toolbar>
          <vxe-table
            border
            resizable
            :data="tableData">
            <vxe-table-column type="seq" width="100" show-overflow>
              <template v-slot="{ row, seq }">
                <vxe-button @click="showDetailEvent(row)">弹框{{ seq }}</vxe-button>
              </template>
            </vxe-table-column>
            <vxe-table-column field="name" title="app.body.label.name" sortable>
              <template v-slot="{ row }">
                <a href="https://github.com/xuliangzhan/vxe-table" target="_black">我是超链接：{{ row.name }}</a>
              </template>
            </vxe-table-column>
            <vxe-table-column field="sex" title="app.body.label.sex" :filters="[{data: ''}]" :filter-method="filterSexMethod">
              <template>
                <vxe-tooltip v-model="showSexTip" content="这样玩也行？">
                  <span style="color: red;" @click="showSexTip = !showSexTip">这样玩也行</span>
                </vxe-tooltip>
              </template>
              <template v-slot:filter="{ column, context }">
                <template v-for="(option, index) in column.filters">
                  <input type="type" v-model="option.data" :key="index" @input="changeFilterEvent($event, option, context)">
                </template>
              </template>
              <template v-slot="{ row }">
                <span>{{ row.sex }} </span>
                <vxe-button type="text">编辑</vxe-button>
                <vxe-button type="text">删除</vxe-button>
              </template>
            </vxe-table-column>
            <vxe-table-column field="time" title="Time">
              <template v-slot:header="{}">
                <vxe-input placeholder="这样也行" size="mini"></vxe-input>
              </template>
              <template v-slot="{ row }">
                <span>{{ formatDate(row.time) }}</span>
              </template>
            </vxe-table-column>
            <vxe-table-column field="address" title="Address" show-overflow>
              <template v-slot="{ row, rowIndex }">
                <select v-if="rowIndex === 1">
                  <option value="1">还可以这样</option>
                </select>
                <a href="https://github.com/xuliangzhan/vxe-table">{{ row.name }}</a>
              </template>
            </vxe-table-column>
            <vxe-table-column field="html1" title="Html片段" width="160" show-overflow>
              <template v-slot="{ row }">
                <span v-html="row.html1"></span>
              </template>
            </vxe-table-column>
            <vxe-table-column field="img1" title="图片路径" width="120">
              <template v-slot="{ row }">
                <img v-if="row.img1" :src="row.img1" style="width: 100px;">
                <span v-else>无</span>
              </template>
            </vxe-table-column>
          </vxe-table>
          <vxe-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>
            <template>{{ selectRow ? selectRow.text : '' }}</template>
          </vxe-modal>
      </div>
       <div class="m-t-20">
            <p>使用v-for</p>
            <vxe-toolbar>
              <template v-slot:buttons>
                <vxe-button @click="addColumn()">最后增加一列</vxe-button>
                <vxe-button @click="removeColumn()">删除最后一列</vxe-button>
                <vxe-button @click="toggleFixedColumn(0, 'left')">切换第一列固定</vxe-button>
                <vxe-button @click="toggleFixedColumn(1, 'left')">切换第二列固定</vxe-button>
                <vxe-button @click="updateWidthColumn(2, 500)">修改第三列宽度</vxe-button>
                <vxe-button @click="updateWidthColumn(3, 500)">修改第四列宽度</vxe-button>
              </template>
          </vxe-toolbar>
          <vxe-table
            border
            highlight-hover-row
            highlight-current-row
            ref="xTable"
            height="300"
            :data="tableData">
            <vxe-table-column v-for="(config, index) in tableColumn" :key="index" v-bind="config"></vxe-table-column>
          </vxe-table>
      </div>
      <div class="m-t-20">
           <p>自定义列头排序</p>
           <vxe-table
              border
              resizable
              highlight-hover-row
              highlight-current-row
              class="my-sort"
              ref="xTable"
              height="300"
              :data="tableData"
              @header-cell-click="headerCellClickEvent">
              <vxe-table-column type="seq" width="60"></vxe-table-column>
              <vxe-table-column field="name" title="Name" sortable :filters="[{label: 'id大于10', value: 10}, {label: 'id大于40', value: 40}]" :filter-method="filterNameMethod">
                <template v-slot:header="{ column }">
                  <span>{{ column.title }}</span>
                  <span class="custom-sort" :class="{'is-order': column.order}">
                    <i class="fa" :class="[column.order ? `fa-sort-alpha-${column.order}` : 'fa-long-arrow-down']"></i>
                  </span>
                </template>
              </vxe-table-column>
              <vxe-table-column field="role" title="Role"></vxe-table-column>
              <vxe-table-column field="age" title="Age" sortable>
                <template v-slot:header="{ column }">
                  <span>{{ column.title }}</span>
                  <span class="custom-sort" :class="{'is-order': column.order}">
                    <i class="fa" :class="[column.order ? `fa-sort-numeric-${column.order}` : 'fa-long-arrow-down']"></i>
                  </span>
                </template>
              </vxe-table-column>
              <vxe-table-column field="time" title="Time"></vxe-table-column>
            </vxe-table>
      </div>
      <div class="m-t-20">
          <p>筛选高级用法</p>
          <vxe-toolbar>
              <template v-slot:buttons>
                <vxe-button @click="filterNameEvent">筛选 Name</vxe-button>
                <vxe-button @click="filterAgeEvent">筛选 Age</vxe-button>
                <vxe-button @click="updateNameFilterEvent">更改 Name 的筛选条件</vxe-button>
                <vxe-button @click="$refs.xTable.clearFilter('age')">清除 Age 的筛选条件</vxe-button>
                <vxe-button @click="$refs.xTable.clearFilter()">清除所有的筛选条件</vxe-button>
              </template>
        </vxe-toolbar>
        <vxe-table
          border
          highlight-hover-row
          ref="xTable"
          :loading="loading"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" sortable :filters="nameFilterList" :filter-method="filterNameMethod"></vxe-table-column>
          <vxe-table-column field="role" title="Role" sortable :filters="[{ data: '' }]" :filter-method="filterRoleMethod">
            <template v-slot:filter="{ column, context }">
              <select class="my-select" v-model="option.data" v-for="(option, index) in column.filters" :key="index" @change="context.changeOption($event, !!option.data, option)">
                <option v-for="(label, cIndex) in roleList" :key="cIndex" :value="label">{{ label }}</option>
              </select>
            </template>
          </vxe-table-column>
          <vxe-table-column field="sex" title="Sex" sortable :filter-multiple="false" :filters="[{label: 'Man', value: '1'}, {label: 'Woman', value: '0'}]"></vxe-table-column>
          <vxe-table-column field="age" title="Age" :filters="[{ data: '' }]" :filter-method="filterAgeMethod">
            <template v-slot:filter="{ column, context }">
              <template v-for="(option, index) in column.filters">
                <input class="my-input" type="type" :key="index" v-model="option.data" @input="context.changeOption($event, !!option.data, option)" @keyup.enter="context.confirmFilter()" placeholder="按回车确认筛选">
              </template>
            </template>
          </vxe-table-column>
          <vxe-table-column field="time" title="Time" sortable></vxe-table-column>
        </vxe-table>
      </div>
      <div class="m-t-20">
        <p>合并列</p>
        <vxe-table
          border
          :span-method="colspanMethod"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
          <vxe-table-column field="role" title="Role" sortable></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
          <p>合并行</p>
          <vxe-table
          border
          :span-method="rowspanMethod"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="key" title="Key"></vxe-table-column>
          <vxe-table-column field="content" title="Translate"></vxe-table-column>
          <vxe-table-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN'}, {label: 'English', value: 'en_US'}]"></vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
          <p>复杂的合并行列</p>
          <vxe-table
          border
          :span-method="rowspanMethod1"
          :data="tableData2">
          <vxe-table-column field="name_1" title="功能模块"></vxe-table-column>
          <vxe-table-column field="name_2" title="详细功能"></vxe-table-column>
          <vxe-table-column field="name_3" title="权限类型">
            <template v-slot="{ row }">
              <vxe-checkbox v-model="row.check_3" @change="check3ChangeEvent(row)">{{ row.name_3 }}</vxe-checkbox>
            </template>
          </vxe-table-column>
          <vxe-table-column field="name_4" title="权限列表">
            <template v-slot="{ row }">
              <vxe-checkbox v-model="row.check_4" @change="check4ChangeEvent(row)">{{ row.name_4 }}</vxe-checkbox>
            </template>
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

Vue.use(VXETable)
export default {
  data () {
    return {
      tableData: [
        {
          id: 10001,
          name: '名字1',
          role: '角色',
          age: '11',
          sex: '1',
          checked: true,
          key: 'key9',
          content: '内容8',
          language: 'zh_CN',
          time: 1574157085426,
          address: '深圳市 圳市 市 xxx',
          html1: '<span style="color:red;">我是一段Html代码</span><br><span style="color:blue;">我是一段Html代码0</span><br><span style="color:green;">绿到你发慌！</span>',
          img1: ''
        },
        {
          id: 10002,
          name: '名字2',
          role: '角色',
          age: 18,
          sex: '男',
          checked: true,
          key: 'key9',
          content: '内容8',
          language: 'en_US',
          time: '2019-11-19',
          address: '深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
          name: '名字3',
          role: '角色',
          age: 26,
          sex: '女',
          key: 'key9',
          content: '内容8',
          language: 'zh_CN',
          time: '2019-11-19',
          address: '深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
          name: '名字41',
          role: '角色',
          age: 18,
          sex: '女',
          key: 'key9',
          content: '内容8',
          language: 'en_US',
          time: '2019-11-19',
          address: '深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
          name: '名字1',
          role: '角色',
          age: 28,
          sex: '男',
          key: 'key9',
          content: '内容8',
          language: 'zh_CN',
          time: '2019-11-19',
          address: '深圳市 圳市 市 xxx'
        }
      ],
      tableColumn: [
        { type: 'seq', width: 60, fixed: null },
        { type: 'checkbox', width: 50, fixed: null },
        { field: 'name', title: 'Name', width: 200 },
        { field: 'nickname', title: 'Nickname', width: 300 },
        { field: 'sex', title: 'Sex', width: 200 },
        { field: 'role', title: 'Role', width: 200 },
        { field: 'address', title: 'Address', width: 300, showOverflow: true }
      ],
      showSexTip: false,
      showDetails: false,
      selectRow: null,
      loading: false,
      roleList: ['', '前端', '后端', '设计师'],
      nameFilterList: [
        { label: 'id大于10', value: 10 },
        { label: 'id大于40', value: 40 }
      ],
      treeData: [
        {
          id: '10000',
          name: '账号管理',
          children: [
            {
              id: '11000',
              name: '用户管理',
              children: [
                {
                  id: '11100',
                  name: '查看',
                  children: [
                    {
                      id: '11110',
                      name: '用户列表'
                    }
                  ]
                },
                {
                  id: '11200',
                  name: '编辑',
                  children: [
                    {
                      id: '11210',
                      name: '用户列表'
                    },
                    {
                      id: '11220',
                      name: '新增用户'
                    }
                  ]
                },
                {
                  id: '11300',
                  name: '操作',
                  children: [
                    {
                      id: '11310',
                      name: '新增'
                    },
                    {
                      id: '11320',
                      name: '删除'
                    },
                    {
                      id: '11330',
                      name: '修改'
                    }
                  ]
                }
              ]
            },
            {
              id: '12000',
              name: '角色管理',
              children: [
                {
                  id: '12100',
                  name: '查看',
                  children: [
                    {
                      id: '12110',
                      name: '角色列表'
                    }
                  ]
                },
                {
                  id: '12200',
                  name: '编辑',
                  children: [
                    {
                      id: '122100',
                      name: '角色列表'
                    },
                    {
                      id: '12220',
                      name: '新增角色'
                    }
                  ]
                },
                {
                  id: '12300',
                  name: '操作',
                  children: [
                    {
                      id: '12310',
                      name: '新增'
                    },
                    {
                      id: '12320',
                      name: '删除'
                    },
                    {
                      id: '12330',
                      name: '修改'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '20000',
          name: '个人中心',
          children: [
            {
              id: '21000',
              name: '个性化设置',
              children: [
                {
                  id: '21100',
                  name: '查看',
                  children: [
                    {
                      id: '21110',
                      name: '信息列表'
                    }
                  ]
                },
                {
                  id: '21200',
                  name: '操作',
                  children: [
                    {
                      id: '21210',
                      name: '重置信息'
                    }
                  ]
                }
              ]
            },
            {
              id: '22000',
              name: '账户管理',
              children: [
                {
                  id: '22100',
                  name: '查看',
                  children: [
                    {
                      id: '22110',
                      name: '账户余额'
                    },
                    {
                      id: '22120',
                      name: '帐变记录'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    this.toColTreeData()
  },
  methods: {
    headerCellClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`表头单元格点击${column.title}`)
    },
    headerCellDBLClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`表头单元格双击${column.title}`)
    },
    cellClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`单元格点击${column.title}`)
    },
    cellDBLClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`单元格双击${column.title}`)
    },
    cellMouseenterEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`鼠标进入单元格${column.title}`)
    },
    cellMouseleaveEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`鼠标离开单元格${column.title}`)
    },
    formatDate (value) {
      return Utils.toDateString(value, 'yyyy-MM-dd HH:mm:ss.S')
    },
    filterSexMethod ({ option, row }) {
      return row.sex === option.data
    },
    changeFilterEvent (evnt, option, context) {
      context.changeMultipleOption(evnt, !!option.data, option)
    },
    showDetailEvent (row) {
      this.selectRow = row
      this.showDetails = true
    },
    bodyScrollEvent () {

    },
    addColumn () {
      const uniqueId = Utils.uniqueId()
      this.tableColumn.push({
        field: `new_${uniqueId}`,
        title: `新列_${uniqueId}`,
        minWidth: 100
      })
    },
    removeColumn () {
      this.tableColumn.pop()
    },
    updateFilter (index) {
      let xTable = this.$refs.xTable
      xTable.filter(this.tableColumn[index].field, options => {
        // 修改筛选列表，可以通过 checked 属性设置默认勾选
        return [
          { value: '1', label: '男' },
          { value: '0', label: '女', checked: true }
        ]
      }).then(() => {
        // 修改条件之后，需要手动调用 updateData 处理表格数据
        xTable.updateData()
      })
    },
    toggleFixedColumn (index, value) {
      const xTable = this.$refs.xTable
      this.tableColumn[index].fixed = this.tableColumn[index].fixed ? null : value
      // 更改了列属性，需要手动刷新列
      this.$nextTick(() => {
        xTable.refreshColumn()
          // 由于固定列的动态切换是无状态的，所以需要手动刷新滚动位置
          .then(() => xTable.refreshScroll())
      })
    },
    updateWidthColumn (index, value) {
      this.tableColumn[index].width = value
      // 更改了列属性，需要手动刷新列
      this.$nextTick(() => {
        this.$refs.xTable.refreshColumn()
      })
    },
    headerCellClickEvent1 ({ column, triggerResizable, triggerSort, triggerFilter }) {
      // 如果点击了列并且没触发对应的按钮、则手动排序、列宽拖动
      if (column.sortable && !(triggerResizable || triggerSort || triggerFilter)) {
        this.$refs.xTable.sort(column.property)
      }
    },
    filterNameMethod ({ value, row, column }) {
      return row.id >= value
    },
    filterRoleMethod ({ option, row }) {
      return row.role === option.data
    },
    filterAgeMethod ({ option, row }) {
      return row.age === Number(option.data)
    },
    updateNameFilterEvent () {
      let xTable = this.$refs.xTable
      xTable.filter('name', options => {
        // 修改筛选列表
        return [
          {
            label: 'id大于10',
            value: 10
          },
          {
            label: 'id大于20',
            value: 20
          },
          {
            label: 'id大于30',
            value: 30,
            checked: true // 设置为选中状态
          },
          {
            label: 'id大于40',
            value: 40
          }
        ]
      }).then(() => {
        // 修改条件之后，需要手动调用 updateData 处理表格数据
        xTable.updateData()
      })
    },
    filterNameEvent () {
      let xTable = this.$refs.xTable
      xTable.filter('name')
        .then(options => {
          // 处理条件并设置选中的选项
          if (options.length) {
            let option = options[1]
            option.checked = true
          }
        })
        .then(() => {
          // 修改条件之后，需要手动调用 updateData 处理表格数据
          xTable.updateData()
        })
    },
    filterAgeEvent () {
      let xTable = this.$refs.xTable
      xTable.filter('age')
        .then(options => {
          // 处理条件并设置选中的选项
          if (options.length) {
            let option = options[0]
            option.data = '26'
            option.checked = true
          }
        })
        .then(() => {
          // 修改条件之后，需要手动调用 updateData 处理表格数据
          xTable.updateData()
        })
    },
    colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 2) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex === 3) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    rowspanMethod ({ row, $rowIndex, column, data }) {
      let fields = ['key']
      let cellValue = row[column.property]
      if (cellValue && fields.includes(column.property)) {
        let prevRow = data[$rowIndex - 1]
        let nextRow = data[$rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = data[++countRowspan + $rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    },
    check3ChangeEvent (row) {
      let checked = row.check_3
      let levelList = this.tableData2.filter(item => item.id_3 === row.id_3)
      levelList.forEach(item => {
        item.check_4 = checked
      })
    },
    check4ChangeEvent (row) {
      let levelList = this.tableData2.filter(item => item.id_3 === row.id_3)
      let checked = levelList.every(item => item.check_4)
      levelList.forEach(item => {
        item.check_3 = checked
      })
    },
    // 转换横向树结构
    toColTreeData () {
      let options = { children: 'children' }
      let list = []
      let keyMap = {}
      Utils.eachTree(this.treeData, (item, index, result, paths, parent) => {
        keyMap[item.id] = item
        item.keys = parent ? parent.keys.concat([item.id]) : [item.id]
        if (!item.children || !item.children.length) {
          let row = { }
          item.keys.forEach((key, index) => {
            let level = index + 1
            let obj = keyMap[key]
            row[`check_${level}`] = false
            row[`id_${level}`] = obj.id
            row[`name_${level}`] = obj.name
          })
          list.push(row)
        }
      }, options)
      this.keyMap = keyMap
      this.tableData2 = list
    },
    // 通用行合并函数（将相同多列数据合并为一行）
    rowspanMethod1 ({ row, $rowIndex, column, data }) {
      let fields = ['name_1', 'name_2', 'name_3']
      let cellValue = row[column.property]
      if (cellValue && fields.includes(column.property)) {
        let prevRow = data[$rowIndex - 1]
        let nextRow = data[$rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = data[++countRowspan + $rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
