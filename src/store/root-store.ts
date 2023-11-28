import systemStore, { ISystemStore } from './system-module'
import roomStore, { IZoomStore } from './room-module'
import userStore, { IUserStore } from './user-module'

export interface IStore {
  systemStore: ISystemStore,
  roomStore: IZoomStore,
  userStore: IUserStore
}

export default function createStore(initialValue: any): () => IStore{

  return () => {
    return {
      systemStore: { ...systemStore(), ...initialValue?.systemStore },
      roomStore: { ...roomStore(), ...initialValue?.roomStore },
      userStore: { ...userStore(), ...initialValue?.userStore }
    }
  }
}
