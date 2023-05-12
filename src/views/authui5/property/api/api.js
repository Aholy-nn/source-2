/*
 * @Author: your name
 * @Date: 2020-02-04 10:25:36
 * @LastEditTime: 2020-06-03 09:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\authui5\user\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  query: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'property/properties', param)
  },
  tenantListQuery: function () {
    return http.get(process.env.IRETAIL_WEB + 'tenant/all/tenant/list')
  },
  deletePropertyInfo: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'property/delete/' + param, param)
  },
  propertyInfoAdd: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'property/save/add', param)
  },
  propertyInfoUpdate: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'property/save/update', param)
  }
}
