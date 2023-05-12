export default [
  // {
  //   path: '/gen',
  //   name: 'gen',
  //   meta: {
  //     icon: 'zvu-icon zvu-icon-speedometer',
  //     title: '开发平台'
  //   },
  //   component: (resolve) => require(['@/views/index'], resolve),
  //   children: [
  //   // 主控台
  //     {
  //       path: '/gen/dataSource',
  //       name: 'dataSource',
  //       meta: {
  //         title: '数据源管理'
  //       },
  //       component: (resolve) => require(['@/views/demo/framework/gen/dataSource/dataSource'], resolve)
  //     },
  //     {
  //       path: '/gen/codeGenerator',
  //       name: 'codeGenerator',
  //       meta: {
  //         title: '代码生成'
  //       },
  //       component: (resolve) => require(['@/views/demo/framework/gen/codeGenerator/codeGenerator'], resolve)
  //     },
  //     {
  //       path: '/gen/formDesign',
  //       name: 'formDesign',
  //       meta: {
  //         title: '表单设计'
  //       },
  //       component: (resolve) => require(['@/views/demo/framework/gen/formDesign/formDesign'], resolve)
  //     },
  //     {
  //       path: '/gen/formManagement',
  //       name: 'formManagement',
  //       meta: {
  //         title: '表单管理'
  //       },
  //       component: (resolve) => require(['@/views/demo/framework/gen/formManagement/formManagement'], resolve)
  //     }
  //   ]
  // },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      icon: 'zvu-icon zvu-icon-speedometer',
      title: 'dashboard'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 主控台
      {
        path: '/dashboard/controlBoard',
        name: 'controlBoard',
        meta: {
          title: '控制台'
        },
        component: (resolve) => require(['@/views/demo/framework/dashboard/controlBoard/controlBoard'], resolve)
      },
      {
        path: '/dashboard/workBoard',
        name: 'workBoard',
        meta: {
          title: '工作台'
        },
        component: (resolve) => require(['@/views/demo/framework/dashboard/workBoard/workBoard'], resolve)
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-paper-outline',
      title: '表单页面'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 表单页
      {
        path: '/form/formSearch',
        name: 'formSearch',
        meta: {
          title: '查询表单'
        },
        component: (resolve) => require(['@/views/demo/framework/form/formSearch/formSearch'], resolve)
      },
      {
        path: '/form/formBase',
        name: 'formBase',
        meta: {
          title: '基础表单'
        },
        component: (resolve) => require(['@/views/demo/framework/form/formBase/formBase'], resolve)
      },
      {
        path: '/form/formAdvanced',
        name: 'formAdvanced',
        meta: {
          title: '高级表单'
        },
        component: (resolve) => require(['@/views/demo/framework/form/formAdvanced/formAdvanced'], resolve)
      },
      {
        path: '/form/formSteps',
        name: 'formSteps',
        meta: {
          title: '表单分步'
        },
        component: (resolve) => require(['@/views/demo/framework/form/formSteps/formSteps'], resolve)
      },
      {
        path: '/form/formClassify',
        name: 'formClassify',
        meta: {
          title: '表单归类'
        },
        component: (resolve) => require(['@/views/demo/framework/form/formClassify/formClassify'], resolve)
      },
      {
        path: '/form/formDetails',
        name: 'formDetails',
        meta: {
          title: '表单详情'
        },
        component: (resolve) => require(['@/views/demo/framework/form/formDetails/formDetails'], resolve)
      },
      {
        path: '/form/tableBase',
        name: 'tableBase',
        meta: {
          title: '表格'
        },
        component: (resolve) => require(['@/views/demo/framework/form/tableBase/tableBase'], resolve)
      }
    ]
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-list-outline',
      title: '列表页面'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 列表
      {
        path: '/list/listBase',
        name: 'listBase',
        meta: {
          title: '基础列表'
        },
        component: (resolve) => require(['@/views/demo/framework/list/listBase/listBase'], resolve)
      },
      {
        path: '/list/listCard',
        name: 'listCard',
        meta: {
          title: '卡片列表'
        },
        component: (resolve) => require(['@/views/demo/framework/list/listCard/listCard'], resolve)
      },
      {
        path: '/list/listUser',
        name: 'listUser',
        meta: {
          title: '用户列表'
        },
        component: (resolve) => require(['@/views/demo/framework/list/listUser/listUser'], resolve)
      },
      {
        path: '/list/listGoods',
        name: 'listGoods',
        meta: {
          title: '商品列表'
        },
        component: (resolve) => require(['@/views/demo/framework/list/listGoods/listGoods'], resolve)
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-search-strong',
      title: '搜索页面'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 搜索
      {
        path: '/search/article',
        name: 'article',
        meta: {
          title: '搜索列表（文章）'
        },
        component: (resolve) => require(['@/views/demo/framework/search/searchList/article'], resolve)
      },
      {
        path: '/search/project',
        name: 'project',
        meta: {
          title: '搜索列表（项目）'
        },
        component: (resolve) => require(['@/views/demo/framework/search/searchList/project'], resolve)
      },
      {
        path: '/search/apply',
        name: 'apply',
        meta: {
          title: '搜索列表（应用）'
        },
        component: (resolve) => require(['@/views/demo/framework/search/searchList/apply'], resolve)
      }
    ]
  },
  {
    path: '/details',
    name: 'details',
    meta: {
      icon: 'zvu-icon zvu-icon-document',
      title: '详情页面'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 详情
      {
        path: '/details/detailsBase',
        name: 'detailsBase',
        meta: {
          title: '基础详情页'
        },
        component: (resolve) => require(['@/views/demo/framework/details/detailsBase/detailsBase'], resolve)
      },
      {
        path: '/details/detailsAdvanced',
        name: 'detailsAdvanced',
        meta: {
          title: '高级详情页'
        },
        component: (resolve) => require(['@/views/demo/framework/details/detailsAdvanced/detailsAdvanced'], resolve)
      }
    ]
  },
  {
    path: '/result',
    name: 'result',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-checkmark-outline',
      title: '结果页面'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 结果
      {
        path: '/result/success',
        name: 'success',
        meta: {
          title: '成功页'
        },
        component: (resolve) => require(['@/views/demo/framework/result/success/success'], resolve)
      },
      {
        path: '/result/error',
        name: 'error',
        meta: {
          title: '失败页'
        },
        component: (resolve) => require(['@/views/demo/framework/result/error/error'], resolve)
      }
    ]
  },
  {
    path: '/abnormal',
    name: 'abnormal',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-information-outline',
      title: '异常页面'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // 异常
      {
        path: '/abnormal/demo-404',
        name: 'demo-404',
        meta: {
          title: '404'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/404/404'], resolve)
      },
      {
        path: '/abnormal/demo-500',
        name: 'demo-500',
        meta: {
          title: '500'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/500/500'], resolve)
      },
      {
        path: '/abnormal/demo-unknown',
        name: 'demo-unknown',
        meta: {
          title: '未知错误'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/unknown/unknown'], resolve)
      },
      {
        path: '/abnormal/demo-notDev',
        name: 'demo-notDev',
        meta: {
          title: '未开发'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/notDev/notDev'], resolve)
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-navigate-outline',
      title: '开发样例'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
      {
        path: '/demo/notifFormList',
        name: 'notifFormList',
        meta: {
          title: 'notifFormList'
        },
        component: (resolve) => require(['@/views/demo/framework/demo/notifFormList/notifFormList'], resolve)
      }
    ]
  },
  {
    path: '/vxetable',
    name: 'vxetable',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-grid-view-outline',
      title: 'vxe表格'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
    // vxeTable
      {
        path: '/vxetable/vxetable0',
        name: 'vxetable0',
        meta: {
          title: 'vxeTable'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable'], resolve)
      },
      {
        path: '/vxetable/vxeTable1',
        name: 'vxeTable1',
        meta: {
          title: 'vxeTable1'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable1'], resolve)
      },
      {
        path: '/vxetable/vxeTable2',
        name: 'vxeTable2',
        meta: {
          title: 'vxeTable2'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable2'], resolve)
      },
      {
        path: '/vxetable/vxeTable3',
        name: 'vxeTable3',
        meta: {
          title: 'vxeTable3'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable3'], resolve)
      },
      {
        path: '/vxetable/vxeTable4',
        name: 'vxeTable4',
        meta: {
          title: 'vxeTable4'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable4'], resolve)
      },
      {
        path: '/vxetable/vxeTable5',
        name: 'vxeTable5',
        meta: {
          title: 'vxeTable5'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable5'], resolve)
      },
      {
        path: '/vxetable/vxeTable6',
        name: 'vxeTable6',
        meta: {
          title: 'vxeTable6'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable6'], resolve)
      },
      {
        path: '/vxetable/vxeTable7',
        name: 'vxeTable7',
        meta: {
          title: 'vxeTable7'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable7'], resolve)
      },
      {
        path: '/vxetable/vxeTable8',
        name: 'vxeTable8',
        meta: {
          title: 'vxeTable8'
        },
        component: (resolve) => require(['@/views/demo/framework/vxeTable/vxeTable8'], resolve)
      }
    ]
  },
  // 组件
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'zvu-icon zvu-icon-ios-navigate-outline',
      title: 'UI组件库'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
      // 组件-基础
      {
        path: '/components/base',
        name: 'cpBase',
        meta: {
          title: '基础'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/components/base/button',
            name: 'cpButton',
            meta: {
              title: 'button 按钮'
            },
            component: (resolve) => require(['@/views/components/base/button/button'], resolve)
          },
          {
            path: '/components/base/icon',
            name: 'cpIcon',
            meta: {
              title: 'icon 图标'
            },
            component: (resolve) => require(['@/views/components/base/icon/icon'], resolve)
          }
        ]
      },
      // 组件-布局
      {
        path: '/components/layout',
        name: 'cpLay',
        meta: {
          title: '布局'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/components/layout/grid',
            name: 'cpGrid',
            meta: {
              title: 'grid 表格'
            },
            component: (resolve) => require(['@/views/components/layout/grid/grid'], resolve)
          },
          {
            path: '/components/layout/layout',
            name: 'cpLayout',
            meta: {
              title: 'layout 布局'
            },
            component: (resolve) => require(['@/views/components/layout/layout/layout'], resolve)
          },
          {
            path: '/components/card/card',
            name: 'cpCard',
            meta: {
              title: 'card 卡片'
            },
            component: (resolve) => require(['@/views/components/layout/card/card'], resolve)
          },
          {
            path: '/components/collapse/collapse',
            name: 'cpCollapse',
            meta: {
              title: 'collapse 折叠面板'
            },
            component: (resolve) => require(['@/views/components/layout/collapse/collapse'], resolve)
          },
          {
            path: '/components/iframe/iframe',
            name: 'cpIframe',
            meta: {
              title: 'iframe 内联框架'
            },
            component: (resolve) => require(['@/views/components/layout/iframe/iframe'], resolve)
          },
          {
            path: '/components/spread/spread',
            name: 'cpSpread',
            meta: {
              title: 'spread 展开更多'
            },
            component: (resolve) => require(['@/views/components/layout/spread/spread'], resolve)
          },
          {
            path: '/components/split/split',
            name: 'cpSplit',
            meta: {
              title: 'split 分割面板'
            },
            component: (resolve) => require(['@/views/components/layout/split/split'], resolve)
          },
          {
            path: '/components/cell/cell',
            name: 'cpCell',
            meta: {
              title: 'cell 单元格'
            },
            component: (resolve) => require(['@/views/components/layout/cell/cell'], resolve)
          }
        ]
      },
      // 组件-导航
      {
        path: '/components/nav',
        name: 'cpNav',
        meta: {
          title: '导航'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/components/nav/menu',
            name: 'cpMenu',
            meta: {
              title: 'menu 菜单'
            },
            component: (resolve) => require(['@/views/components/navigation/menu/menu'], resolve)
          },
          {
            path: '/components/nav/tabs',
            name: 'cpTabs',
            meta: {
              title: 'tabs 标签页'
            },
            component: (resolve) => require(['@/views/components/navigation/tabs/tabs'], resolve)
          },
          {
            path: '/components/nav/breadcrumb',
            name: 'cpBreadcrumb',
            meta: {
              title: 'breadcrumb 面包屑'
            },
            component: (resolve) => require(['@/views/components/navigation/breadcrumb/breadcrumb'], resolve)
          },
          {
            path: '/components/nav/badge',
            name: 'cpBadge',
            meta: {
              title: 'badge 徽章'
            },
            component: (resolve) => require(['@/views/components/navigation/badge/badge'], resolve)
          },
          {
            path: '/components/nav/anchor',
            name: 'cpAnchor',
            meta: {
              title: 'anchor 锚点'
            },
            component: (resolve) => require(['@/views/components/navigation/anchor/anchor'], resolve)
          },
          {
            path: '/components/nav/step',
            name: 'cpStep',
            meta: {
              title: 'step 步骤条'
            },
            component: (resolve) => require(['@/views/components/navigation/step/step'], resolve)
          },
          {
            path: '/components/nav/loading-bar',
            name: 'cpLoadingBar',
            meta: {
              title: 'loading-bar 进度条'
            },
            component: (resolve) => require(['@/views/components/navigation/loading-bar/loading-bar'], resolve)
          },
          {
            path: '/components/nav/drawer',
            name: 'cpDrawer',
            meta: {
              title: 'drawer 抽屉'
            },
            component: (resolve) => require(['@/views/components/navigation/drawer/drawer'], resolve)
          }
        ]
      },
      // 组件-表单
      {
        path: '/components/form',
        name: 'cpForms',
        meta: {
          title: '表单'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/components/form/input',
            name: 'cpInput',
            meta: {
              title: 'input 输入框'
            },
            component: (resolve) => require(['@/views/components/form/input/input'], resolve)
          },
          {
            path: '/components/form/radio',
            name: 'cpRadio',
            meta: {
              title: 'radio 单选框'
            },
            component: (resolve) => require(['@/views/components/form/radio/radio'], resolve)
          },
          {
            path: '/components/form/checkbox',
            name: 'cpCheckbox',
            meta: {
              title: 'checkbox 复选框'
            },
            component: (resolve) => require(['@/views/components/form/checkbox/checkbox'], resolve)
          },
          {
            path: '/components/form/switch',
            name: 'cpSwitch',
            meta: {
              title: 'switch 切换'
            },
            component: (resolve) => require(['@/views/components/form/switch/switch'], resolve)
          },
          {
            path: '/components/form/page',
            name: 'cpPage',
            meta: {
              title: 'page 分页'
            },
            component: (resolve) => require(['@/views/components/form/page/page'], resolve)
          },
          {
            path: '/components/form/select',
            name: 'cpSelect',
            meta: {
              title: 'select 选择器'
            },
            component: (resolve) => require(['@/views/components/form/select/select'], resolve)
          },
          {
            path: '/components/form/auto-complete',
            name: 'cpAutoComplete',
            meta: {
              title: 'auto-complete 自动补全'
            },
            component: (resolve) => require(['@/views/components/form/auto-complete/auto-complete'], resolve)
          },
          {
            path: '/components/form/slider',
            name: 'cpSlider',
            meta: {
              title: 'slider 滑动'
            },
            component: (resolve) => require(['@/views/components/form/slider/slider'], resolve)
          },
          {
            path: '/components/form/data-picker',
            name: 'cpDataPicker',
            meta: {
              title: 'data-picker 日期选择'
            },
            component: (resolve) => require(['@/views/components/form/data-picker/data-picker'], resolve)
          },
          {
            path: '/components/form/time-picker',
            name: 'cpTimePicker',
            meta: {
              title: 'time-picker 时间选择'
            },
            component: (resolve) => require(['@/views/components/form/time-picker/time-picker'], resolve)
          },
          {
            path: '/components/form/cascader',
            name: 'cpCascader',
            meta: {
              title: 'cascader 级联选择'
            },
            component: (resolve) => require(['@/views/components/form/cascader/cascader'], resolve)
          },
          {
            path: '/components/form/transfer',
            name: 'cpTransfer',
            meta: {
              title: 'transfer 穿梭框'
            },
            component: (resolve) => require(['@/views/components/form/transfer/transfer'], resolve)
          },
          {
            path: '/components/form/input-number',
            name: 'cpInputNumber',
            meta: {
              title: 'input-number 数字输入框'
            },
            component: (resolve) => require(['@/views/components/form/input-number/input-number'], resolve)
          },
          {
            path: '/components/form/rate',
            name: 'cpRate',
            meta: {
              title: 'rate 评分'
            },
            component: (resolve) => require(['@/views/components/form/rate/rate'], resolve)
          },
          {
            path: '/components/form/upload',
            name: 'cpUpload',
            meta: {
              title: 'upload 上传'
            },
            component: (resolve) => require(['@/views/components/form/upload/upload'], resolve)
          },
          {
            path: '/components/form/color-picker',
            name: 'cpColorPicker',
            meta: {
              title: 'color-picker 颜色选择'
            },
            component: (resolve) => require(['@/views/components/form/color-picker/color-picker'], resolve)
          },
          {
            path: '/components/form/form',
            name: 'cpForm',
            meta: {
              title: 'form 表单'
            },
            component: (resolve) => require(['@/views/components/form/form/form'], resolve)
          },
          {
            path: '/components/form/editor',
            name: 'cpEditor',
            meta: {
              title: 'editor 富文本编辑器'
            },
            component: (resolve) => require(['@/views/components/form/editor/editor'], resolve)
          },
          {
            path: '/components/form/table',
            name: 'cpTable',
            meta: {
              title: 'table 表格'
            },
            component: (resolve) => require(['@/views/components/form/table/table'], resolve)
          },
          {
            path: '/components/form/table1',
            name: 'cpTable1',
            meta: {
              title: 'table1 表格'
            },
            component: (resolve) => require(['@/views/components/form/table/table1'], resolve)
          },
          {
            path: '/components/form/table2',
            name: 'cpTable2',
            meta: {
              title: 'table2 表格'
            },
            component: (resolve) => require(['@/views/components/form/table/table2'], resolve)
          },
          {
            path: '/components/form/dropdown',
            name: 'cpDropdown',
            meta: {
              title: 'dropdown 下拉菜单'
            },
            component: (resolve) => require(['@/views/components/form/dropdown/dropdown'], resolve)
          },
          {
            path: '/components/form/treeselect',
            name: 'cpTreeselect',
            meta: {
              title: 'treeselect 下拉树'
            },
            component: (resolve) => require(['@/views/components/form/treeselect/treeselect'], resolve)
          },
          {
            path: '/components/form/tree-table',
            name: 'cpTreeTable',
            meta: {
              title: 'tree-table 表格树'
            },
            component: (resolve) => require(['@/views/components/form/tree-table/tree-table'], resolve)
          },
          {
            path: '/components/form/category-picker',
            name: 'cpCategoryPicker',
            meta: {
              title: 'category-picker 级联'
            },
            component: (resolve) => require(['@/views/components/form/category-picker/category-picker'], resolve)
          }
        ]
      },
      // 组件-视图
      {
        path: '/components/view',
        name: 'cpView',
        meta: {
          title: '视图'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/components/view/alert',
            name: 'cpAlert',
            meta: {
              title: 'alert 警告提示'
            },
            component: (resolve) => require(['@/views/components/view/alert/alert'], resolve)
          },
          {
            path: '/components/view/message',
            name: 'cpMessage',
            meta: {
              title: 'message 全局提示'
            },
            component: (resolve) => require(['@/views/components/view/message/message'], resolve)
          },
          {
            path: '/components/view/notice',
            name: 'cpNotice',
            meta: {
              title: 'notice 通知提醒'
            },
            component: (resolve) => require(['@/views/components/view/notice/notice'], resolve)
          },
          {
            path: '/components/view/modal',
            name: 'cpModal',
            meta: {
              title: 'modal 对话框'
            },
            component: (resolve) => require(['@/views/components/view/modal/modal'], resolve)
          },
          {
            path: '/components/view/tree',
            name: 'cpTree',
            meta: {
              title: 'tree 树组件'
            },
            component: (resolve) => require(['@/views/components/view/tree/tree'], resolve)
          },
          {
            path: '/components/view/tooltip',
            name: 'cpTooltip',
            meta: {
              title: 'tooltip 文字提示'
            },
            component: (resolve) => require(['@/views/components/view/tooltip/tooltip'], resolve)
          },
          {
            path: '/components/view/poptip',
            name: 'cpPoptip',
            meta: {
              title: 'poptip 气泡提示'
            },
            component: (resolve) => require(['@/views/components/view/poptip/poptip'], resolve)
          },
          {
            path: '/components/view/progress',
            name: 'cpProgress',
            meta: {
              title: 'progress 进度条'
            },
            component: (resolve) => require(['@/views/components/view/progress/progress'], resolve)
          },
          {
            path: '/components/view/avatar',
            name: 'cpAvatar',
            meta: {
              title: 'avatar 头像'
            },
            component: (resolve) => require(['@/views/components/view/avatar/avatar'], resolve)
          },
          {
            path: '/components/view/tag',
            name: 'cpTag',
            meta: {
              title: 'tag 标签'
            },
            component: (resolve) => require(['@/views/components/view/tag/tag'], resolve)
          },
          {
            path: '/components/view/carousel',
            name: 'cpCarousel',
            meta: {
              title: 'carousel 走马灯'
            },
            component: (resolve) => require(['@/views/components/view/carousel/carousel'], resolve)
          },
          {
            path: '/components/view/timeline',
            name: 'cpTimeline',
            meta: {
              title: 'timeline 时间轴'
            },
            component: (resolve) => require(['@/views/components/view/timeline/timeline'], resolve)
          },
          {
            path: '/components/view/cross-page',
            name: 'cpCrossPage',
            meta: {
              title: 'cross-page 跨页多选'
            },
            component: (resolve) => require(['@/views/components/view/cross-page/cross-page'], resolve)
          },
          {
            path: '/components/view/vtree',
            name: 'cpVtree',
            meta: {
              title: 'vtree 树'
            },
            component: (resolve) => require(['@/views/components/view/vtree/vtree'], resolve)
          },
          {
            path: '/components/view/org-tree',
            name: 'cpOrgTree',
            meta: {
              title: 'org-tree 组织树'
            },
            component: (resolve) => require(['@/views/components/view/org-tree/org-tree'], resolve)
          }
        ]
      },
      // 组件-其他
      {
        path: '/components/other',
        name: 'cpOther',
        meta: {
          title: '其他'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/components/other/affix',
            name: 'cpAffix',
            meta: {
              title: 'affix 图钉'
            },
            component: (resolve) => require(['@/views/components/other/affix/affix'], resolve)
          },
          {
            path: '/components/other/back-top',
            name: 'cpBackTop',
            meta: {
              title: 'back-top 返回顶部'
            },
            component: (resolve) => require(['@/views/components/other/back-top/back-top'], resolve)
          },
          {
            path: '/components/other/spin',
            name: 'cpSpin',
            meta: {
              title: 'spin 加载中'
            },
            component: (resolve) => require(['@/views/components/other/spin/spin'], resolve)
          },
          {
            path: '/components/other/scroll',
            name: 'cpScroll',
            meta: {
              title: 'scroll 滚动条'
            },
            component: (resolve) => require(['@/views/components/other/scroll/scroll'], resolve)
          },
          {
            path: '/components/other/circle',
            name: 'cpCircle',
            meta: {
              title: 'circle 进度环'
            },
            component: (resolve) => require(['@/views/components/other/circle/circle'], resolve)
          }
        ]
      }
    ]
  }
]
