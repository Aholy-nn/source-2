<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2019-10-17 10:08:30
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-edit-panel>
    <p slot="title">基础用法</p>
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
            <z-form-item label="公告状态：" >
              <z-select v-model="model.notifState" placeholder="请选择...">
                <z-option v-for="item in model.notifState" :value="item.value" :key="item.value">{{ item.label }}</z-option>
              </z-select>
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="结束时间：">
                <date-picker v-model="model.editTime" type="date" clearable placeholder="请选择..."></date-picker>
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
    </z-form>
  </z-edit-panel>

  <z-edit-panel class="m-t-15">
    <p slot="title">标签顶部对齐</p>
      <z-form ref="model" :model="model" label-position="top">
        <z-row :gutter="20">
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
            <z-form-item label="公告状态：" >
              <z-select v-model="model.notifState" placeholder="请选择...">
                <z-option v-for="item in model.notifState" :value="item.value" :key="item.value">{{ item.label }}</z-option>
              </z-select>
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="结束时间：">
                <date-picker v-model="model.editTime" type="date" clearable placeholder="请选择..."></date-picker>
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
    </z-form>
  </z-edit-panel>
 <z-edit-panel class="m-t-15">
    <p slot="title">标签显示两行</p>
      <!--z-form-item,添加class属性twoline-->
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告编号公告编号公告编号公告编号公告编号：" class="twoline">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告标题：" class="twoline">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告标题：" class="twoline">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
        </z-row>
    </z-form>
  </z-edit-panel>
  <z-edit-panel class="m-t-15">
    <p slot="title">大屏显示四列</p>
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告标题：">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="公告状态：" >
              <z-select v-model="model.notifState" placeholder="请选择...">
                <z-option v-for="item in model.notifState" :value="item.value" :key="item.value">{{ item.label }}</z-option>
              </z-select>
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
            <z-form-item label="结束时间：">
                <date-picker v-model="model.editTime" type="date" clearable placeholder="请选择..."></date-picker>
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8" :xxl="6">
                  <z-form-item label="紧急程度：" prop="">
                  <z-checkbox-group>
                      <z-checkbox v-for="item in model.urgency" :value="item.value" :key="item.value">{{item.label}}</z-checkbox>
                  </z-checkbox-group>
                </z-form-item>
            </z-col>
        </z-row>
    </z-form>
  </z-edit-panel>
  <div class="footer-place"></div>
  <z-footer class="footer-fixed text-right">
          <z-button type="primary">Save</z-button>
          <z-button>Close</z-button>
  </z-footer>
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
