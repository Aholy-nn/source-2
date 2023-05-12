<template>
<div class="frame-page">
  <!-- 基本表格 -->
  <p class="demo-title">基本表格</p>
  <z-list-panel>
    <z-table :columns="columns" :data="allDatas.tableData"></z-table>
    <z-page class="text-center p-t-10 p-b-10" :page-size="5" :total="allDatas.num" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-total transfer show-elevator></z-page>
  </z-list-panel>
  <!-- 带tab -->
  <p class="demo-title">带tab</p>
  <!-- 按钮组-->
  <z-tabs value="allOrder" :animated="false">
      <z-tab-pane label="进行中" name="allOrder">
          <z-list-panel>
              <z-table :columns="columns" :data="allDatas.tableData"></z-table>
              <z-page class="text-center p-t-10 p-b-10" :page-size="5" :total="allDatas.num" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-total transfer show-elevator></z-page>
          </z-list-panel>
      </z-tab-pane>
      <z-tab-pane label="进行中" name="name3">2</z-tab-pane>
      <z-tab-pane label="交易完成" name="name4">2</z-tab-pane>
      <z-tab-pane label="已取消" name="name5">2</z-tab-pane>
  </z-tabs>
  <!-- 带标题 -->
  <p class="demo-title">带标题</p>
   <z-list-panel>
        <div slot="title">表格标题内容</div>
        <div slot="buttons">
          <z-button>订单明细</z-button>
          <z-button>订单导出</z-button>
        </div>
        <z-table :columns="columns" :data="allDatas.tableData"></z-table>
        <z-page class="text-center p-t-10 p-b-10" :page-size="5" :total="allDatas.num" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-total transfer show-elevator></z-page>
    </z-list-panel>
  <!-- 可折叠标题 -->
  <p class="demo-title">标题可折叠</p>
   <z-list-panel collapse>
        <div slot="title">表格标题内容</div>
        <div slot="buttons">
          <z-button>订单明细</z-button>
          <z-button>订单导出</z-button>
        </div>
        <z-table :columns="columns" :data="allDatas.tableData"></z-table>
        <z-page class="text-center p-t-10 p-b-10" :page-size="5" :total="allDatas.num" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-total transfer show-elevator></z-page>
    </z-list-panel>
</div>
</template>
<script>
export default {
  name: 'tableBase',
  data: function () {
    return {
      value1: '1',
      // 表格列
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      // 表数据
      allDatas: {
        num: 10, // 行数
        tableData: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  },
  methods: {
    // 分页
    pageChange: function () {},
    pageSizeChange: function () {}
  }
}
</script>
