/*
 * @Author: your name
 * @Date: 2019-12-26 17:06:30
 * @LastEditTime: 2020-06-02 18:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\router\framework\routers-framework.js
 */
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true
    },
    component: (resolve) => require(['@/views/framework/login/login'], resolve)
  },
  {
    path: '/',
    name: '_home',
    meta: {
      hideInMenu: true
    },
    component: (resolve) => require(['@/views/index'], resolve),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: (resolve) => require(['@/views/demo/framework/dashboard/controlBoard/controlBoard'], resolve)
      },
      // 异常
      {
        path: '/abnormal/404',
        name: '404',
        meta: {
          title: '404'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/404/404'], resolve)
      },
      {
        path: '/abnormal/500',
        name: '500',
        meta: {
          title: '500'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/500/500'], resolve)
      },
      {
        path: '/abnormal/unknown',
        name: 'unknown',
        meta: {
          title: '未知错误'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/unknown/unknown'], resolve)
      },
      {
        path: '/abnormal/notDev',
        name: 'notDev',
        meta: {
          title: '未开发'
        },
        component: (resolve) => require(['@/views/demo/framework/abnormal/notDev/notDev'], resolve)
      }
    ]
  }
]
