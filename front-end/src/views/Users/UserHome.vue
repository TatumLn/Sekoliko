<template>
    <div>
      <UserNavBar/>
      <div class="container mt-4">
        <h1>Bonjour!</h1>
        <div>Nombre d'eleve actuel de l'ecole </div>
        <div>Nombre de professeurs actuel de l'ecole</div>
        <div>Nombre de classe disponible dans l'ecole</div>
        <div>Nombres de filières dans l'ecole</div>
      </div>
    </div>
</template>
  
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
import UserNavBar from '../../components/UserNavBar.vue';

@Options({
  components: {
    UserNavBar,
  },
})
export default class UserHomePage extends Vue {
  //Methode
}
</script>
  
<style>
    .navbar-nav {
      width: 100%;
    }
    .nav-link {
      padding: 1rem;
    }
</style>
  