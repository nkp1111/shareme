export const fetchUser = () => {
  let userInfoStr = localStorage.getItem("user")
  const userInfo = userInfoStr !== undefined ? JSON.parse(userInfoStr) : localStorage.clear()
  return userInfo
}