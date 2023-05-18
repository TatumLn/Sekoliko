<template>
      <div>
      <AdminNavBar/>
      <div class="container mt-4">
        <div>
            <p>Changer ma photo de profil</p>
            <p>Changer mon mot de passe?</p>
            <p>Changer mon nom</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AdminNavBar from '../../components/AdminNavBar.vue';
@Options({
  components: {
    AdminNavBar,
  },
})

export default class AdminAcomptePage extends Vue {
  //Nom du composant
  name = 'AdminAcomptePage';
}
</script>

<style>

</style>