/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 13:03:26
 * @LastEditTime: 2020-06-02 15:02:55
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import zView from 'zview'
import config from '@/config'
import locale from '@/locale'

Vue.config.productionTip = false
Vue.use(zView, {
  // 添加国际化，20191113
  i18n: (key, value) => locale.t(key, value)
})
Vue.prototype.$config = config
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
