<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-04-13 12:24:04
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <div class="m-t-20">
        <div class="desc">
          <header>表尾合计</header>
          <p>设置 show-footer show-footer 和 footer-method 自定义表尾合计
          需要注意的是表尾的的计算并非实时的，而是在 data 初始化时才会触发自动计算；如果要达到实时计算请手动调用 updateFooter 方法
          （注：footer-method 合计的逻辑都是自行实现的，该示例仅供参考）</p>
          <p>还可以配合 footer-cell-class-name 自定义不同列颜色</p>
          <p>还可以固定列</p>
        </div>
        <vxe-table
            class="mytable-footer"
            border
            show-footer
            height="400"
            :footer-method="footerMethod"
            :footer-cell-class-name="footerCellClassName"
            :data="tableData">
            <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
            <vxe-table-column title="基本信息">
            <vxe-table-column field="name" title="Name" min-width="600" sortable></vxe-table-column>
            <vxe-table-column field="age" title="Age" min-width="600"></vxe-table-column>
            </vxe-table-column>
            <vxe-table-column field="date" title="Date" min-width="600"></vxe-table-column>
            <vxe-table-column field="rate" title="Rate" width="200" fixed="right"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20">
        <div class="desc">
           <header>表尾合并列</header>
        </div>
        <vxe-table
          border
          show-footer
          height="400"
          :span-method="colspanMethod"
          :footer-span-method="footerColspanMethod"
          :footer-method="footerMethod"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
          <vxe-table-column field="role" title="Role" sortable></vxe-table-column>
          <vxe-table-column field="rate" title="Rate" footer-align="center"></vxe-table-column>
          <vxe-table-column field="age" title="Age" footer-align="center"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20">
        <div class="desc">
           <header>表尾合并行</header>
        </div>
        <vxe-table
          border
          show-footer
          height="400"
          :span-method="rowspanMethod"
          :footer-span-method="footerRowspanMethod"
          :footer-method="footerMethod1"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="key" title="Key"></vxe-table-column>
          <vxe-table-column field="content" title="Translate"></vxe-table-column>
          <vxe-table-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN'}, {label: 'English', value: 'en_US'}]"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20">
      <div class="desc">
          <header>导入数据</header>
          <p>通过 importData 函数可以直接将数据导入表格中。注：附件中的字段名必须和表格一致，数据格式不正确将无法导入</p>
      </div>
      <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="clearDataEvent">清空数据</vxe-button>
            <vxe-button @click="exportDataEvent">导出数据</vxe-button>
            <vxe-button @click="importDataEvent">导入数据</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable"
          highlight-hover-row
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20">
      <div class="desc">
          <header>导出数据</header>
          <p>通过调用 exportData 函数指定 type='csv' 可以直接将表格导出为 CSV/HTML/XML/TXT 格式的文件
            注：默认会排除 field 为空和 type 相关的功能列；如果需要导出索引，请通过 columnFilterMethod 自定义筛选条件</p>
      </div>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent1">默认导出</vxe-button>
            <vxe-button @click="exportSelectEvent">导出选中</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable1"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
     <div class="m-t-20">
        <div class="desc">
            <header>配置 columnFilterMethod 参数过滤指定列</header>
        </div>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent2">导出指定列 [name,sex]</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable2"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
      </div>
      <div class="m-t-20">
        <div class="desc">
            <header>配置 dataFilterMethod 参数过滤指定行</header>
        </div>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent3">导出指定第2-3行</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable3"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
        <div class="desc">
            <header>不导出表头，指定文件名，导出源数据,格式化数据</header>
        </div>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportDataEvent4">完整配置</vxe-button>
          </template>
        </vxe-toolbar>
        <vxe-table
          ref="xTable4"
          highlight-hover-row
          height="300"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
      </div>
       <div class="m-t-20">
        <div class="desc">
            <header>不导出表头，指定文件名，导出源数据,格式化数据</header>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="printEvent">打印</vxe-button>
            <vxe-button @click="printSelectEvent">打印选中</vxe-button>
            <vxe-button @click="exportDataEvent5">导出与打印</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          ref="xTable5"
          :data="tableData">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="date12" title="Date"></vxe-table-column>
        </vxe-table>
      </div>
      <div class="m-t-20">
        <div class="desc">
            <header>固定类型+导入/导出</header>
            <p>导入/导出文件类型：通过 types 设置文件类型，例如：限制只允许使用 CSV 格式</p>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="clearDataEvent">清空数据</vxe-button>
            <vxe-button @click="exportDataEvent6">导出数据</vxe-button>
            <vxe-button @click="importDataEvent5">导入数据</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          highlight-hover-row
          ref="xTable6"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
       </div>
        <div class="m-t-20">
          <div class="desc">
            <header>快捷菜单</header>
            <p>右键快捷菜单，支持表头菜单、内容菜单、表尾菜单，配置项 context-menu={header,body,footer}</p>
          </div>
            <vxe-table
            border
            show-footer
            highlight-current-row
            highlight-current-column
            ref="xTable7"
            :footer-method="footerMethod2"
            :data="tableData"
            :context-menu="{header: {options: headerMenus}, body: {options: bodyMenus}, footer: {options: footerMenus}}"
            @header-cell-context-menu="headerCellContextMenuEvent"
            @cell-context-menu="cellContextMenuEvent"
            @context-menu-click="contextMenuClickEvent">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
            <vxe-table-column field="time" title="Time"></vxe-table-column>
          </vxe-table>
        </div>
         <div class="m-t-20">
            <div class="desc">
                <header>快捷菜单+控制权</header>
                <p>右键快捷菜单，支持表头菜单、内容菜单、表尾菜单，通过 visibleMethod 和 visible | disabled 属性来控制菜单选项的操作权限</p>
            </div>
        <vxe-table
          border
          show-footer
          highlight-current-row
          highlight-current-column
          ref="xTable8"
          :footer-method="footerMethod"
          :data="tableData"
          :context-menu="{header: {options: headerMenus}, body: {options: bodyMenus}, footer: {options: footerMenus}, visibleMethod}"
          @header-cell-context-menu="headerCellContextMenuEvent1"
          @cell-context-menu="cellContextMenuEvent1"
          @context-menu-click="contextMenuClickEvent1">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="time" title="Time"></vxe-table-column>
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
import XEClipboard from 'xe-clipboard'

