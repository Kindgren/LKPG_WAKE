import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import BookingPage from './pages/BookingPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import QueuePage from './pages/QueuePage.vue'
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/booking', component: BookingPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/queue', component: QueuePage },


]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
