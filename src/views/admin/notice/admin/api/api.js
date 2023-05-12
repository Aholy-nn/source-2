/*
 * @Author: wangzelin
 * @Date: 2021-1-11 15:41:37
 * @LastEditTime: 2021-1-12 09:28:37
 * @LastEditors:wangzelin
 * @Description: API for adminNotice
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\admin\notice\admin\api\api.js
 */
import http from '@/common/http/api-request.js'
export default {
  // 查询
  adminNoticeQuery: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/admin/query', params)
  },
  // 添加
  adminNoticeAdd: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/admin/save/add', params)
  },
  // 删除
  adminNoticeDel: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/admin/delete/' + params)
  },
  // 编辑
  adminNoticeEdit: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/admin/save/update', params)
  },
  // 配置组织
  getOrgTree: function () {
    return http.post(process.env.IRETAIL_WEB + 'org/getOrgsTree/synchro')
  },
  // 公告发送组织记录
  saveOrgNoticeInfo: function (params) {
    return http.post(process.env.IRETAIL_WEB + 'notice/admin/send', params)
  }
}
