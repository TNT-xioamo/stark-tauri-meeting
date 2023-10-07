import React, { type PropsWithChildren, memo } from 'react'
import './room-style.css'

function JMSConferenceRoom(_props: PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <div className="jumbotron">会议室</div>
    </>
  )
}

export default memo(JMSConferenceRoom)