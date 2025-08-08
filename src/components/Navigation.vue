<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l.94 3.76A2 2 0 006.88 12h4.24a2 2 0 001.94-1.24L14 8h3a1 1 0 001-1V6a1 1 0 00-1-1H3z"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">AutoLux</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link 
              to="/cars" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-blue-600': $route.path === '/cars' }"
            >
              Browse Cars
            </router-link>
            <router-link 
              to="/featured" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-blue-600': $route.path === '/featured' }"
            >
              Featured
            </router-link>
            <router-link 
              to="/about" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-blue-600': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link 
              to="/contact" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-blue-600': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </div>
        </div>

        <!-- Right side icons -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <button 
            @click="toggleSearch" 
            class="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- Cart -->
          <router-link 
            to="/cart" 
            class="relative text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"/>
            </svg>
            <span 
              v-if="cartStore.totalItems > 0" 
              class="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </router-link>

          <!-- Mobile menu button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <router-link 
            to="/cars" 
            class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            Browse Cars
          </router-link>
          <router-link 
            to="/featured" 
            class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            Featured
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            Contact
          </router-link>
        </div>
      </div>

      <!-- Search Bar -->
      <div 
        v-if="showSearch" 
        class="border-t border-gray-200 p-4"
        @click.self="closeSearch"
      >
        <div class="max-w-md mx-auto">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search for cars, brands, models..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              @keydown.enter="performSearch"
            >
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { cartStore } from '@/stores/cart';

export default {
  name: 'Navigation',
  setup() {
    const router = useRouter();
    const showMobileMenu = ref(false);
    const showSearch = ref(false);
    const searchQuery = ref('');

    const toggleMobileMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };

    const closeMobileMenu = () => {
      showMobileMenu.value = false;
    };

    const toggleSearch = () => {
      showSearch.value = !showSearch.value;
      if (showSearch.value) {
        setTimeout(() => {
          const input = document.querySelector('input[type="text"]');
          if (input) input.focus();
        }, 100);
      }
    };

    const closeSearch = () => {
      showSearch.value = false;
      searchQuery.value = '';
    };

    const performSearch = () => {
      if (searchQuery.value.trim()) {
        router.push(`/cars?search=${encodeURIComponent(searchQuery.value)}`);
        closeSearch();
      }
    };

    return {
      cartStore,
      showMobileMenu,
      showSearch,
      searchQuery,
      toggleMobileMenu,
      closeMobileMenu,
      toggleSearch,
      closeSearch,
      performSearch
    };
  }
};
</script>