<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-05-26 11:55:30
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="frame-page">
    <div class="m-t-20">
        <div class="desc">
          <header>展开行、展开所有行</header>
          <p>通过设置 expand-config 属性和 type=expand 与 slot 可以开启展开行功能</p>
          <p>默认展开所有行，通过 expandAll 参数设置默认展开所有行</p>
        </div>
         <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="$refs.xTable.toggleRowExpansion(tableData[1])">切换第二行展开</vxe-button>
            <vxe-button @click="$refs.xTable.setRowExpansion([tableData[2], tableData[3]], true)">设置第三、四行展开</vxe-button>
            <vxe-button @click="$refs.xTable.setAllRowExpansion(true)">设置所有行展开</vxe-button>
            <vxe-button @click="$refs.xTable.clearRowExpand()">关闭所有行展开</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable"
          border
          :data="tableData"
          @toggle-row-expand="toggleExpandChangeEvent">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column type="expand" width="60">
            <template v-slot:content="{ row, rowIndex }">
              <template v-if="rowIndex === 1">
                <vxe-table
                  border
                  :data="tableData">
                  <vxe-table-column field="role" title="Role"></vxe-table-column>
                  <vxe-table-column field="age" title="Age"></vxe-table-column>
                </vxe-table>
              </template>
              <template v-else>
                <ul>
                  <li>
                    <span>ID：</span>
                    <span>{{ row.id }}</span>
                  </li>
                  <li>
                    <span>Name：</span>
                    <span>{{ row.name }}</span>
                  </li>
                  <li>
                    <span>UpdateTime：</span>
                    <span>{{ row.updateTime }}</span>
                  </li>
                  <li>
                    <span>CreateTime：</span>
                    <span>{{ row.createTime }}</span>
                  </li>
                </ul>
              </template>
            </template>
          </vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
    </div>
   <div class="m-t-20">
        <div class="desc">
            <p>默认展开指定行，通过 expandRowKeys 参数设置默认展开行，指定默认值需要有 row-id</p>
        </div>
        <vxe-table
            border
            row-id="id"
            :expand-config="{expandRowKeys: ['10002']}"
            :data="tableData">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column type="expand" width="60">
            <template v-slot:content="{ row, rowIndex }">
                <template v-if="rowIndex === 1">
                <vxe-table
                    border
                    :data="tableData">
                    <vxe-table-column field="role" title="Role"></vxe-table-column>
                    <vxe-table-column field="age" title="Age"></vxe-table-column>
                </vxe-table>
                </template>
                <template v-else>
                <ul>
                    <li>
                    <span>ID：</span>
                    <span>{{ row.id }}</span>
                    </li>
                    <li>
                    <span>Name：</span>
                    <span>{{ row.name }}</span>
                    </li>
                    <li>
                    <span>UpdateTime：</span>
                    <span>{{ row.updateTime }}</span>
                    </li>
                    <li>
                    <span>CreateTime：</span>
                    <span>{{ row.createTime }}</span>
                    </li>
                </ul>
                </template>
            </template>
            </vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
    </div>

    <div class="m-t-20">
        <div class="desc">
          <header>工具栏</header>
          <p>使用自带的工具栏 vxe-toolbar，配合模板可以非常简单的实现强大的功能
            支持显示/隐藏列、列宽拖动状态的保存功能
            注：组成一套完整的表格，工具栏和表格必须是上下相邻关系，渲染时会自动进行上下关联，不允许更换位置（如果是复杂的布局不建议使用工具栏，自行写模板即可）</p>
        </div>
          <vxe-toolbar
          export
          :buttons="toolbarButtons"
          :refresh="{query: findList}"></vxe-toolbar>

        <vxe-table
          border
          :loading="loading"
          :data="tableData1">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="rate" title="Rate"></vxe-table-column>
        </vxe-table>
      </div>
      <div class="m-t-20">
        <div class="desc">
          <header>显示隐藏列</header>
          <p>通过 customs 来初始化绑定动态列：{field: 字段名, visible: 默认是否显示}
            通过函数式调用 showColumn、hideColumn 操作列的显示/隐藏
            还可以通过修改列的 visible 属性，可以轻松实现强大的显示/隐藏列的配置功能，最后调用 refreshColumn 刷新列</p>
        </div>
        <div class="table-oper">
          <span class="menu-btn">
            <i class="icon-menu"></i>
            <div class="menu-wrapper">
              <template v-for="(column,index) in customColumns2">
                <vxe-checkbox
                  v-if="column.property"
                  class="checkbox-item"
                  v-model="column.visible"
                  :key="index"
                  @change="$refs.xTable1.refreshColumn()">{{ column.title }}</vxe-checkbox>
              </template>
            </div>
          </span>
        </div>

        <vxe-table
          ref="xTable1"
          border
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
    </div>

    <div class="m-t-20">
        <div class="desc">
          <p>如果是根据服务端数据控制显示/隐藏列，则需要手动调用 reloadCustoms 更新即可</p>
      </div>
        <div class="table-oper">
          <span class="menu-btn">
            <i class="icon-menu"></i>
            <div class="menu-wrapper">
              <template v-for="(column,index) in customColumns1">
                <vxe-checkbox
                  v-if="column.property"
                  class="checkbox-item"
                  v-model="column.visible"
                  :key="index"
                  @change="$refs.xTable2.refreshColumn()">{{ column.title }}</vxe-checkbox>
              </template>
            </div>
          </span>
        </div>

        <vxe-table
          ref="xTable2"
          border
          :data="tableData2">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>

    </div>
     <div class="m-t-20">
        <div class="desc">
          <p>通过属性 field 和 visible 设置默认隐藏</p>

        </div>

        <template v-for="(column,index) in customColumns">
          <vxe-checkbox
            v-if="column.property"
            class="checkbox-item"
            v-model="column.visible"
            :key="index">{{ column.title }}</vxe-checkbox>
        </template>

        <vxe-toolbar :data="tableData">
          <template v-slot:buttons>
            <vxe-button @click="$refs.xTable3.refreshColumn()">刷新</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="xTable3"
          border
          height="400"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column title="基本信息">
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
            <vxe-table-column title="其他信息">
              <vxe-table-column field="rate" title="Rate"></vxe-table-column>
              <vxe-table-column field="flag" title="Flag"></vxe-table-column>
            </vxe-table-column>
          </vxe-table-column>
        </vxe-table>
      </div>

</div>
</template>

<script>
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import Data from './data.js'

Vue.use(VXETable)
export default {
  data () {
    return {
      tableData: [],
      tableData1: [],
      customColumns: [],
      tableData2: [],
      customColumns1: [],
      loading: false,
      toolbarButtons: [
        {
          code: 'btn1',
          name: '新增'
        },
        {
          name: '下拉按钮',
          dropdowns: [
            {
              name: '按钮111',
              code: 'btn2'
            },
            {
              name: '按钮222',
              code: 'btn3'
            }
          ]
        }
      ],
      customColumns2: [
        {
          field: 'age',
          visible: false
        }
      ]
    }
  },
  created () {
    this.tableData = Data.data
    this.findList()
    this.tableData2 = Data.data
  },
  methods: {
    toggleExpandChangeEvent ({ row }) {
      console.log('行展开、收起事件')
    },
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData1 = Data.data
          this.loading = false
          resolve()
        }, 300)
      })
    }
  }
}
</script>
<style>
@import "./index.css";
</style>
