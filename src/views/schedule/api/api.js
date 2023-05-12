/*
 * @Author: guochongjin
 * @Date: 2021-03-26 9:38:37
 * @LastEditTime: 2021-03-26 9:38:37
 * @LastEditors:guochongjin
 * @Description: API for schedule
 * @FilePath: \iLead-ui\ilead4admin-ui\src\views\schedule\api\api.js
 */

import http from '@/common/http/api-request.js'
export default {
  queryJob: function (condition) {
    return http.get(process.env.IRETAIL_WEB + 'jobs/listjob', condition)
  },
  queryExecutedLogs: function (condition) {
    return http.get(process.env.IRETAIL_WEB + 'jobs/jobhistories', condition)
  },
  queryExceptionLogs: function (condition) {
    return http.get(process.env.IRETAIL_WEB + 'jobs/jobexceptions', condition)
  },
  createJob: function (job) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/addjob', job)
  },
  editJob: function (job) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/editjob', job)
  },
  getJobDetail: function (condition) {
    var params = 'jobName=' + condition.jobName + '&jobGroup=' + condition.jobGroup
    return http.get(process.env.IRETAIL_WEB + 'jobs/job' + '?' + params)
  },
  scheduleJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/schedulejob', schedulers)
  },
  rescheduleJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/reschedulejob', schedulers)
  },
  unscheduleJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/unschedulejob', schedulers)
  },
  pauseJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/pausejob', schedulers)
  },
  resumeJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/resumejob', schedulers)
  },
  triggerJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/triggerjob', schedulers)
  },
  deleteJob: function (schedulers) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/deletejob', schedulers)
  },
  deleteExceptions: function (logIds) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/delexception', logIds)
  },
  deleteExecutedLogs: function (logIds) {
    return http.post(process.env.IRETAIL_WEB + 'jobs/delhistories', logIds)
  }
}
