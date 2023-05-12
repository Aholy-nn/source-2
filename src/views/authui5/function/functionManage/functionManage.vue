<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-row v-if="multiApp" :gutter="15" class="m-t-5">
            <z-col span="12">
                <label class="ilead-label-just-right">{{$t('functionManage.label.selectApp')}} </label>
                <z-select v-model="appModel.appId" @on-change="appChange" @on-clear="appClear" clearable style="width:230px">
                    <z-option v-for="app in appList" :value="app.appId" :key="app.appId">{{app.appName}}</z-option>
                </z-select>
            </z-col>
        </z-row>
    <z-row :gutter="20"  v-if="!multiApp || showFunc">
      <z-col span="12" :style="{height:height + 'px'}">
        <vue-scroll :ops="ops">
          <z-card dis-hover style="padding:10px">
          <z-button type="primary" @click="addFirstFunc">{{$t('functionManage.label.addFirstFunction')}}</z-button>
          <z-button type="primary" @click="delNodes">{{$t('common.button.batchdelete')}}</z-button>
          <div class="p-t-20">
            <z-vtree ref="functionTree" :option="options" :node-icon="true" choose-mode="some" multiple and-single v-model="value" :filterable="true" :right-menu="rightMenu" @select="onSelectTree" is-right-menu :toggleOnSelect="false"></z-vtree>
          </div>
          </z-card>
        </vue-scroll>
      </z-col>
      <z-col span="12" :style="{height:formHeight + 'px'}">
        <vue-scroll :ops="ops">
          <z-card dis-hover style="padding:10px 30px;">
              <z-form ref="functionForm" :model="functionModel" :label-width="100" label-position="left" :rules="ruleValidate" class="per-center">
                  <form-item :label="$t('functionManage.label.funcName')" prop="functionName">
                      <span v-if="ifLocale">
                        <z-input style="width:90%" v-model="functionModel[currentfiled]" :maxlength="118" :placeholder="$t('functionManage.base.inputPlaceholder')" clearable></z-input>
                        <a style="width:10%"  @click="configLocale"><z-icon type="settings" size="22"/></a>
                      </span>
                      <span v-else>
                          <z-input v-model="functionModel.functionName" :maxlength="118" :placeholder="$t('functionManage.base.inputPlaceholder')" clearable></z-input>
                      </span>
                  </form-item>
                  <form-item :label="$t('functionManage.label.funcDes')"  prop="functionDesc">
                      <z-input v-model="functionModel.functionDesc" :maxlength="118" :placeholder="$t('functionManage.base.inputPlaceholder')" clearable></z-input>
                  </form-item>
                  <form-item :label="$t('functionManage.label.funcUrl')"  prop="functionUrl">
                      <z-input type="url" v-model="functionModel.functionUrl" :maxlength="1024" :placeholder="$t('functionManage.base.inputPlaceholder')" clearable></z-input>
                  </form-item>
                  <form-item :label="$t('functionManage.label.funcOrder')"  prop="displaySeq">
                      <!-- <z-input v-model="functionModel.displaySeq" :maxlength="10" :placeholder="$t('functionManage.base.inputPlaceholder')"></z-input> -->
                      <z-input-number :max="1000" :min="1" v-model="functionModel.displaySeq"></z-input-number>
                  </form-item>
                  <form-item :label="$t('functionManage.label.funcType')" prop="functionType">
                      <z-select v-model="functionModel.functionType" @on-change="functionChange">
                        <z-option value="0">{{$t('functionManage.label.menuLocal')}}</z-option>
                        <z-option value="1">{{$t('functionManage.label.button')}}</z-option>
                        <z-option value="2">{{$t('functionManage.label.webService')}}</z-option>
                        <z-option value="3">{{$t('functionManage.label.menuRemote')}}</z-option>
                      </z-select>
                  </form-item>
                  <form-item :label="$t('functionManage.label.menuType')" prop="menuType"  v-show="menuTypeIsShow">
                      <z-select v-model="functionModel.menuType">
                        <z-option value="0">{{$t('functionManage.label.menuPC')}}</z-option>
                        <z-option value="1">{{$t('functionManage.label.menuMobile')}}</z-option>
                      </z-select>
                  </form-item>
                  <form-item :label="$t('functionManage.label.logFlag')" prop="logFlag">
                      <z-select v-model="functionModel.logFlag" >
                           <z-option value="0">{{$t('functionManage.label.no')}}</z-option>
                           <z-option value="1">{{$t('functionManage.label.yes')}}</z-option>
                      </z-select>
                  </form-item>
                  <form-item :label="$t('functionManage.label.funcState')" prop="state">
                      <z-select v-model="functionModel.state" >
                          <z-option value="1">{{$t('functionManage.label.available')}}</z-option>
                          <z-option value="0">{{$t('functionManage.label.unavailable')}}</z-option>
                      </z-select>
                  </form-item>
                  <form-item :label="$t('functionManage.label.funcIcon')" prop="iconClass">
                    <z-icon-picker v-model="functionModel.iconClass" :icon-array="iconData"></z-icon-picker>
                  </form-item>
                  <form-item :label="$t('functionManage.label.parentName')"  prop="parentName">
                      <z-input v-model="functionModel.parentName" disabled  :placeholder="$t('functionManage.base.inputPlaceholder')"></z-input>
                  </form-item>
              </z-form>
          </z-card>
         </vue-scroll>
         <div class="fm_footer">
          <z-button type="primary" icon="checkmark" @click="handleSubmit('functionForm')">{{$t('common.button.save')}}</z-button>
          <z-button type="primary" ghost icon="refresh" @click="handleReset('functionForm')" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
          </div>
      </z-col>
  </z-row>
   <Modal
        v-model="localeModal"
        title="配置"
        @on-ok="localeOk">
        <p v-for="(item, i) in localeList" :key ="i">
            {{ item.langCode }} &nbsp;--&nbsp; <z-input v-model="localeValMap[item.langFieldMapping]" style="width:200px"/>
            <z-divider />
        </p>
    </Modal>
