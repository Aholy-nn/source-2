<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 19:00:17
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <div class="layout-head">
    <h2 class="m-b-20">出差审批编号：100000</h2>
      <z-row type="flex" justify="space-between">
          <z-col span="16">
            <z-row>
              <z-col :xs="24" :sm="12">
                <div class="description-term">申请人：</div>
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
        </z-col>
        <z-col span="6">
          <z-row>
            <z-col :xs="24" :sm="12">
              <div class="">状态</div>
              <div style="font-size: 20px;">待审批</div>
            </z-col>
            <z-col :xs="24" :sm="12">
              <div style="color: rgb(128, 134, 149);">紧急程度</div>
              <z-tag color="red">紧急</z-tag>
            </z-col>
          </z-row>
        </z-col>
      </z-row>
  </div>
  <z-card class="m-t-15" dis-hover>
    <p slot="title">审核流程</p>
    <z-steps :current="1">
      <z-step title="申请" content="申请人：老蒋"></z-step>
      <z-step title="Leader 审批" content="审批人：小雪"></z-step>
      <z-step title="财务审批" content="审批人：zrz"></z-step>
  </z-steps>
  </z-card>
  <z-card class="m-t-15" dis-hover>
    <p slot="title">基本信息</p>
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
  </z-card>
  <z-card class="m-t-15" dis-hover>
    <p slot="title">行程信息</p>
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
  </z-card>
  <z-card class="m-t-15" dis-hover>
    <p slot="title">同行人员</p>
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
