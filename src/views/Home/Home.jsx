import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tabbar from '../../components/Tabbar'

import './index.scss'

function Home(props) {  
  const [canDraw, changeCanDraw] = useState(true)
  const [countDown, setCountDown] = useState('00:00:00')
  const [availBalance, setAvailBalance] = useState(0)
  const [prizeAmount, setPrizeAmount] = useState(0)
  const [nodeCnt, setNodeCnt] = useState(0)
  return (
    <div className="home_view">
      <div className="container">
        <div className="header">
          <img src={`https://picsum.photos/id/132/70/70`} className="avatar" alt="" />
          <div className="nick_name">
            <Link to="/login" className="no_login">飞翔的河南人</Link>
            <div>UID: 2323223</div>
          </div>
          <Link to="/explain" className="explain">游戏规则</Link>
        </div>
        <div className="amount_box">
          <div className="left">奖池剩余: 12323</div>
          <div className="right">X充值总量: 32323</div>
        </div>
        <div className="count_down_box">
          <div className="top">
            <img src={require('../../assets/ufo.png')} className="ufo" alt="" />
            <div v-if="canDraw" className="ufo_guang"></div>
            <div className="text">抽奖倒计时</div>
            <div className="count_down">{ countDown }</div>
          </div>
          <img src={ canDraw ? require('../../assets/ball_ok.png') : require('../../assets/ball_no.png') } className="ball" alt="" />
        </div>
        <div className="info_box">
          <Link to="/wallet" className="my_amount">
            <div className="amount_info">{ availBalance }</div>
            <div className="type_name">可用X币</div>
          </Link>
          <Link to="/order" className="win_amount">
            <div className="amount_info">{ prizeAmount }</div>
            <div className="type_name">中奖X币</div>
          </Link>
          <Link to="/club" className="my_club">
            <div className="amount_info">{ nodeCnt }</div>
            <div className="type_name">我的社区</div>
          </Link>
        </div>
        <div className="home_invite">
          <Link to="/invite" className="home_invite_link">
            <span>每邀请一个用户获得 5 X币</span>
          </Link>
        </div>
      </div>
      <Tabbar></Tabbar>
    </div>
  )
}
export default Home
