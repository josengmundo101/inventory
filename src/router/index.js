import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import AppLayout from '@/components/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/admin',
      component: AppLayout,
      meta: { requiresAuth: true, role: 'admin' }, // Restrict to admin only
      children: [{ path: 'dashboard', name: 'dashboard', component: DashboardView }],
    },
  ],
})

export default router
