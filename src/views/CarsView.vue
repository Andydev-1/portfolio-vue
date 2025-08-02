<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Car
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8">
            Browse our collection of premium vehicles
          </p>
          
          <!-- AI Car Animation -->
          <div class="flex justify-center mb-8">
            <CarAnimation :isElectric="true" :autoStart="true" />
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters and Search -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- Brand Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Brand</label>
            <select 
              v-model="filters.brand" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Brands</option>
              <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
            </select>
          </div>

          <!-- Price Range Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select 
              v-model="filters.priceRange" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Prices</option>
              <option v-for="range in priceRanges" :key="range.label" :value="range">{{ range.label }}</option>
            </select>
          </div>

          <!-- Year Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <select 
              v-model="filters.yearRange" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Years</option>
              <option v-for="range in yearRanges" :key="range.label" :value="range">{{ range.label }}</option>
            </select>
          </div>

          <!-- Fuel Type Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
            <select 
              v-model="filters.fuelType" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="Electric">Electric</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative mb-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by brand, model, or features..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>

        <!-- Filter toggles -->
        <div class="flex flex-wrap gap-2 mb-4">
          <button 
            @click="toggleFilter('featured')"
            class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
            :class="filters.featured ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
          >
            Featured Only
          </button>
          <button 
            @click="toggleFilter('electric')"
            class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
            :class="filters.electric ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
          >
            Electric Only
          </button>
          <button 
            @click="toggleFilter('sale')"
            class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
            :class="filters.sale ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
          >
            On Sale
          </button>
        </div>

        <!-- Sort Options -->
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <span class="text-sm font-medium text-gray-700">Sort by:</span>
            <select 
              v-model="sortBy" 
              class="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year-new">Year: Newest First</option>
              <option value="year-old">Year: Oldest First</option>
              <option value="mileage-low">Mileage: Low to High</option>
              <option value="featured">Featured First</option>
            </select>
          </div>
          
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">{{ filteredCars.length }} cars found</span>
            <button 
              @click="clearFilters"
              v-if="hasActiveFilters"
              class="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Cars Grid -->
      <div v-if="filteredCars.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <CarCard 
          v-for="car in paginatedCars" 
          :key="car.id" 
          :car="car"
          class="transform hover:scale-105 transition-transform duration-200"
        />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-16">
        <div class="max-w-md mx-auto">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 class="mt-4 text-lg font-medium text-gray-900">No cars found</h3>
          <p class="mt-2 text-gray-500">Try adjusting your filters or search terms.</p>
          <button 
            @click="clearFilters"
            class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center space-x-2">
        <button 
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Previous
        </button>
        
        <div class="flex space-x-1">
          <button 
            v-for="page in visiblePages" 
            :key="page"
            @click="goToPage(page)"
            class="px-3 py-2 border rounded-md transition-colors"
            :class="page === currentPage ? 
              'border-blue-500 bg-blue-600 text-white' : 
              'border-gray-300 hover:bg-gray-50'"
          >
            {{ page }}
          </button>
        </div>
        
        <button 
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CarCard from '@/components/CarCard.vue';
import CarAnimation from '@/components/CarAnimation.vue';
import { cars, brands, priceRanges, yearRanges } from '@/data/cars.js';

export default {
  name: 'CarsView',
  components: {
    CarCard,
    CarAnimation
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    
    const searchQuery = ref('');
    const currentPage = ref(1);
    const itemsPerPage = 9;
    const sortBy = ref('featured');
    
    const filters = ref({
      brand: '',
      priceRange: '',
      yearRange: '',
      fuelType: '',
      featured: false,
      electric: false,
      sale: false
    });

    // Handle URL search parameter
    onMounted(() => {
      if (route.query.search) {
        searchQuery.value = route.query.search;
      }
    });

    const filteredCars = computed(() => {
      let filtered = [...cars];

      // Text search
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(car => 
          car.brand.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.features.some(feature => feature.toLowerCase().includes(query)) ||
          car.description.toLowerCase().includes(query)
        );
      }

      // Brand filter
      if (filters.value.brand) {
        filtered = filtered.filter(car => car.brand === filters.value.brand);
      }

      // Price range filter
      if (filters.value.priceRange) {
        const range = filters.value.priceRange;
        filtered = filtered.filter(car => 
          car.price >= range.min && car.price <= range.max
        );
      }

      // Year range filter
      if (filters.value.yearRange) {
        const range = filters.value.yearRange;
        filtered = filtered.filter(car => 
          car.year >= range.min && car.year <= range.max
        );
      }

      // Fuel type filter
      if (filters.value.fuelType) {
        filtered = filtered.filter(car => car.fuelType === filters.value.fuelType);
      }

      // Featured filter
      if (filters.value.featured) {
        filtered = filtered.filter(car => car.isFeatured);
      }

      // Electric filter
      if (filters.value.electric) {
        filtered = filtered.filter(car => car.isElectric);
      }

      // Sale filter
      if (filters.value.sale) {
        filtered = filtered.filter(car => car.originalPrice > car.price);
      }

      // Sorting
      switch (sortBy.value) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'year-new':
          filtered.sort((a, b) => b.year - a.year);
          break;
        case 'year-old':
          filtered.sort((a, b) => a.year - b.year);
          break;
        case 'mileage-low':
          filtered.sort((a, b) => a.mileage - b.mileage);
          break;
        case 'featured':
          filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
          break;
      }

      return filtered;
    });

    const totalPages = computed(() => Math.ceil(filteredCars.value.length / itemsPerPage));
    
    const paginatedCars = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredCars.value.slice(start, end);
    });

    const visiblePages = computed(() => {
      const pages = [];
      const start = Math.max(1, currentPage.value - 2);
      const end = Math.min(totalPages.value, currentPage.value + 2);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });

    const hasActiveFilters = computed(() => {
      return searchQuery.value || 
             filters.value.brand || 
             filters.value.priceRange || 
             filters.value.yearRange || 
             filters.value.fuelType ||
             filters.value.featured ||
             filters.value.electric ||
             filters.value.sale;
    });

    const toggleFilter = (filterName) => {
      filters.value[filterName] = !filters.value[filterName];
      currentPage.value = 1;
    };

    const clearFilters = () => {
      searchQuery.value = '';
      filters.value = {
        brand: '',
        priceRange: '',
        yearRange: '',
        fuelType: '',
        featured: false,
        electric: false,
        sale: false
      };
      sortBy.value = 'featured';
      currentPage.value = 1;
    };

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Reset pagination when filters change
    watch([searchQuery, filters, sortBy], () => {
      currentPage.value = 1;
    }, { deep: true });

    return {
      searchQuery,
      currentPage,
      sortBy,
      filters,
      filteredCars,
      paginatedCars,
      totalPages,
      visiblePages,
      hasActiveFilters,
      brands,
      priceRanges,
      yearRanges,
      toggleFilter,
      clearFilters,
      goToPage
    };
  }
};
</script>