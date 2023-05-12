<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-15 16:01:46
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-row :gutter="20">
      <z-col span="12" :style="{height:height}">
        <vue-scroll :ops="ops">
          <z-card dis-hover style="padding:10px">
          <z-button type="primary" @click="addFirstOrg">{{$t('orgManage.button.addFirstOrg')}}</z-button>
          <z-button type="primary" @click="delNodes">{{$t('orgManage.button.delNodes')}}</z-button>
            <div class="m-t-20">
              <z-vtree ref="orgTree" :option="options" choose-mode="independent" multiple :node-icon="false" v-model="value" :filterable="true" :right-menu="rightMenu" @select="onSelectTree" is-right-menu and-single></z-vtree>
            </div>
          </z-card>
        </vue-scroll>
      </z-col>
      <z-col span="12">
        <z-card dis-hover style="padding:10px 30px;">
          <div id="orgDiv" v-show="orgIsShow">
              <z-form ref="orgForm" :model="orgModel" :label-width="100" label-position="left" :rules="ruleValidateOrg" class="per-center">
                  <form-item :label="$t('orgManage.label.orgId')" prop="orgId" v-show="false">
                      <z-input v-model="orgModel.orgId" placeholder="组织ID"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.orgName')" prop="orgName">
                      <z-input v-model="orgModel.orgName" :maxlength="54" clearable :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.orgCode')"  prop="orgCode">
                      <z-input v-model="orgModel.orgCode" :maxlength="32" clearable :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.orgType')" prop="orgType">
                      <z-select v-model="orgModel.authOrganizationExtend.orgTypeCode" clearable style="width:230px">
                        <z-option v-for="orgTypeDictItem in orgTypeDictItemList" :value="orgTypeDictItem.value" :key="orgTypeDictItem.value">{{orgTypeDictItem.label}}</z-option>
                      </z-select>
                  </form-item>
                  <form-item :label="$t('orgManage.label.displaySeq')"  prop="displaySeq">
                      <z-input-number :max="100000" :min="1" v-model="orgModel.displaySeq"></z-input-number>
                  </form-item>
                  <form-item :label="$t('orgManage.label.supOrgId')" prop="supOrgId" v-show="false">
                      <z-input v-model="orgModel.supOrgId" :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.parentName')"  prop="parentName">
                      <z-input v-model="orgModel.parentName" disabled></z-input>
                  </form-item>
              </z-form>
              <div class="text-center">
                <z-button type="primary" icon="checkmark" @click="handleSubmitOrg('orgForm')">{{$t('common.button.save')}}</z-button>
                <z-button type="primary" ghost icon="refresh" @click="handleResetOrg('orgForm')" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
              </div>
          </div>
          <div id ="positionDiv" v-show="positionIsShow">
              <z-form ref="positionForm"  :model="positionModel" :label-width="100" label-position="left" :rules="ruleValidatePosition">
                  <form-item :label="$t('orgManage.label.positionId')" prop="positionId" v-show="false">
                      <z-input v-model="positionModel.positionId" :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.positionName')"  prop="positionName">
                      <z-input v-model="positionModel.positionName" :maxlength="54" :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.positionCode')"  prop="positionCode">
                      <z-input v-model="positionModel.positionCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.displaySeq')"  prop="displaySeq">
                      <z-input-number :max="1000" :min="1" v-model="positionModel.displaySeq"></z-input-number>
                      <!-- <z-input v-model="positionModel.displaySeq" :maxlength="10" placeholder="请输入..."></z-input> -->
                  </form-item>
                  <form-item :label="$t('orgManage.label.parentOrgId')" prop="parentOrgId" v-show="false">
                      <z-input v-model="positionModel.parentOrgId" :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.parentOrgName')"  prop="parentOrgName">
                      <z-input v-model="positionModel.parentOrgName" disabled></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.superPositionId')" prop="superPositionId" v-show="false">
                      <z-input v-model="positionModel.superPositionId" :placeholder="$t('common.placeholder.input')"></z-input>
                  </form-item>
                  <form-item :label="$t('orgManage.label.superPositionName')"  prop="superPositionName">
                      <z-input v-model="positionModel.superPositionName" disabled></z-input>
                  </form-item>
              </z-form>
              <div class="text-center">
                <z-button type="primary" icon="checkmark" @click="handleSubmitPo('positionForm')">{{$t('common.button.save')}}</z-button>
                <z-button type="primary" ghost icon="refresh" @click="handleResetPo('positionForm')" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
              </div>
          </div>
        </z-card>
      </z-col>
  </z-row>
  <show-users ref="showUsers"></show-users>
  <show-roles ref="showRoles"></show-roles>
