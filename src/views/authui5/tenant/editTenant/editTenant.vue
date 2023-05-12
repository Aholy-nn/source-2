<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:19:27
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600" @on-visible-change="showInit">
     <z-form ref="editTenantModel" :model="editTenantModel" :label-width="110" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
       <form-item label="租户名称"  prop="tenantName">
            <z-input v-model="editTenantModel.tenantName" :max-length="118" placeholder="请输入..."></z-input>
        </form-item>
        <z-form-item label="租户代码"  prop="tenantCode" v-show="showFlag">
            <z-input v-model="editTenantModel.tenantCode" :max-length="32" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="租户初始菜单"  prop="tenantInitFunc" v-show="ifShowInitFuncSelect">
            <z-select v-model="editTenantModel.tenantInitFunc">
                <z-option v-for="item in initFuncList" :value="item.code" :key="item.code">{{ item.name }}</z-option>
            </z-select>
        </z-form-item>
        <form-item label="状态" prop="state">
            <z-select v-model="editTenantModel.state">
                <z-option value="1">正常</z-option>
                <z-option value="0">停用</z-option>
            </z-select>
        </form-item>
        <form-item label="备注"  prop="remarks">
            <z-input v-model="editTenantModel.remarks" placeholder="请输入..."></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editTenantModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose()" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import tenantApi from '../api/api.js'
export default {
  name: 'editTenant',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      editTenantModel: {
        tenantName: '',
        tenantCode: '',
        tenantInitFunc: '',
        state: '',
        remarks: '',
        tenantId: ''
      },
      ruleValidate: {
        tenantName: [
          {required: true, message: '请填写租户名称', trigger: 'blur'}
        ],
        tenantCode: [
          {required: true, message: '请填写租户代码', trigger: 'blur'}
        ]
      },
      ifShowInitFuncSelect: false,
      initFuncList: []
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
  computed: {
    showFlag: function () {
      // 新增
      if (this.modelType === 'add') {
        return true
      } else { // 编辑
        return false
      }
    }
  },
  methods: {
    showInit (ifshow) {
      if (ifshow === true) {
        this.getInitFuncList()
      }
    },
    getInitFuncList: function () {
      let that = this
      tenantApi.initFuncListQuery().then(function (response) {
        if (response.data.data != null && response.data.data !== '') {
          if (that.modelType === 'add') {
            that.ifShowInitFuncSelect = true
          }
          that.initFuncList = response.data.data
        }
      }).catch(function (error) {
        console.log(error)
      })
      return []
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          // 新增
          if (that.modelType === 'add') {
            tenantApi.tenantAdd(that.editTenantModel).then(function (response) {
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
            tenantApi.tenantUpdate(that.editTenantModel).then(function (response) {
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
      this.$refs['editTenantModel'].resetFields()
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
