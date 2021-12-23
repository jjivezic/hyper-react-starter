export const localStorageService = {
  destroy(type) {
    localStorage.removeItem(type)
  },

  set(type, data) {
    localStorage.setItem(type, JSON.stringify(data))
  },
  get(type) {
    const data = localStorage.getItem(type)
    if (!data) return null
    const res = JSON.parse(data)
    return res
  },
  getSessionToken() {
    const data = localStorage.getItem('user')
    if (!data) return null
    const session = JSON.parse(data)
    return session && session.token ? session.token : null
  },
  getSessionRefreshToken() {
    const data = localStorage.getItem('user')
    if (!data) return null
    const session = JSON.parse(data)
    return session && session.refreshToken ? session.refreshToken : null
  },
  isAuth() {
    const data = localStorage.getItem('user')
    if (!data) {
      return false
    } else {
      const session = JSON.parse(data)
      return session
    }
  }
}
