import { WebviewWindow, appWindow, getAll, getCurrent } from '@tauri-apps/api/window'
import { relaunch, exit } from '@tauri-apps/api/process'
import { emit, listen } from '@tauri-apps/api/event'

import { setWin } from './actions'

/**
 * @desc    窗口容器
 * @author: Stark 
 * @time    2023.10
 */

export const windowConfig = {
  label: null,            // 窗口唯一label
  title: '',              // 窗口标题
  url: '',                // 路由地址url
  width: 960,             // 窗口宽度
  height: 560,            // 窗口高度
  minWidth: 580,         // 窗口最小宽度
  minHeight: 500,        // 窗口最小高度
  x: null,                // 窗口相对于屏幕左侧坐标
  y: null,                // 窗口相对于屏幕顶端坐标
  center: true,           // 窗口居中显示
  resizable: true,        // 是否支持缩放
  maximized: false,       // 最大化窗口
  decorations: false,     // 窗口是否无边框及导航条
  alwaysOnTop: false,     // 置顶窗口
}

class Windows {
  mainWin: any
  constructor() {
    this.mainWin = null
  }

  getWin(label: any) {
    return WebviewWindow.getByLabel(label)
  }

  // 获取全部窗口
  getAllWin() {
    return getAll()
  }

  // 创建新窗口
  async createWin(config: any) {
    const args = Object.assign({}, windowConfig, config)
    const existWin = getAll().find(w => w.label == args.label)
    if(existWin) {
      if(existWin.label.indexOf('main') == -1) {
        await existWin?.unminimize()
        await existWin?.setFocus()
        return
      }
      await existWin?.close()
    }

    // 创建窗口对象
    let win = new WebviewWindow(args.label, args)
    if(args.maximized && args.resizable) {
      win.maximize()
    }
    // 窗口创建完毕/失败
    win.once('tauri://created', async (e) => {
      console.log('window create success!')
    })
    win.once('tauri://error', async(e) => {
      console.log('window create error!', e)
    })
    
  }

  // 开启主进程监听事件
  async listen() {
    // 创建新窗体
    await listen('win-create', (event: any) => {
      console.log(event)
      this.createWin(JSON.parse(event.payload))
    })
    // 显示窗体
    await listen('win-show',  async(event: any) => {
      if(appWindow.label.indexOf('main') == -1) return
      await appWindow.show()
      await appWindow.unminimize()
      await appWindow.setFocus()
    })

    // 隐藏窗体
    await listen('win-hide', async (event: any) => {
      if(appWindow.label.indexOf('main') == -1) return
      await appWindow.hide()
    })

    // 退出应用
    await listen('win-exit', async (event: any) => {
      setWin('logout')
      await exit()
    })

    // 重启应用
    await listen('win-relaunch', async (event: any) => {
      await relaunch()
    })

    // 主/渲染进程传参
    await listen('win-setdata', async(event: any) => {
      await emit('win-postdata', JSON.parse(event.payload))
    })
  }
}

export default Windows
