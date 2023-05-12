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
    <h2 class="m-b-20">表单详情</h2>
     <p class="m-t-5"><strong>使用场景：</strong>用于只读信息。</p>
  </div>
  <z-detail-panel class="m-t-15">
    <p slot="title">基本信息</p>
     <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告编号：">
              1000606345621
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告标题：">
              设备管理通知
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="编辑人：">
              Aresn
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告状态：">
              已提交
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="结束时间：">
              2019-11-30
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="紧急程度：" prop="">
                  非常紧急
            </z-form-item>
          </z-col>
        </z-row>
    </z-form>
  </z-detail-panel>
   <z-detail-panel class="m-t-15">
     <p slot="title">其他信息</p>
     <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12">
            <z-form-item label="公告编号：">
              1000606345621
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12">
            <z-form-item label="公告标题：">
              设备管理通知
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12">
            <z-form-item label="编辑人：">
              Aresn
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12">
            <z-form-item label="公告状态：">
              已提交
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12">
            <z-form-item label="结束时间：">
              2019-11-30
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12">
            <z-form-item label="紧急程度：" prop="">
                  非常紧急
            </z-form-item>
          </z-col>
        </z-row>
    </z-form>
  </z-detail-panel>
 </div>
</template>
<script>
export default {
  name: 'formAdvanced',
  data: function () {
    return {
      model: {
        notifNo: '',
        notifTitle: '',
        notifContent: '',
        editPer: '',
        editTime: '',
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
        notifState: [
          {
            value: '01',
            label: '未提交'
          },
          {
            value: '02',
            label: '提交中'
          },
          {
            value: '03',
            label: '已提交'
          }
        ],
        endTime: '',
        notifNum: ''
      }
    }
  },
  methods: {
  }
}
</script>
