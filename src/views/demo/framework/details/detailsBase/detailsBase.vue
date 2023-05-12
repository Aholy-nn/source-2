<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 19:00:25
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-card dis-hover>
    <p class="m-b-20">详情信息</p>
      <z-row>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
          <div class="description-term">姓名：</div>
          <div class="description-detail">小雪</div>
        </z-col>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
          <div class="description-term">性别：</div>
          <div class="description-detail">女</div>
        </z-col>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
            <div class="description-term">姓名：</div>
            <div class="description-detail">小雪</div>
        </z-col>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
          <div class="description-term">城市：</div>
          <div class="description-detail">大连市</div>
        </z-col>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
            <div class="description-term">生日：</div>
            <div class="description-detail">xxxx-xx-xx</div>
        </z-col>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
            <div class="description-term">邮箱：</div>
            <div class="description-detail">小雪@ilead.com</div>
        </z-col>
        <z-col :xs="24" :sm="12" :lg="8" :xxl="6">
            <div class="description-term">地址：</div>
            <div class="description-detail">大连市高新园区</div>
        </z-col>
      </z-row>
    <divider dashed/>
      <p class="m-b-20">详情信息</p>
        <z-row>
        <z-col :xs="24" :sm="12">
          <div class="description-term">姓名：</div>
          <div class="description-detail">小雪</div>
        </z-col>
        <z-col :xs="24" :sm="12">
          <div class="description-term">性别：</div>
          <div class="description-detail">女</div>
        </z-col>
        <z-col :xs="24" :sm="12">
            <div class="description-term">姓名：</div>
            <div class="description-detail">小雪</div>
        </z-col>
        <z-col :xs="24" :sm="12">
          <div class="description-term">城市：</div>
          <div class="description-detail">大连市</div>
        </z-col>
        <z-col :xs="24" :sm="12">
            <div class="description-term">生日：</div>
            <div class="description-detail">xxxx-xx-xx</div>
        </z-col>
        <z-col :xs="24" :sm="12">
            <div class="description-term">邮箱：</div>
            <div class="description-detail">小雪@ilead.com</div>
        </z-col>
        <z-col :xs="24" :sm="12">
            <div class="description-term">地址：</div>
            <div class="description-detail">大连市高新园区</div>
        </z-col>
      </z-row>
    <divider dashed/>
    <z-table :columns="columns" :data="allDatas.tableData"></z-table>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'detailsBase',
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
    @import "../../../../../styles/framework/pages/details/details.css";
</style>
