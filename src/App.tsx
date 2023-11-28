import React from 'react'
import { invoke } from '@tauri-apps/api/tauri'

import JMSLayoutMain from '@/views/main'
import JMSAppSider from '@/layout/app-sider'
import JMSAppTitle from '@/layout/app-title'
import { AppWallpaper } from '@/views/main/app-style'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

function App(): JSX.Element {
  const { systemStore, userStore } = useStore()
  const { theme } = systemStore.systemInfo || false
  const { userInfo } = userStore
  const _handle_get_mac_address = async () => {
    if (userInfo.user_mac) return
    const mac: String = await invoke('get_mac_address')
    userStore.SET_USER_INFO({ user_mac: mac })
  }
  _handle_get_mac_address()
  return (
    <>
      <JMSAppTitle />
      <AppWallpaper theme={theme} className="app">
        <JMSAppSider />
        <JMSLayoutMain />
      </AppWallpaper>
    </>
  )
}

export default observer(App)
