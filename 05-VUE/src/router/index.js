import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import paginaCliente from '../views/paginaCliente'
import paginaPastelero from '../views/paginaPastelero'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/paginaCliente',
    name:'paginaCliente',
    component: paginaCliente
  },
  {
    path: '/paginaPastelero',
    name: 'paginaPastelero',
    component: paginaPastelero
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
