// 引入 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 注册 vue
Vue.use(Vuex)

// 状态
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo'))
}
// mutations 用于操作 state
const mutations = {
  // 保存用户数据
  SAVE_USERINFO (state, userinfo) {

    // 把用户数据放到本地存储实现持久化
    localStorage.setItem('userinfo', JSON.stringify(userinfo))

    state.userinfo = userinfo
    console.log('赋值后的用户信息：' , state.userinfo)
  }
}

// 创建 store 仓库暴露出去
export default new Vuex.Store({
  state,
  mutations
})