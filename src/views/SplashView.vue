<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-700 to-slate-800 flex flex-col items-center justify-center overflow-hidden">
    <div class="relative">
      <!-- Logo container with animation -->
      <div 
        class="relative z-10 transform transition-all duration-1000 ease-out"
        :class="isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
      >
        <div class="bg-gray-100 rounded-md shadow-2xl w-40 h-40">
          <img src="@/assets/img/logo1.png" alt="logo" class="rounded-md w-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => isVisible.value = true, 500);

  setTimeout(() => {
    router.push('/hero');  // Navigates to /hero after 3 seconds
  }, 5000);
});
</script>
