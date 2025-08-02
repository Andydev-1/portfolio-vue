<template>
  <div class="min-h-screen bg-gray-50" v-if="car">
    <!-- Navigation breadcrumb -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex items-center space-x-2 text-sm text-gray-500">
          <router-link to="/cars" class="hover:text-blue-600 transition-colors">Cars</router-link>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-gray-900">{{ car.brand }} {{ car.model }}</span>
        </nav>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Column - Images and Animation -->
        <div class="space-y-6">
          <!-- Main Image -->
          <div class="relative">
            <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-200">
              <img 
                :src="car.images[currentImageIndex]" 
                :alt="`${car.brand} ${car.model}`"
                class="w-full h-full object-cover transition-opacity duration-300"
                @error="handleImageError"
              >
            </div>
            
            <!-- Image Navigation Arrows -->
            <button 
              v-if="car.images.length > 1"
              @click="previousImage"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 transition-all"
            >
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <button 
              v-if="car.images.length > 1"
              @click="nextImage"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 transition-all"
            >
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <!-- Badges -->
            <div class="absolute top-4 left-4 flex flex-col space-y-2">
              <span v-if="car.isFeatured" class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
              <span v-if="car.isElectric" class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Electric
              </span>
              <span v-if="car.originalPrice > car.price" class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ${{ (car.originalPrice - car.price).toLocaleString() }} Off
              </span>
            </div>
          </div>

          <!-- Thumbnail Images -->
          <div v-if="car.images.length > 1" class="grid grid-cols-2 gap-4">
            <button 
              v-for="(image, index) in car.images" 
              :key="index"
              @click="currentImageIndex = index"
              class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 transition-all"
              :class="currentImageIndex === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'"
            >
              <img 
                :src="image" 
                :alt="`${car.brand} ${car.model} - Image ${index + 1}`"
                class="w-full h-full object-cover"
                @error="handleImageError"
              >
            </button>
          </div>

          <!-- AI Car Animation -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Interactive Car Demo</h3>
            <CarAnimation 
              :isElectric="car.isElectric" 
              :showRoad="true" 
              :showControls="true"
              :autoStart="false"
            />
            <p class="text-sm text-gray-600 mt-2 text-center">
              Click the car or use controls to see it in action!
            </p>
          </div>
        </div>

        <!-- Right Column - Car Details -->
        <div class="space-y-6">
          <!-- Header -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h1 class="text-3xl font-bold text-gray-900">{{ car.brand }} {{ car.model }}</h1>
                <p class="text-lg text-gray-600">{{ car.year }} • {{ car.mileage.toLocaleString() }} miles</p>
              </div>
              <button 
                @click="toggleFavorite"
                class="p-2 rounded-full transition-all"
                :class="isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>

            <!-- Price -->
            <div class="mb-6">
              <div class="flex items-baseline space-x-4">
                <span class="text-4xl font-bold text-gray-900">${{ car.price.toLocaleString() }}</span>
                <span v-if="car.originalPrice > car.price" class="text-xl text-gray-500 line-through">
                  ${{ car.originalPrice.toLocaleString() }}
                </span>
                <span v-if="car.originalPrice > car.price" class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  Save ${{ (car.originalPrice - car.price).toLocaleString() }}
                </span>
              </div>
              <p class="text-gray-600 mt-1">Financing available starting at ${{ Math.round(car.price / 60).toLocaleString() }}/month</p>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3">
              <button 
                @click="toggleCart"
                class="w-full px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200"
                :class="isInCart ? 
                  'bg-red-500 hover:bg-red-600 text-white' : 
                  'bg-blue-600 hover:bg-blue-700 text-white'"
              >
                {{ isInCart ? 'Remove from Cart' : 'Add to Cart' }}
              </button>
              
              <div class="grid grid-cols-2 gap-3">
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
                  Schedule Test Drive
                </button>
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
                  Get Financing
                </button>
              </div>
            </div>
          </div>

          <!-- Specifications -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div>
                  <span class="text-sm text-gray-500">Engine</span>
                  <p class="font-medium text-gray-900">{{ car.engine }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Transmission</span>
                  <p class="font-medium text-gray-900">{{ car.transmission }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Fuel Type</span>
                  <p class="font-medium text-gray-900">{{ car.fuelType }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">MPG</span>
                  <p class="font-medium text-gray-900">{{ car.mpg }}</p>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <span class="text-sm text-gray-500">Color</span>
                  <p class="font-medium text-gray-900">{{ car.color }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Condition</span>
                  <p class="font-medium text-gray-900">{{ car.condition }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Location</span>
                  <p class="font-medium text-gray-900">{{ car.location }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Year</span>
                  <p class="font-medium text-gray-900">{{ car.year }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Features -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Features & Options</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                v-for="(feature, index) in car.features" 
                :key="index"
                class="flex items-center space-x-2"
              >
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p class="text-gray-700 leading-relaxed">{{ car.description }}</p>
          </div>

          <!-- Contact Information -->
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Questions about this car?</h3>
                <p class="text-gray-600">Call us at (555) 123-4567 or send us a message</p>
              </div>
            </div>
            <div class="mt-4 space-x-3">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Call Now
              </button>
              <button class="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Cars -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Similar Cars You Might Like</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CarCard 
            v-for="relatedCar in relatedCars" 
            :key="relatedCar.id" 
            :car="relatedCar"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p class="mt-2 text-gray-600">Loading car details...</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CarCard from '@/components/CarCard.vue';
import CarAnimation from '@/components/CarAnimation.vue';
import { cars } from '@/data/cars.js';
import { cartStore } from '@/stores/cart';

export default {
  name: 'CarDetailView',
  components: {
    CarCard,
    CarAnimation
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const currentImageIndex = ref(0);
    const isFavorite = ref(false);
    
    const car = computed(() => {
      const carId = parseInt(route.params.id);
      return cars.find(c => c.id === carId);
    });

    const isInCart = computed(() => {
      return car.value ? cartStore.isInCart(car.value.id) : false;
    });

    const relatedCars = computed(() => {
      if (!car.value) return [];
      
      return cars
        .filter(c => 
          c.id !== car.value.id && 
          (c.brand === car.value.brand || Math.abs(c.price - car.value.price) < 50000)
        )
        .slice(0, 3);
    });

    const toggleCart = () => {
      if (car.value) {
        if (isInCart.value) {
          cartStore.removeFromCart(car.value.id);
        } else {
          cartStore.addToCart(car.value);
        }
      }
    };

    const toggleFavorite = () => {
      isFavorite.value = !isFavorite.value;
    };

    const nextImage = () => {
      if (car.value && car.value.images.length > 1) {
        currentImageIndex.value = (currentImageIndex.value + 1) % car.value.images.length;
      }
    };

    const previousImage = () => {
      if (car.value && car.value.images.length > 1) {
        currentImageIndex.value = currentImageIndex.value === 0 
          ? car.value.images.length - 1 
          : currentImageIndex.value - 1;
      }
    };

    const handleImageError = (event) => {
      event.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=entropy&auto=format';
    };

    onMounted(() => {
      // Check if car exists, redirect if not
      if (!car.value) {
        router.push('/cars');
      }
    });

    return {
      car,
      currentImageIndex,
      isFavorite,
      isInCart,
      relatedCars,
      toggleCart,
      toggleFavorite,
      nextImage,
      previousImage,
      handleImageError
    };
  }
};
</script>