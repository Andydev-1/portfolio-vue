<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">About AutoLux</h1>
        <p class="text-xl md:text-2xl text-blue-100">
          Your trusted partner in premium automotive excellence
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg mx-auto">
          <p class="text-xl text-gray-600 mb-8">
            Founded in 2020, AutoLux has quickly become the premier destination for luxury and premium vehicles. 
            We combine cutting-edge technology with exceptional customer service to create an unparalleled car buying experience.
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-gray-700 mb-8">
            To revolutionize the automotive industry by providing customers with access to the world's finest vehicles 
            through innovative technology, transparent pricing, and exceptional service.
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose AutoLux?</h2>
          <ul class="text-gray-700 space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Rigorous quality inspection for every vehicle
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Transparent pricing with no hidden fees
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Expert customer support throughout your journey
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Flexible financing options
            </li>
          </ul>

          <div class="text-center">
            <router-link 
              to="/cars"
              class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Our Collection
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>