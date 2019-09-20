import React from 'react'
import { applyNode } from '../../api/index'

function Apply(props) {
  const { tabs } = props
  const submitApply = () => {
    applyNode().then((res) => {
      alert('恭喜你成为社区节点')
    }).catch((err) => {
      if (err.code === 5010) {
        alert(`您已是社区节点，无需重复申请`)
      } else if (err.code === 5011 || err.code === 5012) {
        alert(`您的条件不满足，无法申请节点`)
      } else {
        alert(`申请失败： ${err.message}`)
      }
    })
  }
  return (
    <div className={ tabs === 1 ? 'nodes_apply container' : 'container'} >
      <h3>节点申请</h3>
      <h4>申请条件</h4>
      <p>伞下社区用户充值量需大于10万枚X，参与充值抽奖的一级社区用户大于20个，则申请后自动成为社区节点；并获得社区节点权益。</p>
      <h4>节点权益</h4>
      <p>1、社区节点分红：可获得自己伞下邀请社区用户无限层中奖奖励综合的10%分红激励。</p>
      <p>2、社区节点享有伞下社区用户持币总量日千分之一的激励。</p>
      <p>3、社区节点享有伞下社区用户提币手续费50%的激励。</p>
      <div className="submit" onClick={() => submitApply()}>提交申请</div>
    </div>
  )
}
export default Apply