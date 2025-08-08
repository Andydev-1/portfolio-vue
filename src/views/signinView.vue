<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 p-4">
    <div class="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6">
      <!-- Logo -->
      <div class="flex justify-center">
       <div class="w-23 h-23 rounded-full bg-gray-500 p-5">
      <img src="@/assets/img/logo1.png" alt="Turbo Receipt Logo" class="w-13 h-13 rounded-md shadow-md bg-white">
      </div>
      </div>

      <!-- Title -->
      <h2 class="text-center text-white text-2xl font-bold mt-4">Welcome to Turbo Receipt</h2>
      <p class="text-center text-gray-300 text-sm">Log in to manage your receipts</p>

      <!-- Login Form -->
      <form @submit.prevent="login" class="mt-6 space-y-4">
        <div>
          <label for="email" class="block text-gray-300">Email</label>
          <input 
            id="email" 
            v-model="email"
            type="email" 
            placeholder="Enter your email"
            class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-gray-300">Password</label>
          <input 
            id="password" 
            v-model="password"
            type="password" 
            placeholder="Enter your password"
            class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <button 
          type="submit"
          class="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-bold transition-all duration-300"
        >
          Log In
        </button>
      </form>

      <!-- Links -->
      <div class="text-center mt-4 text-gray-300 text-sm">
        <p>Don't have an account? <a href="/signup" class="text-teal-400 hover:underline">Sign up</a></p>
        <p class="mt-2"><a href="#" class="text-teal-400 hover:underline">Forgot password?</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

function login() {
  console.log("Logging in with:", email.value, password.value);
  // Add authentication logic here
}
</script>
