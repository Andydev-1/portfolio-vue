<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-700 to-slate-800 flex flex-col items-center justify-center overflow-hidden">
    <div class="relative">
      <!-- Logo container with animation -->
      <div 
        class="relative z-10 transform transition-all duration-1000 ease-out"
        :class="isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
      >
        <div class="bg-gray-100 rounded-md shadow-2xl w-40 h-40">
          <Zap 
            :size="80" 
            class="text-teal-500 animate-pulse"
            :stroke-width="2"
          />
          <img src="@/assets/img/logo1.png" alt="logo" srcset="" class="rounded-md w-full">
        </div>
        
        <!-- Animated rings -->
       
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';


const isVisible = ref(false);
const isTextVisible = ref(false);

onMounted(() => {
  // Trigger logo animation on mount
  setTimeout(() => isVisible.value = true, 300);
  
  // Trigger text animation after logo animation
  setTimeout(() => isTextVisible.value = true, 1200);
});
</script>