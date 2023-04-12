<template>
  <!--Bar de navigation (NavBar)-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light flex-column">
    <!--Titre-->
  <a class="navbar-brand" href="#">Sekoliko</a>
  <!--Logo-->
  <img src="../assets/sekoliko.png" alt="" height="50">
  <!--Bouton responsive-->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <!--Dashboard-->
      <li class="nav-item active">
        <router-link to="/home" class="nav-link">Dashboard</router-link>
      </li>
      <!---->
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Classes</router-link>
      </li>
      <!---->
      <li class="nav-item">
        <router-link to="/eleves" class="nav-link">Eleves</router-link>
      </li>
      <!---->
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Enseignants</router-link>
      </li>
      <!---->
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Cours</router-link>
      </li>
      <!---->
      <li class="nav-item">
        <router-link to="/about" class="nav-link">Emplois-du-temps</router-link>
      </li>
      <!--Notifications-->
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-bell"></i>
        </a>
        <!--Dennexion-->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  //Nom du composant
  name: 'NavBar',
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