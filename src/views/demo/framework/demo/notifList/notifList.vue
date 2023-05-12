<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2019-11-07 10:29:32
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <div class="portlet form-search">
      <z-row>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">公告编号：</label>
            <z-input v-model="model.notifNo" placeholder="请输入..."/>
          </z-col>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">公告标题：</label>
            <z-input v-model="model.notifTitle" placeholder="请输入..."/>
          </z-col>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">编辑人：</label>
            <z-input v-model="model.editPer" placeholder="请输入..."/>
          </z-col>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">失效时间：</label>
            <z-date-picker type="date" placeholder="请选择..." v-model="model.editTime"></z-date-picker>
          </z-col>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">公告状态：</label>
             <z-select v-model="model.notifState" placeholder="请选择...">
                <z-option value="未提交">未提交</z-option>
                <z-option value="提交中">提交中</z-option>
                <z-option value="已提交">已提交</z-option>
            </z-select>
          </z-col>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">结束时间：</label>
             <z-date-picker type="date" placeholder="请选择..." v-model="model.endTime"></z-date-picker>
          </z-col>
      </z-row>
      <div class="btns-group">
        <z-button type="primary">查询</z-button> <z-button>重置</z-button>
      </div>
      <z-spread no-suspend="true">
        <z-row>
          <z-col span="8" class="form-group">
            <label class="ilead-label-just-right">公告编号：</label>
            <z-input v-model="model.notifNo" placeholder="请输入订单编号"/>
          </z-col>
        </z-row>
      </z-spread>
  </div>
  <div class="ilead-table m-t-20">
    <!-- 按钮 -->
    <div class="posi-right">
       <z-button @click="orderDetail">订单明细</z-button>
       <edit-demo ref="notifEdit"></edit-demo>
       <z-button>订单导出</z-button>
    </div>
    <z-tabs value="allOrder" :animated="false">
          <z-tab-pane label="进行中" name="allOrder">
            <!-- zTable组件 -->
            <z-table :columns="columns" :data="allDatas.tableData"></z-table>
              <!-- page -->
              <z-page class="table-page" :page-size="5" :total="allDatas.num" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-total transfer show-elevator></z-page>
              </z-tab-pane>
          <z-tab-pane label="进行中" name="name3">2</z-tab-pane>
          <z-tab-pane label="交易完成" name="name4">2</z-tab-pane>
          <z-tab-pane label="已取消" name="name5">2</z-tab-pane>
      </z-tabs>
    </div>
</div>
</template>

<script>
import notifEdit from '../notifEdit/notifEdit'
export default {
  name: 'notifList',
  components: {
    'edit-demo': notifEdit
  },
  data: function () {
    return {
      // 表单
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
      this.$refs.notifEdit.modelIsOpen = true
    },
    // 分页
    pageChange: function () {},
    pageSizeChange: function () {}
  }
}
</script>
