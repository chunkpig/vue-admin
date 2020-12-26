const getters = {
    token: state => state.user.token,
    sidebar: state => state.setting.opened
}
export default getters