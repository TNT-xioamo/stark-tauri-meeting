
export type IZoomInfo = {
  mediaState?: {
    isVideo?:  boolean
    isAudio?: boolean,
    isShare?: boolean
  }
}

export interface IZoomStore {
  zoomInfo: IZoomInfo
  SET_ZOOM_INFO: (zoomInfo: IZoomInfo) => void,
  SET_MEDIA_STATE: (zoomInfo: object) => void
}


const roomStore= (): IZoomStore => {
  return {
    zoomInfo: {
      mediaState: {
        isVideo: true,
        isAudio: true,
        isShare: false,
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
