/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 11:17:53
 * @Description: 路由表
 */
import React from 'react'
const Home = React.lazy(() => import('./views/Home/Home'))
const Nodes = React.lazy(() => import('./views/Nodes/Nodes'))
const Center = React.lazy(() => import('./views/Center/Center'))
const Login = React.lazy(() => import('./views/Login/Login'))

export default [
  { path: '/', name: 'Home', meta: {}, component: Home },
  { path: '/login', name: 'Login', meta: { auth: false }, component: Login },
  { path: '/nodes', name: 'Nodes', meta: { auth: true }, component: Nodes },
  { path: '/center', name: 'Center', meta: { auth: true }, component: Center },
]
