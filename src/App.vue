<template>
  <router-view />
  <FloatingMenu />
</template>

<script setup>
import FloatingMenu from "./components/FloatingMenu.vue";
// No additional logic needed - router-view handles all routing
</script>

<style scoped>
/* Global styles can go here if needed */
</style>
