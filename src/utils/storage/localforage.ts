import localForage from 'localforage'

export const getStorage = async (key: string, callback: Function) => {
  try {
    const receipt = await localForage.getItem(key)
    callback && callback(receipt)
  } catch (error) {
    console.error(error)
  }
}

export const setStorage = async (key: string, value: any, callback: Function) => {
  try {
    const receipt = await localForage.setItem(key, value)
    callback && callback(receipt)
  } catch (error) {
    console.error(error)
  }
}

export const removeStorage = async (key: string, callback: Function) => {
  try {
    const receipt = await localForage.removeItem(key)
    callback && callback(receipt)
  } catch (error) {
    console.error(error)
  }
}

export const clearStorage = async (callback: Function) => {
  try {
    const receipt = await localForage.clear()
    callback && callback(receipt)
  } catch (error) {
    console.error(error)
  }
}