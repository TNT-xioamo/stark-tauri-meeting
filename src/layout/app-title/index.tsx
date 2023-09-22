import React from 'react'
import { observer } from 'mobx-react-lite'
// import { appWindow } from '@tauri-apps/api/window'
import JMSAppAides from '@/layout/app-aides'

import { TitleWallpaper } from './app-title-style'
import { useStore } from '@/store'

export default observer(function JMSAppTitle(): JSX.Element {
  const { systemStore } = useStore()

  const { theme } = systemStore.systemInfo || false

  return (
      <TitleWallpaper data-tauri-drag-region theme={theme}>
        <JMSAppAides />
        <div data-tauri-drag-region className="titlebar"></div>
      </TitleWallpaper>
  )
})