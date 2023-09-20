import React, { createContext, useContext, ReactElement } from 'react'

import { useLocalObservable, enableStaticRendering } from 'mobx-react-lite'

import createStore, { IStore } from './root-store'

interface IProps {
  initialValue: Record<any, any>
  children: ReactElement
}

enableStaticRendering(typeof window === 'undefined')

const StoreContext = createContext({})

export const StoreProvider = ({ initialValue, children }: IProps) => {
  const store = useLocalObservable(createStore(initialValue))
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export const useStore = (): IStore => {
  const store: IStore = useContext(StoreContext) as IStore
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}