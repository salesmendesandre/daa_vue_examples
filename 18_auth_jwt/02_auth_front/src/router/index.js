import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
  {
    path: '/panel',
    name: 'panel',
    component: () => import('@/views/Panel.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: { requiresGuest: true }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()

  if (!userStore.currentUser && userStore.isAuthenticated) {
    try {
      await userStore.fetchProfile()
    } catch (error) {
      // Si el token no es válido, fetchProfile ya limpia la sesión.
    }
  }

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if (to.meta.requiresGuest && userStore.isAuthenticated) {
    return { name: 'panel' }
  }

  return true
})

export { router }
