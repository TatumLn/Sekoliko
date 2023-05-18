<template>
    <div>
      <AdminNavBar/>
      <div class="container mt-4">
        <h1>Bonjour!</h1>
        <p>Voici la page d'accueil des administrateurs.</p>
        <div>Nombre d'administrateurs de sekoliko</div>
        <div>Nombre d'utilisateurs de sekoliko</div>
        <div>Nombre d'eleve actuel de l'ecole </div>
        <div>Nombre de professeurs actuel de l'ecole</div>
        <div>Nombre de classe disponible dans l'ecole</div>
      </div>
    </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AdminNavBar from '@/components/AdminNavBar.vue';

@Options({
  components: {
    AdminNavBar,
  },
})
export default class AdminHomePage extends Vue {
  //Nom du composant
  name = 'AdminHomePage';
}

</script>
  
<style>

</style>
  