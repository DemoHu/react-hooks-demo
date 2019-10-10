/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 11:25:47
 * @Description: 
 */
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routers from './router'
import Login from './views/Login/Login'
import stores from './icestore'
function App() {
  const user = stores.useStore('user')
  const { userInfo } = user
  console.log(userInfo)
  return (
    <>
      <Router>
        <Switch>
          {Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(props) =>
              (!item.meta.auth || userInfo.login ?
                <Suspense fallback={null}>
                  <item.component {...props} />
                </Suspense> : <Login {...props} /> )
            }></Route>
          })}
        </Switch>
      </Router>
    </>
  )
}

export default App