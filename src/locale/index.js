/*
 * @Author: your name
 * @Date: 2019-11-08 10:08:20
 * @LastEditTime: 2020-06-01 16:40:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /iLead-ui2/ilead4admin-ui/src/locale/index.js
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'
// zview
import zviewCN from '../../static/js/zview/locale/zh-CN'
import zviewUS from '../../static/js/zview/locale/en-US'
import zviewJP from '../../static/js/zview/locale/ja-JP'
// vxe-table
import vxeCN from 'vxe-table/lib/locale/lang/zh-CN'
import vxeUS from 'vxe-table/lib/locale/lang/en-US'
import vxeJP from 'vxe-table/lib/locale/lang/ja-JP'
// framework
import frameworkCN from '@/locale/framework/lang-framework-zh-CN'
import frameworkUS from '@/locale/framework/lang-framework-en-US'
import frameworkJP from '@/locale/framework/lang-framework-ja-JP'
// authui
import authuiCN from '@/locale/authui/lang-authui-zh-CN'
import authuiUS from '@/locale/authui/lang-authui-en-US'
import authuiJP from '@/locale/authui/lang-authui-ja-JP'

Vue.use(VueI18n)
Vue.locale = function () { }// 组件国际化必添加
let zhCN = Object.assign(zviewCN, vxeCN, frameworkCN, authuiCN)
let enUS = Object.assign(zviewUS, vxeUS, frameworkUS, authuiUS)
let jaJP = Object.assign(zviewJP, vxeJP, frameworkJP, authuiJP)
const i18n = new VueI18n({
  locale: store.state.locale,
  silentTranslationWarn: true,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    'ja-JP': jaJP
  }
})

export default i18n
