<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 18:56:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-card class="p-b-30" dis-hover>
    <z-row>
    <z-col span="18" push="3"  :xs="{ span: 18, push: 3 }" :lg="{ span: 14, push: 5 }">
      <div class="result">
        <z-icon type="checkmark-circled"></z-icon>
        <p class="result_title">操作成功</p>
        <p class="result_desc">提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。灰色区域可以显示一些补充的信息。</p>
        <div class="result_extra">
          已提交申请，等待部门审核。
        </div>
        <div class="m-t-20">
            <z-button type="primary" @click="complete()">返回首页</z-button>
            <z-button>查看项目</z-button>
            <z-button>打印</z-button>
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
