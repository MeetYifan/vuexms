import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// import login from '@/components/login'
// import index from '@/components/index'

// 异步加载
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const home = () => import('@/components/home')
const userlist = () => import('@/components/userlist')
const useradd = () => import('@/components/useradd')
const passwordedit = () => import('@/components/passwordedit')

// 注册路由
Vue.use(Router)

// 导出路由
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },        
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/useradd',
          name: 'useradd',
          component: useradd
        },
        {
          path: '/passwordedit',
          name: 'passwordedit',
          component: passwordedit
        },
      ]
    }
  ]
})
