import React, { memo } from 'react'
import { observer } from 'mobx-react-lite'
// import { appWindow } from '@tauri-apps/api/window'
import { TitleWallpaper } from './app-title-style'
import { useStore } from '@/store'

export default observer(function JMSAppTitle() {
  const { systemStore } = useStore()

  const { theme } = systemStore.systemInfo || false

  return (
      <TitleWallpaper data-tauri-drag-region theme={theme}>
        <div data-tauri-drag-region className="titlebar"></div>
      </TitleWallpaper>
  )
})