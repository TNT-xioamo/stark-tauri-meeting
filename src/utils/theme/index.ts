export const _acto_theme = (el: String, cb: any) => {
  const menuActo: Map<string, Function> = new Map([
    [ 'workbench', () => cb.setSystemInfo({
      theme: {
        page: {top: '#835F99', bottom: '#2F3264' },
        sider: {top: '#a787b6', bottom: '#5d5e8f' },
      }
    }) ],
    [ 'conference', () => cb.setSystemInfo({
      theme: {
        page: {top: '#cc7a9f', bottom: '#3d4177' },
        sider: {top: '#cf7fa7', bottom: '#595b8d' },
      }
    }) ],
    [ 'archives', () => cb.setSystemInfo({
      theme: {
        page: {top: '#da837f', bottom: '#3e4276' },
        sider: {top: '#de7e7a', bottom: '#5d537f' },
      }
    }) ],
    [ 'spatial', () => cb.setSystemInfo({
      theme: {
        page: {top: '#ac84d4', bottom: '#3d4279' },
        sider: {top: '#b486d6', bottom: '#5c5889' },
      }
    }) ],
    [ 'shredder', () => cb.setSystemInfo({
      theme: {
        page: {top: '#c77a9d', bottom: '#3d4177' },
        sider: {top: '#cc7ca0', bottom: '#5c5887' },
      }
    }) ],
    [ 'default', () => cb.setSystemInfo({
      theme: {
        page: {top: '#2ab495', bottom: '#335576' },
        sider: {top: '#0bb794', bottom: '#406c83' },
      }
    }) ],
  ])
  const action: any = menuActo.get(`${el}`) || menuActo.get('default')
  action.call()
}

export const _component_theme = {
  token: { colorPrimary: '#806b92', colorTextBase: '#fff', colorPrimaryHover: '#806b92', titleColor: '#1f1f1f' },
  components: { Input: { activeBorderColor: '#795a93' }, Button: { groupBorderColor: '#795a93' }}
}