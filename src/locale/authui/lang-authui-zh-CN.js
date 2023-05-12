/*
 * @Author: your name
 * @Date: 2020-05-29 11:52:41
 * @LastEditTime: 2020-06-01 16:35:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui-tenant\src\views\authui5\locale\auth-zh-CN.js
 */

export default {
  // 公共
  common: {
    button: {
      save: '保存',
      reset: '重置',
      detail: '详情',
      edit: '编辑',
      delete: '删除',
      query: '查询',
      submit: '提交',
      close: '关闭',
      chooseApp: '选择应用',
      search: '搜索',
      add: '新增',
      batchdelete: '批量删除'
    },
    placeholder: {
      input: '请输入...',
      dateChoose: '请选择日期...',
      choose: '请选择'
    },
    title: {
      chooseApp: '选择应用',
      confirm: '确认',
      operate: '操作',
      wait: '待选',
      select: '已选',
      code: '编码',
      name: '名称',
      supCode: '上级编码',
      supName: '上级名称',
      errorInfo: '错误信息'
    },
    label: {
      code: '编码',
      name: '名称'
    },
    tips: {
      chooseOneRecord: '请选择一条记录！',
      chooseLeastOneRecord: '请选择至少一条记录！',
      chooseNode: '请选择节点',
      confirmDelete: '是否删除？',
      confirmAdd: '是否添加',
      confirmBatchDelete: '是否批量删除？'
    },
    messsage: {
      success: '成功',
      fail: '失败',
      addSuccess: '添加成功',
      addFail: '添加失败',
      delSuccess: '删除成功',
      delFail: '删除失败'
    },
    option: {
      yes: '是',
      no: '否'
    },
    tree: {
      opTitle: '树操作',
      chooseAll: '全部勾选',
      cancelAll: '取消全选',
      expandAll: '展开所有',
      foldAll: '合并所有'
    }
  },
  framework: {
    menuTitle: {
      userManage: '用户管理',
      rolesManage: '角色管理',
      orgManage: '组织管理',
      functionManage: '功能管理',
      userGroupManage: '用户组管理',
      fileStorageManage: '文件存储信息管理',
      seqManage: '全局序号管理',
      mailManage: '邮件信息管理',
      producerMessageManage: '生产者消息管理',
      consumerManage: '消费者消息管理',
      resManage: '外部资源管理',
      dataCategory: '属性权限管理',
      dictManage: '数据字典管理',
      sysPropertyManage: '系统属性管理',
      appmanage: '应用管理',
      sysAppInfoManage: '系统应用管理',
      tenantManage: '多租户管理',
      originalManage: '系统权限模板',
      auditLog: '审计日志',
      logonLog: '登录日志',
      operateLog: '操作日志',
      sqlLog: 'sql日志',
      scheduleManage: '定时任务管理',
      executeLogs: '任务运行日志',
      exceptionLogs: '任务异常日志'
    },
    btn: {
      closeOther: '关闭其他',
      closeAll: '全部关闭'
    },
    messsage: {
      getMenuError: '获取菜单异常!',
      uiPriFailForUrlTypeError: '元素鉴权失败，ui-privilege组件url属性类型错误，只支持String和Array类型！',
      uiPriFailForLackUrlError: '元素鉴权失败，ui-privilege组件缺少url属性！',
      getDictDataFail: '获取数据字典数据失败',
      getSessionDataFail: '获取数据字典数据失败',
      appLoginFail: '应用登录失败',
      auth02: '系统获取本地用户身份标识信息失败！',
      auth02_1: '系统获取本地用户身份信息失败！',
      auth03: '系统获取本地用户身份信息失败！',
      auth04: '系统本地用户身份信息和实际登录用户身份信息不符！',
      initFuncPrivilegeSuccess: '初始化和系统权限成功',
      initFuncPrivilegeFail: '初始化和系统权限失败'
    },
    tips: {
      redirectToPage: '跳转相应页',
      redirectToLoginPage: '系统将调回登录页面！'
    },
    component: {
      vxeTblExport: {
        text: {
          export: '导出',
          exportCur: '导出当前页',
          exportAll: '导出全部页'
        },
        label: {
          pdf: 'pdf竖版',
          pdfRotate: 'pdf横版',
          exportVersion: '导出版本',
          exportMethod: '导出方式',
          exportHidenCol: '导出隐藏列',
          localExport: '本地导出',
          onlineExport: '在线导出'
        },
        alert: {
          addExportOnlinePath: '请添加exportOnlinePath',
          leastOneExportConfigexportType: 'exportConfigexportType中至少添加一个'
        }
      },
      vxeTblExt: {
        text: {
          refresh: '刷新',
          export: '导出'
        }
      }
    }
  },
  // 功能管理
  functionManage: {
    base: {
      // 管理页面标题
      title: '功能管理',
      // 功能名称新增默认值
      currentfiled: 'functionName',
      // 请输入
      inputPlaceholder: '请输入...',
      // 右键增加功能
      addFunc: '增加功能',
      // 右键删除功能
      delFunc: '删除功能',
      // 删除弹出框标题
      confirmTile: '确认',
      // 删除提示消息
      confirmContent: '要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！',
      // 顶级
      toplevel: '顶级'

    },
    input: {
      // 新增菜单默认名
      funcName: '新增菜单'
    },
    label: {
      // 应用选择
      selectApp: '选择应用',
      // 添加一级功能
      addFirstFunction: '添加一级功能',
      // 功能名称
      funcName: '功能名称',
      // 功能描述
      funcDes: '功能描述',
      // URL地址
      funcUrl: 'URL地址',
      // 节点排序
      funcOrder: '节点排序',
      // 功能类型
      funcType: '功能类型',
      // 菜单类型
      menuType: '菜单类型',
      // 记录日志
      logFlag: '记录日志',
      // 功能状态
      funcState: '功能状态',
      // 图标选择
      funcIcon: '图标选择',
      // 上级节点名称
      parentName: '上级节点名称',
      // 功能类型下拉选项（菜单本地）
      menuLocal: '菜单（本地）',
      // 功能类型下拉选项（按钮）
      button: '按钮',
      // 功能类型下拉选项（web服务）
      webService: 'web服务',
      // 功能类型下拉选项（菜单远程）
      menuRemote: '菜单（远程）',
      // 功能类型下拉选项（关联接口）
      connectInterface: '关联接口',
      // 菜单类型下拉选项（PC端）
      menuPC: 'PC端',
      // 菜单类型下拉选项（移动端）
      menuMobile: '移动端',
      // 下拉选项（是）
      yes: '是',
      // 下拉选项（否）
      no: '否',
      // 下拉选项（可用）
      available: '可用',
      // 下拉选项（不可用）
      unavailable: '不可用'
    },
    tips: {
      pleaseSelectNode: '请选择节点',
      funcNameIsNull: '功能名称不能为空',
      funcDescIsNull: '功能描述不能为空',
      urlIsNull: 'URL地址不能为空',
      orderValidFaild: '节点排序不能为空且为数字',
      // 删除确认消息
      confirmMessage: '确认删除？',
      delSuccess: '删除成功 ！',
      delFailed: '不能删除非叶子节点，请选择叶子节点进行删除！',
      hasOrgDelFailed: '该组织下存在用户，不能删除！',
      saveSuccess: '保存成功 ！',
      saveFailed: '保存失败，请检查信息是否完整 ！'
    },
    button: {}
  },
  // 用户管理
  userManage: {
    searchLabel: {
      userName: '用户名称：',
      userCode: '用户代码：',
      orgName: '所属组织：'
    },
    button: {
      // 添加
      add: '添加',
      // 重置用户
      resetUser: '重置用户',
      // 解锁
      unlock: '解锁',
      // 重置密码
      resetPas: '重置密码',
      // 修改密码
      editPas: '修改密码',
      // 配置角色
      addRole: '配置角色',
      // 配置用户组
      addGroup: '配置用户组'
    },
    label: {
      // 身份证号
      idCardNo: '身份证号',
      telNo: '电话号码',
      mailNo: '邮箱',
      wechatNo: '微信号',
      qqNo: 'QQ号',
      alipayNo: '支付宝账号',
      taobaoNo: '淘宝账号',
      microblogNo: '微博账号',
      oldPas: '原密码',
      newPas: '新密码',
      repeatPas: '重复密码'
    },
    title: {
      // 用户管理列表
      userManageList: '用户管理列表',
      // 用户名称
      userName: '用户名称',
      // 用户代码
      userCode: '用户代码',
      // 所属组织
      orgName: '所属组织',
      // 所属组织
      posName: '所属岗位',
      // 所属岗位
      roleNames: '角色信息',
      stateName: '当前状态',
      // 创建人
      createBy: '创建人',
      // 创建时间
      createDate: '创建时间',
      // 失效时间
      expireTime: '失效时间',
      // 岗位编码
      positionId: '岗位编码',
      // 组织标识
      orgId: '组织标识',
      // 用户编码
      userId: '用户标识',
      // 状态
      state: '状态',
      // 操作
      operate: '操作',
      editUserTitle: '新增用户',
      editPasTitle: '修改密码',
      addRole: '配置角色',
      roleId: '角色标识',
      parentId: '上级节点',
      showFlag: '是否显示',
      isAdminRole: '是否管理角色',
      roleName: '角色名称',
      roleCode: '角色代码',
      isAdminRoleDesc: '是否管理角色',
      checkFlag: '是否选中',
      uncheckRoleId: '选择未配置的角色',
      addGroup: '配置用户组',
      groupId: '用户组id',
      groupName: '用户组名称',
      groupCode: '用户组编码',
      chooseGroup: '选择配置用户组',
      unchooseUserList: '未选择用户列表',
      chooseUserList: '已选择用户列表'
    },
    tips: {
      mailAddressInvalid: '地址不合法'
    },
    placeholder: {
      oldPas: '请输入旧密码...',
      newPas: '请输入新密码...',
      repeatPas: '请重复输入...'
    }
  },
  // 角色管理
  roleManage: {
    button: {
      addRole: '添加',
      addUser: '配置用户',
      addOrg: '配置组织',
      doPrivilege: '管理授权',
      doBusiPrivilege: '业务授权',
      doDataPrivilege: '数据授权'
    },
    title: {
      roleManageList: '角色配置列表',
      roleId: '角色标识',
      parentId: '上级角色标识',
      showFlag: '是否显示',
      isAdminRole: '是否管理角色',
      roleName: '角色名称',
      roleCode: '角色代码',
      isAdminRoleDesc: '是否管理角色',
      createBy: '创建人',
      createDate: '创建时间',
      operate: '操作',
      doPrivilege: '管理授权',
      doBusdoPrivilege: '业务授权',
      addRole: '添加角色',
      editRole: '编辑角色',
      addOrg: '配置组织'
    },
    message: {
      submitSuccess: '提交成功',
      saveSuccess: '保存成功!'
    },
    tips: {
      adminRootRoleCanNotAddUser: '超级管理员不能配置自己角色下的用户！',
      adminRootRoleCanNotAddOrg: '超级管理员不能配置自己的组织！',
      adminRootRoleCanNotDoPrivilege: '超级管理员不能配置自己的管理授权！',
      nonAdminRoleCanNotDoPrivilege: '非管理角色不能做管理授权',
      adminRootRoleCanNotDoBusPrivilege: '超级管理员不能配置自己的业务授权！',
      nonAdminRoleCanNotOperate: '此用户无管理角色，不允许操作！',
      adminRootRoleCanNotEditSelf: '超级管理员不能编辑自己的角色！',
      adminRootRoleCanNotDelSelf: '超级管理员不能删除自己的角色！',
      inputRoleName: '请填写角色名称',
      inputRoleCode: '请填写角色代码',
      inputIsAdminrole: '请选择是否有管理职责',
      inputSupRoleId: '请选择上级角色!',
      supRoleInvalid: '上级角色不可以为当前角色或当前角色以下的角色!',
      duplicateRoleCode: '存在相同的角色代码，请重新输入角色代码!',
      supRoleCanNotBeSelf: '上级角色不能为自己，请选择其他角色作为上级角色！',
      saveFail: '保存失败，请检查信息是否完整!'
    },
    placeholder: {
      oldPas: '请输入旧密码...',
      newPas: '请输入新密码...',
      repeatPas: '请重复输入...'
    }
  },
  // 组织管理
  orgManage: {
    button: {
      addFirstOrg: '添加公司',
      delNodes: '批量删除',
      addOrgNode: '增加部门',
      addPosNode: '增加岗位',
      delTreeNode: '删除节点',
      showUsers: '查询用户',
      showRoles: '查询角色'
    },
    title: {
      showRoles: '查看角色',
      showUsers: '用户列表'
    },
    label: {
      orgId: '组织ID',
      orgName: '组织名称',
      orgCode: '组织代码',
      orgType: '组织类型',
      displaySeq: '排序编号',
      supOrgId: '上级组织ID',
      parentName: '上级组织名称',
      positionId: '岗位ID',
      positionName: '岗位名称',
      positionCode: '岗位代码',
      parentOrgId: '所属岗位ID',
      parentOrgName: '上级组织名称',
      superPositionId: '上级岗位ID',
      superPositionName: '上级岗位名称',
      rootNode: '顶级'
    },
    message: {
      submitSuccess: '提交成功',
      saveSuccess: '保存成功!'
    },
    tips: {
      inputOrgName: '请填写组织名称',
      inputOrgCode: '请填写组织代码',
      inputNum: '请填写数字',
      inputPosName: '请填写岗位名称',
      inputPosCode: '请填写岗位代码',
      addTreeNodeError: '请保存该节点，再添加子节点',
      chooseNode: '请选择节点',
      canNotDelNonLeafNode: '不能删除非叶子节点，请选择叶子节点进行删除！',
      delOrgFailForExistUser: '该组织下存在用户，不能删除！',
      delPosFailForExistUser: '该岗位下存在用户，不能删除！',
      saveFail: '保存失败，请检查信息是否完整!'
    },
    input: {
      newCompany: '新增公司',
      newPosition: '新增岗位',
      newDepart: '新增部门'
    }
  },
  // 数据字典
  dictManage: {
    searchLabel: {
      dictCode: '字典编码:',
      itemCode: '字典项编码:',
      supDictCode: '上级字典编码:',
      supItemCode: '上级字典项编码:'
    },
    button: {
      add: '添加'
    },
    title: {
      dictList: '数据字典表',
      addDict: '新增字典信息',
      editDict: '编辑字典信息信息'
    },
    label: {
      dictId: '字典标识',
      dictCode: '字典编码',
      dictName: '字典名称',
      itemCode: '字典项编码',
      itemValue: '字典项值',
      supDictCode: '上级字典编码',
      supItemCode: '上级字典项编码',
      itemSortOrder: '字典项排序',
      dictDesc: '字典描述',
      dictStatus: '字典状态',
      dictVersion: '字典版本',
      dictType: '字典类型'
    },
    option: {
      dictStatus0: '禁用',
      dictStatus1: '可用',
      dictStatus2: '已删除',
      dictType0: '私有',
      dictType1: '公共'

    },
    message: {
      submitSuccess: '提交成功',
      saveSuccess: '保存成功!',
      saveFail: '保存失败，请检查信息是否完整!'
    },
    tips: {
      inputDictCode: '请填写字典编码',
      inputDictName: '请填写字典名称',
      inputItemCode: '请填写字典项编码',
      inputItemValue: '请填写字典项值'
    }
  },
  // 审计日志
  auditLog: {
    searchLabel: {
      loggerLevel: '日志级别：',
      userId: '用户标识：',
      busiStatus: '业务状态：',
      writeTimeStart: '写入时间从：',
      writeTimeEnd: '至'
    },
    title: {
      auditInfo: '审计信息',
      loggerLevel: '日志级别',
      serverModule: '业务服务类型',
      busiTypeName: '业务类型',
      userIp: '用户IP',
      url: '请求url',
      logMassage: '日志信息',
      startDateTime: '开始时间',
      endDateTime: '结束时间'
    },
    option: {
      dictStatus0: '禁用',
      dictStatus1: '可用',
      dictStatus2: '已删除',
      dictType0: '私有',
      dictType1: '公共'
    },
    message: {
      inputWriteTimeStart: '请填写写入时间从',
      inputWriteTimeEnd: '请填写写入时间至'
    }
  },
  // 登录日志
  logonLog: {
    searchLabel: {
      userCode: '登录工号：',
      userIp: '用户IP：',
      startTime: '查询起始时间：',
      endTime: '查询结束时间：'
    },
    title: {
      logonHis: '登录历史查询',
      userCode: '用户编码',
      sessionId: '会话ID',
      userIp: '登录IP',
      logonFlag: '登录类型',
      logonTime: '登录时间',
      logoffTime: '注销时间',
      logFailedReason: '登录结果'
    },
    placeHolder: {
      startTime: '开始日期',
      endTime: '结束日期'
    },
    option: {
      logonFlag01: '登陆',
      logonFlag02: '否注销'
    },
    message: {
      inputWriteTimeStart: '请填写写入时间从',
      inputWriteTimeEnd: '请填写写入时间至'
    }
  },
  // 操作日志
  operateLog: {
    searchLabel: {
      userCode: '登录工号：',
      startTime: '响应时间:',
      costTimeFrom: '耗时:',
      userIp: '用户IP:',
      endTime: '响应时间:',
      costTimeEnd: '耗时:'
    },
    title: {
      opLogQuery: '操作日志查询',
      userCode: '登录工号',
      userIp: '用户IP',
      url: '请求url',
      startTime: '开始时间',
      endTime: '结束时间',
      timeCost: '耗时(耗时)',
      description: '描述'
    },
    placeHolder: {
      start: '起',
      end: '止'
    }
  },
  // SQL日志
  sqlLog: {
    searchLabel: {
      userCode: '登录工号：',
      success: '是否成功:',
      userIp: '用户ip:',
      type: 'sql类型:',
      startTime: '响应开始时间:',
      endTime: '响应结束时间:',
      sqlText: 'sql内容:',
      costTimeFrom: '耗时开始:',
      costTimeEnd: '耗时结束:'
    },
    title: {
      sqlLogQuery: 'sql日志查询',
      userCode: '登录工号',
      userIp: '用户IP',
      sqlText: 'sql内容',
      startTime: '开始时间',
      endTime: '结束时间',
      timeCost: '耗时',
      type: '类型',
      success: '结果'
    },
    placeHolder: {
      startTime: '开始日期',
      endTime: '结束日期'
    },
    option: {
      isSuccessState01: '是',
      isSuccessState02: '否'
    },
    message: {
      inputWriteTimeStart: '请填写写入时间从',
      inputWriteTimeEnd: '请填写写入时间至'
    }
  },
  resType: {
    title: {
      authRes: '资源授权',
      resTypeList: '资源类型列表',
      addResType: '新增资源类型信息',
      editResType: '编辑源类型信息'
    },
    label: {
      treeShowStyle: '加载的树样式标识',
      groupId: '用户组ID',
      resType: '资源类型',
      ifContains: '资源操作范围',
      resTypeCode: '资源类型编码',
      resTypeName: '资源类型名称',
      invokeServiceType: '调用服务类型',
      invokeServiceName: '调用服务名称',
      remarks: '备注'
    },
    option: {
      ifContains1: '包含',
      ifContains0: '不包含',
      invokeServiceType01: 'Spring Bean方法',
      invokeServiceType02: 'HTTP方法',
      invokeServiceType03: 'HTML方法'
    },
    tips: {
      inuputResTypeCode: '请填写资源类型编码',
      inuputResTypeName: '请填写资源类型编码',
      chooseInvokeServiceType: '请选择调用服务类型',
      inuputInvokeServiceName: '请填写调用服务名称',
      saveFail: '保存失败，请检查信息是否完整!'
    }
  },
  userGroupn: {
    button: {
      doAuthResource: '资源授权',
      doAddUser: '配置用户'
    },
    title: {
      groupId: '用户组id',
      groupCode: '用户组编码',
      groupName: '用户组名称',
      createBy: '创建人',
      createDate: '创建时间',
      updateBy: '更新人',
      updateDate: '更新时间',
      userGroupAddTitle: '新增用户组',
      userGroupEditTitle: '编辑用户组',
      authResourceTitle: '用户组资源授权',
      groupAddUserTitle: '用户组添加用户'
    },
    label: {
      group: '用户组',
      groupCode: '用户组编码',
      groupName: '用户组名称',
      ifContains: '资源操作范围',
      resTypeCode: '资源类型编码',
      resTypeName: '资源类型名称',
      invokeServiceType: '调用服务类型',
      invokeServiceName: '调用服务名称',
      remarks: '备注'
    },
    option: {
      ifContains1: '包含',
      ifContains0: '不包含',
      invokeServiceType01: 'Spring Bean方法',
      invokeServiceType02: 'HTTP方法',
      invokeServiceType03: 'HTML方法'
    },
    tips: {
      inuputGroupCode: '请填写用户组编码',
      inuputGroupName: '请填写用户组名',
      saveFail: '保存失败，请检查信息是否完整!',
      addAuthResourceFail: '增加授权失败！'
    }
  }
}
