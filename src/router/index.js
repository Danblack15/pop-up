import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage'

const routes = [
  {
    path: '/pop-up',
    name: 'home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
