import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'about',
      children: [
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/About/Index')
        },
        {
          path: 'note',
          component: () => import('@/views/Note/Index'),
          children: [
            {
              path: '',
              component: () => import('@/views/Note/components/NoteList')
            },
            {
              path: ':id',
              component: () => import('@/views/Note/components/NoteContent')
            }
          ]
        },
        {
          path: 'goal',
          name: 'LearnList',
          component: () => import('@/views/LearnList/Index'),
          meta: { title: '目標' }
        }
      ]
    }
  ]
})
