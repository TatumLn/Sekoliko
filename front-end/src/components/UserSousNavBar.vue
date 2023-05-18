<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Contenu de la barre de navigation -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- Liens de navigation -->
        <li v-for="item in navItems" :key="item.id" class="nav-item">
          <router-link :to="item.route" class="nav-link">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserSousNavbar',
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style>
.navbar-nav {
  margin-left: auto;
}

.nav-link {
  padding: 0.5rem 1rem;
  color: #454646;
}
</style>
