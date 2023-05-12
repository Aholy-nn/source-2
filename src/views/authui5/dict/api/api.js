import http from '@/common/http/api-request.js'
export default {
  query: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'dict/dicts', param)
  },
  delDict: function (dictId) {
    var url = process.env.IRETAIL_WEB + 'dict/deleteDict/' + dictId
    return http.get(url)
  },
  addDict: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'dict/saveDict', param)
  },
  updateDict: function (param) {
    return http.post(process.env.IRETAIL_WEB + 'dict/updateDict', param)
  }
}
