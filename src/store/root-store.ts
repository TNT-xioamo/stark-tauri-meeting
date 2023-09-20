import systemStore, { ISystemStore } from './system-module'

export interface IStore {
  systemStore: ISystemStore
}

export default function createStore(initialValue: any): () => IStore{

  return () => {
    return {
      systemStore: { ...systemStore(), ...initialValue?.systemStore }
    }
  }
}
