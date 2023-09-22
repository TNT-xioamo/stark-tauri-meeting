import React, { type PropsWithChildren } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { observer } from 'mobx-react-lite'
import { CgBot, CgScreen, CgScreenMirror, CgInstagram, CgMaze } from 'react-icons/cg'
import { SiderWallpaper } from './app-sider-style'
import { getMenuItem } from './sider-data'
import { useStore } from '@/store'
import { _acto_theme } from '@/utils'

function JMSAppSider(_props: PropsWithChildren<{}>): JSX.Element {
  const { systemStore } = useStore()

  const { theme } = systemStore.systemInfo || false

  const menus: MenuProps['items'] = [
    getMenuItem('工作台', 'workbench', <CgScreen color='' />),
    getMenuItem('Group', 'grp', null, [getMenuItem('会议室', 'conference', <CgMaze />), getMenuItem('档案馆', 'archives', <CgBot />)], 'group'),
    getMenuItem('Schedule', 'sch', null, [getMenuItem('空间透镜', 'spatial', <CgScreenMirror />), getMenuItem('碎纸机', 'shredder', <CgInstagram />)], 'group'),
  ]

  const _handle_on_select: MenuProps['onClick'] = (e) => {
    console.log('handle_on_select', e)
    _handle_map_bg(e?.key)
  }

  const _handle_map_bg = (el: String) => {
    _acto_theme(el, systemStore)
  }

  return (
    <>
      <SiderWallpaper theme={theme}>
        <Menu mode="inline" items={menus} onClick={(el) => _handle_on_select(el)} />
      </SiderWallpaper> 
    </>
  )
}

export default observer(JMSAppSider)
