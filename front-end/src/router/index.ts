import { createRouter, createWebHistory } from 'vue-router'
//import des composants côté utilisateurs
import LoginPage from '@/views/Login.vue'
import UserHomePage from '@/views/Users/UserHome.vue'
import ClassesPage from '@/views/Users/Classes.vue'
//import des composants côté admin
import AdminSignupPage from '@/views/Admin/AdminSignUp.vue'
import AdminHomePage from '@/views/Admin/AdminHome.vue'
import AdminAddUserPage from '@/views/Admin/AdminAddUser.vue'
import AdminListPage from '@/views/Admin/AdminList.vue'
import AdminAcomptePage from '@/views/Admin/AdminAcompte.vue'

//
const routes = [
  //Pour les Admin
  {
    //Accueil Admin
    path: '/AdminHome',
    name: 'Adminhome',
    component: AdminHomePage
  },
  {
    //Ajout Admin
    path: '/AdminSignup',
    name: 'Adminsignup',
    component: AdminSignupPage
  },
  {
    //Ajout User par Admin
    path: '/AdminAddUser',
    name: 'Adminadduser',
    component: AdminAddUserPage
  },
  {
    //Affiche la liste des Admin
    path: '/AdminList',
    name: 'Adminlist',
    component: AdminListPage
  },
  {
    //Parametre de compte
    path: '/AdminAcompte',
    name: 'Adminacompte',
    component: AdminAcomptePage
  },

  //Pour Les Utilisateurs
  {
    //Login Admin&User
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    //Accueil User
    path: '/home',
    name: 'home',
    component: UserHomePage
  },
  {
    //Accueil User
    path: '/classes',
    name: 'classes',
    component: ClassesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
