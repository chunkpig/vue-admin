import {getStorage,setStorage} from '@/utils/sessionStorage'
const state ={
    opened:getStorage('SIDEBAR_OPENED')?JSON.parse(getStorage('SIDEBAR_OPENED')):false
}
const mutations={
    TOGGLE_SIDEBAR:state=>{
        state.opened =!state.opened
        setStorage('SIDEBAR_OPENED',state.opened)
    }
}
const actions={
    togglesidebar({commit}){
        commit('TOGGLE_SIDEBAR')
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}