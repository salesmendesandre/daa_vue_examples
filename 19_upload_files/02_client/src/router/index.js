import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'UploadImage',
    component: () => import('../views/UploadImage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
