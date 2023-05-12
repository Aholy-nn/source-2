<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2019-10-17 10:08:30
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <div class="layout-head">
    <h2 class="m-b-20">表单归类</h2>
     <p class="m-t-5"><strong>优点：</strong>可以帮助用户更好的理解梳理信息，避免用户在过度的信息迷失或者焦躁。</p>
     <p class="m-t-5"><strong>使用场景：</strong>表单内容过多且繁琐，需进行信息分类，并添加标题。</p>
  </div>

  <z-form ref="model" :model="model" :label-width="120" label-position="right">
    <z-edit-panel class="m-t-15">
      <p slot="title">出差信息</p>
      <z-row>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="出差事由：">
            <z-input v-model="model.notifNo" placeholder="请输入..." />
          </z-form-item>
        </z-col>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="合同编号：">
            <z-input v-model="model.notifTitle" placeholder="请输入..." />
          </z-form-item>
        </z-col>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="出差时间：">
              <date-picker v-model="model.editTime" type="date" clearable placeholder="请选择..."></date-picker>
          </z-form-item>
        </z-col>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="审批人：">
            <z-input v-model="model.editPer" placeholder="请输入..." />
          </z-form-item>
        </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
                <z-form-item label="紧急程度：" prop="">
                <z-checkbox-group>
                    <z-checkbox v-for="item in model.urgency" :value="item.value" :key="item.value">{{item.label}}</z-checkbox>
                </z-checkbox-group>
              </z-form-item>
          </z-col>
      </z-row>
    </z-edit-panel>
    <z-edit-panel class="m-t-15">
      <p slot="title">行程信息</p>
      <z-row>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="出发城市：">
            <z-input v-model="model.fromCity" placeholder="请输入..." />
          </z-form-item>
        </z-col>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="出发时间：">
            <z-input v-model="model.goTime" placeholder="请输入..." />
          </z-form-item>
        </z-col>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="返程时间：">
              <date-picker v-model="model.backTime" type="date" clearable placeholder="请选择..."></date-picker>
          </z-form-item>
        </z-col>
        <z-col span="8" :xs="24" :sm="12" :lg="8">
          <z-form-item label="交通类型：">
            <z-input v-model="model.trafficType" placeholder="请输入..." />
          </z-form-item>
        </z-col>
      </z-row>
    </z-edit-panel>
    <z-list-panel class="m-t-15">
      <div slot="title">同行人员</div>
      <z-table :columns="columns" :data="tableData"></z-table>
    </z-list-panel>
  </z-form>
  <div class="footer-place"></div>
  <z-footer class="footer-fixed text-right">
          <z-button type="primary">提交</z-button>
  </z-footer>
 </div>

</template>

<script>
export default {
  name: 'formClassify',
  data: function () {
    return {
      model: {
        tripReason: '',
        contractId: '',
        tripTime: '',
        approve: '',
        emergencyType: '',
        urgency: [
          {
            value: '1',
            label: '紧急'
          },
          {
            value: '2',
            label: '一般'
          },
          {
            value: '3',
            label: '不紧急'
          }
        ],
        fromCity: '',
        goTime: '',
        backTime: '',
        trafficType: ''
      },
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '工号',
          key: 'jobNum'
        },
        {
          title: '所属部门',
          key: 'department'
        },
        {
          title: 'Action',
          key: 'action',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'Edit')
            ])
          }
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          jobNum: 1222228,
          department: '研发部'
        },
        {
          name: 'John Brown',
          jobNum: 1222228,
          department: '研发部'
        },
        {
          name: 'John Brown',
          jobNum: 1222228,
          department: '研发部'
        },
        {
          name: 'John Brown',
          jobNum: 1222228,
          department: '研发部'
        },
        {
          name: 'John Brown',
          jobNum: 1222228,
          department: '研发部'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
