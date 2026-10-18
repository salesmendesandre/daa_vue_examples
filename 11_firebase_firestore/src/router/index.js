import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  { path: '/items', component: () => import('../views/ItemsList.vue') },
  { path: '/items/add', component: () => import('../views/AddItem.vue') },
  { path: '/items/edit/:id', component: () => import('../views/EditItem.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
