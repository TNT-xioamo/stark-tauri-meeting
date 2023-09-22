import React from 'react'
import JMSLayoutMain from '@/views/main'
import JMSAppSider from '@/layout/app-sider'
import JMSAppTitle from '@/layout/app-title'
import { AppWallpaper } from '@/views/main/app-style'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

function App(): JSX.Element {
  const { systemStore } = useStore()

  const { theme } = systemStore.systemInfo || false
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
