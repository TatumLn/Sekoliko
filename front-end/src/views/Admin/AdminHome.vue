<template>
    <div>
      <AdminNavBar/>
      <div class="container mt-4">
        <h1>Bonjour!</h1>
        <p>Voici la page d'accueil des administrateurs.</p>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import AdminNavBar from '@/components/AdminNavBar.vue';

  export default defineComponent({
    name: 'AdminHomePage',
    components: {
    AdminNavBar,
  },
  });
</script>
  
<style>

</style>
  