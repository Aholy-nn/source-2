/*
 * @Author: your name
 * @Date: 2019-11-18 10:52:13
 * @LastEditTime : 2020-01-02 10:26:22
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\config\test.env.js
 */
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  IF_LOCAL: '""',
  IRETAIL_WEB: '"iretail-web/"',
  IRETAIL_NOTICE_SERVICE: '"iretail-notice-service/"'
})
