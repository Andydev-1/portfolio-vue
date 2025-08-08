<template>
  <body
    class="bg-gradient-to-b from-neutral-900 to-neutral-800 min-h-screen font-bricolage transition-colors duration-300"
  >
    <div id="home" class="mx-0 md:mx-40 px-4 md:px-0">
      <!---navigation section-->
      <nav class="transition-colors duration-300">
        <div class="flex justify-between md:gap-90 pt-6 mr-2 md:mr-30">
          <div
            class="flex-start size-15 rounded-full bg-radial-[at_25%_25%] from-neutral-700 to-neutral-800 to-75% cursor-pointer transition-all duration-300 hover:scale-110"
            @click="toggleTheme"
          >
            <div
              class="size-15 rounded-full bg-neutral-800 p-2.5 transition-all duration-300"
            >
              <!-- Sun Icon for Light Mode -->
              <svg
                v-if="!isDark"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clip-path="url(#siSunLine0)">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
                    />
                  </g>
                  <defs>
                    <clipPath id="siSunLine0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <!-- Moon Icon for Dark Mode -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clip-path="url(#siMoonLine0)">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="siMoonLine0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
          </div>
          <!-- Desktop Nav -->
          <div
            class="hidden md:flex items-center bg-neutral-800 rounded-full px-8 py-2 transition-all duration-300 shadow-md border border-neutral-700"
          >
            <nav class="flex gap-8 w-full justify-center">
              <router-link
                to="/"
                class="flex items-center px-4 py-2 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                :class="{ 'text-emerald-400': $route.path === '/' }"
              >
                Home
              </router-link>
              <router-link
                to="/blog"
                class="flex items-center px-4 py-2 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                :class="{ 'text-emerald-400': $route.path.startsWith('/blog') }"
              >
                Blog
              </router-link>
            </nav>
          </div>
          <!-- Mobile Nav -->
          <div
            class="flex md:hidden items-center bg-neutral-800 rounded-full px-4 py-2 transition-all duration-300 shadow-md border border-neutral-700"
          >
            <nav class="flex gap-4 w-full justify-center">
              <router-link
                to="/"
                class="flex items-center px-2 py-1 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                :class="{ 'text-emerald-400': $route.path === '/' }"
              >
                Home
              </router-link>
              <router-link
                to="/blog"
                class="flex items-center px-2 py-1 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                :class="{ 'text-emerald-400': $route.path.startsWith('/blog') }"
              >
                Blog
              </router-link>
            </nav>
          </div>
        </div>
      </nav>
      <!---Hero section-->
      <div
        class="flex flex-col md:flex-row gap-8 md:gap-36 transition-colors duration-300"
      >
        <div
          class="md:w-70 h-80 bg-sky-900 pt-6 pl-8 md:mt-25 mt-10 rounded-3xl md:rounded-full"
        >
          <img src="@/assets/img/face.png" class="w-55" />
          <div class="flex mt-5 ml-3 gap-1">
            <div class="bg-neutral-800 w-12 h-12 rounded-full p-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g clip-path="url(#primeTwitter0)">
                    <path
                      fill="currentColor"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    />
                  </g>
                  <defs>
                    <clipPath id="primeTwitter0">
                      <path fill="#fff" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
            <div class="bg-neutral-800 w-12 h-12 rounded-full p-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                />
              </svg>
            </div>
            <div class="bg-neutral-800 w-12 h-12 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.963 2.382C.554 2.621-1.82 17.93 8.852 21.602c.498.093.684-.219.684-.478v-1.68c-2.79.601-3.38-1.317-3.38-1.317a2.6 2.6 0 0 0-1.121-1.442c-.902-.612.072-.602.072-.602a2.07 2.07 0 0 1 1.536 1.038a2.167 2.167 0 0 0 2.924.819c.052-.5.275-.965.633-1.317c-2.23-.25-4.564-1.1-4.564-4.875a3.76 3.76 0 0 1 1.038-2.645a3.46 3.46 0 0 1 .103-2.634s.84-.26 2.76 1.037a9.6 9.6 0 0 1 5.02 0c1.908-1.276 2.748-1.038 2.748-1.038c.365.828.398 1.763.093 2.614a3.75 3.75 0 0 1 1.037 2.645c0 3.786-2.344 4.626-4.574 4.865c1.038.55.602 4.086.664 4.522c0 .259.176.57.695.477c10.642-3.64 8.152-18.97-3.257-19.209"
                />
              </svg>
            </div>
            <div class="bg-neutral-800 w-12 h-12 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718l-.697 2.359l2.32-.648l.379.243A8 8 0 1 0 12 4M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382l1.426-4.829l-.006-.007l-.033-.055A9.96 9.96 0 0 1 2 12"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1 1 0 0 0-.34-.075c-.196 0-.362.098-.49.291c-.146.217-.587.732-.723.886c-.018.02-.042.045-.057.045c-.013 0-.239-.093-.307-.123c-1.564-.68-2.751-2.313-2.914-2.589c-.023-.04-.024-.057-.024-.057c.005-.021.058-.074.085-.101c.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711c-.158-.377-.366-.552-.655-.552c-.027 0 0 0-.112.005c-.137.005-.883.104-1.213.311c-.35.22-.94.924-.94 2.16c0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537c1.412.564 2.081.63 2.461.63c.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276c.192-.534.243-1.117.115-1.329c-.088-.144-.239-.216-.43-.308"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-10 md:mt-45 text-center md:text-left">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl font-bricolage font-extrabold pb-1"
          >
            Ikpa Andrew
          </h1>
          <p class="text-center md:text-center">freelance web developer</p>
          <p class="text-center md:text-center">
            Say hi <a href="#" class="text-blue-300">ikpaandrew057@gmail.com</a>
          </p>
          <div
            class="flex gap-2 text-sm md:ml-15 ml-0 justify-center md:justify-start flex-wrap"
          >
            <router-link
              to="/blog"
              class="bg-emerald-600 mt-3 rounded-full focus:outline-1 hover:border-2 border-neutral-700 active:bg-neutral-200 w-28 flex cursor-pointer items-center justify-center text-white"
              style="text-decoration: none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M288 72v120a32 32 0 0 0 32 32h120"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"
                />
              </svg>
              <p class="pl-1">Blog</p>
            </router-link>
            <button
              @click="$router.push('/resume')"
              class="bg-black mt-3 rounded-full border-2 border-neutral-400 focus:outline-1 hover:border-2 active:bg-neutral-200 p-4 w-30 flex pl-5 cursor-pointer text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g fill="currentColor">
                  <path
                    d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
              <p class="pl-1">Resume</p>
            </button>
          </div>
        </div>
      </div>
      <!-- About Section -->
      <div id="about">
        <AboutSection />
      </div>

      <!-- Skills Section -->
      <div id="skills">
        <SkillsSection />
      </div>

      <!-- Projects Section -->
      <div id="projects">
        <ProjectsSection />
      </div>

      <!-- Testimonials Section -->
      <div id="testimonials">
        <TestimonialCarousel />
      </div>
    </div>
    <div id="contact">
      <FooterSection />
    </div>
  </body>
</template>

<script setup>
import TestimonialCarousel from "../components/TestimonialCarousel.vue";
import FooterSection from "../components/FooterSection.vue";
import AboutSection from "../components/AboutSection.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import { useTheme } from "../composables/useTheme.js";

const { isDark, toggleTheme } = useTheme();
</script>
