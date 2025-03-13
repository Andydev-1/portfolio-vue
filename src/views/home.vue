<template>
  <div class="h-screen bg-neutral-700 bg-[url(/src/assets/img/bg3.jpg)] bg-center bg-cover bg-blend-multiply pt-20">
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
            <li><a href="#" class="hover:text-orange-400 hover:bg-slate-700 hover:p-5 hover:rounded-sm">Home</a></li>
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
            <li><a href="#" class="block hover:text-orange-400">Home</a></li>
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
    <div class="grid grid-col-3 gap-4 ml-20">
      <div class="text-white col-start-2 pt-30">
        <h1 class="text-4xl md:text-6xl -mt-10 md:-mt-0 -ml-7 md:-ml-0 leading-normal font-poppins"><span
            class="text-orange-400 text-6xl md:text-7xl">Charity</span><br>
          with
          Purpose,
          Impact<br>
          with Love
        </h1>
        <p class="font-bold text-xl -ml-8 md:-ml-0 md:text-2xl"><em>Transforming Lives, One Act of Kindness at a time </em></p>
      </div>

      <div class="col-end-4">
        <img src=" /src/assets/img/smile4.png" alt="smile5" class="w-95 mr-10 mt-2 hidden md:block">
      </div>
    </div>
  
    <div class="grid-cols-5 gap-2 md:gap-5 flex justify-center mt-12 md:-mt-20 md:ml-0 md:mr-0 mr-3 ml-3 z-10">
      <div class="col-start-2 w-60 h-32 md:w-60 md:h-45 bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div class="h-2 bg-orange-500"></div>
        <div class="p-2 md:p-6 text-center md:text-left">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:ml-0 ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-sm font-bold md:text-xl md:font-semibold text-gray-800 mb-2">Give Hope Today</h3>
          <p class="text-gray-600 text-sm">Your support changes lives.</p>
        </div>
      </div>

      <div class="col-start-3 w-60 h-32 md:w-60 md:h-45 bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div class="h-2 bg-orange-500"></div>
        <div class="p-2 md:p-6 text-center md:text-left">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:ml-0 ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-sm font-bold md:text-xl md:font-semibold text-gray-800 mb-2">Together, We Care</h3>
          <p class="text-gray-600 text-sm">Every gift makes a difference.</p>
        </div>
      </div>

      <div class="col-start-4 w-60 h-32 md:w-60 md:h-45 bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div class="h-2 bg-orange-500"></div>
        <div class="p-2 md:p-6 text-center md:text-left">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:ml-0 ml-5">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="h-6 w-6 text-orange-500" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"/>
            <path fill="currentColor" d="M6 16h1.5v-5h1v5H10V7l-.001-.052c0-.521.194-.997.513-1.36L13.79 2.27a.73.73 0 1 0-.998-1.003L10.43 3.65c-.212.216-.508.35-.835.35H6.404c-.327 0-.622-.134-.834-.35L3.25 1.26a.73.73 0 1 0-1.003.998L5.49 5.59c.317.361.511.836.511 1.358L6 7.003z"/>
          </svg>
          </div>
          <h3 class="text-sm font-bold md:text-xl md:font-semibold text-gray-800 mb-2">Be the Change</h3>
          <p class="text-gray-600 text-sm hidden md:block">Help those in need now.</p>
        </div>
      </div>
    </div>
    
  </div>
  <!--the about section-->
  <section class="bg-white w-full py-20">
    <div class="w-full h-40 bg-green-200 bg-[url(/src/assets/img/blur.jpg)] bg-center bg-cover bg-blend-multiply mb-16 -mt-20"  id="about"></div>
    <div class="container mx-auto px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-gray-800 font-poppins">Our Mission</h2>
          <div class="w-20 h-2 bg-orange-500"></div>
          <p class="text-gray-600 leading-relaxed">
           At <span class="font-bold">Sir Larry Charity Foundation</span>, we uplift lives through support, education, and resources. Our goal is to empower underprivileged communities, creating lasting change.<br>

