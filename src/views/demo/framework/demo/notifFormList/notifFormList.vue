<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-02-11 09:14:44
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div class="frame-page">
    <!-- 查询表单 -->
    <z-search-panel>
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告标题：">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
                <z-button type="primary">查询</z-button>
                <z-button>重置</z-button>
          </z-col>
        </z-row>
          <z-spread :no-suspend="false" class="spread-b">
          <z-row>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
              <z-form-item label="公告编号：">
                <z-input v-model="model.notifNo" placeholder="请输入..." />
              </z-form-item>
            </z-col>
          </z-row>
        </z-spread>
      </z-form>
    </z-search-panel>
     <!-- 列表 -->
    <z-tabs value="allOrder" :animated="false" class="m-t-10">
      <z-tab-pane label="进行中" name="allOrder">
          <z-list-panel>
             <div slot="title"></div>
              <div slot="buttons">
                <z-button @click="orderDetail">订单明细</z-button>
                <edit-demo  ref="notifEdit"></edit-demo>
                <z-button>订单导出</z-button>
              </div>
              <z-table :columns="columns" :data="allDatas.tableData"></z-table>
              <z-page class="text-center p-t-10 p-b-10" :page-size="5" :total="allDatas.num" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-total transfer show-elevator></z-page>
          </z-list-panel>
      </z-tab-pane>
      <z-tab-pane label="进行中" name="name3">2</z-tab-pane>
      <z-tab-pane label="交易完成" name="name4">2</z-tab-pane>
      <z-tab-pane label="已取消" name="name5">2</z-tab-pane>
  </z-tabs>
</div>
</template>

<script>
import notifEdit from '../notifEdit/notifEdit'
export default {
  name: 'notifFormList',
  components: {
    'edit-demo': notifEdit
  },
  data: function () {
    return {
      model: {
        notifNo: '',
        notifTitle: '',
        notifContent: '',
        editPer: '',
        editTime: '',
        notifState: '',
        endTime: '',
        notifNum: ''
      },

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
    // 添加事件
    orderDetail: function () {
      // 关闭模态
      this.$refs.notifEdit.handleReset()
      this.$refs.notifEdit.modelIsOpen = true
    },
    // 分页
    pageChange: function () {},
    pageSizeChange: function () {}
  }
}
</script>
