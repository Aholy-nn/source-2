/*
 * @Author: wangzelin
 * @Date: 2020-12-15 15:41:37
 * @LastEditTime: 2020-12-18 09:28:37
 * @LastEditors:wangzelin
 * @Description: API for producerMessage
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\mq\producer\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  // 查询
  producerMessageInfoQuery: function (producerMessage) {
    return http.post(process.env.IRETAIL_WEB + 'sysProducerMessage/query', producerMessage)
  },
  // 删除
  producerMessageInfoDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'sysProducerMessage/del/' + params)
  },
  // 修改状态
  producerMessageInfoUpdate: function (params) {
    return http.post(process.env.IRETAIL_WEB + '/sysProducerMessage/update/' + params.messageId, params)
  }
}
