<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:17:45
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-form ref="editOriginalModel" :model="editOriginalModel" :label-width="110" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="权限模板编码"  prop="originalCode">
            <z-input v-model="editOriginalModel.originalCode" :max-length="32" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="权限模板名称"  prop="originalName">
            <z-input v-model="editOriginalModel.originalName" :maxlength="118" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="权限模板类型" prop="originalType">
            <z-select v-model="editOriginalModel.originalType" clearable placeholder="请选择" >
                <z-option value="1">初始菜单</z-option>
                <z-option value="2">角色模板</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="状态" prop="state">
            <z-select v-model="editOriginalModel.state">
                <z-option value="1">正常</z-option>
                <z-option value="0">停用</z-option>
            </z-select>
        </z-form-item>
        <form-item label="备注"  prop="remarks">
            <z-input v-model="editOriginalModel.remarks" :maxlength="118" placeholder="请输入..."></z-input>
        </form-item>
        <form-item label="权限模板标识" prop="originalId" v-show="false">
            <z-input v-model="editOriginalModel.originalId" :maxlength="32" placeholder="权限模板标识"></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editOriginalModel')">提交</z-button>
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
      editOriginalModel: {
        originalId: '',
        originalCode: '',
        originalName: '',
        originalType: '',
        state: '',
        remarks: ''
      },
      ruleValidate: {
        originalCode: [
          {required: true, message: '请填写权限模板编码', trigger: 'blur'}
        ],
        originalName: [
          {required: true, message: '请填写权限模板名称', trigger: 'blur'}
        ],
        originalType: [
          {required: true, message: '请选择权限模板类型', trigger: 'change'}
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
          if (that.modelType === 'add') {
            originalApi.originalInfoAdd(that.editOriginalModel).then(function (response) {
              if (response.data.code === '0') { // 模板编码校验重复返回错误信息
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
            // 编辑
            originalApi.originalInfoUpdate(that.editOriginalModel).then(function (response) {
              if (response.data.code === '0') { // 模板编码校验重复返回错误信息
                that.$Message.error(response.data.msg)
              } else {
                that.$parent.query()
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    handleReset: function () {
      this.$refs['editOriginalModel'].resetFields()
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
