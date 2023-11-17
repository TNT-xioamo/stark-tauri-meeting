
export type IZoomInfo = {
  mediaState?: {
    isVideo?:  boolean
    isAudio?: boolean,
  }
}


export interface IZoomStore {
  zoomInfo: IZoomInfo
  setZoomInfoInfo: (systemInfo: IZoomInfo) => void
}


const roomStore= (): IZoomStore => {
  return {
    zoomInfo: {
      mediaState: {
        isVideo: true,
        isAudio: true,
      }
    },
    setZoomInfoInfo: function (value: IZoomInfo) {
      this.zoomInfo = { ...this.zoomInfo, ...value }
    }
  }
}

export default roomStore