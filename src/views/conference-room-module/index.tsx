import React, { type PropsWithChildren, memo, useEffect, useState } from 'react'
import { appWindow } from '@tauri-apps/api/window'

import { Modal } from 'antd'

import JMSZoomOperate from './children/room-operate'
import './room-style.css'
import { ZoomContainer } from './room-style'

function JMSConferenceRoom(_props: PropsWithChildren<{}>): JSX.Element {

  const { confirm } = Modal
  const [ clonse, set_clonse ] = useState(false)

  const _handle_on_close =  () => {
    if (clonse) return
    set_clonse(true)
    appWindow.onCloseRequested(async(event) => {
      console.error(event)
      event.preventDefault()
      const statu = _hanle_close_modal()
      // appWindow.close()
    })
  }
  useEffect(() => {
    _handle_on_close()
  }, [])

  const _hanle_close_modal = () => {
    return new Promise<void>((resolve, reject) => {
      confirm({
        title: '确定要退出会议吗？',
        icon: '',
        okText: '结束会议',
        cancelText: '离开会议',
        onOk: () =>_handle_on_close_room(resolve),
        onCancel: () => _handle_on_leave_room(reject)
      })
    })
  }
  const _handle_on_close_room = (resolve: Function) => {
    resolve(true)
    // appWindow.close()
  }
  const _handle_on_leave_room = (reject: any) => {
    reject(false)
  }
  return (
    <>
      <ZoomContainer>
        <JMSZoomOperate />
      </ZoomContainer>
    </>
  )
}

export default memo(JMSConferenceRoom)