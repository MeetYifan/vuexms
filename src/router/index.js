import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import login from '@/components/login'

// 注册路由
Vue.use(Router)

// 导出路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
