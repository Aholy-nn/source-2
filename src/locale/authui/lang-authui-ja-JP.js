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
      reset: 'リセット',
      detail: '詳細',
      edit: '編集',
      delete: '削除',
      query: 'クエリー',
      submit: 'コミット',
      close: '閉じる',
      chooseApp: 'アプリケーションの選択',
      search: '検索',
      add: '新規',
      batchdelete: '一括削除'
    },
    placeholder: {
      input: '入力してください...',
      dateChoose: '日付を選択してください...',
      choose: '選択してください'
    },
    title: {
      chooseApp: 'アプリケーションの選択',
      confirm: '確認',
      operate: '操作',
      wait: '選択待ち',
      select: '選択済み',
      code: 'エンコード',
      name: '名前',
      supCode: '上位コード',
      supName: '上級名',
      errorInfo: 'エラーメッセージ'
    },
    label: {
      code: 'エンコード',
      name: '名前'
    },
    tips: {
      chooseOneRecord: 'レコードを選択してください！',
      chooseLeastOneRecord: '少なくとも1つのレコードを選択してください！',
      chooseNode: 'ノードを選択してください',
      confirmDelete: '削除しますか？',
      confirmAdd: '追加するかどうか',
      confirmBatchDelete: '一括削除しますか？'
    },
    messsage: {
      success: '成功',
      fail: '失敗',
      addSuccess: 'Add Success',
      addFail: '追加に失敗しました',
      delSuccess: '削除に成功しました',
      delFail: '削除に失敗しました'
    },
    option: {
      yes: 'はい',
      no: 'No'
    },
    tree: {
      opTitle: 'ツリー操作',
      chooseAll: 'すべてチェック',
      cancelAll: 'すべて選択解除',
      expandAll: 'すべて展開',
      foldAll: 'すべてをマージ'
    }
  },
  framework: {
    menuTitle: {
      userManage: 'ユーザー管理',
      rolesManage: 'ロール管理',
      MorgManage: '組織管理',
      functionManage: '機能管理',
      userGroupManage: 'ユーザーグループ管理',
      fileStorageManage: 'ファイルストレージ情報管理',
      seqManage: 'グローバルシーケンス管理',
      mailManage: 'メール情報管理',
      producerMessageManage: '生産者メッセージ管理',
      ConsumerManage: '消費者メッセージ管理',
      resManage: '外部リソース管理',
      dataCategory: '属性権限管理',
      dictManage: 'データ辞書管理',
      sysPropertyManage: 'システム属性管理',
      appmanage: 'アプリケーション管理',
      sysAppInfoManage: 'システムアプリケーション管理',
      tenantManage: 'マルチテナント管理',
      originalManage: 'システム権限テンプレート',
      auditLog: '監査ログ',
      logonLog: 'ログインログ',
      operateLog: '操作ログ',
      sqlLog: 'sqlログ',
      scheduleManage: 'スケジュールタスク管理',
      executeLogs: 'タスク実行ログ',
      exceptionLogs: 'タスク例外ログ'
    },
    btn: {
      closeOther: 'その他を閉じる',
      closeAll: 'すべて閉じる'
    },
    messsage: {
      getMenuError: 'メニュー異常を取得！',
      uiPriFailForUrlTypeError: '要素認証失敗,ui-privilegeコンポーネントurl属性タイプエラー,StringとArrayタイプのみサポート！',
      uiPriFailForLackUrlError: '要素認証に失敗しました。ui-privilegeコンポーネントにはurl属性がありません！',
      getDictDataFail: 'データ辞書データの取得に失敗しました',
      getSessionDataFail: 'データ辞書データの取得に失敗しました',
      appLoginFail: 'アプリケーションログインに失敗しました',
      auth02: 'システムがローカルユーザ識別情報を取得できませんでした！',
      auth02_1: 'システムがローカルユーザ識別情報を取得できませんでした!',
      auth03: 'システムがローカルユーザ識別情報を取得できませんでした！',
      auth04: 'システムローカルユーザ識別情報と実際のログインユーザ識別情報が一致しない！',
      initFuncPrivilegeSuccess: '初期化とシステム権限の成功',
      initFuncPrivilegeFail: '初期化とシステム権限に失敗しました'
    },
    tips: {
      redirectToPage: '該当ページをジャンプ',
      redirectToLoginPage: 'システムはログインページに戻ります！'
    },
    component: {
      vxeTblExport: {
        text: {
          export: 'エクスポート',
          exportCur: '現在のページをエクスポート',
          exportAll: 'すべてのページをエクスポート'
        },
        label: {
          pdf: 'pdf縦版',
          pdfRotate: 'pdf横版',
          exportVersion: 'エクスポートバージョン',
          exportMethod: 'エクスポート方式',
          exportHidenCol: '隠し列をエクスポート',
          localExport: 'ローカルエクスポート',
          onlineExport: 'オンラインエクスポート'
        },
        alert: {
          addExportOnlinePath: 'exportOnlinePathを追加してください',
          leastOneExportConfigexportType: 'exportConfigexportTypeに少なくとも1つ追加'
        }
      },
      vxeTblExt: {
        text: {
          refresh: 'リフレッシュ',
          export: 'エクスポート'
        }
      }
    }
  },
  functionManage: {
    base: {
      title: '機能管理',
      currentfiled: 'functionName',
      inputPlaceholder: '入力してください...',
      addFunc: '機能を追加する',
      delFunc: '削除機能',
      confirmTile: '確認',
      confirmContent: '削除するノードは親ノードで,削除すると子ノードとともに削除されます。 n  n  n確認してください！',
      toplevel: 'トップレベル'
    },
    input: {
      funcName: '新規メニュー'
    },
    label: {
      selectApp: '選択アプリケーション',
      addFirstFunction: '1次機能の追加',
      funcName: '機能名',
      funcDes: '機能記述',
      funcUrl: 'URLアドレス',
      funcOrder: 'ノードのソート',
      funcType: '機能タイプ',
      menuType: 'メニュータイプ',
      logFlag: 'ログを記録',
      funcState: '機能状態',
      funcIcon: 'アイコン選択',
      parentName: '親ノード名',
      menuLocal: 'メニュー（ローカル）',
      button: 'ボタン',
      webService: 'webサービス',
      menuRemote: 'メニュー（リモート）',
      connectInterface: '関連インタフェース',
      menuPC: 'PC端',
      menuMobile: 'モバイル端末',
      yes: 'はい',
      no: 'いいえ',
      available: '利用可能',
      unavailable: '使用不可'
    },
    tips: {
      pleaseSelectNode: 'ノードを選択してください',
      funcNameIsNull: '機能名を空にすることはできません',
      funcDescIsNull: '機能記述を空にすることはできません',
      urlIsNull: 'URLアドレスは空にできません',
      orderValidFaild: 'ノードのソートは空ではなく数値ではできません',
      confirmMessage: '削除の確認？',
      delSuccess: '削除に成功しました!',
      delFailed: '非リーフノードは削除できません。削除するにはリーフノードを選択してください!',
      hasOrgDelFailed: 'この組織の下にはユーザーが存在し,削除できません!',
      saveSuccess: '保存に成功しました！',
      saveFailed: '保存に失敗しました。情報が完全かどうかを確認してください！'
    },
    button: {}
  },
  userManage: {
    searchLabel: {
      userName: 'ユーザー名:',
      userCode: 'ユーザーコード:',
      orgName: '所属組織:'
    },
    button: {
      add: '追加',
      resetUser: 'ユーザーのリセット',
      unlock: 'ロック解除',
      resetPas: 'パスワードのリセット',
      editPas: 'パスワードの変更',
      addRole: 'ロールの設定',
      addGroup: 'ユーザーグループの構成'
    },
    label: {
      idCardNo: '身分証明書番号',
      telNo: '電話番号',
      mailNo: 'メールボックス',
      wechatNo: 'マイクロ信号',
      qqNo: 'QQ号',
      alipayNo: 'Alipayアカウント',
      taobaoNo: 'タオバオアカウント',
      microblogNo: 'マイクロブログアカウント',
      oldPas: '元のパスワード',
      newPas: '新しいパスワード',
      repeatPas: '重複パスワード'
    },
    title: {
      userManageList: 'ユーザー管理リスト',
      userName: 'ユーザー名',
      userCode: 'ユーザーコード',
      orgName: '所属組織',
      posName: '所属部署',
      roleNames: '役割情報',
      stateName: '現在の状態',
      createBy: '作成者',
      createDate: '作成時間',
      expireTime: '失効時間',
      positionId: 'ポジションコード',
      orgId: '組織ID',
      userId: 'ユーザーID',
      state: '状態',
      operate: '操作',
      editUserTitle: '新規ユーザー',
      editPastTitle: 'パスワードの変更',
      addRole: 'ロールの設定',
      roleId: '役割ID',
      parentId: '親ノード',
      showFlag: '表示するかどうか',
      isAdminRole: '役割を管理するかどうか',
      roleName: 'ロール名',
      roleCode: 'ロールコード',
      isAdminRoleDesc: '役割を管理するかどうか',
      checkFlag: '選択するかどうか',
      uncheckRoleId: '未構成のロールを選択',
      addGroup: 'ユーザーグループの構成',
      groupId: 'ユーザーグループID',
      groupName: 'ユーザーグループ名',
      groupCode: 'ユーザーグループエンコード',
      chooseGroup: '構成ユーザーグループの選択',
      unchooseUserList: 'ユーザリストが選択されていません',
      chooseUserList: '選択されたユーザーリスト'
    },
    tips: {
      mailAddressInvalid: 'アドレスが不正です'
    },
    placeholder: {
      oldPas: '古いパスワードを入力してください...',
      newPas: '新しいパスワードを入力してください...',
      repeatPas: '繰り返し入力してください...'
    }
  },
  roleManage: {
    button: {
      addRole: '追加',
      addUser: 'ユーザーの構成',
      addOrg: '組織の構成',
      doPrivilege: '管理権限',
      doBusiPrivilege: 'ビジネスライセンス',
      doDataPrivilege: 'データ認可'
    },
    title: {
      roleManageList: 'ロール構成リスト',
      roleId: '役割ID',
      parentId: '上級ロールID',
      showFlag: '表示するかどうか',
      isAdminRole: '役割を管理するかどうか',
      roleName: 'ロール名',
      roleCode: 'ロールコード',
      isAdminRoleDesc: '役割を管理するかどうか',
      createBy: '作成者',
      createDate: '作成時間',
      operate: '操作',
      doPrivilege: '管理権限',
      doBusdoPrivilege: 'ビジネスライセンス',
      addRole: 'ロールの追加',
      editRole: 'ロールの編集',
      addOrg: '組織の構成'
    },
    message: {
      submitSuccess: 'コミット成功',
      saveSuccess: '保存に成功しました！'
    },
    tips: {
      adminRootRoleCanNotAdUser: 'スーパー管理者は自分の役割の下のユーザーを設定できません！',
      adminRootRoleCanNotAdOrg: 'スーパー管理者は自分の組織を構成できない！',
      adminRootRoleCanNotDoPrivilege: 'スーパー管理者は独自の管理権限を設定できません！',
      nonAdminRoleCanNotDoPrivilege: '非管理ロールは管理権限を取得できません',
      adminRootRoleCanNotDoBusPrivilege: 'スーパー管理者は独自のビジネスライセンスを設定できません！',
      nonAdminRoleCanNotOperate: 'このユーザーには管理ロールがなく,操作は許可されていません!',
      adminRootRoleCanNotEditSelf: 'スーパー管理者は自分のロールを編集できない！',
      adminRootRoleCanNotDelf: 'スーパー管理者は自分の役割を削除できない！',
      inputRoleName: 'ロール名を入力してください',
      inputRoleCode: 'ロールコードを入力してください',
      inputIsAdminrole: '管理責任があるかどうかを選択してください',
      inputSuppRoleId: '上級ロールを選択してください!',
      supRoleInvalid: '親ロールは現在のロールまたは現在のロール以下のロールではありません！',
      duplicateRoleCode: '同じロールコードが存在します。ロールコードを再入力してください!',
      supRoleCanNotBeSelf: '上級者は自分のためにはできません。上級者として他のキャラクターを選んでください！',
      saveFail: '保存に失敗しました。情報が完全かどうかをチェックしてください！'
    },
    placeholder: {
      oldPas: '古いパスワードを入力してください...',
      newPas: '新しいパスワードを入力してください...',
      repeatPas: '繰り返し入力してください...'
    }
  },
  orgManage: {
    button: {
      addFirstOrg: '会社の追加',
      delNodes: '一括削除',
      addOrgNode: '部門を増やす',
      addPosNode: '雇用を増やす',
      delTreeNode: 'ノードの削除',
      showUsers: 'クエリーユーザー',
      showRoles: 'クエリーロール'
    },
    title: {
      showRoles: 'ロールの表示',
      showUsers: 'ユーザーリスト'
    },
    label: {
      orgId: '組織ID',
      orgName: '組織名',
      orgCode: '組織コード',
      orgType: '組織タイプ',
      displaySeq: 'ソート番号',
      supOrgId: '上位組織ID',
      parentName: '親組織名',
      positionId: 'ポジションID',
      positionName: '部署名',
      positionCode: 'ポジションコード',
      parentOrgId: '所属部署ID',
      parentOrgName: '親組織名',
      superPositionId: '上位ポジションID',
      superPositionName: '上位部署名',
      rootNode: 'トップレベル'
    },
    message: {
      submitSuccess: 'コミット成功',
      saveSuccess: '保存に成功しました！'
    },
    tips: {
      inputOrgName: '組織名を入力してください',
      inputOrgCode: '組織コードを記入してください',
      inputNum: '数字を記入してください',
      inputPosName: '部署名を記入してください',
      inputPosCode: 'ジョブコードを記入してください',
      addTreeNodeError: '子ノードを追加する前にノードを保存してください',
      chooseNode: 'ノードを選択してください',
      canNotDelNonLeafNode: '非リーフノードは削除できません。リーフノードを選択して削除してください!',
      delOrgFailForExistUser: 'この組織の下にはユーザーが存在し,削除できません!',
      delPosFailForExistUser: 'この部署にはユーザーが存在し,削除できません！',
      saveFail: '保存に失敗しました。情報が完全かどうかをチェックしてください！'
    },
    input: {
      newCompany: '新規会社',
      newPosition: '新規雇用',
      newDepart: '新規部署'
    }
  },
  dictManage: {
    searchLabel: {
      dictCode: '辞書コード:',
      itemCode: '辞書項目コード:',
      supDictCode: '上位辞書コード:',
      supItemCode: '上位辞書エントリコード:'
    },
    button: {
      add: '追加'
    },
    title: {
      dictList: 'データ辞書テーブル',
      addDict: '辞書情報の追加',
      editDict: '辞書情報の編集'
    },
    label: {
      dictId: '辞書ID',
      dictCode: '辞書コード',
      dictName: '辞書名',
      itemCode: '辞書項目コード',
      itemValue: '辞書エントリ値',
      supDictCode: '上位辞書コード',
      supItemCode: '上位辞書エントリコード',
      itemSortOrder: '辞書アイテムのソート',
      dictDesc: '辞書記述',
      dictStatus: '辞書状態',
      dictVersion: '辞書バージョン',
      dictType: '辞書タイプ'
    },
    option: {
      dictStatus0: '無効',
      dictStatus1: '利用可能',
      dictStatus2: '削除されました',
      dictType0: 'プライベート',
      dictType1: '共通'
    },
    message: {
      submitSuccess: 'コミット成功',
      saveSuccess: '保存に成功しました！',
      saveFail: '保存に失敗しました。情報が完全かどうかをチェックしてください！'
    },
    tips: {
      inputDictCode: '辞書コードを入力してください',
      inputDictName: '辞書名を入力してください',
      inputItemCode: '辞書エントリコードを入力してください',
      inputItemValue: '辞書項目の値を入力してください'
    }
  },
  auditLog: {
    searchLabel: {
      loggerLevel: 'ログレベル:',
      userId: 'ユーザーID:',
      busistatus: 'ビジネスステータス:',
      writeTimeStart: '書き込み時間開始:',
      writeTimeEnd: 'から'
    },
    title: {
      auditInfo: '監査情報',
      loggerLevel: 'ログレベル',
      serverModule: 'ビジネスサービスタイプ',
      busiTypeName: 'ビジネスタイプ',
      userIp: 'ユーザIP',
      url: 'urlをお願いします',
      logMassage: 'ログ情報',
      startDateTime: '開始時間',
      endDateTime: '終了時間'
    },
    option: {
      dictStatus0: '無効',
      dictStatus1: '利用可能',
      dictStatus2: '削除されました',
      dictType0: 'プライベート',
      dictType1: '共通'
    },
    message: {
      inputWriteTimeStart: '書き込み時間を入力してください',
      inputWriteTimeEnd: '書き込み時間を入力してください'
    }
  },
  logonLog: {
    searchLabel: {
      userCode: '登録番号:',
      userIp: 'ユーザIP:',
      startTime: 'クエリ開始時間:',
      endTime: 'クエリ終了時間:'
    },
    title: {
      logonHis: 'ログイン履歴クエリ',
      userCode: 'ユーザコーディング',
      sessionId: 'セッションID',
      userIp: 'ログインIP',
      logonFlag: 'ログインタイプ',
      logonTime: 'ログイン時間',
      logooffTime: 'ログアウト時間',
      logFailedReason: 'ログイン結果'
    },
    placeHolder: {
      startTime: '開始日',
      endTime: '終了日'
    },
    option: {
      logonFlag01: 'ログイン',
      logonFlag02: 'Noログアウト'
    },
    message: {
      inputWriteTimeStart: '書き込み時間を入力してください',
      inputWriteTimeEnd: '書き込み時間を入力してください'
    }
  },
  operateLog: {
    searchLabel: {
      userCode: '登録番号:',
      startTime: '応答時間:',
      costTimeFrom: '消費時間:',
      userIp: 'ユーザIP:',
      endTime: 'レスポンス時間:',
      costTimeEnd: '消費時間:'
    },
    title: {
      opLogQuery: '操作ログクエリー',
      userCode: '登録番号',
      userIp: 'ユーザIP',
      url: 'urlをお願いします',
      startTime: '開始時間',
      endTime: '終了時間',
      timeCost: '時間がかかる（時間がかかる）',
      description: '記述'
    },
    placeHolder: {
      start: '起',
      end: '止'
    }
  },
  sqlLog: {
    searchLabel: {
      userCode: '登録番号:',
      success: '成功するかどうか:',
      userIp: 'ユーザip:',
      type: 'sqlタイプ:',
      startTime: 'レスポンス開始時間:',
      endTime: 'レスポンス終了時間:',
      sqlText: 'sqlコンテンツ:',
      costTimeFrom: '時間のかかる開始:',
      costTimeEnd: '時間経過終了:'
    },
    title: {
      sqlLogQuery: 'sqlログクエリ',
      userCode: '登録番号',
      userIp: 'ユーザIP',
      sqlText: 'sqlコンテンツ',
      startTime: '開始時間',
      endTime: '終了時間',
      timeCost: '時間がかかる',
      type: 'タイプ',
      success: '結果'
    },
    placeHolder: {
      startTime: '開始日',
      endTime: '終了日'
    },
    option: {
      issSuccessState01: 'Yes',
      issSuccessState02: 'No'
    },
    message: {
      inputWriteTimeStart: '書き込み時間を入力してください',
      inputWriteTimeEnd: '書き込み時間を入力してください'
    }
  },
  resType: {
    title: {
      authRes: 'リソースライセンス',
      resTypeList: 'リソースタイプリスト',
      addResType: '新規リソースタイプ情報',
      editResType: 'ソースタイプ情報の編集'
    },
    label: {
      treeShowStyle: 'ロードされたツリースタイルID',
      groupId: 'ユーザーグループID',
      resType: 'リソースタイプ',
      ifContains: 'リソース操作範囲',
      resTypeCode: 'リソースタイプエンコーディング',
      resTypeName: 'リソースタイプ名',
      invokeServiceType: '呼び出しサービスタイプ',
      invokeServiceName: '呼び出しサービス名',
      remarks: '備考'
    },
    option: {
      ifContains1: '含む',
      ifContains0: '含まない',
      invokeServiceType01: 'Spring Beanメソッド',
      invokeServiceType02: 'HTTPメソッド',
      invokeServiceType03: 'HTMLメソッド'
    },
    tips: {
      inuputRestypeCode: 'リソースタイプコードを入力してください',
      inuputRestypeName: 'リソースタイプコードに入力してください',
      chooseInvokeServiceType: '呼び出しサービスタイプを選択してください',
      inuputInvokeServiceName: '呼び出しサービス名を入力してください',
      saveFail: '保存に失敗しました。情報が完全かどうかをチェックしてください！'
    }
  },
  userGroupn: {
    button: {
      doAuthResource: 'リソースライセンス',
      doAddUser: 'ユーザーの構成'
    },
    title: {
      groupId: 'ユーザーグループID',
      groupCode: 'ユーザーグループエンコード',
      groupName: 'ユーザーグループ名',
      createBy: '作成者',
      createDate: '作成時間',
      updateBy: '更新者',
      updateDate: '更新時間',
      userGroupAddTitle: '新規ユーザーグループ',
      userGroupEditTitle: 'ユーザーグループの編集',
      authResourceTitle: 'ユーザーグループリソース承認',
      groupAddUserTitle: 'ユーザーグループ追加ユーザー'
    },
    label: {
      group: 'ユーザーグループ',
      groupCode: 'ユーザーグループエンコード',
      groupName: 'ユーザーグループ名',
      ifContains: 'リソース操作範囲',
      resTypeCode: 'リソースタイプエンコーディング',
      resTypeName: 'リソースタイプ名',
      invokeServiceType: '呼び出しサービスタイプ',
      invokeServiceName: '呼び出しサービス名',
      remarks: '備考'
    },
    option: {
      ifContains1: '含む',
      ifContains0: '含まない',
      invokeServiceType01: 'Spring Beanメソッド',
      invokeServiceType02: 'HTTPメソッド',
      invokeServiceType03: 'HTMLメソッド'
    },
    tips: {
      inuputGroupCode: 'ユーザーグループコードを入力してください',
      inuputGroupName: 'ユーザーグループ名を入力してください',
      saveFail: '保存に失敗しました。情報が完全かどうかをチェックしてください!',
      addAuthResourceFail: 'ライセンスの追加に失敗しました！'
    }
  }
}
