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
    <h2 class="m-b-20">基础表单</h2>
     <p><strong>优点：</strong>单列显示，从人眼移动轨迹来说，不间断地垂直视觉引导，可以很好的保证填写效率。</p>
     <p class="m-t-5"><strong>使用场景：</strong>页面的垂直空间允许的时候使用。</p>
  </div>
  <z-edit-panel class="m-t-15 p-t-20">
      <z-row>
          <z-col span="18" push="3"  :xs="{ span: 18, push: 3 }" :lg="{ span: 14, push: 5 }">
            <z-form ref="addAddressForm" :model="formItem" :rules="ruleValidate" :label-width="120" label-position="right">
                <!-- 输入框 -->
                <z-form-item label="Full Name" prop="fullName">
                    <z-input v-model="formItem.fullName" placeholder="Enter something..."></z-input>
                </z-form-item>
                <!-- 三个输入框一排 -->
                <z-form-item label="Tel Number">
                    <z-row>
                      <z-col span="2">
                        <z-form-item>
                            <z-input v-model="formItem.telCountry" placeholder="86"></z-input>
                        </z-form-item>
                      </z-col>
                      <z-col span="2" style="text-align: center">-</z-col>
                      <z-col span="6">
                          <z-form-item>
                            <z-input v-model="formItem.telProvince" placeholder="0411"></z-input>
                        </z-form-item>
                      </z-col>
                      <z-col span="2" style="text-align: center">-</z-col>
                      <z-col span="12">
                          <z-form-item>
                            <z-input v-model="formItem.telNumber" placeholder="13376883333"></z-input>
                          </z-form-item>
                      </z-col>
                    </z-row>
                </z-form-item>
                <!-- 下拉 -->
                <z-form-item label="Country/Region" prop="">
                    <z-select v-model="formItem.region">
                        <z-option value="beijing">New York</z-option>
                        <z-option value="shanghai">London</z-option>
                        <z-option value="shenzhen">Sydney</z-option>
                    </z-select>
                </z-form-item>
                  <!-- 下拉 -->
                <z-form-item label="Time" prop="">
                    <z-date-picker type="date" placeholder="请选择..."></z-date-picker>
                </z-form-item>
                <!-- 多选 -->
                <z-form-item label="" prop="">
                  <z-checkbox-group>
                      <z-checkbox>Checkbox1</z-checkbox>
                      <z-checkbox>Checkbox2</z-checkbox>
                      <z-checkbox>Checkbox3</z-checkbox>
                    </z-checkbox-group>
                </z-form-item>
                <!-- 单选 -->
                <z-form-item label="" prop="">
                    <z-radio-group type="button">
                        <z-radio label="北京"></z-radio>
                        <z-radio label="上海"></z-radio>
                        <z-radio label="深圳"></z-radio>
                        <z-radio label="杭州"></z-radio>
                    </z-radio-group>
                </z-form-item>
                <!-- 文本域 -->
                <z-form-item label="Detail Address">
                    <z-input v-model="formItem.address" type="textarea" :autosize="{minRows: 3,maxRows: 5}"
                        placeholder="Please enter the detailed address"></z-input>
                </z-form-item>
                <!-- 按钮 -->
                <z-form-item>
                    <z-button type="primary">Save</z-button>
                      <z-button>Close</z-button>
                </z-form-item>
            </z-form>
          </z-col>
      </z-row>
  </z-edit-panel>
</div>
</template>
<script>
export default {
  name: 'formBase',
  data: function () {
    return {
      formItem: {
        fullName: '',
        telCountry: '',
        telProvince: '',
        telNumber: '',
        mobileCountry: '',
        mobileProvince: '',
        mobileNumber: '',
        region: '',
        address: '',
        city: [],
        province: '',
        zipPostCode: ''
      },
      // 表单校验
      ruleValidate: {
        fullName: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        region: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        address: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        city: [
          { required: true, message: '不能为空', trigger: 'change', type: 'array', min: 1 }
        ]
      }
    }
  },
  methods: {

  }
}
</script>
