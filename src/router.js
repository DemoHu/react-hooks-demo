/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-18 11:12:16
 * @Description: 路由表
 */
import Home from './views/Home/Home'
import Nodes from './views/Nodes/Nodes'
import Login from './views/Login/Login'

export default [
  { path: '/', name: 'Home', meta: {}, component: Home },
  { path: '/login', name: 'Login', meta: { auth: false }, component: Login },
  { path: '/nodes', name: 'Nodes', meta: { auth: false }, component: Nodes },
]
