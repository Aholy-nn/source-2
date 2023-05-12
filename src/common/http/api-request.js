/*
 * @Description: In User Settings Edit
 * @Author: zrzdemon
 * @Date: 2019-09-26 15:32:41
 * @LastEditTime: 2020-06-02 15:28:35
 * @LastEditors: Please set LastEditors
 */
import HttpRequest from './axios'
import config from '@/config'

const getBaseUrl = function () {
  if (config.baseUrl.hasOwnProperty(process.env.NODE_ENV)) {
    return config.baseUrl[process.env.NODE_ENV]
  } else {
    console.warn('前端配置文件未找到当前环境配置的路径！')
    return ''
  }
}

const axios = new HttpRequest(getBaseUrl())

/**
 * http post请求
 * @param url请求的url地址
 * @param params 基于post请求参数，格式必须是json，例如{id: '1111'}
 * @param config 其他配置，一般是用于配置其他属性
 */
export function post (url, data, config) {
  let options = {url: url, data: data, method: 'post'}
  let opt = config ? Object.assign(config, options) : options
  return axios.request(opt)
}

/**
 * http get请求
 * @param url请求的url地址
 * @param params 基于get请求参数，格式必须是json，例如{id: '1111'}
 * @param config 其他配置，一般是用于配置其他属性
 */
export function get (url, params, config) {
  let options = {url: url, method: 'get', params: params}
  let opt = Object.assign(options, config)
  return axios.request(opt)
}

/**
 * http 文件上传
 * @param url请求的url地址
 * @param data 是formdata对象
 * @param config 其他配置，一般是用于配置其他属性
 */
export function uploadPost (url, data, config) {
  let options = {url: url, method: 'post', headers: {'Content-Type': 'multipart/form-data'}, data: data}
  let opt = Object.assign(config, options)
  return axios.request(opt)
}

/**
 * http 文件上传
 * @param url 请求的url地址
 * @param file 文件对象
 * @param data 文件上传的对象json格式
 * @param config 其他配置，一般是用于配置其他属性
 */
export function uploadPostByFile (url, data, files, config) {
  let form = new FormData()
  for (let i = 0; i < files.length; i++) {
    form.append('files', files[i])
  }
  for (let item in data) {
    form.append(item, data[item])
  }
  let options = {url: url, method: 'post', headers: {'Content-Type': 'multipart/form-data'}, data: form}
  let opt = Object.assign(config, options)
  return axios.request(opt)
}

export function download (url, data, config) {
  let options = {url: url, headers: {'Content-Type': 'application/json;charset=UTF-8', 'exportFlag': '1'}, responseType: 'blob', 'data': data}
  let opt = config ? Object.assign(config, options) : options
  return axios.request(opt)
}

export default {
  axios,
  get: get,
  post: post,
  uploadPost: uploadPost,
  download: download
}
