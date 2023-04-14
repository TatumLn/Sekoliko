<template>
  <!--Bar de navigation (NavBar)-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light flex-column">
      <!--Titre-->
    <a class="navbar-brand" href="#">Sekoliko</a>
    <!--Logo sekoliko-->
    <img src="../assets/sekoliko.png" alt="" height="50">
    <!--Bouton responsive-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <!--Page d'accueil Utilisateur-->
        <li class="nav-item active">
          <router-link to="/home" class="nav-link">Accueil</router-link>
        </li>
        <!--Gestion des Classes-->
        <li class="nav-item">
          <router-link to="#" class="nav-link">Classes</router-link>
        </li>
        <!--Gestion des Eleves-->
        <li class="nav-item">
          <router-link to="#" class="nav-link">Eleves</router-link>
        </li>
        <!--Gestion des Enseignants-->
        <li class="nav-item">
          <router-link to="#" class="nav-link">Enseignants</router-link>
        </li>
        <!--Gestion des cours-->
        <li class="nav-item">
          <router-link to="#" class="nav-link">Cours</router-link>
        </li>
        <!--Gestion des Emplois du temps-->
        <li class="nav-item">
          <router-link to="#" class="nav-link">EDT</router-link>
        </li>
      
        <ul class="navbar-nav ml-auto ">
           <!--Notifications-->
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-bell"></i>
          </a>
        </li>
          <li class="nav-item">
            <!-- Déconnection-->
            <button class="btn btn-outline-danger my-2 my-sm-0">Se Déconnecter</button>
          </li>
        </ul>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
      //Nom du composant
      name: 'UserNavBar',
    });
</script>

<style>
    .navbar-nav {
      width: 100%;
    }
    .nav-link {
      padding: 1rem;
    }
</style>