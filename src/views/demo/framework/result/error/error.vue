<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2019-12-28 10:20:18
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-card class="p-b-30" dis-hover>
    <z-row>
      <z-col span="18" push="3"  :xs="{ span: 18, push: 3 }" :lg="{ span: 14, push: 5 }">
        <div class="result">
          <z-icon type="close-circled"></z-icon>
          <p class="result_title">操作失败</p>
          <p class="result_desc"> 请核对并修改以下信息后，再重新提交。</p>
          <div class="result_extra">
          <div>您提交的内容有如下错误：</div>
          <div class="result_extra_wran"><Icon type="ios-close-outline"></Icon>您的账户已被冻结<a>立即解冻<Icon type="ios-arrow-right"></Icon></a></div>
          <div class="result_extra_wran"><Icon type="ios-close-outline"></Icon>您的账户还不具备申请资格<a>立即升级<Icon type="ios-arrow-right"></Icon></a></div>
          </div>
          <div class="m-t-20">
              <z-button type="primary" @click="complete()">返回修改</z-button>
          </div>
        </div>
      </z-col>
    </z-row>
  </z-card>
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
<style scoped>
    @import "../../../../../styles/framework/pages/result/result.css";
</style>
