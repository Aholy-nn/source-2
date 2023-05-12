<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-26 10:50:13
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <div class="m-t-20"  style="height: 200px;">
        <p>最大高度、最大高度百分比</p>
        <vxe-table
          max-height="80%"
          :show-header="false"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
     <div class="m-t-20"  style="height: 200px;">
        <p>height=auto表格会相对于父容器的高度去铺满、相对于父容器的百分比、固定表头、start-index 自定义起始序号</p>
        <vxe-table
          border
          height="auto"
          :seq-config="{startIndex:100}"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
     <div class="m-t-20">
        <p>单选表格，用户手动选中时会触发事件 radio-change</p>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="$refs.xTable1.setRadioRow(tableData[1])">设置第二行选中</vxe-button>
            <vxe-button @click="clearRadioRowEevnt">取消选中</vxe-button>
            <vxe-button @click="getRadioEvent1">获取选中</vxe-button>
          </template>
        </vxe-toolbar>
        <vxe-table
          border
          ref="xTable1"
          class="radio-table"
          height="300"
          :data="tableData"
          :row-class-name="rowClassName"
           :radio-config="{labelField: 'name', checkMethod}"
          @cell-click="cellClickEvent"
          @radio-change="radioChangeEvent">
          <vxe-table-column type="radio" width="60">
            <template v-slot:header>
              <vxe-button type="text" @click="clearRadioRowEevnt" :disabled="!selectRow">取消</vxe-button>
            </template>
          </vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
     <div class="m-t-20">
        <p>两种方式混合使用、两种方式同时用</p>
         <vxe-table
          border
          highlight-current-row
          height="300"
          :radio-config="{labelField: 'name', trigger: 'row'}"
          :data="tableData">
          <vxe-table-column type="radio" title="还可以这样" width="120"></vxe-table-column>
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
          address: '深圳市 圳市 市 xxx'
        },
        {
          id: 10003,
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
          address: '深圳市 圳市 市 xxx'
        }
      ],
      selectRow: null
    }
  },
  methods: {
    cellClickEvent () {
      console.log('单元格点击事件')
    },
    radioChangeEvent ({ row }) {
      this.selectRow = row
      console.log('单选事件')
    },
    clearRadioRowEevnt () {
      this.selectRow = null
      this.$refs.xTable1.clearRadioRow()
    },
    rowClassName ({ row }) {
      return {
        'row-checked': this.selectRow === row
      }
    },
    getRadioEvent1 () {
      this.$XModal.alert(JSON.stringify(this.$refs.xTable1.getRadioRow()))
    },
    checkMethod ({ row }) {
      return row.age > 26
    },
    currentChangeEvent ({ row }) {
      console.log('行选中事件')
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
