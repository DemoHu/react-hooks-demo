/*
 * @Author: Siwen
 * @Date: 2019-09-27 14:17:58
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-27 14:17:58
 * @Description: 
 */
import user from './user'
import Store from '@ice/store'

const storeManager = new Store()
storeManager.registerStore('user', user)

export default storeManager