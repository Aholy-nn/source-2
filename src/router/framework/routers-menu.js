/*
 * @Author: your name
 * @Date: 2020-03-11 09:39:22
 * @LastEditTime: 2020-06-12 14:59:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\router\framework\routers-menu.js
 */
import i18n from '@/locale'
export default [
  {
    path: '/sysManage',
    name: 'sysManage',
    meta: {
      title: '系统管理'
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
      {
        path: '/user/userManage',
        name: 'userManage',
        meta: {
          title: i18n.t('framework.menuTitle.userManage')
        },
        component: (resolve) => require(['@/views/authui5/user/userManage/userManage'], resolve)
      },
      {
        path: '/roles/rolesManage',
        name: 'rolesManage',
        meta: {
          title: i18n.t('framework.menuTitle.rolesManage')
        },
        component: (resolve) => require(['@/views/authui5/roles/rolesManage/rolesManage'], resolve)
      },
      {
        path: '/organization/orgManage',
        name: 'orgManage',
        meta: {
          title: i18n.t('framework.menuTitle.orgManage')
        },
        component: (resolve) => require(['@/views/authui5/organization/orgManage/orgManage'], resolve)
      },
      {
        path: '/function/functionManage',
        name: 'functionManage',
        meta: {
          title: i18n.t('framework.menuTitle.functionManage')
        },
        component: (resolve) => require(['@/views/authui5/function/functionManage/functionManage'], resolve)
      },
      {
        path: '/usergroupn/userGroupManage',
        name: 'userGroupManage',
        meta: {
          title: i18n.t('framework.menuTitle.userGroupManage')
        },
        component: (resolve) => require(['@/views/authui5/usergroupn/userGroupManage/userGroupManage'], resolve)
      },
      {
        path: '/files/fileStorageManage',
        name: 'fileStorageManage',
        meta: {
          title: i18n.t('framework.menuTitle.fileStorageManage')
        },
        component: (resolve) => require(['@/views/admin/files/fileStorageManage'], resolve)
      },
      {
        path: '/seq/seqManage',
        name: 'seqManage',
        meta: {
          title: i18n.t('framework.menuTitle.seqManage')
        },
        component: (resolve) => require(['@/views/admin/seq/seqManage'], resolve)
      },
      {
        path: '/mail/mailManage',
        name: 'mailManage',
        meta: {
          title: i18n.t('framework.menuTitle.mailManage')
        },
        component: (resolve) => require(['@/views/admin/mail/mailManage'], resolve)
      },
      {
        path: '/admin/adminNoticeManage',
        name: 'adminNoticeManage',
        meta: {
          title: '管理员公告管理'
        },
        component: (resolve) => require(['@/views/admin/notice/admin/adminNoticeManage'], resolve)
      },
      {
        path: '/user/userNoticeManage',
        name: 'userNoticeManage',
        meta: {
          title: '用户公告管理'
        },
        component: (resolve) => require(['@/views/admin/notice/user/userNoticeManage'], resolve)
      },
      {
        path: '/mq/producer/producerManage',
        name: 'producerMessageManage',
        meta: {
          title: '生产者消息管理'
        },
        component: (resolve) => require(['@/views/admin/mq/producer/producerManage'], resolve)
      },
      {
        path: '/mq/consumer/consumerManage',
        name: 'consumerMessageManage',
        meta: {
          title: '消费者消息管理'
        },
        component: (resolve) => require(['@/views/admin/mq/consumer/consumerManage'], resolve)
      },
      {
        path: '/restype/resManage',
        name: 'resManage',
        meta: {
          title: i18n.t('framework.menuTitle.resManage')
        },
        component: (resolve) => require(['@/views/authui5/restype/resManage/resManage'], resolve)
      },
      {
        path: '/datacategory/dataCategory',
        name: 'dataCategory',
        meta: {
          title: i18n.t('framework.menuTitle.dataCategory')
        },
        component: (resolve) => require(['@/views/authui5/datacategory/dataCategory/dataCategory'], resolve)
      },
      {
        path: '/dict/dictManage',
        name: 'dictManage',
        meta: {
          title: i18n.t('framework.menuTitle.dictManage')
        },
        component: (resolve) => require(['@/views/authui5/dict/dictManage/dictManage'], resolve)
      },
      {
        path: '/property/sysPropertyManage',
        name: 'sysPropertyManage',
        meta: {
          title: i18n.t('framework.menuTitle.sysPropertyManage')
        },
        component: (resolve) => require(['@/views/authui5/property/sysPropertyManage/sysPropertyManage'], resolve)
      },
      {
        path: '/appmanage',
        name: 'appmanage',
        meta: {
          title: '应用管理'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/sysappinfo/sysAppInfoManage',
            name: 'sysAppInfoManage',
            meta: {
              title: i18n.t('framework.menuTitle.sysAppInfoManage')
            },
            component: (resolve) => require(['@/views/authui5/sysappinfo/sysAppInfoManage/sysAppInfoManage'], resolve)
          },
          {
            path: '/authappinfo/authAppInfoManage',
            name: 'authAppInfoManage',
            meta: {
              title: '服务应用管理'
            },
            component: (resolve) => require(['@/views/authui5/authappinfo/authAppInfoManage/authAppInfoManage'], resolve)
          },
          {
            path: '/authappresinfo/authAppResInfoManage',
            name: 'authAppResInfoManage',
            meta: {
              title: '服务资源管理'
            },
            component: (resolve) => require(['@/views/authui5/authappresinfo/authAppResInfoManage/authAppResInfoManage'], resolve)
          }
        ]
      },
      {
        path: '/tenants',
        name: 'tenants',
        meta: {
          title: '多租户管理'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/tenant/tenantManage',
            name: 'tenantManage',
            meta: {
              title: i18n.t('framework.menuTitle.tenantManage')
            },
            component: (resolve) => require(['@/views/authui5/tenant/tenantManage/tenantManage'], resolve)
          },
          {
            path: '/original/originalManage',
            name: 'originalManage',
            meta: {
              title: i18n.t('framework.menuTitle.originalManage')
            },
            component: (resolve) => require(['@/views/authui5/original/originalManage/originalManage'], resolve)
          }
        ]
      },
      {
        path: '/log',
        name: 'log',
        meta: {
          title: '日志管理'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/log/auditLog',
            name: 'auditLog',
            meta: {
              title: i18n.t('framework.menuTitle.auditLog')
            },
            component: (resolve) => require(['@/views/authui5/log/auditLog/auditLog'], resolve)
          },
          {
            path: '/log/logonLog',
            name: 'logonLog',
            meta: {
              title: i18n.t('framework.menuTitle.logonLog')
            },
            component: (resolve) => require(['@/views/authui5/log/logonLog/logonLog'], resolve)
          },
          {
            path: '/log/operateLog',
            name: 'operateLog',
            meta: {
              title: i18n.t('framework.menuTitle.operateLog')
            },
            component: (resolve) => require(['@/views/authui5/log/operateLog/operateLog'], resolve)
          },
          {
            path: '/log/sqlLog',
            name: 'sqlLog',
            meta: {
              title: i18n.t('framework.menuTitle.sqlLog')
            },
            component: (resolve) => require(['@/views/authui5/log/sqlLog/sqlLog'], resolve)
          }
        ]
      },
      {
        path: '/security',
        name: 'security',
        meta: {
          title: '安全管理'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/aksk/akSkManage',
            name: 'akSkManage',
            meta: {
              title: 'ak/sk管理'
            },
            component: (resolve) => require(['@/views/manage/aksk/akSkManage/akSkManage'], resolve)
          },
          {
            path: '/cert/certManage',
            name: 'certManage',
            meta: {
              title: '证书管理'
            },
            component: (resolve) => require(['@/views/manage/cert/certManage/certManage'], resolve)
          }

        ]
      },
      {
        path: '/jobs',
        name: 'job',
        meta: {
          title: '任务管理'
        },
        component: (resolve) => require(['@/views/framework/parentView/parentView'], resolve),
        children: [
          {
            path: '/schedule/scheduleManage',
            name: 'scheduleManage',
            meta: {
              title: i18n.t('framework.menuTitle.scheduleManage')
            },
            component: (resolve) => require(['@/views/schedule/scheduleManage'], resolve)
          },
          {
            path: '/schedule/executeLogs',
            name: 'executeLogs',
            meta: {
              title: i18n.t('framework.menuTitle.executeLogs')
            },
            component: (resolve) => require(['@/views/schedule/executeLogs'], resolve)
          },
          {
            path: '/schedule/exceptionLogs',
            name: 'exceptionLogs',
            meta: {
              title: i18n.t('framework.menuTitle.exceptionLogs')
            },
            component: (resolve) => require(['@/views/schedule/exceptionLogs'], resolve)
          }

        ]
      }
    ]
  }
]
