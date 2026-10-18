import { createRouter, createWebHistory } from 'vue-router'
import UsuarioDetalle from '@/views/UsuarioDetalle.vue'

const routes = [
    { path: '/usuarios/:id', name: 'usuario-detalle', component: UsuarioDetalle, props: true }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ top: 0 }),
})