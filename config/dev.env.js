/*
 * @Author: your name
 * @Date: 2019-11-18 10:52:13
 * @LastEditTime: 2020-09-01 21:23:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\config\dev.env.js
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  IF_LOCAL: '""', // 判断是否本地
  IRETAIL_WEB: '"iretail-web/"',
  IRETAIL_NOTICE_SERVICE: '"iretail-notice-service/"'
})
