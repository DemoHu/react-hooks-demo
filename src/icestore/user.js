/*
 * @Author: Siwen
 * @Date: 2019-09-27 14:12:52
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-27 15:39:34
 * @Description: user状态
 */
const user = {
  userInfo: {
    login: false,
    nickName: ''
  },
  async loginApi(param) {
   const data = await new Promise(resolve => {
      setTimeout(() => {
        resolve(param)
      }, 1000);
    })
    this.userInfo = data
  },
  dispatchUserInfo(data) {
    this.userInfo = data
  }
}
export default user