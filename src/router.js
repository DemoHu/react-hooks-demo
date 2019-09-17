/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-17 14:30:16
 * @Description: 路由表
 */
import Home from './views/Home/Home'
import Nodes from './views/Nodes/Nodes'

export default [
  { path: '/', name: 'Home', meta: {}, component: Home },
  { path: '/nodes', name: 'Nodes', meta: {}, component: Nodes }
]
