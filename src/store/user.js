/*
 * @Author: Siwen
 * @Date: 2019-09-27 10:12:50
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-27 11:51:02
 * @Description: 用户信息
 */

const user = {
  login: false
}
export const userInfo = (state = user, action) => {
  switch (action.type) {
    case 'Login':
      return {
        login: true,
        ...action.data
      }
    case 'Logout':
      return {
        login: false
      }
    default:
      return state
  }
}
