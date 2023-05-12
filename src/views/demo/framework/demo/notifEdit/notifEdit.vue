<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-02-11 10:43:06
 * @LastEditors  : Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="Shipping Address" footer-hide width="600">
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
         <!-- 多选 -->
        <z-form-item label="" prop="">
           <z-checkbox-group>
              <z-checkbox>Checkbox</z-checkbox>
              <z-checkbox>Checkbox</z-checkbox>
              <z-checkbox>Checkbox</z-checkbox>
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
            <z-button @click="handleClose()">Close</z-button>
            <z-button type="primary" @click="handleSave('addAddressForm')">Save</z-button>
        </z-form-item>
    </z-form>
    <div slot="footer">
      <z-button type="error" >Delete</z-button>
    </div>
</z-modal>
</template>

<script>
export default {
  name: 'subCompManageOrderEdit',
  data: function () {
    return {
      modelIsOpen: false,
      cityData: [{
        value: 'beijing',
        label: 'beijing',
        children: [
          {
            value: 'gugong',
            label: 'gugong'
          },
          {
            value: 'tiantan',
            label: 'tiantan'
          },
          {
            value: 'wangfujing',
            label: 'wangfujing'
          }
        ]
      }, {
        value: 'jiangsu',
        label: 'jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'nanjing',
            children: [
              {
                value: 'fuzimiao',
                label: 'fuzimiao'
              }
            ]
          },
          {
            value: 'suzhou',
            label: 'suzhou',
            children: [
              {
                value: 'zhuozhengyuan',
                label: 'zhuozhengyuan'
              },
              {
                value: 'shizilin',
                label: 'shizilin'
              }
            ]
          }
        ]
      }],
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
  mounted () {
  },
  created () {
  },
  methods: {
    // 弹出里的事件
    handleSave: function (name) {
      var that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          this.modelIsOpen = false
          console.log(this.formItem)
          // 保存到接口
        } else {
          that.$Message.error('表单验证失败')
        }
      })
    },
    handleClose: function () {
      this.handleReset()
      this.modelIsOpen = false
    },
    handleReset () {
      this.$refs['addAddressForm'].resetFields()
    }
  }
}
</script>
