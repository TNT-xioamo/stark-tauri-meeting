import React, { memo, useEffect } from 'react'
import { appWindow } from '@tauri-apps/api/window'
import { HiChevronUpDown, HiPlusSmall, HiXCircle } from "react-icons/hi2";


export default memo(function JMSAppTitle() {

  const _handle_event = (() => {
    document.getElementById('titlebar-minimize')?.addEventListener('click', () => appWindow.minimize())
    document.getElementById('titlebar-maximize')?.addEventListener('click', () => appWindow.toggleMaximize())
    document.getElementById('titlebar-close')?.addEventListener('click', () => appWindow.close())
  })()
  return (
    <div data-tauri-drag-region className="titlebar">
      <div className="titlebar-button" id="titlebar-close"><HiXCircle /> </div>
      <div className="titlebar-button" id="titlebar-minimize"><HiPlusSmall /></div>
      <div className="titlebar-button" id="titlebar-maximize"><HiChevronUpDown /></div>
    </div>
  )
})