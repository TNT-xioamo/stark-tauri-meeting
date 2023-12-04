export interface zoomContainerStore {
  zoomName?: String | undefined,
  zoomId?: String | undefined,
  zoomType?: String | undefined,
  zoomCreate?: Boolean,
  zoomDestroyed?: boolean
}

export interface zoomMediaState {
  isVideo?:  boolean
  isAudio?: boolean
  isShare?: boolean
}

export interface IZoomInfo {
  zoomContainer?: zoomContainerStore
  mediaState?: zoomMediaState
}
export interface IZoomStore {
  zoomInfo: IZoomInfo
  SET_ZOOM_INFO: (zoomInfo: IZoomInfo) => void
  SET_MEDIA_STATE: (zoomInfo: object) => void
  SET_ZOOM_CONTAINER: (zoomContainer: zoomContainerStore) => void
}


const roomStore= (): IZoomStore => {
  return {
    zoomInfo: {
      mediaState: {
        isVideo: true,
        isAudio: true,
        isShare: false,
      },
      zoomContainer: {
        zoomCreate: false,
        zoomDestroyed: false
      }
    },
    SET_ZOOM_INFO: function (value: IZoomInfo) {
      this.zoomInfo = { ...this.zoomInfo, ...value }
    },
    SET_MEDIA_STATE: function (value: object) {
      this.zoomInfo.mediaState = { ...this.zoomInfo?.mediaState, ...value }
    },
    SET_ZOOM_CONTAINER: function (value: zoomContainerStore) {
      this.zoomInfo.zoomContainer = { ...this.zoomInfo.zoomContainer, ...value }
    }
  }
}

export default roomStore
