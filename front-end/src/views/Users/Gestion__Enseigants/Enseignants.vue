<template>
    <div>
      <UserNavBar/>
      <UserSousNavBar :navItems="navItems"/>
      <div class="container mt-4">
        <nav></nav>
        <div>Listes des Enseignants</div>
        <div>Ajouter une nouveau Enseignant</div>
      </div>
    </div>
</template>
  
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
import UserNavBar from '../../../components/UserNavBar.vue';
import UserSousNavBar from '../../../components/UserSousNavBar.vue';

@Options({
  components: {
    UserNavBar,
    UserSousNavBar,
  },
})
export default class EnseignantsPage extends Vue {
  //Methode
  private navItems = [
    { id: 1, label: 'Liste des Enseignants', route: '#' },
    { id: 3, label: 'Ajouté un nouveau Enseignant', route: '#' },
  ];
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
  