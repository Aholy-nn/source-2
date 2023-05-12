/*
 * @Author: your name
 * @Date: 2020-04-28 12:13:57
 * @LastEditTime: 2020-04-28 12:15:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ilead-ui\ilead4admin-ui\src\common\ui-manage\index.js
 */
import framweAPI from '@/api/framework/index.js'
export default {
  initFuncurl () {
    framweAPI.initFuncPrivilege().then(function (response) {
      console.log('初始化和系统权限成功')
    }).catch(function (error) {
      console.log('初始化和系统权限失败' + '||' + error)
    })
  }
}