</div>
</template>
<script>
import funManageApi from '../api/api.js'
import Config from '@/config/index.js'
import locale from '@/locale'
export default {
  name: 'functionManage',
  i18n: locale,
  data: function () {
    return {
      height: '',
      formHeight: '',
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
        getTotalDatas: this.getTreeDatas
        // getDatas: this.getDatas
      },
      value: null,
      rightMenu: [
        {
          text: this.$t('functionManage.base.addFunc'),
          func: this.addClick
        },
        {
          text: this.$t('functionManage.base.delFunc'),
          func: this.delFunc
        }
      ],
      menuTypeIsShow: true, // 菜单类型是否显示，true：显示 false：隐藏
      selected: '',
      addCount: 0,
      addType: false,
      dataById: null,
      // 表单
      functionModel: {
        functionId: '',
        functionName: '',
        functionDesc: '',
        functionUrl: '',
        displaySeq: 1,
        functionType: '0',
        iconClass: '',
        logFlag: '0',
        state: '1',
        parentName: '',
        supFuncId: '',
        menuType: '0'// 菜单类型是PC端还是移动端
      },
      operator: '',
      iconData: [],
      ruleValidate: {
        functionName: [
          {required: true, message: this.$t('functionManage.tips.funcNameIsNull'), trigger: 'blur'}
        ],
        funDescription: [
          {required: true, message: this.$t('functionManage.tips.funcDescIsNull'), trigger: 'blur'}
        ],
        functionUrl: [
          {required: true, message: this.$t('functionManage.tips.urlIsNull'), trigger: 'blur'}
        ],
        displaySeq: [
          {required: true,
            type: 'number',
            message: this.$t('functionManage.tips.orderValidFaild'),
            trigger: 'blur',
            transform: function (value) {
              if (value === '' || value === null) {
                return false
              }
              return Number(value)
            }}
        ]
      },
      appList: this.getAppList(),
      appModel: {
        appId: ''
      },
      showFunc: false,
      // 是否多应用
      multiApp: Config.multiApp,
      // 国际化
      ifLocale: false,
      localeModal: false,
      currentfiled: '',
      localeValMap: {},
      localeList: [
        {langCode: 'zh-CN', langName: '中文', langFieldMapping: 'functionName', langDefaultValue: '新增菜单'},
        {langCode: 'en-US', langName: 'English', langFieldMapping: 'functionfiled1', langDefaultValue: 'newMenu'},
        {langCode: 'ja-JP', langName: '日本語', langFieldMapping: 'functionfiled4', langDefaultValue: '新規メニュー'}
      ],
      treeDatas: []
    }
  },
  computed: {},
  mounted: function () {
    this.getHeight()
    var localeList = this.$store.state.localeMap
    var currentLocale = this.$store.state.locale
    currentLocale = currentLocale.replace('_', '-')
    var locales = []
    for (var i = 0; i < localeList.length; i++) {
      if (localeList[i].langCode !== currentLocale) {
        locales.push(localeList[i])
        this.localeValMap[localeList[i].langFieldMapping] = localeList[i].langDefaultValue
      } else {
        this.currentfiled = localeList[i].langFieldMapping
        this.currentFiledVal = localeList[i].langDefaultValue
      }
    }
    this.localeList = locales
    Object.assign(this.functionModel, this.localeValMap)
  },
  created: function () {
    funManageApi.getIconData().then((response) => {
      this.iconData = response.data.icons
    })
  },
  methods: {
    getTreeDatas (resolve) {
      let that = this
      if (this.multiApp) {
        let appId = this.appModel.appId
        if (appId) {
          setTimeout(() => {
            that.value = ''
            let params = {}
            if (!parent) {
              params = {otherParam: 'zTreeAsyncTest'}
            } else {
              params = {id: parent.id, name: parent.name, type: '0', otherParam: 'zTreeAsyncTest'}
            }
            funManageApi.getSynchroFunctionTree(params, appId).then(function (response) {
              let data = response.data
              resolve(data)
              if (that.addType) {
                that.addFunc()
                that.addType = false
              }
            })
          }, 100)
        }
      } else {
        setTimeout(() => {
          let params = {}
          if (!parent) {
            params = {otherParam: 'zTreeAsyncTest'}
          } else {
            params = {id: parent.id, name: parent.name, type: '0', otherParam: 'zTreeAsyncTest'}
          }
          funManageApi.getSynchroFunctionTree(params).then(function (response) {
            let data = response.data
            resolve(data)
            if (that.addType) {
              that.addFunc()
              that.addType = false
            }
          })
        }, 100)
      }
    },
    getDatas: function (parent, resolve) {
      let that = this
      if (this.multiApp) {
        let appId = this.appModel.appId
        if (appId) {
          setTimeout(() => {
            that.value = ''
            let params = {}
            if (!parent) {
              params = {otherParam: 'zTreeAsyncTest'}
            } else {
              params = {id: parent.id, name: parent.name, type: '0', otherParam: 'zTreeAsyncTest'}
            }
            funManageApi.getFunctionTree(params, appId).then(function (response) {
              let data = response.data
              resolve(data)
              if (that.addType) {
                that.addFunc()
                that.addType = false
              }
            })
          }, 100)
        }
      } else {
        setTimeout(() => {
          let params = {}
          if (!parent) {
            params = {otherParam: 'zTreeAsyncTest'}
          } else {
            params = {id: parent.id, name: parent.name, type: '0', otherParam: 'zTreeAsyncTest'}
          }
          funManageApi.getFunctionTree(params).then(function (response) {
            let data = response.data
            resolve(data)
            if (that.addType) {
              that.addFunc()
              that.addType = false
            }
          })
        }, 100)
      }
    },
    getAppList: function () {
      let appList = this.$store.state.sysAppInfos
      return appList
    },
    appChange: function () {
      let appId = this.appModel.appId
      if (!appId) {
        return
      }
      this.showFunc = true
      this.handleReset()
      this.$nextTick(function () {
        this.$refs['functionTree'].refresh()
        this.getHeight()
      })
    },
    appClear: function () {
      this.handleReset()
      this.showFunc = false
    },
    //  添加一级菜单
    addFirstFunc: function () {
      let addCount = this.addCount++
      let newNode = {
        name: this.$t('functionManage.base.addFunc') + addCount,
        pId: '****',
        editType: 'add',
        id: 'newId' + addCount
      }
      this.$refs.functionTree.appendTreeItem(null, newNode)
      this.$refs.functionTree.updateSelect(newNode.id)
      this.onSelectTree(newNode)
    },
    // 添加
    addClick: function () {
      let selected = this.$refs['functionTree'].getSelect()
      let selectData = this.$refs['functionTree'].getSelectData()
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
      let selected = this.$refs['functionTree'].getSelect()
      let addCount = this.addCount++
      let newNode = {
        name: this.$t('functionManage.base.addFunc') + addCount,
        pId: selected.id,
        editType: 'add',
        id: 'newId' + addCount
      }
      this.$refs.functionTree.appendTreeItem(selected.id, newNode)
      this.$refs.functionTree.updateSelect(newNode.id)
      this.onSelectTree(newNode)
    },
    // 点击树节点
    onSelectTree: function (treeNode) {
      let that = this
      this.$refs['functionForm'].resetFields()
      if (Config.ifLocale === true) {
        this.setLocale()
      }
      let pId = treeNode.pId
      this.getDataById(pId)
      if (pId === '****') {
        this.functionModel.parentName = this.$t('functionManage.base.toplevel')
        this.functionModel.supFuncId = '****'
      } else {
        this.functionModel.parentName = this.dataById.value.name
        this.functionModel.supFuncId = this.dataById.value.id
      }
      // 父级data
      // 新增节点
      if (treeNode.editType === 'add') {
        this.functionModel.functionId = treeNode.id
        // 国际化
        if (Config.ifLocale === true) {
          this.setLocaleValue(null)
          this.setCurrLocaleValue(treeNode.name)
        } else {
          this.functionModel.functionName = treeNode.name
        }
        this.functionModel.menuType = '0'
        this.functionModel.functionType = '0'
        that.functionModel.iconClass = ''
        this.menuTypeIsShow = true
        this.functionModel.state = '1'
        this.functionModel.logFlag = '0'

      // 不是新增节点
      } else {
        funManageApi.getFunction(treeNode.id).then(function (response) {
          let data = response.data
          that.functionModel.functionId = data.functionId
          if (Config.ifLocale === true) {
            that.setLocaleValue(null)
            that.setCurrLocaleValue(data)
          } else {
            that.functionModel.functionName = data.functionName
          }
          that.functionModel.functionDesc = data.functionDesc
          that.functionModel.functionUrl = data.functionUrl
          that.functionModel.displaySeq = parseInt(data.displaySeq)
          that.functionModel.functionType = data.functionType
          that.functionModel.menuType = data.menuType
          that.functionModel.iconClass = data.iconClass
          that.functionModel.logFlag = data.logFlag
          that.functionModel.state = data.state
          that.functionChange()
          // 国际化
          if (Config.ifLocale === true) {
            that.setCurrLocaleValue(data)
            that.setLocaleValue(data)
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    getDataById: function (id, datas) {
      if (!datas) {
        datas = this.$refs['functionTree'].$data.treeDatas
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
    // 批量删除
    delNodes: function () {
      let that = this
      let chooses = this.$refs['functionTree'].getChoose()
      if (chooses.length === 0) {
        this.$Message.error('请勾选节点')
        return
      }
      for (let i = 0; i < chooses.length; i++) {
        if (chooses[i].isParent === true && chooses[i].children && chooses[i].children.length > 0) {
          this.$Message.error('不能删除非叶子节点，请选择叶子节点进行删除！') // 异步有子节点的节点物理删除
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
                that.$refs.functionTree.removeTreeItem(item.id)
                that.$Message.success(that.$t('functionManage.tips.delSuccess'))
              } else {
                funManageApi.delFunction(item.id).then(function (response) {
                  if (response.data.code === '1') {
                    that.$Message.error(that.$t('functionManage.tips.hasOrgDelFailed'))
                  } else {
                    that.$refs.functionTree.removeTreeItem(item.id)
                    // 清空右侧详细信息栏
                    that.clearModel()
                    that.$Message.success(that.$t('functionManage.tips.delSuccess'))
                  }
                }).catch(function (error) {
                  console.log(error)
                })
              }
            })
          }, 500)
        }
      })
    },
    // 删除功能
    delFunc: function () {
      let selected = this.$refs['functionTree'].getSelect()
      this.getDataById(selected.id)
      let that = this
      if (!selected) {
        this.$Message.error(this.$t('functionManage.tips.pleaseSelectNode'))
        return
      }
      if (selected.isParent === true && this.dataById.children && this.dataById.children.length > 0) {
        this.$Message.error(this.$t('functionManage.tips.delFailed')) // 异步有子节点的节点物理删除
        return
      }
      this.$Modal.confirm({
        title: '确认',
        content: '确认删除？',
        onOk: function () {
          setTimeout(function () {
            if (selected.editType === 'add') {
              that.$refs.functionTree.removeTreeItem(selected.id)
              that.$Message.success(that.$t('functionManage.tips.delSuccess'))
            } else {
              // that.$refs.functionTree.removeTreeItem(selected.id)
              funManageApi.delFunction(selected.id).then(function (response) {
                if (response.data.code === '1') {
                  that.$Message.error(that.$t('functionManage.tips.hasOrgDelFailed'))
                } else {
                  // 从树中移除该节点
                  that.$refs.functionTree.removeTreeItem(selected.id)
                  // that.$refs['functionTree'].refresh()
                  // 清空右侧详细信息栏
                  that.clearModel()
                  that.$Message.success(that.$t('functionManage.tips.delSuccess'))
                }
              }).catch(function (error) {
                console.log(error)
              })
            }
          }, 500)
        }
      })
    },
    handleSubmit: function (name) {
      let that = this
      if (!this.value) {
        this.$Message.error(this.$t('functionManage.tips.pleaseSelectNode'))
        return false
      }
      let selected = this.$refs['functionTree'].getSelect()
      // 数据传递
      this.$refs[name].validate(function (valid) {
        if (valid) {
          if (selected.editType === 'add') { // 新增
            that.operator = 'add'
          } else { // 更新
            that.operator = 'update'
          }
          // 保存时，如果菜单类型隐藏，则菜单类型字段保存为空值
          if (!that.menuTypeIsShow) {
            that.functionModel.menuType = ''
          }
          if (that.multiApp) {
            let appId = that.appModel.appId
            if (appId && appId !== '') {
              that.functionModel.appId = appId
            }
          }
          let index = that.functionModel.functionUrl.indexOf('/[web]')
          let url = that.functionModel.functionUrl
          let len = url.length
          let urlSubStr = url.substring(6, len)
          if (index === 0) {
            if (urlSubStr.indexOf('http://') !== 0 && urlSubStr.indexOf('https://') !== 0) {
              urlSubStr = 'http://' + urlSubStr
            }
            that.functionModel.functionUrl = '/[web]' + encodeURIComponent(urlSubStr)
          }
          funManageApi.saveFunInfo(that.operator, that.functionModel).then(function (response) {
            that.$Message.success(that.$t('functionManage.tips.saveSuccess'))
            let nodeId = response.data.data
            if (nodeId !== '') {
              that.functionModel.functionId = nodeId
            }
            let obj = {
              id: that.functionModel.functionId,
              pId: selected.pId,
              editType: ''
            }
            if (Config.ifLocale === true) {
              obj.name = that.functionModel[that.currentfiled]
            } else {
              obj.name = that.functionModel.functionName
            }
            if (that.operator === 'add') {
              that.$refs.functionTree.appendTreeItem(selected.pId, obj)
              that.$refs.functionTree.removeTreeItem(selected.id)
              that.$refs.functionTree.updateSelect(obj.id)
            } else {
              that.$refs.functionTree.updateTreeItem(selected.id, obj)
            }
            that.$refs['functionTree'].refresh()
            // that.value = ''
            // that.clearModel()
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          that.$Message.error(this.$t('functionManage.tips.saveFailed'))
        }
      })
    },
    clearModel: function () {
      this.functionModel = {
        functionId: '',
        functionName: '',
        functionDesc: '',
        functionUrl: '',
        displaySeq: 1,
        functionType: '0',
        iconClass: '',
        logFlag: '0',
        state: '1',
        parentName: '',
        supFuncId: '',
        menuType: '0'
      }
    },
    handleReset: function (name) {
      if (Config.ifLocale === true) {
        this.functionModel[this.currentfiled] = ''
      } else {
        this.functionModel.functionName = ''
      }
      this.functionModel.functionName = ''
      this.functionModel.functionDesc = ''
      this.functionModel.functionUrl = ''
      this.functionModel.displaySeq = 1
      this.functionModel.functionType = '0'
      this.functionModel.iconClass = ''
      this.functionModel.logFlag = '0'
      this.functionModel.state = '1'
      this.functionModel.supFuncId = ''
      this.functionModel.menuType = '0'
      if (this.multiApp) {
        this.functionModel.appId = this.appModel.appId
      }
    },
    functionChange: function () {
      // 菜单类型
      if (this.functionModel.functionType === '0' || this.functionModel.functionType === '3') {
        this.menuTypeIsShow = true
        if (this.functionModel.menuType === null || this.functionModel.menuType === '') {
          this.functionModel.menuType = '0'
        }
      } else {
        this.menuTypeIsShow = false
      }
    },
    getHeight: function () {
      let heigth = document.getElementById('sidebarMenu').children[0].clientHeight
      this.height = (heigth - 140)
      if (this.$refs.functionForm) {
        let formH = this.$refs.functionForm.$el.clientHeight
        if (formH > heigth - 250) {
          this.formHeight = heigth - 180
        } else {
          this.formHeight = ''
        }
      }
    },
    // 国际化
    setLocale: function () {
      var localeValMap = this.localeValMap
      if (Config.ifLocale === true && JSON.stringify(localeValMap) !== '{}') {
        this.ifLocale = true
      } else {
        this.ifLocale = false
      }
    },
    setCurrLocaleValue: function (data) {
      var localeValMap = this.localeValMap
      if (Config.ifLocale === true && JSON.stringify(localeValMap) !== '{}') {
        if (data && data != null && (typeof data) !== 'string') {
          this.functionModel[this.currentfiled] = data[this.currentfiled]
        } else if (data && data != null && (typeof data) === 'string') {
          this.functionModel[this.currentfiled] = data
        } else {
          this.functionModel[this.currentfiled] = this.currentFiledVal
        }
      }
    },
    setLocaleValue: function (data) {
      var localeValMap = this.localeValMap
      if (Config.ifLocale === true && JSON.stringify(localeValMap) !== '{}') {
        if (data && data != null) {
          for (var key in localeValMap) {
            // this.functionModel[key] = (data[key] && data[key] !== '') ? data[key] : this.localeValMap[key]
            // this.localeValMap[key] = (data[key] && data[key] !== '') ? data[key] : this.localeValMap[key]
            this.functionModel[key] = data[key]
            this.localeValMap[key] = data[key]
          }
        } else {
          var localeList = this.localeList
          for (var i = 0; i < localeList.length; i++) {
            this.localeValMap[localeList[i].langFieldMapping] = localeList[i].langDefaultValue
            this.functionModel[localeList[i].langFieldMapping] = localeList[i].langDefaultValue
          }
        }
      }
    },
    configLocale: function () {
      this.localeModal = true
    },
    localeOk: function () {
      Object.assign(this.functionModel, this.localeValMap)
    }
  }
}
</script>
<style scoped>
.fm_footer{
    background: #fff;
    z-index: 9;
    margin-top: -2px;
    position: absolute;
    border: 1px solid #e8eaec;
    text-align: center;
    padding: 10px;
    left: 10px;
    right: 10px;
}
</style>
