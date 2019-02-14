import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      redirect: '/about',
      name: 'MainPage',
      children: [
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/About/Index'),
          meta: { title: '關於' }
        },
        {
          path: '/note',
          name: 'Note',
          component: () => import('@/views/Note/Index'),
          meta: { title: '筆記' }
        },
        {
          path: '/goal',
          name: 'LearnList',
          component: () => import('@/views/LearnList/Index'),
          meta: { title: '目標' }
        }
      ]
    }
  ]
})
