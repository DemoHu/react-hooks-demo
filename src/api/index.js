/*
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-03-21 14:02:10
 * @LastEditTime: 2019-08-13 11:39:53
 * @Description: 接口中心
 */
import { post, get } from './http'
import store from '../store'

export default {
  /**获取用户信息 */
  getUserInfo() {
    return new Promise((resolve, reject) => {
      get('/user/getInfo', {}).then(res => {
        resolve(res)
      }).catch(err => {
        store.commit('SET_LOGIN', false)
        store.commit('SET_INFO', {
          userInfo: {
            avatar: '',
            money: '请先登录'
          }
        })
        reject(err)
      })
    })
  },
  /**获取最新期号 */
  getGoodsNewQuiz() {
    return new Promise((resolve, reject) => {
      get('/goods/newQuiz', {}).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**获取投注类型列表
   * @param betType 投注类型 6 两面 7 名次 8 冠亚和
   * @param roomType 房间类型
  */
  getGoodsBetType(betType, roomType) {
    return new Promise((resolve, reject) => {
      get('/goods/bettingType', { betType, roomType }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**参与竞猜
   * @param num 下注数量
   * @param stake 商品类型
   * @param betId 投注类型ID
   * @param period 期号
   * @param roomType 房间类型
  */
  createQuiz({ num, stake, betId, period, roomType }) {
    return new Promise((resolve, reject) => {
      post('/order/createQuiz', { num, stake, betId, period, roomType }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /** 获取用户当期下单限额
   * @param period 期号
  */
  queryLimit({ period }) {
    return new Promise((resolve, reject) => {
      post('/order/queryLimit', { period }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**助手数据
   * @param page 页数
   */
  lotteryList(page) {
    return new Promise((resolve, reject) => {
      get('/lottery/list', { page }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**获取排行榜 */
  getRankList() {
    return new Promise((resolve, reject) => {
      get('/rank/list', {}).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**获取订单记录
   * @param type 订单类型
   * @param page 页数
   */
  getOrderList({ type, page }) {
    return new Promise((resolve, reject) => {
      get('/order/ticketList', { type, page, pageSize: 10 }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**获取房间列表*/
  roomList() {
    return new Promise((resolve, reject) => {
      get('/goods/roomList', {}).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**验证房间状态 */
  roomKeepalive() {
    return new Promise((resolve, reject) => {
      get('/room/keepalive', {}).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
