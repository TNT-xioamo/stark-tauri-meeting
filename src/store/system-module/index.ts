export type ISystemInfo = {
  theme?: {
    page?: {top: string, bottom: string},
    sider?: {top: string, bottom: string},
  },
  
}

export interface ISystemStore {
  systemInfo: ISystemInfo
  setSystemInfo: (systemInfo: ISystemInfo) => void
}

const systemStore= (): ISystemStore => {
  return {
    systemInfo: {
      theme: {
        page: {top: '#835F99', bottom: '#2F3264' },
        sider: {top: '#a787b6', bottom: '#5d5e8f' },
      }
    },
    setSystemInfo: function (value: ISystemInfo) {
      this.systemInfo = { ...this.systemInfo, ...value }
    }
  }
}

export default systemStore