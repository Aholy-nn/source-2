<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-07 20:01:32
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-form ref="copyOriginalModel" :model="copyOriginalModel" :label-width="110" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="权限模板编码"  prop="originalCode">
            <z-input v-model="copyOriginalModel.originalCode" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="权限模板名称"  prop="originalName">
            <z-input v-model="copyOriginalModel.originalName" :maxlength="32" placeholder="请输入..."></z-input>
        </z-form-item>
        <form-item label="备注"  prop="remarks">
            <z-input v-model="copyOriginalModel.remarks" placeholder="请输入..."></z-input>
        </form-item>
        <form-item label="权限模板标识" prop="originalId" v-show="false">
            <z-input v-model="copyOriginalModel.originalId" placeholder="权限模板标识"></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('copyOriginalModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose()" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>

import originalApi from '../api/api.js'
export default {
  name: 'editOriginal',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      copyOriginalModel: {
        originalId: '',
        originalCode: '',
        originalName: '',
        originalType: '',
        remarks: ''
      },
      ruleValidate: {
        originalCode: [
          {required: true, message: '请填写权限模板编码', trigger: 'blur'}
        ],
        originalName: [
          {required: true, message: '请填写权限模板名称', trigger: 'blur'}
        ]
      }
    }
  },
  props: {
    title: {
      type: String
    },
    modelType: {
      type: String
    }
  },
  methods: {
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          // 新增
          originalApi.originalInfoCopy(that.copyOriginalModel).then(function (response) {
            if (response.data.code === '02') { // 模板编码校验重复返回错误信息
              that.$Message.error(response.data.msg)
            } else {
              that.$parent.query()
              that.$Message.success(response.data.msg)
              that.modelIsOpen = false
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    handleReset: function () {
      this.$refs['copyOriginalModel'].resetFields()
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
