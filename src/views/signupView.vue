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
      <h2 class="text-center text-white text-2xl font-bold mt-4">Create an Account</h2>
      <p class="text-center text-gray-300 text-sm">Sign up to start managing your receipts</p>

      <!-- Signup Form -->
      <form @submit.prevent="signup" class="mt-6 space-y-4">
        <!-- Email -->
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

        <!-- Password -->
        <div>
          <label for="password" class="block text-gray-300">Password</label>
          <input 
            id="password" 
            v-model="password"
            type="password" 
            placeholder="Create a password"
            class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block text-gray-300">Confirm Password</label>
          <input 
            id="confirmPassword" 
            v-model="confirmPassword"
            type="password" 
            placeholder="Confirm your password"
            class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <p v-if="passwordMismatch" class="text-red-400 text-sm mt-1">Passwords do not match</p>
        </div>

        <!-- Signup Button -->
        <button 
          type="submit"
          class="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-bold transition-all duration-300"
        >
          Sign Up
        </button>
      </form>

      <!-- Links -->
      <div class="text-center mt-4 text-gray-300 text-sm">
        <p>Already have an account? <a href="/signin" class="text-teal-400 hover:underline">Log in</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Computed property to check if passwords match
const passwordMismatch = computed(() => password.value !== confirmPassword.value && confirmPassword.value.length > 0);

function signup() {
  if (passwordMismatch.value) {
    console.log("Passwords do not match!");
    return;
  }
  console.log("Signing up with:", email.value, password.value);
  // Add signup logic here (e.g., Firebase, Supabase, or API)
}
</script>
