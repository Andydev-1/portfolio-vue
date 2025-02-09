<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <header>
    <button @click="count++" class="bg-blue-500 text-white p-2 rounded-md">Click me</button>
    <p>Count is {{ count }}</p>
  </header>
</template>
