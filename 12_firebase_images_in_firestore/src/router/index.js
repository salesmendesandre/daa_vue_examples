import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/showImages',
    name: 'Ver Imágenes Subidas',
    component: () => import('../views/ShowImages.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
