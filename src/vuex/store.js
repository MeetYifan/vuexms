// 引入 vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 引入 axios
import axios from 'axios'

// 注册 vue
Vue.use(Vuex)

// 状态
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo')),
  userList: []
}

// mutations 用于操作 state
const mutations = {
  // 保存用户数据
  SAVE_USERINFO (state, userinfo) {

    // 把用户数据放到本地存储实现持久化
    localStorage.setItem('userinfo', JSON.stringify(userinfo))

    state.userinfo = userinfo
    console.log('赋值后的用户信息：' , state.userinfo)
  },
  // 获取全局的用户数据
  GET_USERLIST (state, userList) {
    state.userList = userList
  }
}

// 定义 actions 异步的主要是 commit mutations，由 mutations 来改变状态
const actions = {
  GET_USERLIST({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getuserlist').then(response => {
        // console.log('获取用户数据列表', response.data)
        commit('GET_USERLIST', response.data)
        resolve()
      })
    })
  }
}

// 定义全局共享属性 getter
const getters = {
  vipUsers: state => state.userList.filter(v => v.age > 20)
}

// 创建 store 仓库暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})