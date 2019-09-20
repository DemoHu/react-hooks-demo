import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './tabbar.scss'

function Tabbar(props) {
  const { pathname } = props.location
  const [ routerList ] = useState([
    {
      url: '/',
      name: '首页',
      icon1: require('../assets/home_1.png'),
      icon2: require('../assets/home_2.png')
    },
    {
      url: '/nodes',
      name: '节点申请',
      icon1: require('../assets/nodes_1.png'),
      icon2: require('../assets/nodes_2.png')
    },
    {
      url: '/center',
      name: '我的',
      icon1: require('../assets/center_1.png'),
      icon2: require('../assets/center_2.png')
    }
  ])
  return (
    <div className="tabbar">
      <ul className="footer_box">
        {routerList.map((item, index) => {
          return (
            <li className={item.url === pathname ? 'item_tabbar_active item_tabbar' : 'item_tabbar'} key={index}>
              <Link to={item.url} exact="true">
                <img src={item.url === pathname ? item.icon2 : item.icon1} alt="" />
                <p className={ item.url === pathname ? 'active tabbar-label' : 'tabbar-label'}>{ item.name }</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default withRouter(Tabbar)