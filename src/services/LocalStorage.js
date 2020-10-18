const getItem = (key) => localStorage.getItem(key)
const setItem = (key, val) => localStorage.setItem(key, val)
const removeItem = (key) => localStorage.removeItem(key)

export default {
  getItem,
  setItem,
  removeItem,
}
