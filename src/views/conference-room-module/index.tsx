import React, { type PropsWithChildren, memo, useEffect } from 'react'
import { appWindow } from '@tauri-apps/api/window'
import { confirm } from '@tauri-apps/api/dialog'

import JMSZoomOperate from './children/room-operate'
import './room-style.css'
import { ZoomContainer } from './room-style'

function JMSConferenceRoom(_props: PropsWithChildren<{}>): JSX.Element {
  const _handle_on_close =  () => {
    appWindow.onCloseRequested((event) => {
      event.preventDefault()
    })
  }
  useEffect(() => {
    _handle_on_close()
  }, [])
  return (
    <>
      <ZoomContainer>
        <JMSZoomOperate />
      </ZoomContainer>
    </>
  )
}

export default memo(JMSConferenceRoom)