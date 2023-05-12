<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-04-17 12:30:26
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
   <z-form ref="editAppRes" :model="editAppResModel" :label-width="120" label-position="right" class="ilead-modal-form per-center" :rules="ruleValidate">
      <form-item label="应用ID" prop="appId" v-show="false">
        <z-input v-model="editAppResModel.appId" placeholder="应用ID"></z-input>
      </form-item>
      <form-item label="资源代码"  prop="appresCode">
          <z-input v-model="editAppResModel.appresCode" :maxlength="32" placeholder="请输入..." v-bind:disabled="isNotAble"></z-input>
      </form-item>
      <form-item label="资源名称"  prop="appresName">
          <z-input v-model="editAppResModel.appresName" :maxlength="22" placeholder="请输入..."></z-input>
      </form-item>
      <form-item label="资源描述"  prop="appresDesc">
          <z-input v-model="editAppResModel.appresDesc" :maxlength="22" placeholder="请输入..."></z-input>
      </form-item>
      <!-- <form-item label="上级资源"  prop="supAppresId">
        <Cascader :data="appResTreeList" :load-data="getAppResTrees" change-on-select transfer   @on-change="handleChange" @on-visible-change="handleChangeVisible"
        v-model="editAppResModel.supAppresId"></Cascader>
      </form-item> -->
      <form-item label="资源类型" prop="appresType">
          <z-select v-model="editAppResModel.appresType" @on-change="appresTypeChange">
              <z-option value="1">API网关</z-option>
              <z-option value="2">消息队列</z-option>
              <z-option value="3">HTTP</z-option>
              <z-option value="4">分布式服务</z-option>
          </z-select>
      </form-item>
      <form-item label="资源路径"  prop="appresPath">
          <z-input v-model="editAppResModel.appresPath" :maxlength="25" placeholder="请输入..."></z-input>
      </form-item>
      <form-item label="操作类型" prop="appresOperType" v-show="operTypeIsShow">
          <z-select v-model="editAppResModel.appresOperType">
              <z-option value="1">发布</z-option>
              <z-option value="2">订阅</z-option>
          </z-select>
      </form-item>
      <form-item label="资源排序" prop="displaySeq">
          <z-input v-model="editAppResModel.displaySeq" :maxlength="10" placeholder="请输入..."></z-input>
      </form-item>
      <form-item label="状态" prop="state">
          <z-select v-model="editAppResModel.state">
              <z-option value="1">可用</z-option>
              <z-option value="0">不可用</z-option>
          </z-select>
      </form-item>
  </z-form>
  <div slot="footer" class="ilead-modal-footer">
      <z-button type="primary" icon="checkmark" @click="handleSubmit('editAppRes')">提交</z-button>
      <z-button type="primary" ghost icon="refresh" @click="handleReset('editAppRes')" style="margin-left: 8px">重置</z-button>
      <z-button type="dashed"  @click="handleClose('editAppRes')" style="margin-left: 8px">关闭</z-button>
  </div>

</z-modal>
</template>
<script>
import authAppResApi from '../api/api.js'
export default {
  name: 'editAuthAppResInfo',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      operTypeIsShow: false, // 操作类型是否显示，true：显示 false：隐藏
      flag: 'init',
      isNotAble: false,
      editAppResModel: {
        appresId: '',
        appresName: '',
        appresCode: '',
        appresDesc: '',
        supAppresId: '',
        appresType: '',
        appresPath: '',
        appresOperType: '',
        state: '',
        appId: '',
        displaySeq: '',
        parentId: ''

      },
      // appResTreeList: [],
      ruleValidate: {
        appresCode: [
          {required: true, message: '请填写资源代码', trigger: 'blur'}
        ],
        appresName: [
          {required: true, message: '请填写资源名称', trigger: 'blur'}
        ],
        appresType: [
          {required: true, message: '请选择资源类型', trigger: 'change'}
        ],
        state: [
          {required: true, message: '请选择状态', trigger: 'change'}
        ],
        displaySeq: [
          {required: true,
            type: 'number',
            message: '节点排序不能为空且为数字',
            trigger: 'blur',
            transform: function (value) {
              if (value === '' || value == null) {
                return false
              }
              return Number(value)
            }}
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
  // watch: {
  //   modelIsOpen: function (val) {
  //     if (val) {
  //       this.$nextTick(function () {
  //         this.getAppResTreeList()
  //       })
  //     }
  //   }
  // },
  methods: {
    // 上级资源选择页面点选时触发
    handleChange: function (value, selectedData) {
      // 判断是否为初次加载页面
      if (this.flag === 'run') { // 非初次加载
        this.editAppResModel.supAppresId = value
      }
    },
    // 上级资源选择页面打开时先触发
    // handleChangeVisible: function () {
    //   this.flag = 'run'
    // },
    // getAppResTreeList: function () {
    //   let pid = ''
    //   let appId = this.editAppResModel.appId
    //   if (this.modelType !== 'add') {
    //     pid = 'editInit'
    //   } else { // 新增
    //     pid = 'newInit'
    //   }
    //   let that = this
    //   let data = {'pid': pid, 'appId': appId}
    //   authAppResApi.getAppResTree(data).then(function (response) {
    //     that.appResTreeList = response.data
    //   }).catch(function (error) {
    //     console.log(error)
    //   })
    //   return []
    // },
    // getAppResTrees: function (item, callback) {
    //   item.loading = true
    //   let that = this
    //   let data = {'pid': item.value, 'appId': that.editAppResModel.appId}
    //   authAppResApi.getAppResTree(data).then(function (response) {
    //     item.children = response.data
    //     let supAppresId = that.editAppResModel.parentId
    //     let array = []
    //     if (supAppresId != null && supAppresId.length > 0) {
    //       for (let i = 0; i < supAppresId.length; i++) {
    //         array[i] = supAppresId[i]
    //       }
    //     }
    //     that.editAppResModel.supAppresId = array
    //     item.loading = false
    //     callback()
    //   }).catch(function (error) {
    //     console.log(error)
    //   })
    // },
    appresTypeChange: function () {
      // 菜单类型
      if (this.editAppResModel.appresType === '2') {
        this.operTypeIsShow = true
        if (this.editAppResModel.appresOperType == null || this.editAppResModel.appresOperType === '') {
          this.editAppResModel.appresOperType = '1'
        }
      } else {
        this.operTypeIsShow = false
      }
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
        // 新增
          if (that.modelType === 'add') {
            authAppResApi.appResInfoAdd(that.editAppResModel).then(function (response) {
              if (response.data.code === '0') { // 应用代码和应用地址校验重复返回错误信息
                that.$Message.error('存在相同的资源代码，请重新输入资源代码!')
              } else {
                let appId = that.editAppResModel.appId
                that.$parent.authResQuery(appId)
                that.$Message.success('保存成功!')
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            authAppResApi.appResInfoUpdate(that.editAppResModel).then(function (response) {
              if (response.data.code === '0') { // 应用地址校验重复返回错误信息
                that.$Message.error('存在相同的资源代码，请重新输入资源代码!')
              } else {
                let appId = that.editAppResModel.appId
                that.$parent.authResQuery(appId)
                that.$Message.success('修改成功!')
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
      if (this.modelType === 'add') {
        this.$refs['editAppRes'].resetFields()
      } else {
        this.editAppResModel.appresName = ''
        this.editAppResModel.appresDesc = ''
        this.editAppResModel.appresType = ''
        this.editAppResModel.appresPath = ''
        this.editAppResModel.appresOperType = ''
        this.editAppResModel.displaySeq = ''
        this.editAppResModel.state = ''
      }
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    }
  }

}
</script>
