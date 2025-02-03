import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import DashboardLayout from '../layouts/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard-home',
          component: () => import('../views/Dashboard.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = storeToRefs(useAuthStore())

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ path: '/login' })
  } else if (isAuthenticated.value && to.path === '/login') {
    next({ name: 'dashboard-home' })
  } else {
    next()
  }
})

export default router
