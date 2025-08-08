<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <!-- Image Section -->
    <div class="relative">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          :src="car.images[currentImageIndex]" 
          :alt="`${car.brand} ${car.model}`"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          @error="handleImageError"
        >
      </div>
      
      <!-- Image Navigation -->
      <div v-if="car.images.length > 1" class="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div class="flex space-x-1">
          <button 
            v-for="(image, index) in car.images" 
            :key="index"
            @click="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-colors"
            :class="currentImageIndex === index ? 'bg-white' : 'bg-white/50'"
          ></button>
        </div>
      </div>
      
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-col space-y-2">
        <span v-if="car.isFeatured" class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          Featured
        </span>
        <span v-if="car.isElectric" class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          Electric
        </span>
        <span v-if="car.originalPrice > car.price" class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          Sale
        </span>
      </div>
      
      <!-- Heart/Favorite button -->
      <button 
        @click.stop="toggleFavorite"
        class="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
        :class="isFavorite ? 'text-red-500' : 'text-gray-400'"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    
    <!-- Content Section -->
    <div class="p-6">
      <!-- Brand and Model -->
      <div class="flex items-start justify-between mb-2">
        <div>
          <h3 class="text-lg font-bold text-gray-900">{{ car.brand }} {{ car.model }}</h3>
          <p class="text-sm text-gray-600">{{ car.year }} • {{ car.mileage.toLocaleString() }} miles</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-gray-900">${{ car.price.toLocaleString() }}</div>
          <div v-if="car.originalPrice > car.price" class="text-sm text-gray-500 line-through">
            ${{ car.originalPrice.toLocaleString() }}
          </div>
        </div>
      </div>
      
      <!-- Quick Details -->
      <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span class="text-gray-600">{{ car.engine }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
          <span class="text-gray-600">{{ car.mpg }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="text-gray-600">{{ car.location }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-gray-600">{{ car.condition }}</span>
        </div>
      </div>
      
      <!-- Features -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-1">
          <span 
            v-for="(feature, index) in car.features.slice(0, 3)" 
            :key="index"
            class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {{ feature }}
          </span>
          <span v-if="car.features.length > 3" class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            +{{ car.features.length - 3 }} more
          </span>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="flex space-x-2">
        <router-link 
          :to="`/cars/${car.id}`"
          class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium text-center transition-colors"
        >
          View Details
        </router-link>
        <button 
          @click="toggleCart"
          class="flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200"
          :class="isInCart ? 
            'bg-red-500 hover:bg-red-600 text-white' : 
            'bg-blue-600 hover:bg-blue-700 text-white'"
        >
          {{ isInCart ? 'Remove from Cart' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { cartStore } from '@/stores/cart';

export default {
  name: 'CarCard',
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const currentImageIndex = ref(0);
    const isFavorite = ref(false);
    
    const isInCart = computed(() => cartStore.isInCart(props.car.id));
    
    const toggleCart = () => {
      if (isInCart.value) {
        cartStore.removeFromCart(props.car.id);
      } else {
        cartStore.addToCart(props.car);
      }
    };
    
    const toggleFavorite = () => {
      isFavorite.value = !isFavorite.value;
    };
    
    const handleImageError = (event) => {
      event.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=entropy&auto=format';
    };
    
    return {
      currentImageIndex,
      isFavorite,
      isInCart,
      toggleCart,
      toggleFavorite,
      handleImageError
    };
  }
};
</script>