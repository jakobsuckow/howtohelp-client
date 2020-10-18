import LocalStorage from "./LocalStorage"

const getFromStorage = (key) => LocalStorage.getItem(key)
const setInStorage = (key, val) => LocalStorage.setItem(key, val)
const removeFromStorage = (key) => LocalStorage.removeItem(key)

const setAuthInStorage = (authData) => {
  setInStorage("accessToken", authData.accessToken)
  setInStorage("refreshToken", authData.refreshToken)
}

const removeAuthFromStorage = () => {
  removeFromStorage("accessToken")
  removeFromStorage("refreshToken")
}

const hasAuthInStorage = () => {
  if (getFromStorage("accessToken") && getFromStorage("refreshToken")) {
    return true
  }
  removeAuthFromStorage()
  return false
}

export default {
  getFromStorage,
  setInStorage,
  removeFromStorage,
  setAuthInStorage,
  removeAuthFromStorage,
  hasAuthInStorage,
}
