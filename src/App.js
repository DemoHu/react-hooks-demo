/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-17 14:46:27
 * @Description: 
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routers from './router'


function App() {
  return (
    <>
      <Router>
        <Switch>
          {Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(porps) => 
              ( item.meta ? <item.component {...porps} /> : <div>请先登录</div> )
            }></Route>
          })}
        </Switch>
      </Router>
    </>
  )
}
export default App