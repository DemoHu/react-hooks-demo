/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-21 12:20:52
 * @LastEditTime: 2019-09-18 13:53:32
 * @Description: axios封装
 */

import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true //请求携带cookie
axios.defaults.crossDomain = true //请求携带额外数据(不包含cookie)
axios.defaults.baseURL = navigator.userAgent.indexOf('GameCenter/') !== -1 
  ? process.env.VUE_APP_API_URL.replace('/w/', '/m/')
  : process.env.VUE_APP_API_URL

const pending = []
const CancelToken = axios.CancelToken
const cancelPending = config => {
  pending.forEach((item, index) => {
    if (config) {
      if (item.UrlPath === config.url) {
        item.Cancel() //取消请求
        pending.splice(index, 1) //移除当前请求记录
      }
    } else {
      item.Cancel() //取消请求
      pending.splice(index, 1) // 移除当前请求记录
    }
  })
}
//不进行防重处理的接口集合
const noCancelPending = ['/order/createQuiz']

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['AHost'] = config.url.includes('/user/') ? 'gameCenter' : 'luckyAirShip'
    const publicParams = {
      client: 'web',
      timestamp: Math.floor(new Date().getTime() / 1000),
      dt: 'N',
      appName: 'X',
      orgId: JSON.parse(process.env.VUE_APP_DOMAIN_ORGID_MAP)[document.domain] || JSON.parse(process.env.VUE_APP_DOMAIN_ORGID_MAP).default,
      lotteryType: sessionStorage.getItem('lotteryType')
    }
    // 防止重复请求 ↓↓↓↓
    if (!noCancelPending.includes(config.url)) {
      cancelPending(config)
      config.cancelToken = new CancelToken(res => {
        pending.push({ 'UrlPath': config.url, 'Cancel': res })
      })
    }
    // 防止重复请求 ↑↑↑↑
    if (config.method === 'post') {
      config.data = qs.stringify(Object.assign(config.data, publicParams))
    } else if (config.method === 'get') {
      config.params = Object.assign(config.params, publicParams)
    }
    return config
  },
  error => {
    if (JSON.stringify(error) !== '{}') {
      return Promise.reject(error)
    } else {
      return new Promise((resolve, reject) => {
        return error
      })
    }
    // return Promise.reject(error)
  }
)
//http response 拦截器
axios.interceptors.response.use(
  response => {
    // 防止重复请求 ↓↓↓↓
    cancelPending(response.config)
    // 防止重复请求 ↑↑↑↑
    if (!response.data.success) {
      Toast.clear()
      Toast(response.data.error.message)
    }
    return response
  },
  error => {
    if (JSON.stringify(error) !== '{}') {
      return Promise.reject(error)
    } else {
      return new Promise((resolve, reject) => {
        return error
      })
    }
    // return Promise.reject(error)
  }
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then(response => {
      if (response.data.success) {
        resolve(response.data.payload)
      } else {
        reject(response.data.error)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      if (response.data.success) {
        resolve(response.data.payload)
      } else {
        reject(response.data.error)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
