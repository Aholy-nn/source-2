<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:17:19
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
   <z-form  ref="editCategoryModel" :model="editCategoryModel" :label-width="120" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <form-item label="数据类型ID" prop="categoryId" v-show="false">
            <z-input v-model="editCategoryModel.categoryId" placeholder="数据类型ID"></z-input>
        </form-item>
        <form-item label="数据类型名称"  prop="categoryName">
            <z-input v-model="editCategoryModel.categoryName" :maxlength="118" placeholder="请输入..."></z-input>
        </form-item>
        <form-item label="数据类型URL"  prop="categoryUrl">
            <z-input v-model="editCategoryModel.categoryUrl" :maxlength="256" placeholder="请输入..."></z-input>
        </form-item>
        <form-item label="数据类型描述"  prop="categoryDesc">
            <z-input v-model="editCategoryModel.categoryDesc" :maxlength="118" placeholder="请输入..."></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editCategoryModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editCategoryModel')" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose('editCategoryModel')" style="margin-left: 8px">关闭</z-button>
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
      editCategoryModel: {
        categoryId: '',
        categoryName: '',
        categoryUrl: '',
        categoryDesc: '',
        appId: ''
      },
      ruleValidate: {
        categoryName: [
          {required: true, message: '请填写数据类型名称', trigger: 'blur'}
        ],
        categoryUrl: [
          {required: true, message: '请填写数据类型URL', trigger: 'blur'}
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
              that.editCategoryModel.appId = appId
            }
          }
          // 新增
          if (that.modelType === 'add') {
            dataCategoryApi.saveCateInfo(that.modelType, that.editCategoryModel).then(function (response) {
              // 获取创建后的数据类型信息
              let nodeId = response.data.data
              if (nodeId !== '') {
                that.editCategoryModel.categoryId = nodeId
              }
              that.$parent.newNode = {id: nodeId, name: that.editCategoryModel.categoryName}
              that.$Message.success(response.data.msg)
              that.modelIsOpen = false
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            dataCategoryApi.saveCateInfo(that.modelType, that.editCategoryModel).then(function (response) {
              let editNode = {name: that.editCategoryModel.categoryName}
              that.$parent.$refs.dataCategoryTree.updateTreeItem(that.editCategoryModel.categoryId, editNode)
              that.$Message.success(response.data.msg)
              that.modelIsOpen = false
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
      this.$refs['editCategoryModel'].resetFields()
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    }
  }

}
</script>
