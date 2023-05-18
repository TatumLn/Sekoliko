<template>
    <div>
      <UserNavBar/>
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

@Options({
  components: {
    UserNavBar,
  },
})
export default class ClassesPage extends Vue {
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
  