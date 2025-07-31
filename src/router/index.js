import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import AppLayout from '@/components/AppLayout.vue'
import ProductView from '@/views/Product/ProductView.vue'
import AddProduct from '@/views/Product/component/AddProduct.vue'
import ViewProduct from '@/views/Product/component/ViewProduct.vue'
import EditProduct from '@/views/Product/component/EditProduct.vue'
import CategoryPage from '@/views/Categories/CategoryPage.vue'
import AddCategory from '@/views/Categories/components/AddCategory.vue'
import ViewCategory from '@/views/Categories/components/ViewCategory.vue'
import EditCategory from '@/views/Categories/components/EditCategory.vue'
import SalesPage from '@/views/Sales/SalesPage.vue'

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
      children: [
        { path: 'dashboard', name: 'dashboard', component: DashboardView },
        // Product routes
        { path: 'products', name: 'products', component: ProductView },
        { path: 'products/add', name: 'add-products', component: AddProduct },
        { path: 'products/view', name: 'view-products', component: ViewProduct },
        { path: 'products/edit', name: 'edit-products', component: EditProduct },
        // Category routes
        { path: 'categories', name: 'categories', component: CategoryPage },
        { path: 'categories/add', name: 'add-categories', component: AddCategory },
        { path: 'categories/view', name: 'view-categories', component: ViewCategory },
        { path: 'categories/edit', name: 'edit-categories', component: EditCategory },
        // Sales routes
        { path: 'sales', name: 'sales', component: SalesPage },
        { path: 'sales/add', name: 'add-sales', component: SalesPage },
      ],
    },
  ],
})

export default router
