<template>
      <nav class="text-white bg-gray-800 h-20 px-6 md:px-20 fixed top-0 left-0 right-0 z-50">
      <div class="flex justify-between items-center h-full">
        <div class="pt-3">
          <img src="/src/assets/img/logos.png" alt="logo" class="w-30">
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Desktop/Tablet Menu -->
        <div class="hidden md:block">
          <ul class="flex items-center gap-5">
            <li><a href="./" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">Home</a></li>
            <li><a href="#about" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">About</a></li>
            <li><a href="#services" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">Services</a></li>
            <li><a href="/projects" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">Projects</a></li>
            <li><a href="#founder" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">Founder</a></li>
            <li><a href="#contact" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">Contact</a></li>
          </ul>
        </div>

        <div class="hidden md:block">
          <a href="#donation">
          <button class="bg-sky-700 px-3 py-1.5 rounded-lg hover:bg-transparent border-2 border-sky-700">
            Donate
          </button>
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-full opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-full opacity-0"
      >
        <div v-if="isMenuOpen" class="md:hidden absolute top-20 left-0 right-0 bg-gray-800 p-4 shadow-lg">
          <ul class="flex flex-col gap-4">
            <li><a href="./" class="block hover:text-orange-400">Home</a></li>
            <li><a href="#about" class="block hover:text-orange-400">About</a></li>
            <li><a href="#services" class="block hover:text-orange-400">Services</a></li>
            <li><a href="/projects" class="block hover:text-orange-400">Projects</a></li>
            <li><a href="#founder" class="block hover:text-orange-400">Founder</a></li>
            <li><a href="#contact" class="block hover:text-orange-400">Contact</a></li>
            <li>
              <a href="#donation">
              <button class="bg-sky-700 px-3 py-1.5 rounded-lg hover:bg-transparent border-2 border-sky-700 w-full">
                Donate
              </button>
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  <div class="bg-gray-50 min-h-screen pt-20">
    <!-- Hero Section -->
    <div class="bg-gray-800 text-white py-16">
      <div class="container mx-auto px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Projects</h1>
        <div class="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
        <p class="text-gray-300 max-w-2xl mx-auto">
          Discover how we're making a difference in communities through our various initiatives and programs.
        </p>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="container mx-auto px-8 py-16">
      <!-- Project Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2 rounded-full transition-colors duration-300',
            selectedCategory === category 
              ? 'bg-orange-500 text-white' 
              : 'bg-white text-gray-600 hover:bg-orange-100'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects List -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id" 
          class="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div class="relative h-64">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
            <div class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
              {{ project.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-orange-500 h-2 rounded-full" :style="{ width: project.progress + '%' }"></div>
              </div>
              <div class="flex justify-between mt-2 text-sm text-gray-600">
                <span>Progress: {{ project.progress }}%</span>
                <span>Goal: ${{ project.goal.toLocaleString() }}</span>
              </div>
            </div>
            <button class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Support Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!---the contact section -->
  <section class="bg-gray-50 w-full py-20" id="contact">
    <div class="container mx-auto px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 font-poppins">Contact Us</h2>
        <div class="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have questions or want to get involved? We'd love to hear from you. 
          Reach out to us through any of the following channels.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Phone -->
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <p class="text-gray-600">+44 7462 931355</p>
          <p class="text-gray-600">Mon-Fri 9am-5pm</p>
        </div>

        <!-- Email -->
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p class="text-gray-600">info@sirlarrycharity.org</p>
          <p class="text-gray-600">support@sirlarrycharity.org</p>
        </div>

        <!-- Location -->
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Location</h3>
          <p class="text-gray-600">64 Samuel Jones Court off Samuel Jones court London. Se15 6fh.</p>
          <p class="text-gray-600">Southampton, United kingdom</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            </div>
          </div>
          <div>
            <label class="block text-gray-700 mb-2" for="subject">Subject</label>
            <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
          </div>
          <div>
            <label class="block text-gray-700 mb-2" for="message">Message</label>
            <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
          </div>
          <button type="submit" class="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  <!---the footer section-->
  <footer class="bg-gray-800 text-white pt-16 pb-8">
    <div class="container mx-auto px-8">
      <!-- Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- About Section -->
        <div class="space-y-6">
          <img src="/src/assets/img/logos.png" alt="logo" class="w-32">
          <p class="text-gray-300">
            Empowering communities through compassion, education, and sustainable development. Together, we can make a difference.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.tiktok.com/@larrytaylor40" class="text-gray-300 hover:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6">
                <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/sir_larry_charity_foundation" class="text-gray-300 hover:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sir-larry-charity-foundation" class="text-gray-300 hover:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-4">
            <li><a href="#about" class="text-gray-300 hover:text-orange-400">About Us</a></li>
            <li><a href="#services" class="text-gray-300 hover:text-orange-400">Our Services</a></li>
            <li><a href="#founder" class="text-gray-300 hover:text-orange-400">Our Founder</a></li>
            <li><a href="#blog" class="text-gray-300 hover:text-orange-400">Blog</a></li>
            <li><a href="#contact" class="text-gray-300 hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Our Services</h3>
          <ul class="space-y-4">
            <li><a href="#services" class="text-gray-300 hover:text-orange-400">Education Support</a></li>
            <li><a href="#services" class="text-gray-300 hover:text-orange-400">Healthcare Access</a></li>
            <li><a href="#services" class="text-gray-300 hover:text-orange-400">Community Development</a></li>
            <li><a href="#donation" class="text-gray-300 hover:text-orange-400">Volunteer Programs</a></li>
            <li><a href="#donation" class="text-gray-300 hover:text-orange-400">Donation Programs</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Contact Info</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-300">123 Charity Street, Lagos, Nigeria</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-300">info@sirlarrycharity.org</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-gray-300">+234 803 123 4567</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Sir Larry Charity Foundation. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="/privacy" class="text-gray-400 hover:text-orange-400 text-sm">Privacy Policy</a>
            <a href="/terms" class="text-gray-400 hover:text-orange-400 text-sm">Terms of Service</a>
            <a href="/cookies" class="text-gray-400 hover:text-orange-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('All Projects');

const categories = ['All Projects', 'Education', 'Healthcare', 'Community', 'Environment'];

const projects = [
  {
    id: 1,
    title: 'School Support Project',
    description: 'Support and developed school to provide quality education for underprivileged children in rural areas.',
    category: 'Education',
    image: '/src/assets/img/img3.jpg',
    progress: 75,
    goal: 50000
  },
  {
    id: 2,
    title: 'Medical Outreach Program',
    description: 'Providing essential healthcare services and medical supplies to remote communities.',
    category: 'Healthcare',
    image: '/src/assets/img/edu2.avif',
    progress: 60,
    goal: 30000
  },
  {
    id: 3,
    title: 'Community Garden Initiative',
    description: 'Creating sustainable food sources through community gardens and agricultural training.',
    category: 'Community',
    image: '/src/assets/img/edu3.jpg',
    progress: 40,
    goal: 15000
  },
  {
    id: 4,
    title: 'Clean Water Project',
    description: 'Installing water purification systems in villages to provide clean drinking water.',
    category: 'Environment',
    image: '/src/assets/img/mission6.avif',
    progress: 85,
    goal: 25000
  },
  {
    id: 5,
    title: 'Youth Skills Training',
    description: 'Empowering youth through vocational training and entrepreneurship programs.',
    category: 'Education',
    image: '/src/assets/img/mission2.avif',
    progress: 50,
    goal: 20000
  },
  {
    id: 6,
    title: 'Elder Care Program',
    description: 'Supporting elderly community members with healthcare and social services.',
    category: 'Healthcare',
    image: '/src/assets/img/mission5.webp',
    progress: 30,
    goal: 35000
  }
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All Projects') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});
</script>
