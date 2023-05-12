/*
 * @Author: your name
 * @Date: 2019-12-18 12:54:35
 * @LastEditTime: 2020-05-19 12:45:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\api\framework\index.js
 */
import http from '@/common/http/api-request.js'

export default {
  download: function (path, param, config) {
    return http.download(path, param, config)
  }
}
