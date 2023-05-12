/*
 * @Author: your name
 * @Date: 2020-05-29 11:52:41
 * @LastEditTime: 2020-06-01 16:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui-tenant\src\views\authui5\locale\auth-zh-CN.js
 */

/*
 * @Author: your name
 * @Date: 2020-05-29 11:52:41
 * @LastEditTime: 2020-06-01 16:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui-tenant\src\views\authui5\locale\auth-zh-CN.js
 */

export default {
  common: {
    button: {
      save: 'Save',
      reset: 'Reset',
      detail: 'Details',
      edit: 'Edit',
      delete: 'Delete',
      query: 'Query',
      submit: 'Submit',
      close: 'Close',
      chooseApp: 'Select an application',
      search: 'Search',
      add: 'Add',
      batchdelete: 'Batch delete'
    },
    placeholder: {
      input: 'Please enter...',
      dateChoose: 'Please select a date...',
      choose: 'Please select'
    },
    title: {
      chooseApp: 'Select an application',
      confirm: 'Confirm',
      operate: 'Operation',
      wait: 'To be selected',
      select: 'Selected',
      code: 'Code',
      name: 'Name',
      supCode: 'Superior code',
      supName: 'Superior name',
      errorInfo: 'Error information'
    },
    label: {
      code: 'Code',
      name: 'Name'
    },
    tips: {
      chooseOneRecord: 'Please select a record!',
      chooseLeastOneRecord: 'Please select at least one record!',
      chooseNode: 'Please select a node',
      confirmDelete: 'Delete?',
      confirmAdd: 'Add or not',
      confirmBatchDelete: 'Delete in batches?'
    },
    messsage: {
      success: 'Success',
      fail: 'Failed',
      addSuccess: 'Successfully added',
      addFail: 'Adding failed',
      delSuccess: 'Deletion succeeded',
      delFail: 'Delete failed'
    },
    option: {
      yes: 'Yes',
      no: 'No'
    },
    tree: {
      opTitle: 'Tree operation',
      chooseAll: 'Check all',
      cancelAll: 'Deselect all',
      expandAll: 'Expand all',
      foldAll: 'Merge all'
    }
  },
  framework: {
    menuTitle: {
      userManage: 'userManage',
      rolesManage: 'rolesManage',
      orgManage: 'orgManage',
      functionManage: 'functionManage',
      userGroupManage: 'userGroupManage',
      fileStorageManage: 'fileStorageManage',
      seqManage: 'seqManage',
      mailManage: 'mailManage',
      producerMessageManage: 'producerMessageManage',
      consumerManage: 'consumerManage',
      resManage: 'resManage',
      dataCategory: 'dataCategory',
      dictManage: 'dictManage',
      sysPropertyManage: 'sysPropertyManage',
      appmanage: 'appmanage',
      sysAppInfoManage: 'sysAppInfoManage',
      tenantManage: 'tenantManage',
      originalManage: 'originalManage',
      auditLog: 'auditLog',
      logonLog: 'logonLog',
      operateLog: 'operateLog',
      sqlLog: 'sqlLog',
      scheduleManage: 'scheduleManage',
      executeLogs: 'executeLogs',
      exceptionLogs: 'exceptionLogs'
    },
    btn: {
      closeOther: 'Close other',
      closeAll: 'Close all'
    },
    messsage: {
      getMenuError: 'Exception in obtaining menu!',
      uiPriFailForUrlTypeError: 'Element authentication failed, the url attribute type of the ui privilege component is wrong, only String and Array types are supported!',
      uiPriFailForLackUrlError: 'Element authentication failed, the ui privilege component is missing the url attribute!',
      getDictDataFail: 'Failed to get data dictionary data',
      getSessionDataFail: 'Failed to get data dictionary data',
      appLoginFail: 'Application login failed',
      auth02: 'The system failed to obtain the local user ID information!',
      auth02_1: 'The system failed to obtain the local user identity information!',
      auth03: 'The system failed to obtain the local user identity information!',
      auth04: 'The identity information of the system local user does not match the identity information of the actual login user!',
      initFuncPrivilegeSuccess: 'Initialization and system permissions succeeded',
      initFuncPrivilegeFail: 'Initialization and system permissions failed'
    },
    tips: {
      redirectToPage: 'Jump to the corresponding page',
      redirectToLoginPage: 'The system will call back the login page!'
    },
    component: {
      vxeTblExport: {
        text: {
          export: 'Export',
          exportCur: 'Export the current page',
          exportAll: 'Export all pages'
        },
        label: {
          pdf: 'pdf vertical',
          pdfRotate: 'pdf horizontal',
          exportVersion: 'Export version',
          exportMethod: 'Export method',
          exportHidenCol: 'Export hidden columns',
          localExport: 'Local export',
          onlineExport: 'Online export'
        },
        alert: {
          addExportOnlinePath: 'Please add exportOnlinePath',
          leastOneExportConfigexportType: 'Add at least one in exportConfigexportType'
        }
      },
      vxeTblExt: {
        text: {
          refresh: 'Refresh',
          export: 'Export'
        }
      }
    }
  },
  functionManage: {
    base: {
      title: 'Function management',
      currentfiled: 'functionName',
      inputPlaceholder: 'Please enter...',
      addFunc: 'Add functions',
      delFunc: 'Delete function',
      confirmTitle: 'Confirm',
      confirmContent: 'The node to be deleted is the parent node. If it is deleted, it will be deleted together with the child node.\n\nPlease confirm! ',
      toplevel: 'Top level'
    },
    input: {
      funcName: 'New menu'
    },
    label: {
      selectApp: 'Select an application',
      addFirstFunction: 'Add a level 1 function',
      funcName: 'Function name',
      funcDes: 'Function description',
      funcUrl: 'URL address',
      funcOrder: 'Sort nodes',
      funcType: 'Function type',
      menuType: 'Menu type',
      logFlag: 'Log',
      funcState: 'Function state',
      funcIcon: 'Icon selection',
      parentName: 'Parent node name',
      menuLocal: 'Menu (local)',
      button: 'Button',
      webService: 'web service',
      menuRemote: 'Menu (remote)',
      connectInterface: 'Association interface',
      menuPC: 'PC side',
      menuMobile: 'Mobile terminal',
      yes: 'Yes',
      no: 'No',
      available: 'Available',
      unavailable: 'Unavailable'
    },
    tips: {
      pleaseSelectNode: 'Please select a node',
      funcNameIsNull: 'The function name cannot be empty',
      funcDescIsNull: 'Function description cannot be empty',
      urlIsNull: 'URL address cannot be empty',
      orderValidFailed: 'The node sorting cannot be empty and numeric',
      confirmMessage: 'Confirm deletion?',
      delSuccess: 'Deletion succeeded!',
      delFailed: 'Non leaf nodes cannot be deleted, please select leaf nodes to delete!',
      hasOrgDelFailed: 'There are users under the organization, unable to delete!',
      saveSuccess: 'Saving succeeded!',
      saveFailed: 'Saving failed, please check whether the information is complete!'
    },
    button: {}
  },
  userManage: {
    searchLabel: {
      userName: 'User name:',
      userCode: 'User code:',
      orgName: 'Organization:'
    },
    button: {
      add: 'Add',
      resetUser: 'Reset the user',
      unlock: 'Unlock',
      resetPass: 'Reset password',
      editPass: 'Change password',
      addRole: 'Configure role',
      addGroup: 'Configure user group'
    },
    label: {
      idCardNo: 'ID No.',
      telNo: 'Phone number',
      mailNo: 'Mailbox',
      wechatNo: 'Wechat',
      qqNo: 'QQ No.',
      alipayNo: 'Alipay account',
      taobaoNo: 'Taobao account',
      microblogNo: 'Weibo account',
      oldPass: 'Original password',
      newPass: 'New password',
      repeatPass: 'Repeat password'
    },
    title: {
      userManageList: 'User management list',
      userName: 'User name',
      userCode: 'User code',
      orgName: 'Affiliated organization',
      posName: 'Position',
      roleNames: 'Role information',
      stateName: 'Current status',
      createBy: 'Created by',
      createDate: 'Creation time',
      expireTime: 'Expiration time',
      positionId: 'Position code',
      orgId: 'Organization ID',
      userId: 'User ID',
      state: 'State',
      operate: 'Operation',
      editUserTitle: 'New user',
      editPasTitle: 'Change password',
      addRole: 'Configure role',
      roleId: 'Role ID',
      parentId: 'Parent node',
      showFlag: 'Whether to display',
      isAdminRole: 'Manage role',
      roleName: 'Role name',
      roleCode: 'Role code',
      isAdminRoleDesc: 'Manage role',
      checkFlag: 'Check it or not',
      uncheckRoleId: 'Select an unconfigured role',
      addGroup: 'Configure user group',
      groupId: 'User group id',
      groupName: 'User group name',
      groupCode: 'User group code',
      chooseGroup: 'Select the configuration user group',
      uncooseUserList: 'No user list is selected',
      chooseUserList: 'Selected user list'
    },
    tips: {
      mailAddressInvalid: 'The address is illegal'
    },
    placeholder: {
      oldPass: 'Please enter the old password...',
      newPass: 'Please enter a new password...',
      repeatPass: 'Please input again...'
    }
  },
  roleManage: {
    button: {
      addRole: 'Add',
      addUser: 'Configure user',
      addOrg: 'Configure the organization',
      doPrivilege: 'Manage authorization',
      doBusiPrivilege: 'Business authorization',
      doDataPrivilege: 'Data authorization'
    },
    title: {
      roleManageList: 'Role configuration list',
      roleId: 'Role ID',
      parentId: 'Parent role ID',
      showFlag: 'Whether to display',
      isAdminRole: 'Manage role',
      roleName: 'Role name',
      roleCode: 'Role code',
      isAdminRoleDesc: 'Manage role',
      createBy: 'Created by',
      createDate: 'Creation time',
      operate: 'Operation',
      doPrivilege: 'Manage authorization',
      doBusdoPrivilege: 'Business authorization',
      addRole: 'Add role',
      editRole: 'Edit role',
      addOrg: 'Configure organization'
    },
    message: {
      submitSuccess: 'Submitted successfully',
      saveSuccess: 'Saving succeeded!'
    },
    tips: {
      adminRootRoleCanNotAddUser: 'Super administrator cannot configure users under his role!',
      adminRootRoleCanNotAddOrg: 'Super administrator cannot configure his own organization!',
      adminRootRoleCanNotDoPrivilege: 'A super administrator cannot configure his/her own management authorization!',
      nonAdminRoleCanNotDoPrivilege: 'Non management roles cannot be authorized',
      adminRootRoleCanNotDoBusPrivilege: 'A super administrator cannot configure his/her own business authorization!',
      nonAdminRoleCanNotOperate: 'This user has no management role, operation is not allowed!',
      adminRootRoleCanNotEditSelf: 'Super administrator can not edit his own role!',
      adminRootRoleCanNotDelSelf: 'A super administrator cannot delete his role!',
      inputRoleName: 'Please fill in the role name',
      inputRoleCode: 'Please fill in the role code',
      inputIsAdminrole: 'Please select whether there is management responsibility',
      inputSupRoleId: 'Please select a superior role!',
      supRoleInvalid: 'The superior role cannot be the current role or the role below the current role!',
      duplicateRoleCode: 'The same role code exists, please re-enter the role code!',
      supRoleCanNotBeSelf: 'The superior role cannot be your own, please select another role as the superior role!',
      saveFail: 'Failed to save, please check whether the information is complete!'
    },
    placeholder: {
      oldPass: 'Please enter the old password...',
      newPass: 'Please enter a new password...',
      repeatPass: 'Please input again...'
    }
  },
  // Organizational management
  orgManage: {
    button: {
      addFirstOrg: 'Add company',
      delNodes: 'Batch deletion',
      addOrgNode: 'Add department',
      addPosNode: 'Add position',
      delTreeNode: 'Delete node',
      showUsers: 'Query users',
      showRoles: 'Query roles'
    },
    title: {
      showRoles: 'View roles',
      showUsers: 'User list'
    },
    label: {
      orgId: 'Organization ID',
      orgName: 'Organization name',
      orgCode: 'Organization code',
      orgType: 'Organization type',
      displaySeq: 'Sort No.',
      supOrgId: 'Parent organization ID',
      parentName: 'Parent organization name',
      positionId: 'Position ID',
      positionName: 'Position name',
      positionCode: 'Position code',
      parentOrgId: 'Position ID',
      parentOrgName: 'Parent organization name',
      superPositionId: 'Superior position ID',
      superPositionName: 'Superior position name',
      rootNode: 'Top level'
    },
    message: {
      submitSuccess: 'Submitted successfully',
      saveSuccess: 'Saving succeeded!'
    },
    tips: {
      inputOrgName: 'Please fill in the organization name',
      inputOrgCode: 'Please fill in the organization code',
      inputNum: 'Please fill in the number',
      inputPosName: 'Please fill in the position name',
      inputPosCode: 'Please fill in the position code',
      addTreeNodeError: 'Please save the node and add a child node',
      chooseNode: 'Please select a node',
      canNotDelNonLeafNode: 'Non leaf nodes cannot be deleted, please select leaf nodes to delete!',
      delOrgFailForExistUser: 'Users exist under the organization, and cannot be deleted!',
      delPosFailForExistUser: 'There are users under this position, which cannot be deleted!',
      saveFail: 'Failed to save, please check whether the information is complete!'
    },
    input: {
      newCompany: 'New company',
      newPosition: 'New position',
      newDepartment: 'New department'
    }
  },
  dictManage: {
    searchLabel: {
      dictCode: 'Dictionary code:',
      itemCode: 'Dictionary item code:',
      supDictCode: 'Superior dictionary code:',
      supItemCode: 'Parent dictionary item code:'
    },
    button: {
      add: 'Add'
    },
    title: {
      dictList: 'Data dictionary table',
      addDict: 'Add dictionary information',
      editDict: 'Edit dictionary information'
    },
    label: {
      dictId: 'Dictionary ID',
      dictCode: 'Dictionary code',
      dictName: 'Dictionary name',
      itemCode: 'Dictionary item code',
      itemValue: 'Dictionary item value',
      supDictCode: 'Superior dictionary code',
      supItemCode: 'Parent dictionary item code',
      itemSortOrder: 'Sort dictionary items',
      dictDesc: 'Dictionary description',
      dictStatus: 'Dictionary status',
      dictVersion: 'Dictionary version',
      dictType: 'Dictionary type'
    },
    option: {
      dictStatus0: 'Disable',
      dictStatus1: 'Available',
      dictStatus2: 'Deleted',
      dictType0: 'Private',
      dictType1: 'Public'
    },
    message: {
      submitSuccess: 'Submitted successfully',
      saveSuccess: 'Saving succeeded!',
      saveFail: 'Failed to save, please check whether the information is complete!'
    },
    tips: {
      inputDictCode: 'Please fill in the dictionary code',
      inputDictName: 'Please fill in the dictionary name',
      inputItemCode: 'Please fill in the dictionary item code',
      inputItemValue: 'Please fill in the dictionary item value'
    }
  },
  auditLog: {
    searchLabel: {
      loggerLevel: 'Log level:',
      userId: 'User ID:',
      busiStatus: 'Business status:',
      writeTimeStart: 'Write time from:',
      writeTimeEnd: 'to'
    },
    title: {
      auditInfo: 'Audit information',
      loggerLevel: 'Log level',
      serverModule: 'Business service type',
      busiTypeName: 'Business type',
      userIp: 'User IP',
      url: 'Request url',
      logMessage: 'Log information',
      startDateTime: 'Start time',
      endDateTime: 'End time'
    },
    option: {
      dictStatus0: 'Disable',
      dictStatus1: 'Available',
      dictStatus2: 'Deleted',
      dictType0: 'Private',
      dictType1: 'Public'
    },
    message: {
      inputWriteTimeStart: 'Please fill in the write time from',
      inputWriteTimeEnd: 'Please fill in the writing time to'
    }
  },
  logonLog: {
    searchLabel: {
      userCode: 'Login ID:',
      userIp: 'User IP:',
      startTime: 'Query start time:',
      endTime: 'Query end time:'
    },
    title: {
      logonHis: 'Login history query',
      userCode: 'User code',
      sessionId: 'Session ID',
      userIp: 'Login IP',
      logonFlag: 'Login type',
      logonTime: 'Login time',
      logoffTime: 'Logoff time',
      logFailedReason: 'Login result'
    },
    placeHolder: {
      startTime: 'Start date',
      endTime: 'End date'
    },
    option: {
      logonFlag01: 'Login',
      logonFlag02: 'No logout'
    },
    message: {
      inputWriteTimeStart: 'Please fill in the write time from',
      inputWriteTimeEnd: 'Please fill in the writing time to'
    }
  },
  operateLog: {
    searchLabel: {
      userCode: 'Login ID:',
      startTime: 'Response time:',
      costTimeFrom: 'Time consumption:',
      userIp: 'User IP:',
      endTime: 'Response time:',
      costTimeEnd: 'Time consumption:'
    },
    title: {
      opLogQuery: 'Operation log query',
      userCode: 'Login ID',
      userIp: 'User IP',
      url: 'Request url',
      startTime: 'Start time',
      endTime: 'End time',
      timeCost: 'Time consuming (time consuming)',
      description: 'Description'
    },
    placeHolder: {
      start: 'start',
      end: 'End'
    }
  },
  sqlLog: {
    searchLabel: {
      userCode: 'Login ID:',
      success: 'Success or not:',
      userIp: 'User ip:',
      type: 'SQL type:',
      startTime: 'Response start time:',
      endTime: 'Response end time:',
      sqlText: 'SQL content:',
      costTimeFrom: 'Time consuming start:',
      costTimeEnd: 'End of time consumption:'
    },
    title: {
      sqlLogQuery: 'sql log query',
      userCode: 'Login ID',
      userIp: 'User IP',
      sqlText: 'sql content',
      startTime: 'Start time',
      endTime: 'End time',
      timeCost: 'Time consuming',
      type: 'Type',
      success: 'Result'
    },
    placeHolder: {
      startTime: 'Start date',
      endTime: 'End date'
    },
    option: {
      isSuccessState01: 'Yes',
      isSuccessState02: 'No'
    },
    message: {
      inputWriteTimeStart: 'Please fill in the write time from',
      inputWriteTimeEnd: 'Please fill in the writing time to'
    }
  },
  resType: {
    title: {
      authRes: 'Resource authorization',
      resTypeList: 'Resource type list',
      addResType: 'New resource type information',
      editResType: 'Edit source type information'
    },
    label: {
      treeShowStyle: 'Loaded tree style identifier',
      groupId: 'User group ID',
      resType: 'Resource type',
      ifContains: 'Resource operation range',
      resTypeCode: 'Resource type code',
      resTypeName: 'Resource type name',
      invokeServiceType: 'Call service type',
      invokeServiceName: 'Call service name',
      remarks: 'Remarks'
    },
    option: {
      ifContaines1: 'Contains',
      ifContaines0: 'does not contain',
      invokeServiceType01: 'Spring Bean Method',
      invokeServiceType02: 'HTTP method',
      invokeServiceType03: 'HTML method'
    },
    tips: {
      inuputResTypeCode: 'Please fill in the resource type code',
      inuputResTypeName: 'Please fill in the resource type code',
      chooseInvokeServiceType: 'Please select the calling service type',
      inuputInvokeServiceName: 'Please fill in the calling service name',
      saveFail: 'Failed to save, please check whether the information is complete!'
    }
  },
  userGroupn: {
    button: {
      doAuthResource: 'Resource authorization',
      doAddUser: 'Configure user'
    },
    title: {
      groupId: 'User group id',
      groupCode: 'User group code',
      groupName: 'User group name',
      createBy: 'Created by',
      createDate: 'Creation time',
      updateBy: 'Updated by',
      updateDate: 'Update time',
      userGroupAddTitle: 'New user group',
      userGroupEditTitle: 'Edit user group',
      authResourceTitle: 'User group resource authorization',
      groupAddUserTitle: 'User group adds user'
    },
    label: {
      group: 'User group',
      groupCode: 'User group code',
      groupName: 'User group name',
      ifContains: 'Resource operation range',
      resTypeCode: 'Resource type code',
      resTypeName: 'Resource type name',
      invokeServiceType: 'Call service type',
      invokeServiceName: 'Call service name',
      remarks: 'Remarks'
    },
    option: {
      ifContaines1: 'Contains',
      ifContaines0: 'does not contain',
      invokeServiceType01: 'Spring Bean Method',
      invokeServiceType02: 'HTTP method',
      invokeServiceType03: 'HTML method'
    },
    tips: {
      inuputGroupCode: 'Please fill in the user group code',
      inuputGroupName: 'Please fill in the user group name',
      saveFail: 'Failed to save, please check whether the information is complete!',
      addAuthResourceFail: 'Failed to add authorization!'
    }
  }
}
