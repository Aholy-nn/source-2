/*
 * @Author: guochongjin
 * @Date: 2020-09-01 15:41:37
 * @LastEditTime: 2020-09-07 09:28:37
 * @LastEditors:guochongjin
 * @Description: API for seq
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\seq\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  seqInfoQuery: function (model) {
    return http.post(process.env.IRETAIL_WEB + 'sysSequence/query', model)
  },
  // 添加
  seqInfoAdd: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysSequence/save/add', params)
  },
  // 删除
  seqInfoDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysSequence/del/' + params)
  },
  // 编辑
  seqInfoEdit: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysSequence/save/update', params)
  }
}
