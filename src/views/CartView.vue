<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <p class="text-gray-600 mt-2">
          {{ cartStore.totalItems }} {{ cartStore.totalItems === 1 ? 'item' : 'items' }} in your cart
        </p>
      </div>

      <div v-if="cartStore.totalItems > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          <div 
            v-for="item in cartStore.items" 
            :key="item.id"
            class="bg-white rounded-xl shadow-md p-6 transition-all duration-200 hover:shadow-lg"
          >
            <div class="flex items-start space-x-4">
              <!-- Car Image -->
              <div class="flex-shrink-0">
                <img 
                  :src="item.images[0]" 
                  :alt="`${item.brand} ${item.model}`"
                  class="w-24 h-18 object-cover rounded-lg"
                  @error="handleImageError"
                >
              </div>

              <!-- Car Details -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">
                      {{ item.brand }} {{ item.model }}
                    </h3>
                    <p class="text-sm text-gray-600">{{ item.year }} • {{ item.mileage.toLocaleString() }} miles</p>
                    <p class="text-sm text-gray-600">{{ item.location }}</p>
                    
                    <!-- Features -->
                    <div class="mt-2 flex flex-wrap gap-1">
                      <span 
                        v-for="(feature, index) in item.features.slice(0, 2)" 
                        :key="index"
                        class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {{ feature }}
                      </span>
                      <span v-if="item.features.length > 2" class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{{ item.features.length - 2 }} more
                      </span>
                    </div>
                  </div>

                  <!-- Price and Actions -->
                  <div class="text-right">
                    <div class="text-xl font-bold text-gray-900">${{ item.price.toLocaleString() }}</div>
                    <div v-if="item.originalPrice > item.price" class="text-sm text-gray-500 line-through">
                      ${{ item.originalPrice.toLocaleString() }}
                    </div>
                    <div class="mt-2 space-y-2">
                      <router-link 
                        :to="`/cars/${item.id}`"
                        class="block text-sm text-blue-600 hover:text-blue-800 underline"
                      >
                        View Details
                      </router-link>
                      <button 
                        @click="removeFromCart(item.id)"
                        class="block text-sm text-red-600 hover:text-red-800 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Added Date -->
                <div class="mt-3 pt-3 border-t border-gray-200">
                  <p class="text-xs text-gray-500">
                    Added {{ formatDate(item.addedAt) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-md p-6 sticky top-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <!-- Price Breakdown -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Subtotal ({{ cartStore.totalItems }} items)</span>
                <span class="font-medium">${{ cartStore.totalPrice.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Processing Fee</span>
                <span class="font-medium">${{ processingFee.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Documentation Fee</span>
                <span class="font-medium">${{ documentationFee.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-sm text-green-600">
                <span>Estimated Savings</span>
                <span class="font-medium">-${{ totalSavings.toLocaleString() }}</span>
              </div>
              <div class="border-t border-gray-200 pt-3">
                <div class="flex justify-between">
                  <span class="text-lg font-semibold text-gray-900">Total</span>
                  <span class="text-lg font-semibold text-gray-900">${{ finalTotal.toLocaleString() }}</span>
                </div>
              </div>
            </div>

            <!-- Financing Information -->
            <div class="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 class="text-sm font-semibold text-blue-900 mb-2">Financing Available</h3>
              <p class="text-sm text-blue-700">
                Starting at <span class="font-semibold">${{ monthlyPayment.toLocaleString() }}/month</span>
              </p>
              <p class="text-xs text-blue-600 mt-1">with approved credit • 60 months</p>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3">
              <button 
                @click="proceedToCheckout"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Proceed to Checkout
              </button>
              <button 
                @click="getFinancing"
                class="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Pre-Approved
              </button>
              <router-link 
                to="/cars"
                class="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Continue Shopping
              </router-link>
            </div>

            <!-- Security Notice -->
            <div class="mt-6 p-3 bg-gray-50 rounded-lg">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-xs text-gray-600">Secure checkout with SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="text-center py-16">
        <div class="max-w-md mx-auto">
          <!-- AI Car Animation for empty cart -->
          <div class="mb-8">
            <CarAnimation 
              :isElectric="true" 
              :showRoad="false" 
              :showControls="false"
              :autoStart="true"
            />
          </div>
          
          <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"/>
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p class="text-gray-500 mb-6">Looks like you haven't added any cars to your cart yet.</p>
          <router-link 
            to="/cars"
            class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            Browse Cars
          </router-link>
        </div>
      </div>

      <!-- Recently Viewed (if cart is not empty) -->
      <div v-if="cartStore.totalItems > 0 && recentlyViewed.length > 0" class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CarCard 
            v-for="car in recentlyViewed.slice(0, 3)" 
            :key="car.id" 
            :car="car"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { cartStore } from '@/stores/cart';
import { cars } from '@/data/cars.js';
import CarCard from '@/components/CarCard.vue';
import CarAnimation from '@/components/CarAnimation.vue';

export default {
  name: 'CartView',
  components: {
    CarCard,
    CarAnimation
  },
  setup() {
    const router = useRouter();
    
    const processingFee = 299;
    const documentationFee = 199;
    
    const totalSavings = computed(() => {
      return cartStore.items.reduce((total, item) => {
        return total + (item.originalPrice > item.price ? item.originalPrice - item.price : 0);
      }, 0);
    });
    
    const finalTotal = computed(() => {
      return cartStore.totalPrice + processingFee + documentationFee;
    });
    
    const monthlyPayment = computed(() => {
      return Math.round(finalTotal.value / 60);
    });
    
    const recentlyViewed = computed(() => {
      // Mock recently viewed cars (in a real app, this would come from localStorage or user data)
      return cars.filter(car => !cartStore.isInCart(car.id)).slice(0, 3);
    });

    const removeFromCart = (carId) => {
      cartStore.removeFromCart(carId);
    };

    const proceedToCheckout = () => {
      // In a real app, this would navigate to checkout
      alert('Checkout functionality would be implemented here. This would redirect to a secure payment page.');
    };

    const getFinancing = () => {
      // In a real app, this would open financing application
      alert('Financing application would open here. This would connect to a lending partner or internal financing system.');
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) return 'today';
      if (diffDays === 2) return 'yesterday';
      if (diffDays <= 7) return `${diffDays - 1} days ago`;
      return date.toLocaleDateString();
    };

    const handleImageError = (event) => {
      event.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=entropy&auto=format';
    };

    return {
      cartStore,
      processingFee,
      documentationFee,
      totalSavings,
      finalTotal,
      monthlyPayment,
      recentlyViewed,
      removeFromCart,
      proceedToCheckout,
      getFinancing,
      formatDate,
      handleImageError
    };
  }
};
</script>