/*
 * @Author: guochongjin
 * @Date: 2020-09-01 15:41:37
 * @LastEditTime: 2020-09-01 15:41:37
 * @LastEditors:guochongjin
 * @Description: API for files
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\files\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  fileStorageInfoQuery: function (model) {
    return http.post(process.env.IRETAIL_WEB + 'fileStorage/query', model)
  },
  // 添加
  fileStorageInfoAdd: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'fileStorage/save/add', params)
  },
  // 删除
  fileStorageInfoDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'fileStorage/del/' + params)
  },
  // 编辑
  fileStorageInfoEdit: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'fileStorage/save/update', params)
  }
}
