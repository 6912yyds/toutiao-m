import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
// 路由表
const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout/layout.vue'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa/qa.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/video.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/my.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
