import React, { type PropsWithChildren, memo } from 'react'
import JMSZoomOperate from './children/room-operate'
import './room-style.css'
import { ZoomContainer } from './room-style'

function JMSConferenceRoom(_props: PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <ZoomContainer>
        <JMSZoomOperate />
      </ZoomContainer>
    </>
  )
}

export default memo(JMSConferenceRoom)