/*
 * @Author: wangzelin
 * @Date: 2021-1-11 15:41:37
 * @LastEditTime: 2021-1-12 09:28:37
 * @LastEditors:wangzelin
 * @Description: API for ReadNoticeNoticeManage
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\notice\user\api\api.js
 */
import http from '@/common/http/api-request.js'
export default {
  // 用户公告批量已读
  batchMarkRead: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/batchMarkRead/' + params)
  },
  // 用户公告全部已读
  allMarkRead: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/allMarkRead')
  },
  // 用户公告批量删除
  batchDelete: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/batchDelete/' + params)
  },
  // 用户公告全部删除
  allDelete: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/allDelete')
  },
  userNoticeQuery: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/user/query', params)
  }
}
