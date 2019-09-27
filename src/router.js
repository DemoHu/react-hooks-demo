/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-27 10:23:07
 * @Description: 路由表
 */
import Home from './views/Home/Home'
import Nodes from './views/Nodes/Nodes'
import Center from './views/Center/Center'
import Login from './views/Login/Login'

export default [
  { path: '/', name: 'Home', meta: {}, component: Home },
  { path: '/login', name: 'Login', meta: { auth: false }, component: Login },
  { path: '/nodes', name: 'Nodes', meta: { auth: true }, component: Nodes },
  { path: '/center', name: 'Center', meta: { auth: true }, component: Center },
]
