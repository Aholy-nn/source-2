<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-04-17 12:28:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
   <z-form  ref="editAttributeModel" :model="editAttributeModel" :label-width="120" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <form-item label="数据类型ID" prop="categoryId" v-show="false">
            <z-input v-model="editAttributeModel.categoryId" placeholder="数据类型ID"></z-input>
        </form-item>
        <form-item label="属性ID" prop="attributeId" v-show="false">
            <z-input v-model="editAttributeModel.attributeId" placeholder="属性ID"></z-input>
        </form-item>
        <form-item label="属性代码"  prop="attributeCode">
            <z-input v-model="editAttributeModel.attributeCode" :maxlength="32" placeholder="请输入..."></z-input>
        </form-item>
        <form-item label="属性名称"  prop="attributeName">
            <z-input v-model="editAttributeModel.attributeName" :maxlength="118" placeholder="请输入..."></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editAttributeModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editAttributeModel')" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose('editAttributeModel')" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import dataCategoryApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'editAttribute',
  data: function () {
    return {
      modelIsOpen: false,
      editAttributeModel: {
        categoryId: '',
        attributeId: '',
        attributeCode: '',
        attributeName: '',
        appId: ''
      },
      ruleValidate: {
        attributeCode: [
          {required: true, message: '请填写属性代码', trigger: 'blur'}
        ]
      },
      appModel: {
        appId: ''
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
          // 是否多应用
          if (Config.multiApp) {
            let appId = that.appModel.appId
            if (appId && appId !== '') {
              that.editAttributeModel.appId = appId
            }
          }
          // 新增
          if (that.modelType === 'add') {
            dataCategoryApi.checkSameAttrCode(that.editAttributeModel).then(function (response) {
              if (response.data.code === '0') { // 校验属性代码通过
                dataCategoryApi.saveAttrInfo(that.modelType, that.editAttributeModel).then(function (response) {
                  that.$parent.query(that.editAttributeModel.categoryId)
                  that.$Message.success(response.data.msg)
                }).catch(function (error) {
                  console.log(error)
                })
              } else {
                that.$Message.error(response.data.msg)
              }
            }).catch(function (error) {
              console.log(error)
            })
            that.modelIsOpen = false
          } else {
            // 编辑
            dataCategoryApi.checkSameAttrCode(that.editAttributeModel).then(function (response) {
              if (response.data.code === '0') { // 校验属性代码通过
                dataCategoryApi.saveAttrInfo(that.operator, that.editAttributeModel).then(function (response) {
                  that.$parent.query(that.editAttributeModel.categoryId)
                  that.$Message.success(response.data.msg)
                }).catch(function (error) {
                  console.log(error)
                })
              } else {
                that.$Message.error(response.data.msg)
              }
            }).catch(function (error) {
              console.log(error)
            })
            that.modelIsOpen = false
          }
        } else {
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    handleReset: function () {
      this.$refs['editAttributeModel'].resetFields()
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    }
  }
}
</script>
