<template>
    <!--Bar de navigation (NavBar)-->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- Tableau de Bord Admin-->
            <router-link to="/AdminHome" class="nav-link">Tableau de Bord</router-link>
          </li>
          <li class="nav-item">
             <!-- Infos sur les Admin-->
            <router-link to="/AdminList" class="nav-link">Les Administrateurs</router-link>
          </li>
          <li class="nav-item">
            <!-- Ajout d'utilisateur-->
            <router-link to="/AdminAddUser" class="nav-link">Ajout d'Utilisateur</router-link>
          </li>
          <li class="nav-item">
            <!-- Ajout administrateur-->
            <router-link to="/AdminSignup" class="nav-link">Ajout d'Administrateurs</router-link>
          </li>
          <li class="nav-item">
            <!-- Parametres-->
            <router-link to="/AdminAcompte" class="nav-link">Mon Compte</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <!-- Photo de profil -->
            <router-link to="#" class="nav-link">
              <img src="" class="pdp" alt="Photo de profil">
            </router-link>
          </li>
          <li class="nav-item">
            <!-- Déconnection-->
            <button class="btn btn-outline-danger my-2 my-sm-0">Se Déconnecter</button>
          </li>
        </ul>
      </div>
    </div>
    </nav>
</template>
  
<script lang="ts">
      import { defineComponent } from 'vue';
      
      export default defineComponent({
        //Nom du composant
        name: 'AdminNavBar',
      });
</script>
  
<style>
      .navbar-nav {
        width: 100%;
      }
      .nav-link {
        padding: 1rem;
      }
      .pdp {
        border: 2px solid red;
      }
</style>