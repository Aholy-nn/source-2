<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-04-18 16:14:45
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-row :gutter="20">
      <z-col span="12" :style="{height:height + 'px'}">
        <vue-scroll :ops="ops">
          <z-card dis-hover style="padding:10px">
          <z-button type="primary" @click="addFirstFunc">添加一级功能</z-button>
          <div class="m-t-20">
            <z-vtree ref="userGroupTree" :option="options" :node-icon="true" choose-mode="some" v-model="value" :filterable="true" :right-menu="rightMenu" @select="onSelectTree" is-right-menu :toggleOnSelect="false"></z-vtree>
          </div>
          </z-card>
        </vue-scroll>
      </z-col>
      <z-col span="12">
        <z-card dis-hover style="padding:10px 30px;">
             <z-form ref="userGroupForm"  :model="userGroupModel" :label-width="100" label-position="left" :rules="ruleValidateUserGroup">
                <form-item label="用户组ID" prop="groupId" v-show="false">
                    <z-input v-model="userGroupModel.groupId" placeholder="用户组ID"></z-input>
                </form-item>
                <form-item label="用户组名称" prop="groupName">
                    <z-input v-model="userGroupModel.groupName" :maxlength="22" placeholder="请输入..."></z-input>
                </form-item>
                <form-item label="用户组编码"  prop="groupCode">
                    <z-input v-model="userGroupModel.groupCode" :maxlength="32" placeholder="请输入..."></z-input>
                </form-item>
                <form-item label="上级用户组ID" prop="parentGroupId" v-show="false">
                    <z-input v-model="userGroupModel.parentGroupId" placeholder="上级用户组ID"></z-input>
                </form-item>
                <form-item label="上级用户组名称"  prop="parentName">
                    <z-input v-model="userGroupModel.parentName" disabled></z-input>
                </form-item>
            </z-form>
            <div class="text-center">
              <z-button type="primary" icon="checkmark" @click="handleSubmit('userGroupForm')">保存</z-button>
              <z-button type="primary" ghost icon="refresh" @click="handleReset('userGroupForm')" style="margin-left: 8px">重置</z-button>
            </div>
        </z-card>
      </z-col>
   </z-row>
   <!-- 弹出 -->
    <auth-res ref="authRes"></auth-res>
