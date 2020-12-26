import { login, logout, getInfo } from '@/api/user'
import { getStorage, setStorage, removeToken } from '@/utils/sessionStorage'
// import { reject, resolve } from 'core-js/fn/promise'
import baserouter from '@/router/modules/base'

const state = {
    token: getStorage(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
}

const mutations={
    SET_TOKEN: (state, token) => {
        state.token = token
    },
}

const actions={
    login({},userInfo){
        const {username,password}=userInfo
        return new Promise((resolve,reject)=>{
            login({ username: username.trim(), password: password }).then(res=>{
                // console.log(res)
                setStorage('baserouter',baserouter)
                resolve()
            })
            
        })
    },
    logout(){
        return new Promise((resolve,reject)=>{
            
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}