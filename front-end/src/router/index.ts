import { createRouter, createWebHistory } from 'vue-router'
//
import LoginPage from '@/views/Login.vue'
import SignupPage from '@/views/SignUp.vue'
import HomePage from '@/views/Home.vue'

//
const routes = [
  {
    //
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    //
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    //
    path: '/home',
    name: 'home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
