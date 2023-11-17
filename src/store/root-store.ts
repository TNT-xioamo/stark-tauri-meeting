import systemStore, { ISystemStore } from './system-module'
import roomStore, { IZoomStore } from './room-module'

export interface IStore {
  systemStore: ISystemStore,
  roomStore: IZoomStore
}

export default function createStore(initialValue: any): () => IStore{

  return () => {
    return {
      systemStore: { ...systemStore(), ...initialValue?.systemStore },
      roomStore: { ...roomStore(), ...initialValue?.roomStore }
    }
  }
}
