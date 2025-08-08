<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-white p-6">
    <!-- Logo -->
    <div class="flex flex-col items-center">
      <div class="w-23 h-23 rounded-full bg-gray-500 p-5">
      <img src="@/assets/img/logo1.png" alt="Turbo Receipt Logo" class="w-13 h-13 rounded-md shadow-md bg-white">
      </div>
      <h1 class="text-3xl font-bold mt-4">Turbo Receipt</h1>
      <p class="text-gray-300 mt-2 text-center px-4">Manage your receipts efficiently and keep track of your transactions.</p>
    </div>

    <!-- Buttons -->
    <div class="mt-8 space-y-4 w-full max-w-xs">
      <button 
        @click="goToSignIn"
        class="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-bold transition-all duration-300"
      >
        Get Started
      </button>

      <p class="text-center text-gray-300 text-sm">
        Don't have an account? 
        <a href="/signup"><span class="text-teal-400 hover:underline">Sign up</span></a>
      </p>
      <p class="text-center text-teal-400 text-sm hover:underline">privacy policy</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToSignIn() {
  router.push('/signin');
}
</script>
