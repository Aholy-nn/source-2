/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-05-06 11:36:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  query: function (param, appId) {
    if (appId) {
      return http.post(process.env.IRETAIL_WEB + 'resource/types' + '/' + appId, param)
    } else {
      return http.post(process.env.IRETAIL_WEB + 'resource/types' + '/', param)
    }
  },
  resTypeInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'resource/save/type/add', param)
  },
  resTypeInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'resource/save/type/update', param)
  },
  deleteResTypeInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'resource/delete/type/' + param, param)
  },
  resTypeInfoQuery: function (appId) {
    if (appId && appId !== '') {
      return http.get(process.env.IRETAIL_WEB + 'resource/types/resTypeMap' + '/' + appId)
    }
    return http.get(process.env.IRETAIL_WEB + 'resource/types/resTypeMap')
  },
  resGrpResTree: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'resource/resTree/group', param)
  },
  treeShowStyleQuery: function () {
    return http.get(process.env.IRETAIL_WEB + 'resource/types/treeShowStyle')
  },
  saveGroupResInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'group/saveGroupResource', param)
  }
}
