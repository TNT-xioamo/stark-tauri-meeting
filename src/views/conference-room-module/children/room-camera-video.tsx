import React, { type PropsWithChildren, memo, useEffect, useState, useRef } from 'react'
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk'


function JMSZoomCamera(_props: PropsWithChildren<{ appId: any, camera?: Array<any> }>): JSX.Element {
  const generateRoomName = () => `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`;
  const configOverwrite = {
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    enableEmailInStats: false
  }
  return (
    <>
      <div className='zoom-camera'>
        <JitsiMeeting
          roomName={generateRoomName()}
          configOverwrite = { configOverwrite }
          interfaceConfigOverwrite = {{DISABLE_JOIN_LEAVE_NOTIFICATIONS: true }}
        />
      </div>
    </>
  )
}
export default memo(JMSZoomCamera)
