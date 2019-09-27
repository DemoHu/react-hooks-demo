/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-27 13:44:02
 * @Description: 
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routers from './router'
import Login from './views/Login/Login'
import { connect } from 'react-redux'
function App(store) {
  return (
    <>
      <Router>
        <Switch>
          {Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(props) =>
              (!item.meta.auth || store.userInfo.login ? <item.component {...props} /> : <Login {...props} /> )
            }></Route>
          })}
        </Switch>
      </Router>
    </>
  )
}
const loginStateProps = state => {
  return {
    userInfo: state.userInfo,
  }
}
export default connect(loginStateProps, null)(App)