import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { indexInfo, pondInfo } from '../../api/index'

import './index.scss'

function Content(props) {
  let [pondBalance, setPondBalance] = useState(0)
  let [rechargeTotal, setRechargeTotal] = useState(0)
  let [availBalance, setAvailBalance] = useState(0)
  let [prizeAmount, setPrizeAmount] = useState(0)
  let [nodeCnt, setNodeCnt] = useState(0)
  let [canDraw, changeCanDraw] = useState(true)
  let [countDown, setCountDown] = useState('00:00:00')

  useEffect(() => {
    console.log('useEffect只执行一次')
    getPondInfo()
    getIndexInfo()
    // eslint-disable-next-line
  }, [])
  const getPondInfo = () => {
    pondInfo().then(res => {
      pondBalance = setPondBalance(res.pondBalance)
      rechargeTotal = setRechargeTotal(res.rechargeTotal)
    }).catch(err => {
      console.log(err.message)
    })
  }
  const getIndexInfo = () => {
    indexInfo().then(res => {
      availBalance = setAvailBalance(res.availBalance)
      prizeAmount = setPrizeAmount(res.prizeAmount)
      nodeCnt = setNodeCnt(res.nodeCnt)
      canDraw = changeCanDraw(res.canDraw)
      countDown = setCountDown(res.pondInfo.countdown)
    }).catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className="home_view">
      <div className="container">
        <div className="header">
          <img src={`https://picsum.photos/id/132/70/70`} className="avatar" alt="" />
          <div className="nick_name">
            <Link to="/login" className="no_login">{ process.env.REACT_APP_ENV }</Link>
            <div>UID: 2323223</div>
          </div>
          <Link to="/explain" className="explain">游戏规则</Link>
        </div>
        <div className="amount_box">
          <div className="left">奖池剩余: { pondBalance }</div>
          <div className="right">X充值总量: { rechargeTotal }</div>
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
    </div>
  )
}
export default Content
