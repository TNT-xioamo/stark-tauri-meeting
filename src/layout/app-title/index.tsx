import React, { memo } from 'react'
import { appWindow } from '@tauri-apps/api/window'
import { HiChevronUpDown, HiPlusSmall, HiXCircle } from 'react-icons/hi2'
import { TitleWallpaper } from './app-title-style'

export default memo(function JMSAppTitle() {
  return (
      <TitleWallpaper data-tauri-drag-region>
        <div data-tauri-drag-region className="titlebar"></div>
      </TitleWallpaper>
  )
})