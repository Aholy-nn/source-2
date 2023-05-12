<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-25 16:48:38
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <Anchor show-ink affix :offset-top="100" :scroll-offset="140" class="anchor-box">
        <AnchorLink href="#anchor1" title="尺寸" />
        <AnchorLink href="#anchor2" title="省略" />
        <AnchorLink href="#anchor3" title="单元格样式" />
        <AnchorLink href="#anchor4" title="cell-click改变颜色" />
        <AnchorLink href="#anchor5" title="单元格动态样式" />
        <AnchorLink href="#anchor6" title="highlight-current-row" />
        <AnchorLink href="#anchor7" title="自定义模板" />
    </Anchor>
    <div class="m-t-20" id="anchor1">
        <div class="vxe-head">
             <p>尺寸</p>
        </div>
        <vxe-table highlight-hover-row size="medium" :data="tableData">
            <vxe-table-column type="seq" title="序号" width="80"></vxe-table-column>
            <vxe-table-column field="name" title="名字"></vxe-table-column>
            <vxe-table-column field="sex" title="性别"></vxe-table-column>
            <vxe-table-column field="address" title="地址"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20">
        <vxe-table highlight-hover-row size="mini" :data="tableData">
            <vxe-table-column type="seq" title="序号" width="80"></vxe-table-column>
            <vxe-table-column field="name" title="名字"></vxe-table-column>
            <vxe-table-column field="sex" title="性别"></vxe-table-column>
            <vxe-table-column field="address" title="地址"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor2">
        <div class="vxe-head">
          <p>省略</p>
        </div>
          <vxe-table
              highlight-hover-row
              :data="tableData">
              <vxe-table-column type="seq" width="60"></vxe-table-column>
              <vxe-table-column field="address" title="超过隐藏时显示为省略号————————————" show-header-overflow show-overflow></vxe-table-column>
              <vxe-table-column field="date" title="内容超过隐藏时显示为省略号并用原生 title 显示" show-overflow="title">
                <template>
                  <span>111111111111 111111111111111111 22222222222222222222222222222222222</span>
                </template>
              </vxe-table-column>
              <vxe-table-column field="age" title="表头超过隐藏时显示为省略号并用原生 title 显示" show-header-overflow="title">
                <template v-slot:header>
                  <span>33333333333333333333333333 5555555555555555555555555555555555555555555555</span>
                </template>
              </vxe-table-column>
              <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
            </vxe-table>
     </div>
     <div class="m-t-20">
          <p>斑马线条纹、带边框、列和行选中高亮</p>
          <vxe-table stripe highlight-current-row highlight-hover-row highlight-hover-column  highlight-current-column
              border :data="tableData">
              <vxe-table-column type="seq" title="序号" width="80"></vxe-table-column>
              <vxe-table-column field="name" title="名字"></vxe-table-column>
              <vxe-table-column field="sex" title="性别"></vxe-table-column>
              <vxe-table-column field="address" title="地址"></vxe-table-column>
          </vxe-table>
    </div>
    <div class="m-t-20" id="anchor3">
        <p>单元格样式</p>
        <vxe-table
        border
        class="mytable-style"
        :header-cell-class-name="headerCellClassName"
        :row-class-name="rowClassName"
        :cell-class-name="cellClassName"
        :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor4">
        <p>通过 cell-click 事件点击改变颜色</p>
        <vxe-table
        border
        class="mytable-style"
        :cell-class-name="cellClassName"
        :data="tableData"
        @cell-click="cellClickEvent">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor5">
        <p>单元格动态样式</p>
        <vxe-table
        border
        :header-cell-style="headerCellStyle"
        :row-style="rowStyle"
        :cell-style="cellStyle"
        :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor6">
        <p>使用 highlight-current-row 显示高亮行；用户操作点击选项时会触发事件 current-change</p>
        <vxe-toolbar>
        <template v-slot:buttons>
            <vxe-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</vxe-button>
            <vxe-button @click="$refs.xTable.clearCurrentRow()">取消选中</vxe-button>
            <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
        </template>
        </vxe-toolbar>
        <vxe-table
        border
        highlight-hover-row
        highlight-current-row
        ref="xTable"
        height="300"
        :data="tableData"
        @current-change="currentChangeEvent">
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'xe-utils'
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
          sex: '男',
          address: '深圳市 圳市 市 xxx'
        },
        {
          id: 10002,
          name: '名字1',
          role: '角色',
          sex: '男',
          address: '深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
          name: '名字1',
          role: '角色',
          sex: '男',
          address: '深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
          name: '名字1',
          role: '角色',
          sex: '男',
          address: '深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
          name: '名字1',
          role: '角色',
          sex: '男',
          address: '深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx深圳市 圳市 市 xxx'
        }
      ],
      selectRow: null,
      selectColumn: null
    }
  },
  methods: {
    headerCellClassName ({ column, columnIndex }) {
      if (column.property === 'name') {
        return 'col-blue'
      }
    },
    rowClassName ({ row, rowIndex }) {
      if ([2, 3, 5].includes(rowIndex)) {
        return 'row-green'
      }
    },
    // cellClassName ({ row, rowIndex, column, columnIndex }) {
    //   if (column.property === 'sex') {
    //     if (row.sex >= '1') {
    //       return 'col-red'
    //     } else if (row.age === 26) {
    //       return 'col-orange'
    //     }
    //   }
    // }
    cellClassName ({ row, column }) {
      if (row === this.selectRow & column === this.selectColumn) {
        return 'col-orange'
      }
    },
    cellClickEvent ({ row, column }) {
      this.selectRow = row
      this.selectColumn = column
    },
    headerCellStyle ({ column, columnIndex }) {
      if (column.property === 'name') {
        return {
          backgroundColor: '#f60',
          color: '#ffffff'
        }
      }
    },
    rowStyle ({ row, rowIndex }) {
      if ([2, 3, 5].includes(rowIndex)) {
        return {
          backgroundColor: 'red',
          color: '#ffffff'
        }
      }
    },
    cellStyle ({ row, rowIndex, column, columnIndex }) {
      if (column.property === 'sex') {
        if (row.sex >= '1') {
          return {
            backgroundColor: '#187'
          }
        } else if (row.age === 26) {
          return {
            backgroundColor: '#2db7f5'
          }
        }
      }
    },
    currentChangeEvent ({ row }) {
      console.log('行选中事件')
    },
    getCurrentEvent () {
      this.$XModal.alert(JSON.stringify(this.$refs.xTable.getCurrentRow()))
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
