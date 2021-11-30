import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Clientes',
    name: 'Cliente',
    component: () => import( '../views/Cliente.vue')
  },
  {
    path: '/cpu',
    name: 'Cpu',
    component: () => import( '../views/Cpu.vue')
  },
  {
    path: '/drive',
    name: 'Drive',
    component: () => import( '../views/Drive.vue')
  },
  {
    path: '/memoria',
    name: 'Memoria',
    component: () => import( '../views/Memoria.vue')
  },
  {
    path: '/netstat',
    name: 'Netstat',
    component: () => import( '../views/Netstat.vue')
  },
  {
    path: '/os',
    name: 'Os',
    component: () => import( '../views/Os.vue')
  },
 
 
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
