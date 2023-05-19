<template>
    <div>
      <UserNavBar/>
      <UserSousNavBar :navItems="navItems"/>
      <div class="container mt-4">
        <nav></nav>
        <div>Listes des Edt par Filières</div>
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
export default class EdtPage extends Vue {
  //Methode
  private navItems = [
    { id: 1, label: 'Edt', route: '#' },
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
  