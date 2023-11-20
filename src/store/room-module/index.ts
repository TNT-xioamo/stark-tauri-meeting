
export type IZoomInfo = {
  mediaState?: {
    isVideo?:  boolean
    isAudio?: boolean,
  }
}

export interface IZoomStore {
  zoomInfo: IZoomInfo
  SET_ZOOM_INFO: (systemInfo: IZoomInfo) => void,
  SET_MEDIA_STATE: (systemInfo: object) => void
}


const roomStore= (): IZoomStore => {
  return {
    zoomInfo: {
      mediaState: {
        isVideo: true,
        isAudio: true,
      }
    },
    SET_ZOOM_INFO: function (value: IZoomInfo) {
      this.zoomInfo = { ...this.zoomInfo, ...value }
    },
    SET_MEDIA_STATE: function (value: object) {
      this.zoomInfo.mediaState = { ...this.zoomInfo?.mediaState, ...value }
    }
  }
}

export default roomStore
