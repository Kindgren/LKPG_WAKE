import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import BookingPage from './pages/BookingPage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/booking', component: BookingPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
