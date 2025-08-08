<template>
  <section class="py-16 px-6 md:px-0">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-4xl font-bold text-center relative mx-auto w-full justify-center flex pb-2"
        >
          Featured Projects
          <svg
            class="absolute left-1/2 -translate-x-1/2 mt-2"
            width="200"
            height="24"
            viewBox="0 0 200 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="bottom: -12px; position: absolute"
          >
            <defs>
              <linearGradient
                id="testimonialUnderlineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style="stop-color: #34d399; stop-opacity: 0.3"
                />
                <stop
                  offset="25%"
                  style="stop-color: #34d399; stop-opacity: 0.8"
                />
                <stop
                  offset="50%"
                  style="stop-color: #34d399; stop-opacity: 1"
                />
                <stop
                  offset="75%"
                  style="stop-color: #34d399; stop-opacity: 0.8"
                />
                <stop
                  offset="100%"
                  style="stop-color: #34d399; stop-opacity: 0.3"
                />
              </linearGradient>
            </defs>
            <path
              d="M10 18 Q50 8 100 18 Q150 28 190 18"
              stroke="url(#testimonialUnderlineGradient)"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 20 Q50 10 100 20 Q150 30 190 20"
              stroke="#34d399"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              opacity="0.5"
            />
          </svg>
        </h2>
      </div>

      <!-- Completed Projects -->
      <div class="mb-16">
        <h3
          class="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Completed Projects
        </h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="project in completedProjects"
            :key="project.id"
            class="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-emerald-500/20"
          >
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-xl font-bold text-white mb-2">
                  {{ project.title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6">
              <p class="text-neutral-300 mb-4 leading-relaxed text-sm">
                {{ project.description }}
              </p>

              <div class="flex gap-3">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  Live Demo
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- In Progress Projects -->
      <div>
        <h3
          class="text-2xl font-bold text-yellow-400 mb-8 flex items-center gap-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          In Progress
        </h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="project in inProgressProjects"
            :key="project.id"
            class="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-yellow-500/20"
          >
            <div class="relative overflow-hidden">
              <!-- Show icon for Smart Support Chatbot, image for others -->
              <div
                v-if="project.title === 'Smart Support Chatbot'"
                class="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center"
              >
                <div class="text-center">
                  <div
                    class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ project.title }}
                  </h3>
                  <div class="flex flex-wrap gap-2 justify-center">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else>
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ project.title }}
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-6">
              <p class="text-neutral-300 mb-4 leading-relaxed text-sm">
                {{ project.description }}
              </p>

              <div class="flex gap-3">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  Live Demo
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import project1 from "@/assets/img/project1.png";
import project2 from "@/assets/img/project3.png";
import project3 from "@/assets/img/project4.png";
import project4 from "@/assets/img/project2.png";
import project5 from "@/assets/img/project5.png";

const completedProjects = ref([
  {
    id: 1,
    title: "Sir Larry Charity Foundation",
    description:
      "A non-profit organization website supporting charity initiatives and donations, with a clean and accessible design.",
    image: project1,
    technologies: ["Vue.js", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "Oyinthemua Beauty Website",
    description:
      "A beauty and makeup website for full glam and soft glam, showcasing services, portfolio, and booking features.",
    image: project3,
    technologies: ["Vue.js", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Land T Cleaning Services",
    description:
      "A professional cleaning service website with online booking, service listings, and customer testimonials.",
    image: project4,
    technologies: ["Js", "Bootstrap"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
]);

const inProgressProjects = ref([
  {
    id: 4,
    title: "Turbo Receipt (Web App)",
    description:
      "A modern web app for generating, storing, and sharing digital receipts for businesses and individuals.",
    image: project2,
    technologies: ["Vue.js", "Tailwind", "Laravel"],
    liveUrl: null,
    githubUrl: "https://github.com/example",
  },
  {
    id: 5,
    title: "Legacy Cars (Ecommerce)",
    description:
      "An e-commerce platform for car sales, featuring inventory management, user accounts, and secure payments.",
    image: project5,
    technologies: ["Vue.js", "Tailwind", "Supabase API"],
    liveUrl: null,
    githubUrl: "https://github.com/example",
  },
  {
    id: 6,
    title: "Smart Support Chatbot",
    description:
      "An AI-powered chatbot for customer support, FAQs, and instant responses, built with Vue.js and OpenAI API integration.",
    image: project3,
    technologies: ["Vue.js", "OpenAI API"],
    liveUrl: null,
    githubUrl: "https://github.com/example",
  },
]);
</script>
