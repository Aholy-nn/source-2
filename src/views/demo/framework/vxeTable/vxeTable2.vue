<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-25 17:20:25
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <Anchor show-ink affix :offset-top="100" :scroll-offset="140" class="anchor-box">
        <AnchorLink href="#anchor1" title="尺寸、滚动条" />
        <AnchorLink href="#anchor2" title="列宽拖动" />
        <AnchorLink href="#anchor3" title="横向滚动条" />
        <AnchorLink href="#anchor4" title="固定列和拖动" />
        <AnchorLink href="#anchor5" title="同时固定列和表头" />
        <AnchorLink href="#anchor6" title="固定左右列和拖动" />
        <AnchorLink href="#anchor7" title="分组表头和拖动" />
    </Anchor>
    <div class="m-t-20" id="anchor1">
        <p>尺寸、滚动条</p>
        <vxe-table
          height="200"
          :show-header="false"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor2">
        <p>设置 resizable 属性启用列宽拖动功能</p>
        <vxe-table
          resizable
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="time" title="Time"></vxe-table-column>
          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor3">
       <p>横向滚动条</p>
       <vxe-table
          border
          resizable
          highlight-hover-row
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" width="300"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" width="300"></vxe-table-column>
          <vxe-table-column field="age" title="Age" width="300"></vxe-table-column>
          <vxe-table-column field="time" title="Time" width="300"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="300" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor4">
        <p>固定左列宽拖动</p>
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column field="name" title="Name" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column field="age" title="Age" width="100" fixed="left"></vxe-table-column>
          <vxe-table-column field="atrr1" title="atrr1" width="200"></vxe-table-column>
          <vxe-table-column field="atrr2" title="atrr2" width="200"></vxe-table-column>
          <vxe-table-column field="atrr3" title="atrr3" width="200"></vxe-table-column>
          <vxe-table-column field="atrr4" title="atrr4" width="200"></vxe-table-column>
          <vxe-table-column field="time" title="Time" width="200"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="200" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor5">
        <p>固定右列宽拖动、同时固定列和表头</p>
        <vxe-table
          border
          resizable
          height="200"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" width="200"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>
          <vxe-table-column field="age" title="Age" width="200"></vxe-table-column>
          <vxe-table-column field="atrr1" title="atrr1" width="200"></vxe-table-column>
          <vxe-table-column field="atrr2" title="atrr2" width="200"></vxe-table-column>
          <vxe-table-column field="atrr3" title="atrr3" width="200"></vxe-table-column>
          <vxe-table-column field="atrr4" title="atrr4" width="200"></vxe-table-column>
          <vxe-table-column field="date" title="Date" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column field="time" title="Time" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="100" fixed="right"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor6">
        <p>左右固定列宽拖动</p>
        <vxe-table
          border
          resizable
          show-overflow
           height="200"
          :data="tableData">
          <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column field="name" title="Name" width="100"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" width="100"></vxe-table-column>
          <vxe-table-column field="age" title="Age" width="100"></vxe-table-column>
          <vxe-table-column field="atrr1" title="atrr1" width="200"></vxe-table-column>
          <vxe-table-column field="atrr2" title="atrr2 其他2" width="200"></vxe-table-column>
          <vxe-table-column field="atrr3" title="atrr3" width="200"></vxe-table-column>
          <vxe-table-column field="atrr4" title="atrr4 其他4" width="200"></vxe-table-column>
          <vxe-table-column field="date" title="Date" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column field="time" title="Time" width="100" fixed="right"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="100" fixed="right"></vxe-table-column>
        </vxe-table>
    </div>
    <div class="m-t-20" id="anchor7">
        <p>分组表头拖动</p>
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column title="基本信息">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
          </vxe-table-column>
          <vxe-table-column title="更多信息">
            <vxe-table-column field="role" title="Role"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column title="详细信息">
              <vxe-table-column field="sex" title="Sex"></vxe-table-column>
              <vxe-table-column field="date" title="Date" width="140" show-overflow></vxe-table-column>
            </vxe-table-column>
          </vxe-table-column>
          <vxe-table-column field="address" title="Address" width="200" show-overflow></vxe-table-column>
        </vxe-table>
    </div>
     <div class="m-t-20">
        <p>左右固定列的分组表头拖动</p>
        <vxe-table
          border
          resizable
          :data="tableData">
          <vxe-table-column title="基本信息" fixed="left">
            <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
            <vxe-table-column field="name" title="Name" fixed="left" width="100"></vxe-table-column>
          </vxe-table-column>
          <vxe-table-column title="更多信息">
            <vxe-table-column field="role" title="Role" width="300"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" width="300"></vxe-table-column>
            <vxe-table-column title="详细信息">
              <vxe-table-column field="sex" title="Sex" width="300"></vxe-table-column>
              <vxe-table-column field="date" title="Date" width="300"></vxe-table-column>
            </vxe-table-column>
          </vxe-table-column>
          <vxe-table-column title="其他信息" fixed="right">
            <vxe-table-column field="age" title="Age" width="100" fixed="right" show-overflow></vxe-table-column>
            <vxe-table-column field="address" title="Address" width="100" fixed="right" show-overflow></vxe-table-column>
          </vxe-table-column>
        </vxe-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'

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
      ]
    }
  },
  methods: {

  }
}
</script>
<style>
@import "./index.css";
</style>