Together, we make a difference.</p>
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="bg-orange-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">1000+</h3>
              <p class="text-gray-600">Lives Impacted</p>
            </div>
            <div class="bg-orange-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">50+</h3>
              <p class="text-gray-600">Active Programs</p>
            </div>
            <div class="bg-orange-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">100+</h3>
              <p class="text-gray-600">Volunteers</p>
            </div>
            <div class="bg-orange-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">20+</h3>
              <p class="text-gray-600">Communities Served</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <img src="/src/assets/img/mission1.webp" alt="Mission Image 1" class="w-full h-64 object-cover rounded-lg shadow-lg">
          <img src="/src/assets/img/mission2.avif" alt="Mission Image 2" class="w-full h-64 object-cover rounded-lg shadow-lg mt-12">
          <img src="/src/assets/img/mission3.avif" alt="Mission Image 3" class="w-full h-64 object-cover rounded-lg shadow-lg -mt-12">
          <img src="/src/assets/img/mission4.jpg" alt="Mission Image 4" class="w-full h-64 object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  </section>
  <!---the services section-->
  <section class="bg-white w-full py-20" id="services">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 font-poppins">Our Services</h2>
        <div class="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide various services to support and empower communities in need. Each program is carefully designed to create lasting positive impact.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Education Support -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transform transition-transform hover:scale-105">
          <div class="h-48 overflow-hidden">
            <img src="/src/assets/img/edu1.jpg" alt="Education Support" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Education Support</h3>
            <p class="text-gray-600">Providing educational resources, scholarships, and mentoring programs to empower through learning.</p>
          </div>
        </div>

        <!-- Healthcare Access -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transform transition-transform hover:scale-105">
          <div class="h-48 overflow-hidden">
            <img src="/src/assets/img/edu2.avif" alt="Healthcare Access" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Healthcare Access</h3>
            <p class="text-gray-600">Facilitating medical care, health education, and wellness programs for underserved communities.</p>
          </div>
        </div>

        <!-- Community Development -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transform transition-transform hover:scale-105">
          <div class="h-48 overflow-hidden">
            <img src="/src/assets/img/edu3.jpg" alt="Community Development" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Community Development</h3>
            <p class="text-gray-600">Building stronger communities through infrastructure projects and sustainable development initiatives.</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="#contact">
        <button class="bg-white text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 font-semibold">
          Learn More About Our Services
        </button>
        </a>
      </div>
    </div>
  </section>
  <!---founder section-->
  <section class="bg-white w-full py-20" id="founder">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-800 font-poppins">Our Founder</h2>
      <div class="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        <span class="font-bold text-gray-500">Meet Our Visionary Founder</span><br> 
        The driving force behind our journey, innovation, and success.
      </p>
    </div>
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <img 
            src="/src/assets/img/founder.jpg" 
            alt="Founder" 
            class="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-xl"
          >
          <div class="flex items-center gap-6 justify-center -mt-20">
            <a href="https://www.tiktok.com/@larrytaylor40?_t=8j7gaIFHa5p&_r=1" target="_blank" rel="noopener noreferrer" class="hover:bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 text-gray-100 hover:text-orange-500">
                <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/>
              </svg>
              <span class="sr-only">TikTok</span>
            </a>
            <a href="https://www.instagram.com/sir_larry_charity_foundation?igsh=MWpvdjRkcTZrZDM2Zw==" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 text-gray-100 hover:text-orange-500">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span class="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/sir-larry-charity-foundation-3129a22b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 text-gray-100 hover:text-orange-500">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div class="space-y-8">
          <div>
            <h3 class="text-3xl font-bold text-gray-800 mb-2">Sir Lanre Sofunde Taylor</h3>
            <p class="text-orange-500 font-semibold mb-6">Founder & Executive Director</p>
            <p class="text-gray-600 leading-relaxed mb-6">
              With over 20 years of experience in humanitarian work, Sir Larry has dedicated his life to making a difference in communities worldwide. His vision of creating sustainable change through education and empowerment has touched thousands of lives.
            </p>
            <blockquote class="italic text-gray-700 border-l-4 border-orange-500 pl-4 my-6">
              "Every small act of kindness has the power to transform lives. Our mission is to create lasting change by empowering communities and inspiring hope."
            </blockquote>
          </div>
          
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">Vision</h4>
              <p class="text-gray-600">Creating a world where every individual has the opportunity to thrive.</p>
            </div>
            <div class="bg-orange-50 px-2 py-6 rounded-lg">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">Experience</h4>
              <p class="text-gray-600">20+ years in humanitarian leadership and community development.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <a href="https://www.instagram.com/sir_larry_charity_foundation?igsh=MWpvdjRkcTZrZDM2Zw==">
            <button class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Read Full Bio
            </button>
            </a>
            <button class="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--donation section-->
  <section id="donation">
    <div class="bg-gray-50 py-20">
      <div class="container mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 font-poppins">Make a Difference</h2>
          <div class="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your generosity can transform lives. Choose how you'd like to contribute to our mission of creating lasting change.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- One-Time Donation -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="h-2 bg-orange-500"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">One-Time Donation</h3>
              <p class="text-gray-600 mb-6">Make an immediate impact with a single contribution to support our ongoing projects.</p>
              <div class="flex flex-wrap gap-3 mb-6">
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">$10</button>
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">$25</button>
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">$50</button>
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">Custom</button>
              </div>
              <a href="#contact">
              <button class="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Donate Now
              </button>
              </a>
            </div>
          </div>

          <!-- Monthly Giving -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="h-2 bg-orange-500"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">Monthly Giving</h3>
              <p class="text-gray-600 mb-6">Join our community of monthly donors and help create sustainable change.</p>
              <div class="flex flex-wrap gap-3 mb-6">
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">$20/mo</button>
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">$50/mo</button>
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">$100/mo</button>
                <button class="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">Custom</button>
              </div>
              <a href="#contact">
              <button class="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Become a Monthly Donor
              </button>
              </a>
            </div>
          </div>

          <!-- Corporate Giving -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="h-2 bg-orange-500"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">Corporate Giving</h3>
              <p class="text-gray-600 mb-6">Partner with us to make a significant impact through corporate donations and sponsorships.</p>
              <ul class="mb-6 text-gray-600">
                <li class="flex items-center gap-2 mb-2">
                  <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Customized Partnership Programs
                </li>
                <li class="flex items-center gap-2 mb-2">
                  <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tax Benefits
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Impact Reports
                </li>
              </ul>
              <a href="#contact">
              <button class="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Contact Us
              </button>
              </a>
            </div>
          </div>
        </div>

        <!-- Impact Statistics -->
        <div class="bg-white rounded-xl shadow-lg p-8 mt-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <h4 class="text-3xl font-bold text-orange-500 mb-2">90%</h4>
              <p class="text-gray-600">of donations go directly to programs</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold text-orange-500 mb-2">1000+</h4>
              <p class="text-gray-600">lives impacted monthly</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold text-orange-500 mb-2">20+</h4>
              <p class="text-gray-600">active projects</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold text-orange-500 mb-2">100%</h4>
              <p class="text-gray-600">transparency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
import { ref } from 'vue';
const isMenuOpen = ref(false);
console.log('App.vue is loading');

</script>
<style>

</style>