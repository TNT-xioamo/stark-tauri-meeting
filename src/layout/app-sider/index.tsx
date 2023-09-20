import React, { memo, type PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'
import { SiderWallpaper } from './app-sider-style'

import { useStore } from '@/store'

function JMSAppSider(props: PropsWithChildren<{}>): JSX.Element {
  const { systemStore } = useStore()
  const { theme } = systemStore.systemInfo || false

  return (
    <>
      <SiderWallpaper theme={theme}>
        侧边栏
      </SiderWallpaper> 
    </>
  )
}

export default observer(JMSAppSider)