Vue.use(VXETable)
export default {
  data () {
    return {
      tableData: [],
      headerMenus: [
        [
          {
            code: 'exportAll',
            name: '导出所有.csv',
            visible: true,
            disabled: false
          }
        ]
      ],
      bodyMenus: [
        [
          {
            code: 'copy',
            name: '复制',
            prefixIcon: 'fa fa-copy'
          }
        ],
        [
          {
            code: 'remove',
            name: '删除'
          },
          {
            code: 'filter',
            name: '筛选',
            children: [
              {
                code: 'clearFilter',
                name: '清除筛选'
              },
              {
                code: 'filterSelect',
                name: '按所选单元格的值筛选'
              }
            ]
          },
          {
            code: 'sort',
            name: '排序',
            children: [
              {
                code: 'clearSort',
                name: '清除排序'
              },
              {
                code: 'sortAsc',
                name: '升序'
              },
              {
                code: 'sortDesc',
                name: '倒序'
              }
            ]
          },
          {
            code: 'print',
            name: '打印',
            disabled: true
          }
        ]
      ],
      footerMenus: [
        [
          {
            code: 'clearAll',
            name: '清空数据',
            visible: true,
            disabled: false
          }
        ]
      ]

    }
  },
  created () {
    this.tableData = Data.data
  },
  methods: {
    footerCellClassName ({ $rowIndex, column, columnIndex }) {
      if (columnIndex === 0) {
        if ($rowIndex === 0) {
          return 'col-blue'
        } else {
          return 'col-red'
        }
      }
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age', 'rate'].includes(column.property)) {
            return Utils.mean(data, column.property)
          }
          return null
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return Utils.sum(data, column.property)
          }
          return null
        })
      ]
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
    footerColspanMethod ({ column, columnIndex, data }) {
      if (columnIndex === 3) {
        return {
          rowspan: 1,
          colspan: 2
        }
      } else if (columnIndex === 4) {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    },
    footerMethod1 ({ columns, data }) {
      const footerData = [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['content'].includes(column.property)) {
            return '合并为一行显示'
          }
          return null
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['content'].includes(column.property)) {
            return '合并为一行显示'
          }
          return null
        })
      ]
      return footerData
    },
    // 通用行合并函数（将相同多列数据合并为一行）
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
    footerRowspanMethod ({ $rowIndex, column, columnIndex, data }) {
      if ($rowIndex === 0) {
        if (columnIndex === 2) {
          return { rowspan: 2, colspan: 1 }
        }
      } else if ($rowIndex === 1) {
        if (columnIndex === 2) {
          return { rowspan: 0, colspan: 0 }
        }
      }
    },
    clearDataEvent () {
      this.tableData = []
    },
    exportDataEvent () {
      this.$refs.xTable.openExport()
    },
    importDataEvent () {
      this.$refs.xTable.importData()
    },
    exportDataEvent1 () {
      this.$refs.xTable1.exportData({ type: 'csv' })
    },
    exportSelectEvent () {
      this.$refs.xTable1.exportData({
        data: this.$refs.xTable1.getSelectRecords()
      })
    },
    exportDataEvent2 () {
      this.$refs.xTable2.exportData({
        type: 'csv',
        columnFilterMethod: column => ['name', 'sex'].includes(column.property)
      })
    },
    exportDataEvent3 () {
      this.$refs.xTable3.exportData({
        type: 'csv',
        dataFilterMethod: (row, rowIndex) => rowIndex >= 1 && rowIndex < 3
      })
    },
    exportDataEvent4 () {
      this.$refs.xTable1.exportData({
        filename: '自定义文件名',
        type: 'csv',
        original: true,
        isHeader: false,
        data: this.tableData.map(row => {
          row.date = Utils.toDateString(row.date, 'yyyy-MM-dd')
          return row
        })
      })
    },
    printEvent () {
      this.$refs.xTable5.print()
    },
    printSelectEvent () {
      this.$refs.xTable5.print({
        data: this.$refs.xTable5.getSelectRecords()
      })
    },
    exportDataEvent5 () {
      this.$refs.xTable5.openExport()
    },
    exportDataEvent6 () {
      this.$refs.xTable6.openExport({ types: ['csv'] })
    },
    importDataEvent5 () {
      this.$refs.xTable6.importData({ types: ['csv'] })
    },
    // 快捷菜单
    headerCellContextMenuEvent ({ column }) {
      this.$refs.xTable7.setCurrentColumn(column)
    },
    cellContextMenuEvent ({ row }) {
      this.$refs.xTable7.setCurrentRow(row)
    },
    contextMenuClickEvent ({ menu, row, column }) {
      switch (menu.code) {
        case 'copy':
          // 示例
          if (row && column) {
            if (XEClipboard.copy(row[column.property])) {
              this.$Message.info('已经复制到剪切板')
            }
          }
          break
        default:
          this.$Message.info(`点击了 ${menu.name} 选项`)
      }
    },
    footerMethod2 ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age', 'rate'].includes(column.property)) {
            return Utils.mean(data, column.property)
          }
          return null
        })
      ]
    },
    // 快捷菜单+控制权限
    headerCellContextMenuEvent1 ({ column }) {
      this.$refs.xTable8.setCurrentColumn(column)
    },
    cellContextMenuEvent1 ({ row }) {
      this.$refs.xTable8.setCurrentRow(row)
    },
    visibleMethod ({ type, options, column }) {
      // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示
      // 显示之前处理按钮的操作权限
      let isDisabled = !column || column.property !== 'name'
      let isVisible = column && column.property === 'age'
      options.forEach(list => {
        list.forEach(item => {
          if (['copy', 'remove'].includes(item.code)) {
            item.disabled = isDisabled
          }
          if (['clear', 'filter'].includes(item.code)) {
            item.visible = isVisible
          }
        })
      })
      return true
    },
    contextMenuClickEvent1 ({ menu, row, column }) {
      switch (menu.code) {
        case 'copy':
          // 示例
          if (row && column) {
            if (XEClipboard.copy(row[column.property])) {
              this.$XModal.message({ message: '已复制到剪贴板！', status: 'success' })
            }
          }
          break
        default:
          this.$XModal.message(`点击了 ${menu.name} 选项`)
      }
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