</div>
</template>
<script>
import orgApi from '../api/api.js'
import showUsers from '../showUsers/showUsers'
import showRoles from '../showRoles/showRoles'
import {AuthConstants} from '../../common'
import Utils from '@/utils'
export default {
  name: 'orgManage',
  components: {
    'show-users': showUsers,
    'show-roles': showRoles
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
        datas: []
      },
      value: null,
      rightMenu: [
        {
          text: this.$t('orgManage.button.addOrgNode'),
          type: 'org',
          func: this.addTreeNode
        },
        {
          text: this.$t('orgManage.button.addPosNode'),
          type: 'position',
          func: this.addTreeNode
        },
        {
          text: this.$t('orgManage.button.delTreeNode'),
          func: this.delTreeNode
        },
        {
          text: this.$t('orgManage.button.showUsers'),
          func: this.showUsers
        },
        {
          text: this.$t('orgManage.button.showRoles'),
          func: this.showRoles
        }
      ],
      orgIsShow: true,
      positionIsShow: false,
      addCount: 1,
      newOrgCount: 1,
      orgModel: {
        orgId: '',
        orgName: '',
        orgCode: '',
        authOrganizationExtend: {
          orgTypeCode: ''
        },
        displaySeq: 1,
        supOrgId: '',
        parentName: ''
      },
      orgTypeDictItemList: '',
      orgTypeDictItem: {
        value: '',
        label: ''
      },
      positionModel: {
        positionId: '',
        positionName: '',
        positionCode: '',
        displaySeq: 1,
        parentOrgId: '',
        parentOrgName: '',
        superPositionId: '',
        superPositionName: ''
      },
      ruleValidate: {},
      ruleValidateOrg: {
        orgName: [
          {required: true, message: this.$t('orgManage.tips.inputOrgName'), trigger: 'blur'}
        ],
        orgCode: [
          {required: true, message: this.$t('orgManage.tips.inputOrgCode'), trigger: 'blur'}
        ],
        displaySeq: [
          { required: true,
            type: 'number',
            message: this.$t('orgManage.tips.inputNum'),
            trigger: 'blur',
            transform: function (value) {
              if (value === '' || value === null) {
                return false
              }
              return Number(value)
            }
          }
        ]
      },
      ruleValidatePosition: {
        positionName: [
          {required: true, message: this.$t('orgManage.tips.inputPosName'), trigger: 'blur'}
        ],
        positionCode: [
          {required: true, message: this.$t('orgManage.tips.inputPosCode'), trigger: 'blur'}
        ],
        displaySeq: [
          {required: true,
            type: 'number',
            message: this.$t('orgManage.tips.inputNum'),
            trigger: 'blur',
            transform: function (value) {
              if (value === '' || value === null) {
                return false
              }
              return Number(value)
            }}
        ]
      }
    }
  },
  created: function () {
    this.query()
    this.getOrgTypeDictItemList()
  },
  mounted: function () {
    let heigth = document.getElementById('sidebarMenu').children[0].clientHeight
    this.height = (heigth - 140) + 'px'
  },
  methods: {
    // 查询树
    query: function () {
      let that = this
      orgApi.getOrgExtendTreeSynchro().then(function (response) {
        let datas = response.data
        datas.forEach(item => {
          if (item.type === 'org') {
            item.treeIcon = 'zvu-icon zvu-icon-android-people'
          } else {
            item.treeIcon = 'zvu-icon zvu-icon-ios-person'
          }
        })
        that.options.datas = response.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    getOrgTypeDictItemList: function () {
      this.orgTypeDictItemList = Utils.getInfoByType('iLeadOrgTypeDict', {StringKey: true})
      console.log(Utils.getValueByCode('iLeadOrgTypeDict', '1', {StringKey: true}))
      console.log(Utils.getObjectByCode('iLeadOrgTypeDict', '1', {StringKey: true}))
    },
    // 添加一级组织
    addFirstOrg: function () {
      let addCount = this.addCount++
      let newNode = {
        name: this.$t('orgManage.input.newCompany') + addCount,
        authOrganizationExtend: {
          orgTypeCode: '1'
        },
        type: 'org',
        editType: 'add',
        displaySeq: 1,
        treeIcon: 'zvu-icon zvu-icon-android-people',
        id: 'newId' + addCount
      }
      this.$refs.orgTree.appendTreeItem(null, newNode)
      this.$refs.orgTree.updateSelect(newNode.id)
      this.onSelectTree(newNode)
    },
    // 添加加组织或岗位节点
    addTreeNode: function (menu) {
      let type = menu.type
      let newNode = {}
      let selected = this.$refs['orgTree'].getSelect()
      if (selected) { // 选中
        if (selected.editType === 'add') {
          this.$Message.error(this.$t('orgManage.tips.addTreeNodeError'))
          return
        }
        let addCount = this.addCount++
        // 新增岗位
        if (type === 'position') {
          newNode = {
            name: this.$t('orgManage.input.newPosition') + addCount,
            type: type,
            pId: selected.id,
            editType: 'add',
            displaySeq: 1,
            treeIcon: 'zvu-icon zvu-icon-ios-person',
            id: 'newId' + addCount
          }
          // 新增组织
        } else if (type === 'org') {
          newNode = {
            name: this.$t('orgManage.input.newDepart') + addCount,
            type: type,
            pId: selected.id,
            authOrganizationExtend: {
              orgTypeCode: '2'
            },
            editType: 'add',
            displaySeq: 1,
            treeIcon: 'zvu-icon zvu-icon-android-people',
            id: 'newId' + addCount
          }
        }
        this.$refs.orgTree.appendTreeItem(selected.id, newNode)
        this.$refs.orgTree.updateSelect(newNode.id)
        this.onSelectTree(newNode)
      } else {
        this.$Message.error(this.$t('orgManage.tips.chooseNode'))
      }
    },
    // 批量删除
    delNodes: function () {
      let that = this
      let chooses = this.$refs['orgTree'].getChoose()
      if (chooses.length === 0) {
        this.$Message.error(this.$t('orgManage.tips.chooseNode'))
        return
      }
      for (let i = 0; i < chooses.length; i++) {
        if (chooses[i].isParent === true) {
          this.$Message.error(this.$t('orgManage.tips.canNotDelNonLeafNode')) // 异步有子节点的节点物理删除
          return
        }
      }
      this.$Modal.confirm({
        title: '确认',
        content: '确认删除？',
        onOk: function () {
          setTimeout(function () {
            chooses.forEach(function (item) {
              if (item.editType === 'add') {
                that.$refs.orgTree.removeTreeItem(item.id)
              } else {
                if (item.type === 'org') { // 如果该节点是组织类型，从组织表中删除数据
                  orgApi.deleteOrgInfo(item.id).then(function (response) {
                    if (response.data.code === AuthConstants.org.RESULT_AUTH_ORG_NOT_DEL) {
                      that.$Message.error(that.$t('orgManage.tips.delOrgFailForExistUser'))
                      that.$Message.success(that.$t('common.messsage.delSuccess'))
                    } else {
                      that.query()
                      // 清空右侧详细信息栏
                      that.clearOrgForm()
                      that.$Message.success(that.$t('common.messsage.delSuccess'))
                    }
                  }).catch(function (error) {
                    console.log(error)
                  })
                }
                if (item.type === 'position') { // 如果该节点是岗位类型，从岗位表中删除数据
                  orgApi.deletePositionInfo(item.id).then(function (response) {
                    if (response.data.code === '1') {
                      that.$Message.error(that.$t('orgManage.tips.delPosFailForExistUser'))
                    } else {
                      that.query()
                      // 清空右侧详细信息栏
                      that.clearOrgForm()
                      that.$Message.success(that.$t('common.messsage.delSuccess'))
                    }
                  }).catch(function (error) {
                    console.log(error)
                  })
                }
              }
            })
          }, 500)
        }
      })
    },
    // 删除节点
    delTreeNode: function () {
      let that = this
      let selected = this.$refs['orgTree'].getSelect()
      if (!selected) {
        this.$Message.error(this.$t('orgManage.tips.chooseNode'))
        return
      }
      if (selected.isParent === true) {
        this.$Message.error(this.$t('orgManage.tips.canNotDelNonLeafNode')) // 异步有子节点的节点物理删除
        return
      }
      this.$Modal.confirm({
        title: this.$t('common.title.confirm'),
        content: this.$t('common.tips.confirmDelete'),
        onOk: function () {
          setTimeout(function () {
            if (selected.editType === 'add') {
              that.$refs.orgTree.removeTreeItem(selected.id)
            } else {
              if (selected.type === 'org') { // 如果该节点是组织类型，从组织表中删除数据
                orgApi.deleteOrgInfo(selected.id).then(function (response) {
                  if (response.data.code === AuthConstants.org.RESULT_AUTH_ORG_NOT_DEL) {
                    that.$Message.error(that.$t('orgManage.tips.delOrgFailForExistUser'))
                  } else {
                    that.query()
                    // 清空右侧详细信息栏
                    that.clearOrgForm()
                    that.$Message.success(that.$t('common.messsage.delSuccess'))
                  }
                }).catch(function (error) {
                  console.log(error)
                })
              }
              if (selected.type === 'position') { // 如果该节点是岗位类型，从岗位表中删除数据
                orgApi.deletePositionInfo(selected.id).then(function (response) {
                  if (response.data.code === '1') {
                    that.$Message.error(that.$t('orgManage.tips.delPosFailForExistUser'))
                  } else {
                    that.query()
                    // 清空右侧详细信息栏
                    that.clearOrgForm()
                    that.$Message.success(that.$t('common.messsage.delSuccess'))
                  }
                }).catch(function (error) {
                  console.log(error)
                })
              }
            }
          }, 500)
        }
      })
    },
    // 查询用户
    showUsers: function () {
      let selected = this.$refs['orgTree'].getSelect()
      if (!selected) {
        return
      }
      this.$refs.showUsers.modelIsOpen = true
      this.$refs.showUsers.orgId = selected.id
    },
    // 查看角色
    showRoles: function () {
      let selected = this.$refs['orgTree'].getSelect()
      if (!selected) {
        return
      }
      this.$refs.showRoles.modelIsOpen = true
      this.$refs.showRoles.orgId = selected.id
    },
    // 选中树节点
    onSelectTree: function (treeNode) {
      if (treeNode.type === 'org') {
        this.$refs['orgForm'].resetFields()
        this.orgIsShow = true
        this.positionIsShow = false
        let parentNode = this.getParentNode(treeNode)
        if (parentNode) {
          this.orgModel.parentName = parentNode.name
          this.orgModel.supOrgId = parentNode.id
        } else {
          this.orgModel.supOrgId = '****'
          this.orgModel.parentName = this.$t('orgManage.label.rootNode')
        }
        this.orgModel.orgCode = treeNode.orgCode
        this.orgModel.displaySeq = parseInt(treeNode.displaySeq)
        this.orgModel.orgName = treeNode.name
        if (treeNode.authOrganizationExtend) {
          // 使用副本而非引用，从而防止对orgModel的修改同时会改变ZTree中的值
          this.orgModel.authOrganizationExtend = { ...treeNode.authOrganizationExtend }
        } else {
          this.orgModel.authOrganizationExtend = {}
        }
      }
      if (treeNode.type === 'position') {
        this.$refs['positionForm'].resetFields()
        this.orgIsShow = false
        this.positionIsShow = true
        let parentNode = this.getParentNode(treeNode)
        if (parentNode) {
          if (parentNode.type === 'org') {
            this.positionModel.parentOrgName = parentNode.name
            this.positionModel.parentOrgId = parentNode.id
          }
          if (parentNode.type === 'position') {
            this.positionModel.superPositionName = parentNode.name
            this.positionModel.superPositionId = parentNode.id
          }
        } else {
          this.positionModel.parentOrgName = this.$t('orgManage.label.rootNode')
          this.positionModel.parentOrgId = '****'
        }
        this.positionModel.positionName = treeNode.name
        this.positionModel.positionCode = treeNode.orgCode
        this.positionModel.displaySeq = parseInt(treeNode.displaySeq)
      }
    },
    // 获取父节点
    getParentNode: function (treeNode) {
      let datas = this.options.datas
      let pid = treeNode.pId
      if (pid === '****') {
        return
      }
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === pid) {
          return datas[i]
        }
      }
    },
    // 组织提交
    handleSubmitOrg: function (name) {
      let that = this
      if (!this.value) {
        this.$Message.error(this.$t('common.tips.chooseNode'))
        return false
      }
      let selected = this.$refs['orgTree'].getSelect()
      this.$refs[name].validate(function (valid) {
        if (valid) {
          let editType = selected.editType
          if (editType && editType === 'add') { // 新增
            orgApi.addOrgExtendInfo(that.orgModel).then(function (response) {
              let data = response.data
              that.query()
              setTimeout(function () {
                that.$refs.orgTree.updateSelect(data.data)
                // that.value = null
              }, 400)
              //   that.clearOrgForm()
              that.$Message.success(data.msg)
            }).catch(function (error) {
              console.log(error)
            })
          } else { // 更新
            that.orgModel.orgId = selected.id
            orgApi.updateOrgExtendInfo(that.orgModel).then(function (response) {
              let data = response.data
              that.query()
              setTimeout(function () {
                that.$refs.orgTree.updateSelect(data.data)
                // that.value = null
              }, 400)
              //   that.clearOrgForm()
              that.$Message.success(data.msg)
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error(that.$t('orgManage.tips.saveFail'))
        }
      })
    },
    // 组织重置
    handleResetOrg: function (name) {
      this.orgModel.orgId = ''
      this.orgModel.orgName = ''
      this.orgModel.orgCode = ''
      this.orgModel.displaySeq = 1
      this.orgModel.authOrganizationExtend = {}
    },
    // 组织删除后清空右侧详细信息栏
    clearOrgForm: function () {
      this.orgModel = {
        orgId: '',
        orgName: '',
        orgCode: '',
        authOrganizationExtend: {},
        displaySeq: 1,
        supOrgId: '',
        parentName: ''
      }
    },

    // 岗位提交
    handleSubmitPo: function (name) {
      let that = this
      if (!this.value) {
        this.$Message.error(this.$t('common.tips.chooseNode'))
        return false
      }
      let selected = this.$refs['orgTree'].getSelect()
      this.$refs[name].validate(function (valid) {
        if (valid) {
          let parentNode = that.getParentNode(selected)
          let parentType = parentNode ? parentNode.type : 'org'
          let editType = selected.editType
          if (editType && editType === 'add') { // 新增
            orgApi.addPositionInfo(that.positionModel, parentType).then(function (response) {
              let data = response.data
              that.query()
              setTimeout(function () {
                that.$refs.orgTree.updateSelect(data.data)
                // that.value = null
              }, 400)
              //   that.clearPositionForm()
              that.$Message.success(data.msg)
            }).catch(function (error) {
              console.log(error)
            })
          } else { // 更新
            that.positionModel.positionId = selected.id
            orgApi.updatePositionInfo(that.positionModel, parentType).then(function (response) {
              let data = response.data
              that.query()
              setTimeout(function () {
                that.$refs.orgTree.updateSelect(data.data)
                that.value = null
              }, 400)
              that.clearPositionForm()
              that.$Message.success(data.msg)
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error(that.$t('orgManage.tips.saveFail'))
        }
      })
    },
    // 岗位重置
    handleResetPo: function (name) {
      this.positionModel.positionId = ''
      this.positionModel.positionName = ''
      this.positionModel.positionCode = ''
      this.positionModel.displaySeq = 1
    },
    // 岗位删除后清空右侧详细信息栏
    clearPositionForm: function () {
      this.positionModel = {
        positionId: '',
        positionName: '',
        positionCode: '',
        displaySeq: 1,
        parentOrgId: '',
        parentOrgName: '',
        superPositionId: '',
        superPositionName: ''
      }
    }
  }
}
</script>