</div>
</template>
<script>
import userGroupAPI from '../api/api.js'
import authRes from '../../restype/authRes/authRes'
export default {
  name: 'userGroupManage',
  components: {
    'auth-res': authRes
  },
  data: function () {
    return {
      height: '',
      // 滚动条配置
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          keepShow: true,
          background: '#2163f0',
          opacity: '0.5'
        }
      },
      // 树
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        getDatas: this.getDatas
      },
      value: null,
      rightMenu: [
        {
          text: '资源授权',
          func: this.authResFunc
        },
        {
          text: '增加用户组',
          func: this.addClick
        },
        {
          text: '删除用户组',
          func: this.delFunc
        }
      ],
      addCount: 0,
      addType: false,
      dataById: null,
      //   表单
      userGroupModel: {
        groupId: '',
        groupName: '',
        groupCode: '',
        parentGroupId: '',
        parentName: ''
      },
      ruleValidate: {},
      ruleValidateUserGroup: {
        groupName: [
          {required: true, message: '请填写用户组名称', trigger: 'blur'}
        ],
        groupCode: [
          {required: true, message: '请填写用户组编码', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
    let heigth = document.getElementById('sidebarMenu').children[0].clientHeight
    this.height = (heigth - 140)
  },
  methods: {
    getDatas: function (parent, resolve) {
      let that = this
      setTimeout(() => {
        let params = {}
        if (!parent) {
          params = {otherParam: 'zTreeAsyncTest'}
        } else {
          params = {id: parent.id, name: parent.name, type: '0', otherParam: 'zTreeAsyncTest'}
        }
        userGroupAPI.getUserGroupTree(params).then(function (response) {
          let data = response.data
          resolve(data)
          // 未展开时添加
          if (that.addType) {
            that.addFunc()
            that.addType = false
          }
        })
      }, 100)
    },
    //  添加一级菜单
    addFirstFunc: function () {
      let addCount = this.addCount++
      let newNode = {
        name: '新增功能' + addCount,
        pId: '****',
        editType: 'add',
        id: 'newId' + addCount
      }
      this.$refs.userGroupTree.appendTreeItem(null, newNode)
      this.$refs.userGroupTree.updateSelect('1')
      this.onSelectTree(newNode)
    },
    // 添加
    addClick: function () {
      let selected = this.$refs['userGroupTree'].getSelect()
      let selectData = this.$refs['userGroupTree'].getSelectData()
      let liEl = document.getElementById(selected.id)
      // 如果从未展开过，需要展开按钮再添加
      if (!liEl.classList.contains('zvu-tree-li-opened') && !(selectData.children && selectData.children.length > 0) && selectData.isParent) {
        let arrowEl = liEl.children[0].getElementsByClassName('zvu-icon-ios-arrow-forward')
        arrowEl[0].click()
        this.addType = true
      } else {
        this.addFunc()
      }
    },
    // 添加方法
    addFunc: function () {
      let selected = this.$refs['userGroupTree'].getSelect()
      let addCount = this.addCount++
      let newNode = {
        name: '新增功能' + addCount,
        pId: selected.id,
        editType: 'add',
        id: 'newId' + addCount
      }
      this.$refs.userGroupTree.appendTreeItem(selected.id, newNode)
      this.$refs.userGroupTree.updateSelect(newNode.id)
      // this.$nextTick(function () {
      //   let el = document.getElementById(newNode.id)
      //   el.children[0].click()
      // })
      this.onSelectTree(newNode)
    },
    // 点击树节点
    onSelectTree: function (treeNode) {
      this.$refs['userGroupForm'].resetFields()
      if (treeNode.id) {
        this.userGroupModel.groupId = treeNode.id
      }
      let pId = treeNode.pId
      this.getDataById(pId)
      this.userGroupModel.groupName = treeNode.name
      this.userGroupModel.groupCode = treeNode.groupCode
      if (pId === '****') {
        this.userGroupModel.parentName = '顶级'
        this.userGroupModel.parentGroupId = '****'
      } else {
        this.userGroupModel.parentName = this.dataById.value.name
        this.userGroupModel.parentGroupId = this.dataById.value.id
      }
    },
    getDataById: function (id, datas) {
      if (!datas) {
        datas = this.$refs['userGroupTree'].$data.treeDatas
      }
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].key === id) {
          this.dataById = datas[i]
          return false
        } else if (datas[i].children && datas[i].children.length !== 0) {
          this.getDataById(id, datas[i].children)
        }
      }
    },
    // 删除功能
    delFunc: function () {
      let selected = this.$refs['userGroupTree'].getSelect()
      this.getDataById(selected.id)
      let that = this
      if (!selected) {
        this.$Message.error('请选择节点')
        return
      }
      if (selected.isParent === true && this.dataById.children && this.dataById.children.length > 0) {
        this.$Message.error('不能删除非叶子节点，请选择叶子节点进行删除！') // 异步有子节点的节点物理删除
        return
      }
      this.$Modal.confirm({
        title: '确认',
        content: '确认删除？',
        onOk: function () {
          setTimeout(function () {
            if (selected.editType === 'add') {
              that.$refs.userGroupTree.removeTreeItem(selected.id)
              that.$Message.success('删除成功！')
            } else {
              userGroupAPI.deleteGroupInfo(selected.id).then(function (response) {
                if (response.data.code === '1') {
                  that.$Message.error('该组织下存在用户，不能删除！')
                } else {
                  // 从树中移除该节点
                  that.$refs.userGroupTree.removeTreeItem(selected.id)
                  // 清空右侧详细信息栏
                  that.clearForm()
                  that.$Message.success('删除成功！')
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }, 500)
        }
      })
    },
    authResFunc: function () {
      let selected = this.$refs['userGroupTree'].getSelect()
      let ref = this.$refs.authRes
      ref.authResModel.groupId = selected.id
      ref.resChange()
      ref.modelIsOpen = true
    },
    handleSubmit: function (name) {
      let that = this
      if (!this.value) {
        this.$Message.error('请选择节点')
        return false
      }
      let selected = this.$refs['userGroupTree'].getSelect()
      // 数据传递
      this.$refs[name].validate(function (valid) {
        if (valid) {
          if (selected.editType === 'add') { // 新增
            userGroupAPI.addGroupInfo(that.userGroupModel).then(function (response) {
              let obj = {
                id: response.data.data.groupId,
                pid: response.data.data.parentGroupId,
                name: that.userGroupModel.groupName,
                groupCode: that.userGroupModel.groupCode,
                editType: ''
              }
              that.$refs.userGroupTree.appendTreeItem(selected.pId, obj)
              that.$refs.userGroupTree.removeTreeItem(selected.id)
              that.$refs.userGroupTree.updateSelect(obj.id)
              //   that.value = null
              //   that.clearForm()
              that.$Message.success(response.data.msg)
            }).catch(function (error) {
              console.log(error)
            })
          } else { // 更新
            userGroupAPI.updateGroupInfo(that.userGroupModel).then(function (response) {
              let obj = {
                id: response.data.data.groupId,
                pid: response.data.data.parentGroupId,
                name: that.userGroupModel.groupName,
                groupCode: that.userGroupModel.groupCode
              }
              that.$refs.userGroupTree.updateTreeItem(selected.id, obj)
              that.value = null
              that.clearForm()
              that.$Message.success(response.data.msg)
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    clearForm: function () {
      this.userGroupModel = {
        groupId: '',
        groupName: '',
        groupCode: '',
        parentGroupId: '',
        parentName: ''
      }
    },
    handleReset: function (name) {
      this.userGroupModel.groupId = ''
      this.userGroupModel.groupName = ''
      this.userGroupModel.groupCode = ''
    }
  }
}
</script>
