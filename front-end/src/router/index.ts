import { createRouter, createWebHistory } from 'vue-router'
//import des composants utilisateurs
import LoginPage from '@/views/Login.vue'
import UserHomePage from '@/views/Users/UserHome.vue'
//import des composants admin
import AdminSignupPage from '@/views/Admin/AdminSignUp.vue'
import AdminHomePage from '@/views/Admin/AdminHome.vue'
import AdminAddUserPage from '@/views/Admin/AdminAddUser.vue'

//
const routes = [
  //Pour les Admin
  {
    //
    path: '/AdminHome',
    name: 'Adminhome',
    component: AdminHomePage
  },
  {
    //
    path: '/AdminSignup',
    name: 'Adminsignup',
    component: AdminSignupPage
  },
  {
    //
    path: '/AdminAddUser',
    name: 'Adminadduser',
    component: AdminAddUserPage
  },
  //Pour Les Utilisateurs
  {
    //
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    //
    path: '/home',
    name: 'home',
    component: UserHomePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
