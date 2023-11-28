export interface IUserInfoStore {
  user_mac?: String | undefined
}

export interface IUseZoomStore {
  role?: String,
  zoomState?: String,
  zoomToken?: String,
  zoomTerminal?: String,
}

export interface IUserStore {
  userInfo: IUserInfoStore,
  userZoom: IUseZoomStore,
  SET_USER_INFO: (userZoom: IUserInfoStore) => void,
  SET_USER_ZOOM: (userZoom: IUseZoomStore) => void,
}

const userStore= (): IUserStore => {
  return {
    userInfo: {},
    userZoom: {},
    SET_USER_INFO: function(value: IUserInfoStore) {
      this.userInfo = { ...this.userInfo, ...value }
    },
    SET_USER_ZOOM: function(value: IUseZoomStore) {}
  }
}

export default userStore