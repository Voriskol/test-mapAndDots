<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'
</script>

<template>
  <v-layout class="rounded-md">
    <NavigationDrawer />
    <AppHeader />
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>
