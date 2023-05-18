<template>
    <div>
      <UserNavBar/>
      <UserSousNavBar :navItems="navItems"/>
      <div class="container mt-4">
        <nav></nav>
        <div>Salle de classe disponibles actuellement </div>
        <div>Salle de classe occupes actuellement</div>
        <div>Identifiant & Indication de chaque salle de classe</div>
      </div>
    </div>
</template>
  
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
import UserNavBar from '../../components/UserNavBar.vue';
import UserSousNavBar from '../../components/UserSousNavBar.vue'

@Options({
  components: {
    UserNavBar,
    UserSousNavBar,
  },
})
export default class ClassesPage extends Vue {
  //Methode
  // Données du composant
  private navItems = [
    { id: 1, label: 'Plan', route: '#' },
    { id: 2, label: 'Salles', route: '#' },
    { id: 3, label: 'Ajouté un nouveau salle', route: '#' },
    // Autres éléments spécifiques à cette page avec des identifiants différents
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
  