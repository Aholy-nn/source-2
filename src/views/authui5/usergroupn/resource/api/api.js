/*
 * @Author: your name
 * @Date: 2020-02-16 18:55:14
 * @LastEditTime: 2020-05-04 15:25:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\function\api\api.js
 */
import http from '@/common/http/api-request.js'
export default {
  resTypeInfoQuery: function (appId) {
    if (appId && appId !== '') {
      return http.get(process.env.IRETAIL_WEB + 'resource/types/resTypeMap' + '/' + appId)
    }
    return http.get(process.env.IRETAIL_WEB + 'resource/types/resTypeMap')
  },
  queryWaitList: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'resource/query/page/wait', data)
  },
  querySelectList: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'resource/query/page/select', data)
    // return http.get('../../../static/data/test1.json')
  },
  addSelect: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'resource/batchAdd', data)
  },
  delSelect: function (data) {
    return http.post(process.env.IRETAIL_WEB + 'resource/batchDelete', data)
  }
}
