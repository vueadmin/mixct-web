// src/router/routes.js
const demo = () => import('@/views/demo.vue')
const home = () => import('@/views/home.vue')

const layout = () => import('@/layout/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/demo',
    component: layout,
    children: [
      {
        path: '/demo',
        name: 'demo',
        mate: {
          name: '展示',
          icon: 'icon-menu'
        },
        component: demo
      },
      {
        path: '/home',
        name: 'home',
        mate: {
          name: '配置',
          icon: 'setting'
        },
        component: home
      }
    ]
  }
]
export default routes
