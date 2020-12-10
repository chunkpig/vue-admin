/**
 * 获取localStorage
 *
 */
export function getStorage(key) {
    return window.sessionStorage.getItem(key)
  }
  
  /**
   * 设置localStorage
   * @param key string,token
   */
  export function setStorage(key, token) {
    return window.sessionStorage.setItem(key, token)
  }
  
  /**
   * 清除localStorage
   * @param key string
   */
  export function removeStorage(key) {
    return window.sessionStorage.removeItem(key)
  }
  
  /**
   * 清除所有localStorage
   */
  
  export function clearStorage() {
    return window.sessionStorage.clear()
  }