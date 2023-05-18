<template>
      <div>
      <AdminNavBar/>
      <div class="container mt-4">
        <h1>Liste des administrateurs de sekoliko</h1>
        <!--NavBar Verticale-->
        <nav>
            
        </nav>
        <div><!--la liste s'affiche ici--></div>
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

export default class AdminListPage extends Vue {
  //Nom du composant
  name = 'AdminListPage';
}
</script>

<style>

</style>