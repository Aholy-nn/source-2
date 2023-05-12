<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2019-10-17 10:08:30
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-card dis-hover>
    <z-row>
        <z-col :xs="24" :sm="12" :lg="8">
            <div class="m-t-15 m-b-15 text-center">
              <p>进行中的任务</p>
              <p style="font-size: 24px;">10 个任务</p>
            </div>
        </z-col>
          <z-col :xs="24" :sm="12" :lg="8">
            <div class="m-t-15 m-b-15 text-center">
              <p>进行中的任务</p>
              <p style="font-size: 24px;">10 个任务</p>
            </div>
        </z-col>
          <z-col :xs="24" :sm="12" :lg="8">
            <div class="m-t-15 m-b-15 text-center">
              <p>进行中的任务</p>
              <p style="font-size: 24px;">10 个任务</p>
            </div>
        </z-col>
    </z-row>
  </z-card>
  <z-card class="m-t-15" dis-hover>
      <div slot="title"><p>基础列表</p></div>
      <div slot="extra">
        <z-radio-group type="button">
            <z-radio label="全部"></z-radio>
            <z-radio label="进行中"></z-radio>
            <z-radio label="已完成"></z-radio>
        </z-radio-group>
        <z-input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    </div>
    <z-table :columns="columns" :data="allDatas.tableData"></z-table>
    <!-- page -->
    <z-page class="m-t-15 text-right" :page-size="5" :total="allDatas.num" show-sizer show-total transfer show-elevator></z-page>
  </z-card>
 </div>
</template>

<script>
export default {
  name: 'listBase',
  data: function () {
    return {
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

  }
}
</script>
<style scoped>

</style>
