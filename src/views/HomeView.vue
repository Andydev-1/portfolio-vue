<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div class="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div class="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div class="text-white space-y-8">
            <div>
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Find Your
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Dream Car
                </span>
              </h1>
              <p class="text-xl md:text-2xl text-blue-100 mt-6">
                Discover premium vehicles with cutting-edge technology and unmatched performance.
              </p>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-yellow-400">{{ cars.length }}+</div>
                <div class="text-blue-200 text-sm">Premium Cars</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-yellow-400">50+</div>
                <div class="text-blue-200 text-sm">Luxury Brands</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-yellow-400">99%</div>
                <div class="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/cars"
                class="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 text-center"
              >
                Browse Collection
              </router-link>
              <button 
                @click="scrollToFeatured"
                class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center"
              >
                View Featured
              </button>
            </div>
          </div>

          <!-- Right Column - AI Car Animation -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Decorative elements -->
              <div class="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
              <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
              
              <!-- Car Animation Container -->
              <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <CarAnimation 
                  :isElectric="true" 
                  :showRoad="true" 
                  :showControls="true"
                  :autoStart="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose AutoLux?</h2>
          <p class="text-xl text-gray-600">Experience the difference with our premium service</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Quality Guaranteed</h3>
            <p class="text-gray-600">Every vehicle undergoes rigorous inspection to ensure the highest quality and safety standards.</p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Best Prices</h3>
            <p class="text-gray-600">Competitive pricing with transparent costs and no hidden fees. Get the best value for your investment.</p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
            <p class="text-gray-600">Our experienced team provides personalized assistance throughout your car buying journey.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Cars Section -->
    <section id="featured" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
          <p class="text-xl text-gray-600">Handpicked premium cars from our exclusive collection</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <CarCard 
            v-for="car in featuredCars" 
            :key="car.id" 
            :car="car"
            class="transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <div class="text-center">
          <router-link 
            to="/cars"
            class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            View All Cars
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Brands Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Premium Brands</h2>
          <p class="text-xl text-gray-600">Featuring the world's most prestigious automotive brands</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          <div 
            v-for="brand in brands.slice(0, 6)" 
            :key="brand"
            class="text-center group cursor-pointer"
            @click="searchByBrand(brand)"
          >
            <div class="bg-gray-100 hover:bg-blue-50 rounded-xl p-6 transition-all duration-200 group-hover:shadow-lg">
              <div class="text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                {{ brand }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Car?</h2>
        <p class="text-xl text-blue-100 mb-8">
          Join thousands of satisfied customers who found their dream vehicle with AutoLux
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/cars"
            class="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Shopping Now
          </router-link>
          <button class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
            Schedule Test Drive
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Stay Updated</h3>
        <p class="text-gray-300 mb-8">Get notified about new arrivals and exclusive deals</p>
        
        <div class="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import CarCard from '@/components/CarCard.vue';
import CarAnimation from '@/components/CarAnimation.vue';
import { cars, brands } from '@/data/cars.js';

export default {
  name: 'HomeView',
  components: {
    CarCard,
    CarAnimation
  },
  setup() {
    const router = useRouter();
    
    const featuredCars = computed(() => {
      return cars.filter(car => car.isFeatured).slice(0, 6);
    });

    const scrollToFeatured = () => {
      const element = document.getElementById('featured');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const searchByBrand = (brand) => {
      router.push(`/cars?brand=${encodeURIComponent(brand)}`);
    };

    return {
      cars,
      brands,
      featuredCars,
      scrollToFeatured,
      searchByBrand
    };
  }
};
</script>