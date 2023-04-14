<template>
    <div>
      <UserNavBar/>
      <div class="container mt-4">
        <h1>Bonjour!</h1>
        <p>Voici la page d'accueil.</p>
      </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import UserNavBar from '@/components/UserNavBar.vue';

    export default defineComponent({
      name: 'UserHomePage',
      components: {
      UserNavBar,
    },
    });
</script>
  
<style>
    .navbar-nav {
      width: 100%;
    }
    .nav-link {
      padding: 1rem;
    }
</style>
  