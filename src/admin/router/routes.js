import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Pages/About')
  },
  {
    path: '/works',
    component: () => import('../components/Pages/Works')
  },
  {
    path: '/reviews',
    component: () => import('../components/Pages/Reviews')
  },
  {
    path: '/login',
    component: () => import('../components/Pages/Login')
  }
]

export default new VueRouter({routes})