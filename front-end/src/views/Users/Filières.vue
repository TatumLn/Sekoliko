<template>
    <div>
      <UserNavBar/>
      <div class="container mt-4">
        <nav></nav>
        <div>Listes des cours de chaques filières</div>
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
export default class FilieresPage extends Vue {
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
  