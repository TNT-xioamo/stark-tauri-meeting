import React, { useState, memo } from 'react'
import JMSLayoutMain from '@/views/main'
import JMSAppSider from '@/layout/app-sider'
import { AppWallpaper } from '@/views/main/app-style'

function App() {

  return (
    <>
      <AppWallpaper className="app">
        <JMSAppSider />
        <JMSLayoutMain />
      </AppWallpaper>
    </>
  )
}

export default memo(App)
