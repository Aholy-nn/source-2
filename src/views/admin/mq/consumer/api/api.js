/*
 * @Author: wangzelin
 * @Date: 2020-12-15 15:41:37
 * @LastEditTime: 2020-12-18 09:28:37
 * @LastEditors:wangzelin
 * @Description: API for consumerMessage
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\mq\consumer\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  consumerMessageInfoQuery: function (consumerMessage) {
    return http.post(process.env.IRETAIL_WEB + 'sysConsumerMessage/query', consumerMessage)
  },
  // 删除
  consumerMessageInfoDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysConsumerMessage/del/' + params)
  },
  // 修改状态
  consumerMessageInfoUpdate: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysConsumerMessage/update/' + params.messageId, params)
  }
}
