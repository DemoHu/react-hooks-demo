import React, { useState } from 'react'
import { recommendNode } from '../../api/index'

function Recom(props) {
  const { tabs } = props
  const [ UID, changeUID ] = useState('')
  const [ phone, changePhone ] = useState('')
  const submitRecom = () => {
    recommendNode({
      recommendUserId: UID,
      beRecommendUserMobile: phone
    }).then((res) => {
      alert('恭喜你成为社区节点')
    }).catch((err) => {
      if (err.code === 5010) {
        alert(`您推荐的用户已成为社区节点，无需重复推荐`)
      } else if (err.code === 5011 || err.code === 5012) {
        alert(`您推荐的用户条件不满足，无法成为节点`)
      } else {
        alert(`推荐失败： ${err.message}`)
      }
    })
  }
  return (
    <div className={ tabs === 2 ? 'nodes_recommend container' : 'container'}>
      <h3>推荐节点</h3>
      <input
        value={UID}
        onChange={(e) => changeUID(e.target.value)}
        step="0.0000000001"
        type="number"
        placeholder="请输入被推荐人UID"
        onInput={(e) => { if(e.target.value.length>11)e.target.value=e.target.value.slice(0,11) }}
      />
      <input
        value={phone}
        onChange={(e) => changePhone(e.target.value)}
        step="0.0000000001"
        type="number"
        placeholder="请输入被推荐人手机号"
        onInput={(e) => { if(e.target.value.length>11)e.target.value=e.target.value.slice(0,11) }}
      />
      <div className="tips">成功推荐节点可获得社区节点中奖分红的 5%</div>
      <div className="submit" onClick={() => submitRecom()}>提交</div>
    </div>
  )
}
export default Recom