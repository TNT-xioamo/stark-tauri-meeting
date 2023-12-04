import React, { type PropsWithChildren, memo, useEffect, useState } from 'react'
import { appWindow } from '@tauri-apps/api/window'
import { observer } from 'mobx-react-lite'
import { Modal } from 'antd'

import { BiWinkTongue } from 'react-icons/bi'

import { useStore } from '@/store'
import JMSZoomOperate from './children/room-operate'
import JMSLoading from '@/components/loading'
import './room-style.css'
import { ZoomContainer } from './room-style'


function JMSConferenceRoom(_props: PropsWithChildren<{}>): JSX.Element {
  const [loading, setLoading] = useState(true)
  const { confirm } = Modal
  const { roomStore } = useStore()

  const _handle_on_close =  () => {
    appWindow.onCloseRequested(async(event) => {
      const statu = await _hanle_close_modal()
      // event.preventDefault()
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
        icon: <BiWinkTongue size={22} color="#faad14" />,
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
        <JMSLoading />
        <JMSZoomOperate />
      </ZoomContainer>
    </>
  )
}

export default observer(JMSConferenceRoom)