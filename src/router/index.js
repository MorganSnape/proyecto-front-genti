import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'Categories',
      component: () => import('@/views/CategoriesView.vue')
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: () => import('@/views/AccountsView.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('@/views/SignInView.vue')
    }
  ]
})

export default router
