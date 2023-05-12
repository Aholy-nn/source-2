/*
 * @Author: your name
 * @Date: 2019-12-16 16:51:35
 * @LastEditTime: 2019-12-16 16:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ilead-ui\ilead4admin-ui\src\mixins\index.js
 */
export default {
  data () {
    return {
      name: 'mixin'
    }
  },
  beforeRouteLeave (to, from, next) {
    // 混合方法，当Tabe页或者页面离开的时候销毁那些不需要缓存的页面
    // TODO 后续实现
  }
}
