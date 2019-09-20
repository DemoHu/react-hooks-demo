import React, { useState } from 'react'
import Apply from './Apply'
import Recom from './Recom'
import Tabbar from '../../components/Tabbar'

import './index.scss'

function Nodes(props) {
  let [ tabs, changeTabs ] = useState(1)
  return (
    <div className="nodes_view">
      <ul className="tabs">
        <li className={ tabs === 1 ? 'active' : ''} onClick={() => changeTabs(1)}>节点申请</li>
        <li className={ tabs === 2 ? 'active' : ''} onClick={() => changeTabs(2)}>推荐节点</li>
      </ul>
      {tabs === 1 ? <Apply tabs={tabs} /> : <Recom tabs={tabs} /> }
      <Tabbar />
    </div>
  )
}
export default Nodes